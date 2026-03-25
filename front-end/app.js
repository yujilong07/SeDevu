const API = 'https://heroic-flow-production-0c80.up.railway.app';

// ══════════════════════════════════════════════════════
// LANGUAGE SYSTEM
// ══════════════════════════════════════════════════════
const TRANSLATIONS = {
  uk: {
    'nav.topics':          '// теми',
    'nav.stats':           '// статистика',
    'nav.dashboard':       '// dashboard',
    'nav.login':           'Логін',
    'nav.register':        'Реєстрація',
    'nav.logout':          'Вийти',
    'modal.login.title':   'Увійти',
    'modal.login.sub':     '// введи свої дані',
    'modal.login.email':   'Email',
    'modal.login.pass':    'Пароль',
    'modal.login.btn':     'Увійти',
    'modal.login.noacc':   'Немає акаунту?',
    'modal.login.link':    'Зареєструватись',
    'modal.reg.title':     'Реєстрація',
    'modal.reg.sub':       '// створи акаунт',
    'modal.reg.fn':        "Ім'я",
    'modal.reg.ln':        'Прізвище',
    'modal.reg.email':     'Email',
    'modal.reg.pass':      'Пароль',
    'modal.reg.btn':       'Зареєструватись',
    'modal.reg.hasacc':    'Вже є акаунт?',
    'modal.reg.link':      'Увійти',
    'dash.all':            'Всього тем',
    'dash.inprog':         'В процесі',
    'dash.done':           'Завершено',
    'dash.streak':         'Streak 🔥',
    'dash.record':         'Рекорд',
    'dash.alltopics':      'Всі теми →',
    'dash.quickbtn':          '+ Додати',
    'dash.quick.placeholder': 'Нова тема...',
    'topics.add.placeholder': 'Назва теми...',
    'topics.log.placeholder': 'Вивчив... Написав... Розібрався з...',
    'topics.title':        'Мої теми',
    'topics.sub':          '// додавай, відстежуй і завершуй теми',
    'topics.panel':        '// нова тема',
    'topics.addbtn':       '+ Додати тему',
    'topics.filter.all':   'Всі',
    'topics.filter.ns':    'Не почато',
    'topics.filter.ip':    'В процесі',
    'topics.filter.done':  'Завершено',
    'topics.list.label':   '// список тем',
    'topics.edit.title':   'Редагувати тему',
    'topics.edit.name':    'Назва',
    'topics.edit.status':  'Статус',
    'topics.edit.prio':    'Пріоритет',
    'topics.edit.btn':     'Зберегти',
    'topics.log.title':    'Додати запис',
    'topics.log.label':    'Що зробив?',
    'topics.log.btn':      'Зберегти запис',
    'topics.btn.prog':     '+ Прогрес',
    'topics.btn.edit':     'Ред.',
    'status.completed':    'Завершено',
    'status.in_progress':  'В процесі',
    'status.not_started':  'Не почато',
    'stat.opt.ns':         'Не почато',
    'stat.opt.ip':         'В процесі',
    'stat.opt.done':       'Завершено',
    'stats.title':         'Статистика',
    'stats.sub':           '// твій прогрес у цифрах',
    'stats.all':           'Всього тем',
    'stats.done':          'Завершено',
    'stats.inprog':        'В процесі',
    'stats.notstarted':    'Не почато',
    'stats.logs':          'Записів прогресу',
    'toast.created':       'Акаунт створено! Тепер увійди.',
    'toast.topic.added':   'Тему додано!',
    'toast.log.added':     'Запис додано!',
    'toast.saved':         'Збережено!',
    'toast.deleted':       'Тему видалено',
    'toast.err.conn':      "Помилка з'єднання",
    'toast.err.stats':     'Помилка завантаження статистики',
    'toast.err.title':     'Введи назву теми',
    'toast.err.note':      'Введи нотатку',
    'toast.err.reg':       'Помилка реєстрації',
    'toast.err.save':      'Помилка збереження',
    'toast.err.del':       'Помилка видалення',
    'toast.err.login':     'Невірний email або пароль',
    'greet.morning':       'Доброго ранку',
    'greet.day':           'Вітаємо',
    'greet.evening':       'Добрий вечір',
    'confirm.del':         'Видалити тему? Всі записи прогресу також будуть видалені.',
    'inline.placeholder':  'Що зробив сьогодні...',
    'inline.btn':          'Зберегти',
    'streak.days':         'днів підряд',
    'streak.rec.prefix':   '// рекорд:',
    'streak.noactive':     '// немає активного streak — додай запис прогресу',
    'chart.status.lbl':    ['Завершено', 'В процесі', 'Не почато'],
    'chart.priority.lbl':  'Тем',
    'log.loading':         '// завантаження...',
    'log.empty':           '// записів ще немає',
    'log.panel.prefix':    '// прогрес по темі:',
    'log.progress.for':    '// прогрес по темі',
    'topics.empty':        '// тем ще немає — додай першу',
    'topics.err.load':     '// помилка завантаження',
    'topics.notfound':     '// тем не знайдено',
    'most.active.empty':   '// записів прогресу ще немає',
    'most.active.entries': 'записів',
    // Landing page
    'hero.badge':        '// відстежуй свій шлях розробника',
    'hero.h1.line1':     'Відстежуй своє',
    'hero.h1.span':      'навчання',
    'hero.desc':         'Ведіть щоденник навчання як розробник. Додавайте теми з пріоритетами, щодня фіксуйте що вивчили, підтримуйте streak і дивіться статистику свого зростання.',
    'hero.cta.start':    'Почати безкоштовно',
    'hero.cta.login':    'Увійти',
    'sbar.topics.name':  'Теми',
    'sbar.topics.lbl':   'пріоритети P1–P5',
    'sbar.prog.name':    'Прогрес',
    'sbar.prog.lbl':     'журнал по кожній темі',
    'sbar.streak.name':  'Streak',
    'sbar.streak.lbl':   'серія активних днів',
    'sbar.stats.name':   'Статистика',
    'sbar.stats.lbl':    'графіки і показники',
    'hiw.label':         '// як це працює',
    'hiw.title':         'Три кроки до прогресу',
    'hiw.s1.title':      'Додай тему',
    'hiw.s1.desc':       'Створи тему яку хочеш вивчити та встанови пріоритет — від P1 (критично) до P5 (колись).',
    'hiw.s2.title':      'Фіксуй що зробив',
    'hiw.s2.desc':       'Щодня записуй прогрес по темі — що вивчив, написав, розібрав. Повна хронологія як git log.',
    'hiw.s3.title':      'Не переривай серію',
    'hiw.s3.desc':       'Кожен день з активністю збільшує твій streak. Dashboard показує поточну серію і рекорд.',
    'hiw.s3.comment':    '// поточний streak',
    'hiw.s3.record':     'рекорд: 21 день',
    'feat.label':        '// можливості',
    'feat.title':        'Все що потрібно для росту',
    'feat.01.title':     'Трекер тем',
    'feat.01.desc':      'Організуй все що хочеш вивчити в одному місці. Від ідеї до завершення.',
    'feat.01.li1':       'Пріоритети P1–P5 (від критичного до "колись")',
    'feat.01.li2':       'Статуси: не почато → в процесі → завершено',
    'feat.01.li3':       'Фільтрація по статусу',
    'feat.01.li4':       'Редагування і видалення тем',
    'feat.02.title':     'Журнал прогресу',
    'feat.02.desc':      'По кожній темі — хронологічний лог того що ти зробив. Як git commits, але для навчання.',
    'feat.02.li1':       "Нотатки прив'язані до конкретної теми",
    'feat.02.li2':       'Автоматична дата запису',
    'feat.02.li3':       'Повна хронологія по кожній темі',
    'feat.02.li4':       'Будь-який текст: посилання, нотатки, висновки',
    'feat.03.title':     'Streak система',
    'feat.03.desc':      'Мотивуй себе через консистентність. Кожен запис прогресу — день в серії.',
    'feat.03.li1':       'Поточний streak у реальному часі',
    'feat.03.li2':       'Рекордна серія за весь час',
    'feat.03.li3':       'Автоматичний скид якщо день пропущено',
    'feat.03.li4':       'Відображення на головній сторінці',
    'feat.04.title':     'Статистика',
    'feat.04.desc':      'Повна картина твого прогресу: скільки зроблено, де найбільше активності, як росте streak.',
    'feat.04.li1':       'Розподіл тем за статусом (графік)',
    'feat.04.li2':       'Розподіл за пріоритетами',
    'feat.04.li3':       'Найактивніша тема',
    'feat.04.li4':       'Загальна кількість записів прогресу',
    'feat.05.title':     'Dashboard',
    'feat.05.desc':      "Головна сторінка — швидкий огляд усього що відбувається. Один екран замість п'яти.",
    'feat.05.li1':       'Всі ключові цифри одразу',
    'feat.05.li2':       'Останні додані теми',
    'feat.05.li3':       'Швидке додавання нової теми',
    'feat.05.li4':       'Поточний і рекордний streak',
    'feat.06.title':     'Авторизація',
    'feat.06.desc':      'Твої дані — тільки твої. Кожен користувач бачить лише свої теми і прогрес.',
    'feat.06.li1':       'Реєстрація та логін через email',
    'feat.06.li2':       'JWT-токени для захисту API',
    'feat.06.li3':       'Ізольовані дані кожного юзера',
    'feat.06.li4':       'Автоматичний редирект якщо не авторизований',
    'term.label':        '// під капотом — REST API на Flask',
    'term.desc':         'JWT авторизація · усі дані через JSON · готовий до інтеграції',
    'cta.title':         'Готовий почати?',
    'cta.desc':          'Зареєструйся і почни відстежувати своє навчання вже сьогодні.',
    'cta.btn':           'Створити акаунт',
  },
  en: {
    'nav.topics':          '// topics',
    'nav.stats':           '// statistics',
    'nav.dashboard':       '// dashboard',
    'nav.login':           'Login',
    'nav.register':        'Register',
    'nav.logout':          'Logout',
    'modal.login.title':   'Login',
    'modal.login.sub':     '// enter your credentials',
    'modal.login.email':   'Email',
    'modal.login.pass':    'Password',
    'modal.login.btn':     'Login',
    'modal.login.noacc':   "Don't have an account?",
    'modal.login.link':    'Register',
    'modal.reg.title':     'Register',
    'modal.reg.sub':       '// create an account',
    'modal.reg.fn':        'First name',
    'modal.reg.ln':        'Last name',
    'modal.reg.email':     'Email',
    'modal.reg.pass':      'Password',
    'modal.reg.btn':       'Register',
    'modal.reg.hasacc':    'Already have an account?',
    'modal.reg.link':      'Login',
    'dash.all':            'Total topics',
    'dash.inprog':         'In progress',
    'dash.done':           'Completed',
    'dash.streak':         'Streak 🔥',
    'dash.record':         'Record',
    'dash.alltopics':      'All topics →',
    'dash.quickbtn':          '+ Add',
    'dash.quick.placeholder': 'New topic...',
    'topics.add.placeholder': 'Topic name...',
    'topics.log.placeholder': 'Learned... Wrote... Figured out...',
    'topics.title':        'My topics',
    'topics.sub':          '// add, track and complete topics',
    'topics.panel':        '// new topic',
    'topics.addbtn':       '+ Add topic',
    'topics.filter.all':   'All',
    'topics.filter.ns':    'Not started',
    'topics.filter.ip':    'In progress',
    'topics.filter.done':  'Completed',
    'topics.list.label':   '// topic list',
    'topics.edit.title':   'Edit topic',
    'topics.edit.name':    'Name',
    'topics.edit.status':  'Status',
    'topics.edit.prio':    'Priority',
    'topics.edit.btn':     'Save',
    'topics.log.title':    'Add entry',
    'topics.log.label':    'What did you do?',
    'topics.log.btn':      'Save entry',
    'topics.btn.prog':     '+ Progress',
    'topics.btn.edit':     'Edit',
    'status.completed':    'Completed',
    'status.in_progress':  'In progress',
    'status.not_started':  'Not started',
    'stat.opt.ns':         'Not started',
    'stat.opt.ip':         'In progress',
    'stat.opt.done':       'Completed',
    'stats.title':         'Statistics',
    'stats.sub':           '// your progress in numbers',
    'stats.all':           'Total topics',
    'stats.done':          'Completed',
    'stats.inprog':        'In progress',
    'stats.notstarted':    'Not started',
    'stats.logs':          'Progress entries',
    'toast.created':       'Account created! Now log in.',
    'toast.topic.added':   'Topic added!',
    'toast.log.added':     'Entry added!',
    'toast.saved':         'Saved!',
    'toast.deleted':       'Topic deleted',
    'toast.err.conn':      'Connection error',
    'toast.err.stats':     'Error loading statistics',
    'toast.err.title':     'Enter a topic name',
    'toast.err.note':      'Enter a note',
    'toast.err.reg':       'Registration error',
    'toast.err.save':      'Save error',
    'toast.err.del':       'Delete error',
    'toast.err.login':     'Invalid email or password',
    'greet.morning':       'Good morning',
    'greet.day':           'Welcome',
    'greet.evening':       'Good evening',
    'confirm.del':         'Delete topic? All progress entries will also be deleted.',
    'inline.placeholder':  'What did you do today...',
    'inline.btn':          'Save',
    'streak.days':         'days in a row',
    'streak.rec.prefix':   '// record:',
    'streak.noactive':     '// no active streak — add a progress entry',
    'chart.status.lbl':    ['Completed', 'In progress', 'Not started'],
    'chart.priority.lbl':  'Topics',
    'log.loading':         '// loading...',
    'log.empty':           '// no entries yet',
    'log.panel.prefix':    '// progress for topic:',
    'log.progress.for':    '// progress for topic',
    'topics.empty':        '// no topics yet — add the first one',
    'topics.err.load':     '// error loading',
    'topics.notfound':     '// no topics found',
    'most.active.empty':   '// no progress entries yet',
    'most.active.entries': 'entries',
    // Landing page
    'hero.badge':        '// track your dev journey',
    'hero.h1.line1':     'Track your',
    'hero.h1.span':      'learning',
    'hero.desc':         'Keep a learning journal like a developer. Add topics with priorities, log what you learned daily, maintain a streak and view your growth statistics.',
    'hero.cta.start':    'Start for free',
    'hero.cta.login':    'Log in',
    'sbar.topics.name':  'Topics',
    'sbar.topics.lbl':   'priorities P1–P5',
    'sbar.prog.name':    'Progress',
    'sbar.prog.lbl':     'log for each topic',
    'sbar.streak.name':  'Streak',
    'sbar.streak.lbl':   'streak of active days',
    'sbar.stats.name':   'Statistics',
    'sbar.stats.lbl':    'charts and metrics',
    'hiw.label':         '// how it works',
    'hiw.title':         'Three steps to progress',
    'hiw.s1.title':      'Add a topic',
    'hiw.s1.desc':       'Create a topic you want to learn and set a priority — from P1 (critical) to P5 (someday).',
    'hiw.s2.title':      'Log what you did',
    'hiw.s2.desc':       'Log your daily progress — what you learned, wrote, figured out. Full history like git log.',
    'hiw.s3.title':      'Keep your streak',
    'hiw.s3.desc':       'Each day with activity grows your streak. Dashboard shows current streak and record.',
    'hiw.s3.comment':    '// current streak',
    'hiw.s3.record':     'record: 21 days',
    'feat.label':        '// features',
    'feat.title':        'Everything you need to grow',
    'feat.01.title':     'Topic tracker',
    'feat.01.desc':      'Organize everything you want to learn in one place. From idea to completion.',
    'feat.01.li1':       'Priorities P1–P5 (from critical to "someday")',
    'feat.01.li2':       'Statuses: not started → in progress → completed',
    'feat.01.li3':       'Filter by status',
    'feat.01.li4':       'Edit and delete topics',
    'feat.02.title':     'Progress journal',
    'feat.02.desc':      'For each topic — a chronological log of what you did. Like git commits, but for learning.',
    'feat.02.li1':       'Notes linked to a specific topic',
    'feat.02.li2':       'Automatic entry date',
    'feat.02.li3':       'Full chronology for each topic',
    'feat.02.li4':       'Any text: links, notes, conclusions',
    'feat.03.title':     'Streak system',
    'feat.03.desc':      'Motivate yourself through consistency. Each progress entry — a day in the streak.',
    'feat.03.li1':       'Current streak in real time',
    'feat.03.li2':       'Record streak of all time',
    'feat.03.li3':       'Auto-reset if a day is missed',
    'feat.03.li4':       'Displayed on the main page',
    'feat.04.title':     'Statistics',
    'feat.04.desc':      'Full picture of your progress: how much done, where most activity, how streak grows.',
    'feat.04.li1':       'Topic distribution by status (chart)',
    'feat.04.li2':       'Distribution by priority',
    'feat.04.li3':       'Most active topic',
    'feat.04.li4':       'Total number of progress entries',
    'feat.05.title':     'Dashboard',
    'feat.05.desc':      'Main page — quick overview of everything happening. One screen instead of five.',
    'feat.05.li1':       'All key figures at once',
    'feat.05.li2':       'Recently added topics',
    'feat.05.li3':       'Quick add new topic',
    'feat.05.li4':       'Current and record streak',
    'feat.06.title':     'Authorization',
    'feat.06.desc':      'Your data is yours only. Each user sees only their own topics and progress.',
    'feat.06.li1':       'Register and login via email',
    'feat.06.li2':       'JWT tokens for API protection',
    'feat.06.li3':       'Isolated data for each user',
    'feat.06.li4':       'Automatic redirect if not authorized',
    'term.label':        '// under the hood — REST API on Flask',
    'term.desc':         'JWT auth · all data via JSON · ready for integration',
    'cta.title':         'Ready to start?',
    'cta.desc':          'Register and start tracking your learning today.',
    'cta.btn':           'Create account',
  }
};

