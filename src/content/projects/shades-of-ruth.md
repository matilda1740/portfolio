---
title: Shades of Ruth
summary: "A responsive beauty e-commerce storefront with product discovery, checkout, and an administration dashboard."
outcome: "Delivered a responsive storefront covering product discovery, shopping flows, account features, and administration."
year: 2022
category: engineering
tags:
  - React
  - Firebase
  - Redux Toolkit
  - Material UI
  - E-commerce
highlights:
  - value: "React"
    label: "customer storefront"
  - value: "Firebase"
    label: "auth, data, and storage"
  - value: "Admin"
    label: "products and orders"
published: true
featured: true
sortOrder: 2
role: Software Developer
organization: Shades of Ruth
githubUrl: https://github.com/matilda1740/shades-of-ruth
demoUrl: https://shadesofruthbackend.web.app/
thumbnail: /images/projects/shades-of-ruth-storefront.png
thumbnailAlt: "Shades of Ruth storefront homepage featuring an eye-shadow collection and responsive beauty e-commerce navigation."
---

## The problem

Shades of Ruth is a responsive React e-commerce storefront for beauty products. The application covers the customer shopping journey and includes an administration area for managing products and orders.

## User needs and goals

Customers can browse the catalogue, filter products by category, save items to a wishlist, manage a cart, and complete a structured checkout flow. The interface is designed to work across mobile, tablet, and desktop layouts.

![Shades of Ruth product catalogue showing category navigation, lipstick listings, product prices, descriptions, wishlist controls, and cart actions.](/images/projects/shades-of-ruth-catalogue.png)

## My role

I developed and enhanced the application end to end, implementing the storefront experience, persistent cart and wishlist state, account flows, and the administrative interface for product and order management.

## How it works

The frontend uses React with Hooks, Context API, and Redux Toolkit for shared state. React Router v6 defines customer, authentication, account, checkout, and administrator routes. Material UI, Styled Components, SCSS, and Animate.css support the interface and interaction styling.

Firebase provides Authentication, Firestore persistence, Storage for product images, and Hosting. The application keeps customer and administrator experiences separate through route-level wrappers and includes pages for users, products, orders, locations, account management, and product creation. Cart and wishlist state are persisted in local storage so the shopping session can survive navigation and reloads.

## What changed

The result is a working responsive storefront with product discovery, category routes, wishlist and cart flows, checkout validation, authentication screens, customer accounts, and a management dashboard. A live deployment and the source repository are available for review.

## Constraints and lessons

The repository describes the Firebase rules as permissive for local/demo usage and identifies payment integration, testing, TypeScript migration, SEO, and performance work as future improvements. These limitations should be addressed before treating the application as a production commerce platform.

## Next steps

I would tighten Firebase security rules, add automated unit and integration coverage, migrate the application to TypeScript, integrate a dedicated payment gateway, and improve SEO and performance before a production launch.
