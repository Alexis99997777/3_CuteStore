This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
<div>
  website : <b>https://main.d3qm9b2kfawktn.amplifyapp.com/</b>
</div>

Building a fully functional Full-Stack online store, complete with product listings, shopping cart, and secure Stripe payments.

<p>🌟Frontend:：Next.js + React.js</p>
<p>🌟Backend / Payment Integration：Stripe.js for payments & checkout</p>
<p>🌟Framwork:ReactJs</p>
<p>🌟Technology:Javascript, JSX, CSS, HTML</p>
<p>🌟Delopyment：AWS Amplify</p>

<h2>🌟 Core Features</h2>

<h3>1. Performance Optimization</h3>
<p>
<strong>Progressive Image Loading:</strong> Implemented progressive image loading technique - displays low-resolution placeholders first, then asynchronously loads high-resolution images in the background with onload callbacks for seamless transitions. Improved page load speed by 100ms+
</p>

<h3>2. State Management</h3>
<p><strong>React Hooks Implementation:</strong></p>
<ul>
  <li><code>useState</code>: Manage component state and trigger automatic re-renders</li>
  <li><code>useEffect</code>: Handle side effects and execute asynchronous operations after component renders</li>
  <li><code>useRef</code>: Persist values across re-renders without triggering unnecessary updates</li>
  <li><code>useContext</code>: Enable global state sharing (user info, theme settings, etc.)</li>
</ul>

<h3>3. Shopping Cart System</h3>
<ul>
  <li><strong>Global State Management:</strong> Created global cart Context for cross-component data sharing</li>
  <li><strong>Cart Features:</strong> Add/remove items, quantity adjustment, real-time price calculation</li>
  <li><strong>Data Persistence:</strong> Maintain cart data storage and updates across sessions</li>
</ul>

<h3>4. Payment Integration</h3>
<p><strong>Stripe API Integration:</strong></p>
<ul>
  <li>Secure payment processing workflow</li>
  <li>Shopping cart checkout functionality</li>
  <li>Order creation and management</li>
</ul>

<h3>5. Frontend-Backend Communication</h3>
<p><strong>Data Flow Architecture:</strong></p>
<ol>
  <li>Frontend sends requests via Fetch API to <code>/api/products</code></li>
  <li>Backend queries data and retrieves product information from Stripe</li>
  <li>Returns product data in JSON format (pricing, descriptions, inventory)</li>
  <li>Frontend receives and renders product listings</li>
</ol>

<h3>6. Modular Architecture</h3>
<p><strong>Frontend Module Structure:</strong></p>
<ul>
  <li>Product Display Module</li>
  <li>Shopping Cart Module</li>
  <li>Order Management Module</li>
  <li>User Information Module</li>
</ul>

<h3>7. User Experience Enhancement</h3>
<ul>
  <li><strong>Image Interactions:</strong> Click-to-zoom functionality using DOM manipulation</li>
  <li><strong>Responsive Design:</strong> Optimized for multiple devices and screen sizes</li>
</ul>

<h3>8. Development Best Practices</h3>
<ul>
  <li><strong>Environment Variables Management:</strong> Secure storage of API keys and configuration</li>
  <li><strong>Server-Side Rendering:</strong> Leveraging Next.js SSR for improved SEO and initial load performance</li>
  <li><strong>Client/Server Components:</strong> Strategic rendering approach for optimal performance</li>
</ul>

<h2>🚀 Deployment</h2>
<p>
Project is deployed on AWS Amplify, providing reliable hosting services with automated CI/CD pipeline.
</p>
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