function getLang() { return localStorage.getItem('lang') || 'uk'; }
function setLang(l) { localStorage.setItem('lang', l); }
function t(key)    { return (TRANSLATIONS[getLang()] || TRANSLATIONS.uk)[key] ?? key; }

function applyLang() {
  const lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.textContent = lang === 'uk' ? 'EN' : 'UA';
    btn.title = lang === 'uk' ? 'Switch to English' : 'Перейти на українську';
  });
  // Update status select options in edit modal
  const editStatus = document.getElementById('edit-status');
  if (editStatus) {
    editStatus.options[0].text = t('stat.opt.ns');
    editStatus.options[1].text = t('stat.opt.ip');
    editStatus.options[2].text = t('stat.opt.done');
  }
}

function switchLang() {
  setLang(getLang() === 'uk' ? 'en' : 'uk');
  applyLang();
  if (isTopics && allTopics.length) renderTopics();
  if (isDashboard && dashboardTopics.length) renderDashboardTopics(dashboardTopics);
}

function toggleMobileMenu() {
  const menu = document.getElementById('nav-mobile-menu');
  if (menu) menu.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', e => {
  const menu = document.getElementById('nav-mobile-menu');
  const hamburger = document.getElementById('nav-hamburger');
  if (menu && menu.classList.contains('open') &&
      !menu.contains(e.target) && e.target !== hamburger) {
    menu.classList.remove('open');
  }
});

