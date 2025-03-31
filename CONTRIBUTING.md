# Contribution Guideline - Smishing Detection Backend

This document outlines the guidelines for contributing to the Smishing Detection backend project.  
**All contributions not following these guidelines will be discarded**.

## ⚡ How to Contribute

- Create a feature branch from your fork's latest `main` branch
- Make your changes
- Commit with a clear message (see below)
- Push to your fork and create a pull request to the `dev` branch of this repository.

## ✒️ Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard to keep our history clean and meaningful.

**Format:**

```
<type>(<scope>): <short description>
```

**Examples:**

```
feat(auth): add Google login support
fix(api): correct login flow
docs(readme): update setup instructions
chore(deps): bump dotenv from 0.21.1 to 0.24.0
```

**Common Types:**

- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style (formatting, missing semi-colons, etc)
- refactor: Code change that neither fixes a bug nor adds a feature
- test: Adding or updating tests
- chore: Maintenance work (build tasks, package updates, etc)

## 🌱 Branching Strategy

You should always branch off from the latest `main` branch in your fork.  
**Never commit directly to `main` or `dev` in this repository.**

### Branch Naming Convention

Use hyphen-separated lowercase names.

**Format:**

```
<planner-task-name>/<name>
```

**Examples:**

```
oauth-implementation/john
fix-login-crash/mayer
```

## 🔃 Pull Requests

- **PRs should always target the `dev` branch unless stated otherwise.**
- Make sure your branch is up to date with `dev` before opening a PR.
- Describe what your PR does, link related issues, and include screenshots if applicable.
- **Always keep PRs focused and small.**

## 🧪 Code Quality & Testing

- Run all tests before pushing (if applicable)
- Follow existing coding patterns and styles
- If you introduce a feature or fix a bug, please consider adding a test for it

## 🙌 Thank You!

We appreciate your time and effort. Let’s build something great together!
