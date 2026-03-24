const API = 'http://localhost:5000';

// ── Token / session helpers ──
function getToken()    { return localStorage.getItem('token'); }
function setToken(t)   { localStorage.setItem('token', t); }
function removeToken() { localStorage.removeItem('token'); }
function getEmail()    { return localStorage.getItem('email'); }
function setEmail(e)   { localStorage.setItem('email', e); }
function removeEmail() { localStorage.removeItem('email'); }

function authHeaders() {
  return { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + getToken() };
}

// ── Toast notification ──
function showToast(msg, type = 'ok') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show' + (type === 'err' ? ' error' : '');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => { t.className = 'toast'; }, 3000);
}

// ── Auth guard ──
function requireAuth() {
  if (!getToken()) { window.location.href = 'index.html'; return false; }
  const emailEl = document.getElementById('nav-email');
  if (emailEl) emailEl.textContent = getEmail() || '';
  return true;
}

// ── Escape helpers ──
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function escAttr(str) {
  return String(str).replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}
function statusLabel(s) {
  if (s === 'completed')  return 'Завершено';
  if (s === 'in_progress') return 'В процесі';
  return 'Не почато';
}

// ── Page detection ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const isIndex     = currentPage === 'index.html' || currentPage === '';
const isDashboard = currentPage === 'dashboard.html';
const isTopics    = currentPage === 'topics.html';
const isStats     = currentPage === 'stats.html';

// ══════════════════════════════════════════════════════
// INDEX.HTML — modals, register, login
// ══════════════════════════════════════════════════════
function openModal(type) {
  document.getElementById('modal-' + type).classList.add('active');
}
function closeModal(type) {
  document.getElementById('modal-' + type).classList.remove('active');
  const errId = type === 'login' ? 'login-error' : 'reg-error';
  const errEl = document.getElementById(errId);
  if (errEl) errEl.textContent = '';
}
function switchModal(from, to) {
  closeModal(from);
  openModal(to);
}

if (isIndex) {
  // Redirect if already logged in
  if (getToken()) window.location.href = 'dashboard.html';

  // Close on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay.id.replace('modal-', ''));
    });
  });

  // Register
  document.getElementById('register-btn').addEventListener('click', async () => {
    const btn   = document.getElementById('register-btn');
    const errEl = document.getElementById('reg-error');
    const body  = {
      first_name: document.getElementById('reg-firstname').value.trim(),
      last_name:  document.getElementById('reg-lastname').value.trim(),
      email:      document.getElementById('reg-email').value.trim(),
      password:   document.getElementById('reg-password').value,
    };
    errEl.textContent = '';
    btn.disabled = true; btn.textContent = '...';
    try {
      const res  = await fetch(API + '/register', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) { errEl.textContent = data.error || 'Помилка реєстрації'; return; }
      showToast('Акаунт створено! Тепер увійди.');
      switchModal('register', 'login');
      document.getElementById('login-email').value = body.email;
    } catch {
      errEl.textContent = 'Помилка з\'єднання з сервером';
    } finally {
      btn.disabled = false; btn.textContent = 'Зареєструватись';
    }
  });

  // Login
  document.getElementById('login-btn').addEventListener('click', async () => {
    const btn   = document.getElementById('login-btn');
    const errEl = document.getElementById('login-error');
    const email    = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    errEl.textContent = '';
    btn.disabled = true; btn.textContent = '...';
    try {
      const res  = await fetch(API + '/login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || data.error || data.msg) {
        errEl.textContent = data.error || data.msg || 'Невірний email або пароль';
        return;
      }
      setToken(data.access_token);
      setEmail(email);
      window.location.href = 'dashboard.html';
    } catch {
      errEl.textContent = 'Помилка з\'єднання з сервером';
    } finally {
      btn.disabled = false; btn.textContent = 'Увійти';
    }
  });

  // Enter key shortcuts
  document.getElementById('login-password').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('login-btn').click();
  });
  document.getElementById('reg-password').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('register-btn').click();
  });
}

