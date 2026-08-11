# AfreSH Portfolio Repository

## Repository

- This directory is the actual Git repository.
- GitHub repository: `sehyeonjeong/sehyeonjeong.github.io`.
- Production URLs: `https://www.afresh.page/` and `https://sehyeonjeong.github.io/`.
- Stack: React 19, Vite 8, Swiper, ESLint.

Always run Git, npm, and project searches from this repository root.

## Current product state

- The legacy static portfolio was migrated to React and Vite.
- The section headed `Design.` / `VISUAL ARCHIVE` was intentionally removed. Do not restore that gallery unless the user asks.
- Design-related wording in the About copy and HTML metadata remains intentional.
- The About heading intentionally breaks after `AfreSH.` and uses `<br />`.
- `src/App.jsx` is composition-only.
- Page components live in `src/components/`: `Header`, `Hero`, `About`, `Work`, and `Footer`.
- The typing animation hook lives at `src/hooks/useTyping.js`.
- Portfolio data and image URL helpers live in `src/data.js`.
- Existing portfolio images remain under `images/` and are referenced from the repository's raw `main` URLs.

## Validation

For code changes, run at minimum:

```powershell
npm run lint
npm run build
git diff --check
```

The build output is `dist/` and is ignored by Git.

## Deployment

- GitHub Pages must publish through GitHub Actions, not directly from the repository root.
- Deployment workflow: `.github/workflows/deploy.yml`.
- The workflow builds with `npm ci` and `npm run build`, then deploys `dist/`.
- Preserve `public/CNAME` with the exact domain `www.afresh.page`; the build must contain `dist/CNAME`.
- After deployment, verify that the live page loads a hashed `/assets/index-*.js` bundle and renders non-empty React content. Loading `/src/main.jsx` means branch-based Pages publishing has been enabled incorrectly.
- Do not re-run a completed job inside an existing Pages workflow run. That creates duplicate artifacts named `github-pages` and makes `deploy-pages` fail. Start a new `workflow_dispatch` run instead.

## Git and GitHub environment notes

- The shell may report `C:\Users\AC322/.config/git/ignore: Permission denied`; this warning has been non-blocking.
- Windows Git's `schannel` backend can fail with `SEC_E_NO_CREDENTIALS`. Read-only fetches have worked with `git -c http.sslBackend=openssl fetch ...`.
- `gh auth status` may show a keyring account while token export and Git push still fail in the execution shell. Do not expose or persist tokens.
- Prefer the connected GitHub app for repository write operations when CLI credential forwarding fails. Local blobs and tree SHAs must be verified before creating remote commits.
- Use `agent/<description>` branches and explicit file staging. Preserve unrelated user changes.
- The remote `main` includes merged PRs #2 (React migration), #3 (Design section removal), and #4 (componentization). At the time this file was written, `main` was at merge commit `88766c2` and the latest successful Pages run was `31463723568`.

## Working-tree handoff

- The last active local branch was `agent/componentize-portfolio`, tracking `origin/agent/componentize-portfolio`, with a clean working tree.
- Before new work, fetch `origin/main` and create a fresh task branch from it.
