---
title: Shades of Ruth
summary: "A responsive beauty e-commerce storefront with product discovery, checkout, and an administration dashboard."
outcome: "Delivered a working responsive storefront with customer shopping flows and an administration dashboard."
year: 2022
category: engineering
tags:
  - React
  - Firebase
  - Redux
  - SCSS
  - MaterialUI
  - Styled Components

published: true
featured: true
sortOrder: 2
role: Software Developer
organization: Shades of Ruth
githubUrl: https://github.com/matilda1740/shades-of-ruth
demoUrl: https://shadesofruthbackend.web.app/
thumbnail: /images/projects/shades-of-ruth-card.png
thumbnailAlt: "Shades of Ruth storefront homepage featuring an eye-shadow collection and responsive beauty e-commerce navigation."
thumbnailWidth: 1600
thumbnailHeight: 800
---

## The problem

Shades of Ruth is a responsive React e-commerce storefront for beauty products. The application covers the customer shopping journey and includes an administration area for managing products and orders.

## User needs and goals

Customers can browse the catalogue, filter products by category, save items to a wishlist, manage a cart, and complete a structured checkout flow. The interface is designed to work across mobile, tablet, and desktop layouts.

<figure class="project-evidence project-evidence--interface">
  <img src="/images/projects/shades-of-ruth-catalogue.png" alt="Shades of Ruth product catalogue showing category navigation, lipstick listings, product prices, descriptions, wishlist controls, and cart actions." width="1406" height="768" loading="lazy" decoding="async" />
  <figcaption>Shades of Ruth customer catalogue — category navigation, product discovery, wishlist and cart controls.</figcaption>
</figure>

## How it works

The frontend uses React with Hooks, Context API, and Redux Toolkit for shared state. React Router v6 defines customer, authentication, account, checkout, and administrator routes. Material UI, Styled Components, SCSS, and Animate.css support the interface and interaction styling.

Firebase provides Authentication, Firestore persistence, Storage for product images, and Hosting. The application keeps customer and administrator experiences separate through route-level wrappers and includes pages for users, products, orders, locations, account management, and product creation. Cart and wishlist state are persisted in local storage so the shopping session can survive navigation and reloads.

## What changed

The implementation unifies product discovery, checkout, authentication and administration in one React and Firebase application. A live deployment and the source repository are available for review.
