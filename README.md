# DevTracker

> A personal learning tracker for developers — track topics, log progress, maintain streaks, and visualize your growth.

**Live Demo:** [golden-biscotti-372732.netlify.app](https://golden-biscotti-372732.netlify.app/index.html)  
**API:** [heroic-flow-production-0c80.up.railway.app](https://heroic-flow-production-0c80.up.railway.app/)

---

## Overview

DevTracker is a full-stack web application designed to help developers stay consistent and organized in their learning journey. Inspired by GitHub's contribution graph, it provides a streak system to encourage daily activity, a topic tracker to manage learning goals, and a statistics dashboard to visualize progress over time.

---

## Features

- **Authentication** — Secure registration and login with JWT tokens and bcrypt password hashing
- **Topic Tracker** — Create, update, filter, and delete learning topics with priority levels and status tracking
- **Progress Log** — Log daily progress notes for each topic, similar to git commit history
- **Streak System** — Automatically tracks consecutive days of activity, current streak and personal record
- **Statistics Dashboard** — Overview of all topics by status, most active topic, and streak data with Chart.js visualizations
- **Token Blocklist** — Secure logout via JWT revocation stored in the database

---

## Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Python 3.13 | Core language |
| Flask | Web framework |
| Flask-SQLAlchemy | ORM |
| Flask-Migrate | Database migrations (Alembic) |
| Flask-JWT-Extended | JWT authentication |
| Flask-Bcrypt | Password hashing |
| Flask-CORS | Cross-origin resource sharing |
| PostgreSQL | Production database |
| Gunicorn | WSGI production server |

### Frontend
| Technology | Purpose |
|---|---|
| HTML5 / CSS3 | Structure and styling |
| Vanilla JavaScript | API communication via Fetch API |
| Chart.js | Data visualization |

### Infrastructure
| Service | Purpose |
|---|---|
| Railway | Backend hosting + PostgreSQL |
| Netlify | Frontend hosting |
| GitHub | Version control |

---

## API Endpoints

### Authentication
```
POST   /register           Register a new user
POST   /login              Login and receive JWT token
DELETE /logout             Revoke current JWT token
```

### Topics
```
GET    /lot                Get all topics for current user
POST   /make_top           Create a new topic
PATCH  /update_top/<id>    Update topic title, status or priority
DELETE /delete_top/<id>    Delete a topic
```

### Progress
```
POST   /write_progress/<topic_id>   Add a progress log entry
GET    /get_progress/<topic_id>     Get all log entries for a topic
DELETE /delete_log/<id>             Delete a log entry
```

### Statistics
```
GET    /show_stats         Get full statistics for current user
```

---

## Project Structure

```
SeDevu/
├── app/
│   ├── __init__.py          # Application factory (create_app)
│   ├── models/
│   │   ├── user.py
│   │   ├── topic.py
│   │   ├── progress.py
│   │   ├── streak.py
│   │   ├── note.py
│   │   └── token_blocklist.py
│   └── routes/
│       ├── auth.py
│       ├── topics.py
│       ├── progress.py
│       └── stats.py
├── frontend/
│   ├── index.html           # Landing page
│   ├── dashboard.html       # User dashboard
│   ├── topics.html          # Topics management
│   ├── stats.html           # Statistics & charts
│   ├── style.css
│   └── app.js
├── migrations/
├── .env                     # Environment variables (not in repo)
├── Procfile
├── railway.json
├── requirements.txt
└── run.py
```

---

## Running Locally

### Prerequisites
- Python 3.10+
- PostgreSQL

### Setup

```bash
# Clone the repository
git clone https://github.com/yujilong07/SeDevu.git
cd SeDevu

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Fill in your values: DB_CONFIG, SECRET_KEY, JWT_PASS

# Run database migrations
flask db upgrade

# Start the server
python run.py
```

### Frontend
```bash
cd frontend
python -m http.server 3000
# Open http://localhost:3000
```

---

## Environment Variables

```env
DB_CONFIG=postgresql://user:password@localhost/devtracker
SECRET_KEY=your-secret-key
JWT_PASS=your-jwt-secret
```

---

## Deployment

- **Backend** deployed on [Railway](https://railway.app) with automatic deploys from the `master` branch
- **Frontend** deployed on [Netlify](https://netlify.com) via manual deploy
- Database migrations run automatically as a pre-deploy step on Railway

---

## What I Learned

This project was built as a first full-stack application using Flask. Key concepts practiced:

- Designing a REST API with Flask Blueprints
- Database modeling with SQLAlchemy and relationships
- JWT-based authentication with token revocation
- Database migrations with Flask-Migrate and Alembic
- Connecting a vanilla JS frontend to a REST API using Fetch
- Deploying a full-stack application to production