// ── Token / session helpers ──
function getToken()    { return localStorage.getItem('token'); }
function setToken(tk)  { localStorage.setItem('token', tk); }
function removeToken() { localStorage.removeItem('token'); }
function getEmail()    { return localStorage.getItem('email'); }
function setEmail(e)   { localStorage.setItem('email', e); }
function removeEmail() { localStorage.removeItem('email'); }

function authHeaders() {
  return { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + getToken() };
}

// ── Toast notification ──
function showToast(msg, type = 'ok') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'toast show' + (type === 'err' ? ' error' : '');
  clearTimeout(toast._tid);
  toast._tid = setTimeout(() => { toast.className = 'toast'; }, 3000);
}

// ── Form error helpers (fixes invisible error bug) ──
function showFormError(el, msg) {
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
}
function clearFormError(el) {
  if (!el) return;
  el.textContent = '';
  el.style.display = 'none';
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
  if (s === 'completed')   return t('status.completed');
  if (s === 'in_progress') return t('status.in_progress');
  return t('status.not_started');
}

// ── Page detection ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const isIndex     = currentPage === 'index.html' || currentPage === '';
const isTopics    = currentPage === 'topics.html' || currentPage === 'topics';
const isDashboard = currentPage === 'dashboard.html' || currentPage === 'dashboard';
const isStats     = currentPage === 'stats.html' || currentPage === 'stats';
// Apply language translations on every page load
applyLang();

