# Foodie

Foodie is a full-stack food ordering application with a customer storefront, an admin dashboard, and a REST API. Customers can browse menu items, create an account, manage a cart, and start a Stripe Checkout payment. Admin users can add, view, and remove food items.

## Features

- Browse food by menu category and view food details.
- Register and log in with password hashing and JWT-based authentication.
- Add items to a cart; authenticated carts are stored in MongoDB.
- Submit delivery details and create a Stripe Checkout session.
- Use the admin dashboard to add food with an image, list menu items, and remove them.
- Store food and order records in MongoDB and serve uploaded images from the API.

> **Current scope:** The project creates Stripe Checkout sessions, but does not yet implement a payment verification/return page or a completed order-management screen. The admin `Orders` page is currently a placeholder. The admin API endpoints for adding and removing food are not protected by admin authentication.

## Project structure

```text
Foodie/
├── Backend/    Express API, MongoDB models, authentication, and image uploads
├── Frontend/   Customer-facing React application (Vite)
└── admin/      Admin React application (Vite)
```

## Requirements

- Node.js 20.19+ (or 22.12+) and npm
- MongoDB, local or hosted
- A Stripe secret key (use a test key for local development and checkout)

## Local development

Open three terminal windows from the `Foodie` project directory.

### 1. Configure and start the API

```bash
cd Backend
npm install
cp .env.example .env
```

Set the values in `Backend/.env`:

```dotenv
MONGODB_URI=mongodb://127.0.0.1:27017/food-delivery
JWT_SECRET=replace-with-a-long-random-secret
STRIPE_SECRET_KEY=sk_test_replace_with_your_stripe_test_key
```

Start MongoDB, then start the API:

```bash
npm run server
```

The API listens on `http://localhost:4000`. The health check is `GET /`.

### 2. Start the customer storefront

```bash
cd Frontend
npm install
npm run dev
```

Open the Vite URL printed in the terminal (normally `http://localhost:5173`).

### 3. Start the admin dashboard

```bash
cd admin
npm install
npm run dev -- --port 5174
```

Open `http://localhost:5174/add` to add menu items or use `/list` to view and remove them. A separate port avoids conflicting with the customer app's default Vite port.

The customer and admin applications currently use `http://localhost:4000` as their API URL. For deployment or a different local setup, update the API URL in their source before building.

## API routes

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/api/user/register` | Register a customer |
| `POST` | `/api/user/login` | Log in a customer |
| `GET` | `/api/food/list` | List food items |
| `POST` | `/api/food/add` | Add a food item with an `image` upload |
| `POST` | `/api/food/remove` | Remove a food item |
| `POST` | `/api/cart/add` | Add an item to the authenticated cart |
| `POST` | `/api/cart/remove` | Remove an item from the authenticated cart |
| `POST` | `/api/cart/get` | Retrieve the authenticated cart |
| `POST` | `/api/order/place` | Create an order and Stripe Checkout session |
| `GET` | `/images/<filename>` | Retrieve an uploaded food image |

Cart and order routes expect the JWT in the `token` request header. Food administration routes currently have no authentication middleware; do not expose this API publicly without adding appropriate access controls.

## Build and lint

Run these commands in either `Frontend` or `admin`:

```bash
npm run build
npm run lint
```

The backend currently has no test or lint script.

## Configuration and generated files

- Keep real credentials in `Backend/.env`; it is excluded from Git. `Backend/.env.example` documents the required variables.
- Food images uploaded by the admin are written to `Backend/uploads/` and are excluded from Git. The directory is created in the repository for local use.
- Do not commit database credentials, Stripe keys, JWT secrets, or other private configuration.
