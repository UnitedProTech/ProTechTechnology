# Welcome to your Lovable project

## Project info



## How can I edit this code?

There are several ways of editing your application.


Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?



## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.



## United Tech corporate redesign

This redesign keeps the existing React + TypeScript + Vite + Tailwind stack.

### Local preview

```bash
npm ci
npm run dev
```

### Production build

```bash
npm ci
npm run build
```

### Lead form behavior

The quote form prepares the lead details and lets the visitor choose either email (`mailto:info@united-tech.org`) or WhatsApp. The visitor must confirm/send the message in their email app or WhatsApp. This version does not send data silently to a server and does not require API secrets. If fully automatic lead capture is required later, connect the form to a protected server endpoint or CRM.

### Deployment safety

Push this version to a separate Git branch and review the Vercel Preview Deployment before merging to the production branch. Do not replace the production deployment until the preview, contact links, and mobile layout are approved.
