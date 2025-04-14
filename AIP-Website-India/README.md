# Website-India

This repository contains the website for AI Plane Tech India (AIP).

## Setup Instructions

Follow these steps to set up the project:

### 1\. Clone the Repository

Use the following commands to clone the repository and navigate to the project directory:

```bash
git clone https://github.com/AIPlaneTechIndia/AIP-Website-India.git
cd AIP-Website-India
```

### 2\. Install Dependencies

Install the required project dependencies with:

```bash
npm install
```

### 3\. Resolving Errors

If you encounter any errors during installation, use the `--force` flag to bypass them:

```bash
npm install --force
```

### 4\. Fixing Critical Warnings (Optional)

If you want to resolve critical warnings, run:

```bash
npm audit fix
```

Or

```bash
npm audit fix --force
```

\> **Note:** Resolving warnings is generally not required. Most warnings occur due to the depreciation of certain UI components, which does not typically affect the functionality of the project.

**_Feel free to share any additional requirements for further refinement!_**

**_What do you think?_**

---

## Running the Project

To start the development server:

```bash
npm run dev
```

Access the website in your browser at <http://localhost:3000>

---

## Project Structure

Here's a brief overview of the Next.js project structure:

- `pages/`: Contains the application’s routes. Each file corresponds to a route.
- `public/`: Stores static assets such as images and icons.
- `components/`: Contains reusable UI components.
- `styles/`: Includes global and modular CSS files.
- `next.config.js`: Configuration file for customizing the Next.js setup.

---

## Customization

To modify the website:

- Update route-specific files in the `pages/` directory.
- Edit or create reusable components in `components/`.
- Add static assets (e.g., images) to the `public/` directory.
- Adjust styles in `styles/`.

---

## Testing the Website

You can test the application to ensure its functionality:

```bash
npm test
```

---

## Deployment

To deploy the Next.js application, follow these steps:

1. Generate a production build:

   ```bash
   npm run build
   ```

2. Start the production server locally:

   ```bash
   npm start
   ```

3. Deploy the `out/` (if using Static Export) or `.next/` folder to your hosting provider (e.g., Vercel, Netlify).

---

---

**Let me know if you need any further adjustments!**