// ══════════════════════════════════════════════════════
// LOGOUT — shared across all inner pages
// ══════════════════════════════════════════════════════
async function handleLogout() {
  try {
    await fetch(API + '/logout', { method: 'DELETE', headers: authHeaders() });
  } catch { /* ignore */ }
  removeToken();
  removeEmail();
  window.location.href = 'index.html';
}

if (isDashboard || isTopics || isStats) {
  if (!requireAuth()) { /* requireAuth redirects */ }
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
}

// ══════════════════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════════════════
if (isDashboard && getToken()) {
  (async () => {
    // Greeting
    const greetEl = document.getElementById('greeting');
    if (greetEl) {
      const name = (getEmail() || '').split('@')[0];
      const h    = new Date().getHours();
      const word = h < 12 ? 'Доброго ранку' : h < 18 ? 'Вітаємо' : 'Добрий вечір';
      greetEl.textContent = `${word}, ${name} \uD83D\uDC4B`;
    }

    // Load stats
    try {
      const res = await fetch(API + '/show_stats', { headers: authHeaders() });
      if (res.status === 401) { handleLogout(); return; }
      const d = await res.json();

      document.getElementById('stat-all').textContent    = d.All_topics     ?? '—';
      document.getElementById('stat-prog').textContent   = d['In progress']  ?? '—';
      document.getElementById('stat-done').textContent   = d.Completed       ?? '—';
      document.getElementById('stat-streak').textContent = (d.current_streak ?? 0) + ' \uD83D\uDD25';
      document.getElementById('stat-best').textContent   = d.longest_streak  ?? '—';

      const streakLine = document.getElementById('streak-line');
      if (streakLine) {
        const s = d.current_streak || 0;
        streakLine.textContent = s > 0
          ? `// streak: ${s} день(ів) \uD83D\uDD25 · рекорд: ${d.longest_streak}`
          : '// немає активного streak — додай запис прогресу';
      }
    } catch { showToast('Не вдалось завантажити статистику', 'err'); }

    // Load topics (last 5)
    loadDashboardTopics();

    // Quick-add topic
    document.getElementById('quick-add-btn').addEventListener('click', async () => {
      const title    = document.getElementById('quick-title').value.trim();
      const priority = parseInt(document.getElementById('quick-priority').value);
      if (!title) { showToast('Введи назву теми', 'err'); return; }
      const btn = document.getElementById('quick-add-btn');
      btn.disabled = true;
      try {
        const res  = await fetch(API + '/make_top', {
          method: 'POST', headers: authHeaders(),
          body: JSON.stringify({ title, priority }),
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Помилка', 'err'); return; }
        showToast('Тему додано!');
        document.getElementById('quick-title').value = '';
        loadDashboardTopics();
      } catch { showToast('Помилка з\'єднання', 'err'); }
      finally { btn.disabled = false; }
    });

    document.getElementById('quick-title').addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('quick-add-btn').click();
    });
  })();
}

async function loadDashboardTopics() {
  const list = document.getElementById('topics-list');
  if (!list) return;
  try {
    const res    = await fetch(API + '/lot', { headers: authHeaders() });
    if (!res.ok) { list.innerHTML = '<div class="data-row-empty">// помилка завантаження</div>'; return; }
    const topics = await res.json();
    if (!topics.length) { list.innerHTML = '<div class="data-row-empty">// тем ще немає — додай першу вище</div>'; return; }
    const last5  = topics.slice(-5).reverse();
    list.innerHTML = last5.map(t => `
      <div class="data-row">
        <span class="badge badge-p${t.priority}">P${t.priority}</span>
        <span class="data-title">${escHtml(t.title)}</span>
        <span class="badge badge-status badge-${t.status}">${statusLabel(t.status)}</span>
      </div>`).join('');
  } catch {
    list.innerHTML = '<div class="data-row-empty">// помилка</div>';
  }
}

// ══════════════════════════════════════════════════════
// TOPICS
// ══════════════════════════════════════════════════════
let allTopics     = [];
let currentFilter = 'all';

