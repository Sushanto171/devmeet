# DevMeet - Developer Knowledge Sharing Hub

DevMeet is a platform where developers can share knowledge through articles, discussions, and comments. It’s a community-driven platform aimed at fostering collaboration and learning.

## Clone the Repository

Follow these steps to clone and run the project locally:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)

### Steps to Clone the Repo

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Sushanto171/devmeet.git
   ```

2. Navigate into the project directory:
   ```bash
   cd devmeet
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables (e.g., for MongoDB, NextAuth credentials):
   ```env
   NEXTAUTH_URL=http://localhost:3000
   MONGO_URI=your_mongo_db_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000` to see the app in action!

### Available Scripts

- `npm run dev` — Starts the development server at `http://localhost:3000`
- `npm run build` — Builds the app for production
- `npm run start` — Starts the app in production mode

## Folder Structure

Here’s a simple folder structure for a Next.js project:

```
devmeet/
├── public/                   # Static assets (images, favicon, etc.)
│   └── favicon.ico
├── src/                      # Source code
│   ├── app/                  # Main app directory (App Router)
│   │   ├── layout.js         # Main layout for the app
│   │   ├── page.js           # Homepage
│   │   ├── posts/            # Post-related pages
│   │   │   ├── page.js       # List of posts
│   │   │   └── [slug].js     # Individual post page
│   │   └── profile/          # User profile pages
│   │       └── page.js       # User profile page
│   ├── components/           # Reusable components
│   │   ├── Header.js         # Header component
│   │   ├── PostCard.js       # Post card component
│   │   └── Comment.js        # Comment component
│   ├── styles/               # Global styles (CSS or SCSS)
│   │   └── globals.css       # Global styles
├── .env                      # Environment variables
├── .gitignore                # Git ignore file
├── package.json              # Project dependencies and scripts
├── next.config.js            # Next.js configuration
└── README.md                 # Project documentation
```

### Key Components:
1. **`public/`**: For static assets like images, fonts, and the favicon.
2. **`src/`**: Contains the main application code:
   - **`app/`**: Contains layout and page components. This includes routes for the homepage, posts, and user profiles.
   - **`components/`**: Reusable UI components like header, post cards, and comment sections.
   - **`styles/`**: Global styles for the app.
3. **`package.json`**: For managing project dependencies and scripts.
4. **`next.config.js`**: Next.js configuration file.
5. **`.env`**: For storing environment variables.

This simple structure is great for small to medium-sized projects and can be easily extended as the app grows.

## Contributing

If you'd like to contribute to the project, follow these steps:

1. Clone the repository to your local machine.
2. Fetch the latest changes from the `main` repository:
   ```bash
   git fetch origin
   git checkout main
   git merge origin/main
   ```

3. Create a new development branch based on `main`:
   ```bash
   git checkout -b dev-yourname
   ```
   Replace `yourname` with your GitHub username or feature name.

4. Make the necessary changes in your branch.

5. Commit your changes:
   ```bash
   git add .
   git commit -m "[ADDED]/[UPDATED] feature/bugfix: description"
   ```

6. Push your changes to your development branch:
   ```bash
   git push origin dev-yourname
   ```

7. **Do not push directly to the `main` branch.** Instead, create a **Pull Request (PR)** from your development branch to the `development` branch (or a feature branch designated by the owner). Please provide a clear description of the changes you made in your PR.

8. The project owner will review your PR and, if everything looks good, will merge it into the `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
