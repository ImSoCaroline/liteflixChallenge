<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). -->

# Liteflix challenge

This app was created following the design and requirements of a challenge sent by Litebox

- Case:

The project consists of developing a dynamic Movie Catalog.

It should include a featured movie and popular movies obtained from a public API.

However, the catalog can be updated by the user, allowing them to add new movies to the "My Movies" category. There is no endpoint available to add new movies, instead, the movie information should be stored in localStorage by saving the images.

The only functionality that requires logic and implementation is the "Add Movie" feature. The rest of the menu buttons are purely illustrative and do not need to perform any specific functions, but they should be visually styled according to the design.

The functionality of adding movies should simply allow the user to upload an image and its title, and then list that movie in the "My Movies" category (accessed through the dropdown of Popular/My Movies).

- Development:

I decided to use React with Next and Typescript for this project.

For the styles I used SASS with BEM

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result or
you can see this project in production here <https://liteflix-challenge-murex.vercel.app/>.
