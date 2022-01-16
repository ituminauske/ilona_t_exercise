### Ilona's Comments

####Notes
1. As the number of the items is fixed for this exercise - 100, I hardcoded this number.
2. I used the colors from the original Qogita website to more or less match the theme
3. I used Redux to store the cart content and value in the application state. It means that getItem is only called once to set initial app state. There is an event listener to the state which runs setItem to the localStorage in case there are any changes.   
4. I used Ant Design component library, so I did not actually have to write a lot of css. 
5. In order to initialize application state from local storage, I had to use a hack to access window.localStorage from where I create a Redux store (window is only accessable from the client side) 

####How to use

1. Home page : http://localhost:3000/ has links to Products and Cart. You can navigate by clicking on actions in the cards : "Explore Products" or "Check Out".
You can also navigate to those pages using navigation bar as expected. 
2. Once you navigate to Products, it will redirect you to the 1st page http://localhost:3000/products/1 by default to show the first 20 products. In the Product page,
at the bottom you can find a page navigator with possibility to select the page or click on Next or Previous. If you reload on the specific page, navigation 
tool will also be active on the required button. 
3. In order to add/remove products from the basket, there are actions available in each Product card (+ , - , Delete). + and - will increase/decrease the quantity. Delete will remove
the product from the cart completely. 
4. When you reload a page with products selected, on load it will read local storage and prepopulate the quantities in products page so it would be more obvious for a user.
5. Cart page will have same components for each product that was added to the cart. It will have the same functionality to add more, decrease the quantity or delete the item completely.
6. If the cart is empty, there will be an indication in this page. 
7. Total monetary value of the cart shown on the right-hand side. (I assumed that all products are in EUR. Otherwise, there should be a conversion service 
but probably not on the UI side)

# Qogita's Front-End Technical Challenge.

Congratulations on reaching the technical challenge stage of the interview process at Qogita.

We are excited to potentially have you join the Engineering team, where you will work alongside brilliant people to build a revolutionary global wholesale B2B platform.

## Background

This challenge is built around the front-end stack we use at Qogita – [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/), [Next.js](https://nextjs.org/), and [Tailwind CSS](https://tailwindcss.com/).

You are expected to use the tools and techniques are you are most comfortable with to produce good quality code that can be understood by engineers of varying experience.

**Please address the functional requirements listed in the task below, and any non-functional requirements you see as appropriate.**

## Task – Shopping Cart

Your task is to expand this project to display products, and allow customers to add them to a shopping cart. You may use third party libraries to assist you. We expect you to prioritise the usability of your user-interface over how pretty it looks.

This task should take 3-4 hours to complete, and you will be given a week to do this. You should commit your code to a repository of your choice, and then share this with us. Please also document any assumptions you make.

### Requirements

#### Home page

- Display products retrieved from the `/products` endpoint. See [API](#api). - **Done**
- Customers should be able to browse all available products (there are 100 in total). - **Done**
- Customers should be able to add products to a shopping cart. - **Done**

#### Cart page

- Display the products the customer has added to their shopping cart. - **Done**
- Customers should be able to remove products from their shopping cart. - **Done**
- The shopping cart's value should be prominently displayed. - **Done**

##### Bonus requirements

- Customers should be able to change the quantity of a particular product in their shopping cart. - **Done**

## Getting started

The existing code includes a development environment, and an [API](#api) with product data for you to interact with. The relevant API response types can be found in [src/types.ts](src/types.ts). Please do not use `data/products.json` directly.

### Setup

```sh
cd frontend-challenge
npm install
```

### Running locally

#### Development

Start the project in development mode.

```sh
npm run dev
```

#### Production

Build and start the project in production mode.

```sh
npm start
```

## API

The API can be interacted with via `http://localhost:3000/api` and has the following endpoints:

#### `/products`

The `/products` endpoint accepts `GET` requests and will return the first page of 20 products. To retrieve a different page of 20 products, you can pass the `page` query parameter (e.g. `/products?page=2`).

#### `/products/[gtin]`

The `/products/[gtin]` endpoint accepts `GET` requests and will return a product matching the GTIN (e.g. `/products/8005610625720`). If no product is found, the API will respond with a `404` status.
