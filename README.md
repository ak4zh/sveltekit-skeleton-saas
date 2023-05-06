# The SvelteKit Skeleton SaaS

Launch your SaaS app faster with our reusable sveltekit SaaS template.

## The Stack

The entire **SvelteKit Skeleton SaaS** has been optimized to deliver lightning-fast performance that satisfies both stakeholders and end-users alike.

- [Prisma](https://www.prisma.io/) for the database
- [Lucia](https://lucia-auth.com/) for authentication
- [Tailwind](https://tailwindcss.com/) for styling with automatic class sorting and [Skeleton UI](https://www.skeleton.dev/) for the UI components
- [Stripe](https://stripe.com/) for payments
- [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) make working with forms easy
- [svelte-meta-tags](https://github.com/oekazuma/svelte-meta-tags) provides components designed to help you manage SEO for Svelte projects.
- [typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n), a fully type-safe and lightweight internationalization library.
- [TypeScript](https://www.typescriptlang.org/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [Playwright](https://playwright.dev/) and [Vitest](https://vitest.dev/) for testing configured

## Customization

Every part of the stack is modular and easy to replace.

You can **configure** anything you want from your database to authentication if you read their respective **documentation** — for example Prisma is configured with [SQLite](https://www.sqlite.org/index.html) because it requires no setup but it's trivial to [change the database connector](https://www.prisma.io/docs/concepts/database-connectors) to use **PostgreSQL**, **MySQL**, **MongoDB**, **CockroachDB** or **Microsoft SQL Server** without having to change the Prisma schema.

## Payments

Stripe payment is set up to give you a starting point how to do Stripe payments with SvelteKit but easy to remove if you don't need payments.

- You're going to need to create a Stripe account
- Get the API keys from the [Stripe dashboard](https://dashboard.stripe.com/login)
- Place the API keys inside your `.env` file for local development or the dashboard of your host
- Create the product inside the [Stripe dashboard](https://dashboard.stripe.com/test/dashboard/products) and get the `productId`
- You can [add a webhook endpoint](https://dashboard.stripe.com/test/webhooks) that points to `stripe/webhook` where you can add logic to respond to events like checkouts or if an invoice has been paid to continue or revoke access to your product

## Get Started

### Using GitHub Templates

You can start a new project by pressing "Use this template" at the top which copies the project with a clean history.

![Template](https://user-images.githubusercontent.com/38083522/226207439-1195c8c4-e3e2-4db0-8f39-7277b08872be.png)

### Using Degit

You can use `degit` to download the project if you don't want to create a new repository, or if you're not using GitHub which also gives you a clean slate to start from.

```
pnpx degit ak4zh/sveltekit-skeleton-saas
```

## Setup

You can use any package manager of your choice but I recommend you use [pnpm](https://pnpm.io/) because it's fast and doesn't destroy your hard disk because it symlinks packages.

### 📦️ Install the project dependencies

```bash
pnpm i
```

### ⚙️ Rename `.env.example` to `.env` and set your environment variables

If you're using a host like Vercel you have to enter the environment variables in their dashboard.

```shell
# Prisma
DATABASE_URL="file:./dev.db"

# Stripe
PUBLIC_STRIPE_KEY="pk_test_1234"
SECRET_STRIPE_KEY="sk_test_1234"
STRIPE_WEBHOOK_SECRET="we_1234"
```

### 📜 Create the database and generate the Prisma client from your Prisma schema

```bash
pnpx prisma db push
```

Using `db push` is great for prototyping but you might want to use [Prisma migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate) for production.

You can change the database schema inside `prisma/schema.prisma` and run `pnpx prisma studio` to look at your database.

### 💿️ Run the development server

```bash
pnpm run dev
```

### ⛵️ Deploying

You can use any SvelteKit adapter that deploys to a target that supports a [Node.js](https://nodejs.org/) runtime.

If you don't have a full-stack hosting solution you can provision a serverless PostgreSQL database provider using [Railway](https://railway.app/) and host your frontend on [Vercel](https://vercel.com/) starting at no cost.

```bash
pnpm run build
```

You can also preview the build.

```bash
pnpm run preview
```