// ══════════════════════════════════════════════════════
// INDEX.HTML — modals, register, login
// ══════════════════════════════════════════════════════
function openModal(type) {
  document.getElementById('modal-' + type).classList.add('active');
  const menu = document.getElementById('nav-mobile-menu');
  if (menu) menu.classList.remove('open');
}
function closeModal(type) {
  document.getElementById('modal-' + type).classList.remove('active');
  const errId = type === 'login' ? 'login-error' : 'reg-error';
  clearFormError(document.getElementById(errId));
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
    clearFormError(errEl);
    btn.disabled = true; btn.textContent = '...';
    try {
      const res  = await fetch(API + '/register', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) { showFormError(errEl, data.error || t('toast.err.reg')); return; }
      showToast(t('toast.created'));
      switchModal('register', 'login');
      document.getElementById('login-email').value = body.email;
    } catch {
      showFormError(errEl, t('toast.err.conn'));
    } finally {
      btn.disabled = false; btn.textContent = t('modal.reg.btn');
    }
  });

  // Login
  document.getElementById('login-btn').addEventListener('click', async () => {
    const btn      = document.getElementById('login-btn');
    const errEl    = document.getElementById('login-error');
    const email    = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    clearFormError(errEl);
    btn.disabled = true; btn.textContent = '...';
    try {
      const res  = await fetch(API + '/login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || data.error || data.msg) {
        showFormError(errEl, data.error || data.msg || t('toast.err.login'));
        return;
      }
      setToken(data.access_token);
      setEmail(email);
      window.location.href = 'dashboard.html';
    } catch {
      showFormError(errEl, t('toast.err.conn'));
    } finally {
      btn.disabled = false; btn.textContent = t('modal.login.btn');
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
  const mobLogout = document.getElementById('mob-logout-btn');
  if (mobLogout) {
    mobLogout.style.display = '';
    mobLogout.addEventListener('click', handleLogout);
  }
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
      const word = h < 12 ? t('greet.morning') : h < 18 ? t('greet.day') : t('greet.evening');
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
          ? `// streak: ${s} ${t('streak.days')} \uD83D\uDD25 · ${t('streak.rec.prefix')} ${d.longest_streak}`
          : t('streak.noactive');
      }
    } catch { showToast(t('toast.err.stats'), 'err'); }

    // Load topics (last 5)
    loadDashboardTopics();

    // Quick-add topic
    document.getElementById('quick-add-btn').addEventListener('click', async () => {
      const title    = document.getElementById('quick-title').value.trim();
      const priority = parseInt(document.getElementById('quick-priority').value);
      if (!title) { showToast(t('toast.err.title'), 'err'); return; }
      const btn = document.getElementById('quick-add-btn');
      btn.disabled = true;
      try {
        const res  = await fetch(API + '/make_top', {
          method: 'POST', headers: authHeaders(),
          body: JSON.stringify({ title, priority }),
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Error', 'err'); return; }
        showToast(t('toast.topic.added'));
        document.getElementById('quick-title').value = '';
        loadDashboardTopics();
      } catch { showToast(t('toast.err.conn'), 'err'); }
      finally { btn.disabled = false; }
    });

    document.getElementById('quick-title').addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('quick-add-btn').click();
    });
  })();
}

