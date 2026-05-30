# Repository Guidelines

## Project Structure & Module Organization

This repository is currently a blank Git project with no committed source tree. As code is added, keep the layout predictable:

- `src/` for application or library source code.
- `tests/` for automated tests that mirror `src/` structure.
- `assets/` for static files such as images, fixtures, or sample media.
- `docs/` for design notes, architecture decisions, and contributor-facing documentation.

Prefer small, cohesive modules over large catch-all files. When adding a new toolchain, include its manifest at the repository root, for example `package.json`, `pyproject.toml`, `Cargo.toml`, or `Makefile`.

## Build, Test, and Development Commands

No project-specific commands exist yet. When introducing a build system, document the canonical commands here and keep them runnable from the repository root. Recommended examples:

- `npm install` / `npm test` / `npm run build` for Node projects.
- `python -m pytest` for Python test suites.
- `make test` and `make build` when a `Makefile` coordinates multiple tools.

Avoid undocumented one-off scripts. If a command is required for local development, add it to the project manifest or `Makefile`.

## Coding Style & Naming Conventions

Follow the formatter and linter native to the chosen stack, and commit their configuration with the code. Use consistent indentation throughout each language: two spaces for JSON/YAML/JavaScript-style projects, four spaces for Python, and the default formatter for Go, Rust, or Swift.

Use descriptive names. Prefer `kebab-case` for documentation files, `snake_case` for Python modules, and `camelCase` or `PascalCase` according to JavaScript/TypeScript conventions.

## Testing Guidelines

Place tests under `tests/` or beside source files only if the selected framework expects colocated tests. Name tests after the behavior being verified, for example `test_user_can_sign_in.py` or `auth.service.test.ts`.

Every behavior change should include either an automated test or a clear explanation in the pull request for why manual verification is sufficient.

## Commit & Pull Request Guidelines

There is no existing commit history to follow. Use short, imperative commit subjects such as `Add initial project structure` or `Document contributor workflow`. Keep each commit focused on one logical change.

Pull requests should include a concise summary, validation steps, linked issues when applicable, and screenshots or recordings for user-visible changes. Call out new configuration, secrets, migrations, or breaking changes explicitly.

## Security & Configuration Tips

Do not commit credentials, local environment files, generated secrets, or machine-specific paths. Provide safe examples such as `.env.example` when configuration is required.
