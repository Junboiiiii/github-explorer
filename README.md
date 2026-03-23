# GitHub Explorer

A React application that lets you search any GitHub user and explore their public profile and repositories — built as a frontend portfolio project.

## Features

- 🔍 Search any GitHub username instantly
- 👤 Display profile — avatar, bio, location, followers, following, repo count
- 📁 Browse public repositories sorted by star count
- ⭐ See stars, forks, and language for each repo
- 💀 Loading skeleton animation while fetching data
- 🌙 Dark mode toggle with system preference detection
- 💾 Theme preference persists across page refreshes
- 🔗 Click any repo to open it directly on GitHub
- 📄 Show more button — loads 6 repos at a time
- ❌ Friendly error handling for invalid usernames

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Custom Hooks | `useGithub` for API logic, `useTheme` for dark mode |
| GitHub REST API | User profile and repository data |
| CSS Variables | Theme switching — light and dark mode |
| localStorage | Persist theme preference |
| Create React App | Project scaffolding and build tooling |

---

## Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx        # Search input and button
│   ├── UserProfile.jsx      # Avatar, bio, stats display
│   ├── RepoList.jsx         # Repo grid with RepoCard
│   ├── SkeletonLoader.jsx   # Loading placeholder cards
│   └── ThemeToggle.jsx      # Dark/light mode button
├── hooks/
│   ├── useGithub.js         # All GitHub API fetch logic
│   └── useTheme.js          # Theme state and localStorage
├── styles/
│   ├── App.css
│   ├── SearchBar.css
│   ├── UserProfile.css
│   ├── RepoList.css
│   ├── Skeleton.css
│   ├── Theme.css            # CSS variables for both themes
│   └── ThemeToggle.css
└── App.jsx                  # Root component — assembles everything
```

---

## Getting Started

### Prerequisites

- Node.js 16 or higher
- A free GitHub Personal Access Token

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Junboiiiii/github-explorer.git

# 2. Go into the project folder
cd github-explorer

# 3. Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root folder:

```
REACT_APP_GITHUB_TOKEN=your_github_token_here
```

To get a free GitHub token:
1. Go to **github.com → Settings → Developer settings**
2. Click **Personal access tokens → Tokens (classic)**
3. Click **Generate new token**
4. Tick the `public_repo` scope
5. Copy the token and paste it into `.env`

> Without a token you get 60 API requests per hour. With a token you get 5000.

### Run Locally

```bash
npm start
```

Opens at `http://localhost:3000` automatically.

### Build for Production

```bash
npm run build
```

---

## Deployment

This project is deployed on Vercel. To deploy your own copy:

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. In Vercel dashboard → **Settings → Environment Variables**
4. Add `REACT_APP_GITHUB_TOKEN` with your token value
5. Click **Deploy**

> Never put your `.env` file on GitHub. It is listed in `.gitignore` and should stay on your local machine only.

---

## API Reference

This project uses the free [GitHub REST API](https://docs.github.com/en/rest) — no paid plan required.

| Endpoint | Used for |
|---|---|
| `GET /users/{username}` | Fetch profile data |
| `GET /users/{username}/repos` | Fetch public repositories |

---

## What I Learned Building This

- Structuring a React app with separated components, hooks, and styles
- Custom hooks to extract and reuse fetch logic (`useGithub`)
- The `Promise.all` pattern to fire multiple API requests simultaneously
- Loading skeleton UI pattern used by LinkedIn, GitHub, and Facebook
- CSS variables for theming — switching dark/light mode with one attribute
- Persisting user preferences with `localStorage`
- Protecting API secrets with `.env` and `.gitignore`
- Deploying a React app to Vercel with environment variables

---

## Future Improvements

- [ ] Add React Router for individual repo detail pages
- [ ] Debounced search input
- [ ] Language usage pie chart with Chart.js
- [ ] Search history — remember last 5 searches
- [ ] Compare two GitHub users side by side

---

## Author

**Niko** — built as part of a structured React learning curriculum.

GitHub: [@Junboiiiii](https://github.com/Junboiiiii)