if (isTopics && getToken()) {
  loadTopics();

  // Add topic
  document.getElementById('add-topic-btn').addEventListener('click', async () => {
    const title    = document.getElementById('new-title').value.trim();
    const priority = parseInt(document.getElementById('new-priority').value);
    if (!title) { showToast('Введи назву теми', 'err'); return; }
    const btn = document.getElementById('add-topic-btn');
    btn.disabled = true;
    try {
      const res  = await fetch(API + '/make_top', {
        method: 'POST', headers: authHeaders(),
        body: JSON.stringify({ title, priority }),
      });
      const data = await res.json();
      if (!res.ok) { showToast(data.error || 'Помилка', 'err'); return; }
      showToast('Тему додано!');
      document.getElementById('new-title').value = '';
      loadTopics();
    } catch { showToast('Помилка з\'єднання', 'err'); }
    finally { btn.disabled = false; }
  });

  document.getElementById('new-title').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('add-topic-btn').click();
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderTopics();
    });
  });

  // Edit modal — save
  document.getElementById('save-edit-btn').addEventListener('click', async () => {
    const id   = document.getElementById('edit-topic-id').value;
    const body = {
      new_title:    document.getElementById('edit-title').value.trim(),
      new_priority: parseInt(document.getElementById('edit-priority').value),
      new_status:   document.getElementById('edit-status').value,
    };
    const btn = document.getElementById('save-edit-btn');
    btn.disabled = true;
    try {
      const res = await fetch(`${API}/update_top/${id}`, {
        method: 'PATCH', headers: authHeaders(), body: JSON.stringify(body),
      });
      if (!res.ok) { showToast('Помилка збереження', 'err'); return; }
      showToast('Збережено!');
      closeEditModal();
      loadTopics();
    } catch { showToast('Помилка з\'єднання', 'err'); }
    finally { btn.disabled = false; }
  });

  // Log modal — save
  document.getElementById('save-log-btn').addEventListener('click', async () => {
    const topicId = document.getElementById('log-topic-id').value;
    const note    = document.getElementById('log-note').value.trim();
    if (!note) { showToast('Введи нотатку', 'err'); return; }
    const btn = document.getElementById('save-log-btn');
    btn.disabled = true;
    try {
      const res = await fetch(`${API}/write_progress/${topicId}`, {
        method: 'POST', headers: authHeaders(), body: JSON.stringify({ note }),
      });
      if (!res.ok) { showToast('Помилка збереження', 'err'); return; }
      showToast('Запис додано!');
      closeLogModal();
    } catch { showToast('Помилка з\'єднання', 'err'); }
    finally { btn.disabled = false; }
  });

  // Close modals on overlay click
  document.getElementById('modal-edit').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-edit')) closeEditModal();
  });
  document.getElementById('modal-log').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-log')) closeLogModal();
  });
}

async function loadTopics() {
  try {
    const res  = await fetch(API + '/lot', { headers: authHeaders() });
    if (res.status === 401) { handleLogout(); return; }
    allTopics  = await res.json();
    renderTopics();
  } catch {
    const c = document.getElementById('topics-container');
    if (c) c.innerHTML = '<div class="data-list"><div class="data-row-empty">// помилка завантаження</div></div>';
  }
}

