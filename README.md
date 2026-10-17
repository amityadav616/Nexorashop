# NexoraShop — Render-ready project

## Deploy on Render
1. Upload the contents of this folder to the **root** of your GitHub repository (not the ZIP itself).
2. In Render, create a Web Service and connect the repository.
3. Use these settings:
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Root Directory: leave blank if `package.json` is at repository root
4. Leave Environment Variables blank for this starter site and click Deploy.

The site listens on `process.env.PORT`, as required by Render. `/health` is a simple health-check endpoint.

Note: this is a newly recreated starter storefront, not a recovery of the exact earlier ZIP.
