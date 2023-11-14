# hrnet-next

Note: This project was developed as part of the JS/React Application Developer training program at OpenClassrooms.

## Introduction 

HRnet is an internal web application developed by WealthHealth company, designed for employee record management. This project is a redesign of the old application that previously used jQuery.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Components

The objective was to convert the old jQuery plugins into more efficient and less bug-prone React components.
At this stage, only the component for displaying data tables has been fully developed in-house ([react-data-tables-plugin](https://github.com/rbrahier17/react-data-tables-plugin)), while the other components are sourced from the [shadcn/ui](https://ui.shadcn.com/) library, which provides a collection of modern, customizable, and open-source React components.

## Features

The HRnet application integrates two main pages:

### Home Page

The homepage displays a form for adding a new employee to the employee list. Users can fill in the necessary information and submit the form.

### Employee List Page

The `/employee-list` page allows users to view and interact with the complete list of added employees through a data table.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
Then, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