function renderTopics() {
  const container = document.getElementById('topics-container');
  if (!container) return;
  const filtered = currentFilter === 'all'
    ? allTopics
    : allTopics.filter(t => t.status === currentFilter);

  if (!filtered.length) {
    container.innerHTML = '<div class="data-list"><div class="data-row-empty">// тем не знайдено</div></div>';
    return;
  }

  container.innerHTML = '<div class="data-list">' +
    filtered.map(t => `
      <div class="data-row topic-row" id="row-${t.id}">
        <span class="badge badge-p${t.priority}">P${t.priority}</span>
        <span class="topic-title">${escHtml(t.title)}</span>
        <span class="badge badge-status badge-${t.status} topic-priority">${statusLabel(t.status)}</span>
        <div class="topic-actions">
          <button class="btn btn-ghost btn-sm"
            onclick="toggleLogPanel(${t.id}, '${escAttr(t.title)}')">+ Прогрес</button>
          <button class="btn btn-ghost btn-sm"
            onclick="openEditModal(${t.id}, '${escAttr(t.title)}', ${t.priority}, '${t.status}')">Ред.</button>
          <button class="btn btn-ghost btn-sm"
            onclick="deleteTopic(${t.id})">✕</button>
        </div>
      </div>
      <div class="log-panel" id="log-panel-${t.id}">
        <div class="log-panel-title">// прогрес по темі: ${escHtml(t.title)}</div>
        <div class="log-entries" id="log-entries-${t.id}">// натисни "+ Прогрес" ще раз щоб завантажити</div>
        <div class="form-row" style="margin-top:0.8rem;">
          <textarea class="input input-grow" id="inline-note-${t.id}"
            placeholder="Що зробив сьогодні..."
            style="resize:vertical;min-height:64px;font-size:0.82rem;font-family:inherit;"></textarea>
          <button class="btn btn-primary btn-sm"
            onclick="submitInlineLog(${t.id})">Зберегти</button>
        </div>
      </div>`).join('') +
    '</div>';
}

// Topics — edit modal
function openEditModal(id, title, priority, status) {
  document.getElementById('edit-topic-id').value  = id;
  document.getElementById('edit-title').value     = title;
  document.getElementById('edit-priority').value  = String(priority);
  document.getElementById('edit-status').value    = status;
  document.getElementById('modal-edit').classList.add('active');
}
function closeEditModal() {
  document.getElementById('modal-edit').classList.remove('active');
}

// Topics — log modal (used from HTML close button)
function openLogModal(id, title) {
  document.getElementById('log-topic-id').value    = id;
  document.getElementById('log-modal-sub').textContent = `// прогрес по темі: ${title}`;
  document.getElementById('log-note').value         = '';
  document.getElementById('modal-log').classList.add('active');
}
function closeLogModal() {
  document.getElementById('modal-log').classList.remove('active');
}

// Topics — inline log panel (toggle)
async function toggleLogPanel(id, _title) {
  const panel = document.getElementById(`log-panel-${id}`);
  if (!panel) return;
  const wasOpen = panel.classList.contains('active');

  document.querySelectorAll('.log-panel.active').forEach(p => p.classList.remove('active'));
  if (wasOpen) return;

  panel.classList.add('active');
  await loadLogEntries(id);
}

async function loadLogEntries(topicId) {
  const entriesEl = document.getElementById(`log-entries-${topicId}`);
  if (!entriesEl) return;
  entriesEl.textContent = '// завантаження...';
  try {
    const res  = await fetch(`${API}/get_progress/${topicId}`, { headers: authHeaders() });
    const logs = await res.json();
    if (!logs.length) {
      entriesEl.innerHTML = '<span style="color:var(--muted)">// записів ще немає</span>';
      return;
    }
    entriesEl.innerHTML = logs.map(l => `
      <div style="border-bottom:1px solid var(--border);padding:0.55rem 0;
                  font-family:'JetBrains Mono',monospace;font-size:0.78rem;line-height:1.7;">
        <span style="color:var(--accent2)">${escHtml(String(l['time of creation'] || ''))}</span><br/>
        ${escHtml(l.note)}
      </div>`).join('');
  } catch {
    entriesEl.textContent = '// помилка завантаження';
  }
}

async function submitInlineLog(topicId) {
  const noteEl = document.getElementById(`inline-note-${topicId}`);
  const note   = noteEl.value.trim();
  if (!note) { showToast('Введи нотатку', 'err'); return; }
  try {
    const res = await fetch(`${API}/write_progress/${topicId}`, {
      method: 'POST', headers: authHeaders(), body: JSON.stringify({ note }),
    });
    if (!res.ok) { showToast('Помилка збереження', 'err'); return; }
    showToast('Запис додано!');
    noteEl.value = '';
    await loadLogEntries(topicId);
  } catch { showToast('Помилка з\'єднання', 'err'); }
}