let dashboardTopics = [];

async function loadDashboardTopics() {
  try {
    const res = await fetch(API + '/lot', { headers: authHeaders() });
    if (!res.ok) { renderDashboardTopics(null); return; }
    dashboardTopics = await res.json();
    renderDashboardTopics(dashboardTopics);
  } catch {
    renderDashboardTopics(null);
  }
}

function renderDashboardTopics(topics) {
  const list = document.getElementById('topics-list');
  if (!list) return;
  if (!topics) {
    list.innerHTML = `<div class="data-row-empty">${t('topics.err.load')}</div>`;
    return;
  }
  if (!topics.length) {
    list.innerHTML = `<div class="data-row-empty">${t('topics.empty')}</div>`;
    return;
  }
  const last5 = topics.slice(-5).reverse();
  list.innerHTML = last5.map(tp => `
    <div class="data-row">
      <span class="badge badge-p${tp.priority}">P${tp.priority}</span>
      <span class="data-title">${escHtml(tp.title)}</span>
      <span class="badge badge-status badge-${tp.status}">${statusLabel(tp.status)}</span>
    </div>`).join('');
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
    if (!title) { showToast(t('toast.err.title'), 'err'); return; }
    const btn = document.getElementById('add-topic-btn');
    btn.disabled = true;
    try {
      const res  = await fetch(API + '/make_top', {
        method: 'POST', headers: authHeaders(),
        body: JSON.stringify({ title, priority }),
      });
      const data = await res.json();
      if (!res.ok) { showToast(data.error || 'Error', 'err'); return; }
      showToast(t('toast.topic.added'));
      document.getElementById('new-title').value = '';
      loadTopics();
    } catch { showToast(t('toast.err.conn'), 'err'); }
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
      if (!res.ok) { showToast(t('toast.err.save'), 'err'); return; }
      showToast(t('toast.saved'));
      closeEditModal();
      loadTopics();
    } catch { showToast(t('toast.err.conn'), 'err'); }
    finally { btn.disabled = false; }
  });

  // Log modal — save
  document.getElementById('save-log-btn').addEventListener('click', async () => {
    const topicId = document.getElementById('log-topic-id').value;
    const note    = document.getElementById('log-note').value.trim();
    if (!note) { showToast(t('toast.err.note'), 'err'); return; }
    const btn = document.getElementById('save-log-btn');
    btn.disabled = true;
    try {
      const res = await fetch(`${API}/write_progress/${topicId}`, {
        method: 'POST', headers: authHeaders(), body: JSON.stringify({ note }),
      });
      if (!res.ok) { showToast(t('toast.err.save'), 'err'); return; }
      showToast(t('toast.log.added'));
      closeLogModal();
    } catch { showToast(t('toast.err.conn'), 'err'); }
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
    if (c) c.innerHTML = `<div class="data-list"><div class="data-row-empty">${t('topics.err.load')}</div></div>`;
  }
}

