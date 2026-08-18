# Webora Web — GitHub Pages deployment

This version is prepared for the repository `Webora` and the GitHub Pages URL:

`https://weboraweb7-hub.github.io/Webora/`

## Deploy

1. Create/open the GitHub repository named `Webora` under `weboraweb7-hub`.
2. Upload **all files and folders from this ZIP** to the repository root. Do not upload the ZIP itself.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Open the **Actions** tab and wait for **Deploy Webora to GitHub Pages** to finish.
7. Open `https://weboraweb7-hub.github.io/Webora/`.

The project uses Vite with `base: '/Webora/'`, so assets work correctly in a repository subpath.

## Lead form

GitHub Pages is static hosting, so there is no Express `/api/leads` backend in this version. The lead form stores a copy in browser `localStorage` and opens a pre-filled WhatsApp message to the Webora number.