async function deleteTopic(id) {
  if (!confirm('Видалити тему? Всі записи прогресу також будуть видалені.')) return;
  try {
    const res = await fetch(`${API}/delete_top/${id}`, {
      method: 'DELETE', headers: authHeaders(),
    });
    if (!res.ok) { showToast('Помилка видалення', 'err'); return; }
    showToast('Тему видалено');
    loadTopics();
  } catch { showToast('Помилка з\'єднання', 'err'); }
}

// ══════════════════════════════════════════════════════
// STATS
// ══════════════════════════════════════════════════════
if (isStats && getToken()) {
  (async () => {
    try {
      const [statsRes, topicsRes] = await Promise.all([
        fetch(API + '/show_stats', { headers: authHeaders() }),
        fetch(API + '/lot',        { headers: authHeaders() }),
      ]);
      if (statsRes.status === 401) { handleLogout(); return; }

      const d      = await statsRes.json();
      const topics = await topicsRes.json();

      // Number cards
      document.getElementById('s-all').textContent  = d.All_topics     ?? '—';
      document.getElementById('s-done').textContent = d.Completed       ?? '—';
      document.getElementById('s-prog').textContent = d['In progress']  ?? '—';
      document.getElementById('s-ns').textContent   = d['Not started']  ?? '—';
      document.getElementById('s-logs').textContent = d.Summary         ?? '—';

      // Streak
      document.getElementById('streak-current').textContent =
        `${d.current_streak ?? 0} днів підряд`;
      document.getElementById('streak-record').textContent =
        `// рекорд: ${d.longest_streak ?? 0}`;

      // Most active topic
      const mostActiveEl = document.getElementById('most-active-info');
      if (d['Most active']) {
        const found = topics.find(t => t.id === d['Most active'].topic_id);
        const name  = found ? escHtml(found.title) : `#${d['Most active'].topic_id}`;
        mostActiveEl.innerHTML =
          `<span style="color:var(--text)">${name}</span> ` +
          `<span style="color:var(--muted)">— ${d['Most active'].count} записів</span>`;
      } else {
        mostActiveEl.textContent = '// записів прогресу ще немає';
      }

      // Chart: status doughnut
      const statusCtx = document.getElementById('chart-status').getContext('2d');
      new Chart(statusCtx, {
        type: 'doughnut',
        data: {
          labels: ['Завершено', 'В процесі', 'Не почато'],
          datasets: [{
            data: [d.Completed, d['In progress'], d['Not started']],
            backgroundColor: ['#00ff88', '#0088ff', '#333344'],
            borderColor: '#13131a',
            borderWidth: 3,
          }],
        },
        options: {
          plugins: {
            legend: {
              labels: { color: '#a0a0b8', font: { family: 'JetBrains Mono', size: 11 } },
            },
          },
        },
      });

      // Chart: priority bar
      const priorityCounts = [1, 2, 3, 4, 5].map(
        p => topics.filter(t => t.priority === p).length
      );
      const priorityCtx = document.getElementById('chart-priority').getContext('2d');
      new Chart(priorityCtx, {
        type: 'bar',
        data: {
          labels: ['P1', 'P2', 'P3', 'P4', 'P5'],
          datasets: [{
            label: 'Тем',
            data: priorityCounts,
            backgroundColor: ['#ff5f57', '#febc2e', '#00ff88', '#0088ff', '#7c5cff'],
            borderRadius: 4,
          }],
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            x: {
              ticks: { color: '#a0a0b8', font: { family: 'JetBrains Mono', size: 11 } },
              grid:  { color: '#1e1e2e' },
            },
            y: {
              ticks: { color: '#a0a0b8', font: { family: 'JetBrains Mono', size: 11 }, stepSize: 1 },
              grid:  { color: '#1e1e2e' },
              beginAtZero: true,
            },
          },
        },
      });

    } catch (err) {
      console.error(err);
      showToast('Помилка завантаження статистики', 'err');
    }
  })();
}