function renderTopics() {
  const container = document.getElementById('topics-container');
  if (!container) return;
  const filtered = currentFilter === 'all'
    ? allTopics
    : allTopics.filter(tp => tp.status === currentFilter);

  if (!filtered.length) {
    container.innerHTML = `<div class="data-list"><div class="data-row-empty">${t('topics.notfound')}</div></div>`;
    return;
  }

  container.innerHTML = '<div class="data-list">' +
    filtered.map(tp => `
      <div class="data-row topic-row" id="row-${tp.id}">
        <span class="badge badge-p${tp.priority}">P${tp.priority}</span>
        <span class="topic-title">${escHtml(tp.title)}</span>
        <span class="badge badge-status badge-${tp.status} topic-priority">${statusLabel(tp.status)}</span>
        <div class="topic-actions">
          <button class="btn btn-ghost btn-sm"
            onclick="toggleLogPanel(${tp.id}, '${escAttr(tp.title)}')">${t('topics.btn.prog')}</button>
          <button class="btn btn-ghost btn-sm"
            onclick="openEditModal(${tp.id}, '${escAttr(tp.title)}', ${tp.priority}, '${tp.status}')">${t('topics.btn.edit')}</button>
          <button class="btn btn-ghost btn-sm"
            onclick="deleteTopic(${tp.id})">✕</button>
        </div>
      </div>
      <div class="log-panel" id="log-panel-${tp.id}">
        <div class="log-panel-title">${t('log.panel.prefix')} ${escHtml(tp.title)}</div>
        <div class="log-entries" id="log-entries-${tp.id}">${t('log.loading')}</div>
        <div class="form-row" style="margin-top:0.8rem;">
          <textarea class="input input-grow" id="inline-note-${tp.id}"
            placeholder="${escAttr(t('inline.placeholder'))}"
            style="resize:vertical;min-height:64px;font-size:0.82rem;font-family:inherit;"></textarea>
          <button class="btn btn-primary btn-sm"
            onclick="submitInlineLog(${tp.id})">${t('inline.btn')}</button>
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
  applyLang(); // refresh translated options
  document.getElementById('modal-edit').classList.add('active');
}
function closeEditModal() {
  document.getElementById('modal-edit').classList.remove('active');
}

// Topics — log modal
function openLogModal(id, title) {
  document.getElementById('log-topic-id').value        = id;
  document.getElementById('log-modal-sub').textContent = `${t('log.progress.for')}: ${title}`;
  document.getElementById('log-note').value            = '';
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
  entriesEl.textContent = t('log.loading');
  try {
    const res  = await fetch(`${API}/get_progress/${topicId}`, { headers: authHeaders() });
    const logs = await res.json();
    if (!logs.length) {
      entriesEl.innerHTML = `<span style="color:var(--muted)">${t('log.empty')}</span>`;
      return;
    }
    entriesEl.innerHTML = logs.map(l => `
      <div style="border-bottom:1px solid var(--border);padding:0.55rem 0;
                  font-family:'JetBrains Mono',monospace;font-size:0.78rem;line-height:1.7;">
        <span style="color:var(--accent2)">${escHtml(String(l['time of creation'] || ''))}</span><br/>
        ${escHtml(l.note)}
      </div>`).join('');
  } catch {
    entriesEl.textContent = t('topics.err.load');
  }
}

async function submitInlineLog(topicId) {
  const noteEl = document.getElementById(`inline-note-${topicId}`);
  const note   = noteEl.value.trim();
  if (!note) { showToast(t('toast.err.note'), 'err'); return; }
  try {
    const res = await fetch(`${API}/write_progress/${topicId}`, {
      method: 'POST', headers: authHeaders(), body: JSON.stringify({ note }),
    });
    if (!res.ok) { showToast(t('toast.err.save'), 'err'); return; }
    showToast(t('toast.log.added'));
    noteEl.value = '';
    await loadLogEntries(topicId);
  } catch { showToast(t('toast.err.conn'), 'err'); }
}

async function deleteTopic(id) {
  if (!confirm(t('confirm.del'))) return;
  try {
    const res = await fetch(`${API}/delete_top/${id}`, {
      method: 'DELETE', headers: authHeaders(),
    });
    if (!res.ok) { showToast(t('toast.err.del'), 'err'); return; }
    showToast(t('toast.deleted'));
    loadTopics();
  } catch { showToast(t('toast.err.conn'), 'err'); }
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
        `${d.current_streak ?? 0} ${t('streak.days')}`;
      document.getElementById('streak-record').textContent =
        `${t('streak.rec.prefix')} ${d.longest_streak ?? 0}`;

      // Most active topic
      const mostActiveEl = document.getElementById('most-active-info');
      if (d['Most active']) {
        const found = topics.find(tp => tp.id === d['Most active'].topic_id);
        const name  = found ? escHtml(found.title) : `#${d['Most active'].topic_id}`;
        mostActiveEl.innerHTML =
          `<span style="color:var(--text)">${name}</span> ` +
          `<span style="color:var(--muted)">— ${d['Most active'].count} ${t('most.active.entries')}</span>`;
      } else {
        mostActiveEl.textContent = t('most.active.empty');
      }

      // Chart: status doughnut
      const statusCtx = document.getElementById('chart-status').getContext('2d');
      new Chart(statusCtx, {
        type: 'doughnut',
        data: {
          labels: t('chart.status.lbl'),
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
        p => topics.filter(tp => tp.priority === p).length
      );
      const priorityCtx = document.getElementById('chart-priority').getContext('2d');
      new Chart(priorityCtx, {
        type: 'bar',
        data: {
          labels: ['P1', 'P2', 'P3', 'P4', 'P5'],
          datasets: [{
            label: t('chart.priority.lbl'),
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
      showToast(t('toast.err.stats'), 'err');
    }
  })();
}
