# LandLogic-app
[Link](https://land-logic-app-frontend.vercel.app/)

## Overview

Welcome to **LendLogic**, your all-in-one solution for personalized financial insights and decision-making related to mortgages. This application goes beyond the conventional one-size-fits-all approach, recognizing that users dealing with mortgage-related matters have unique needs that require specialized features and services.

## Problem Statement

A substantial portion of users engages with the app for mortgage-related reasons. However, current products on the market lack of differentiation for these users and fail to provide user-specific features. This generic approach may lead to under-serving the unique needs of customers dealing with mortgage-related matters. With the complexity and significance of mortgage decisions, there is a substantial opportunity to enhance the customer experience by offering features and services specifically tailored to these needs.

## Solution

## User Authentication and Data Storage

To enhance user experience, we implemented cookies to simulate login for our users. This approach allows us to store the user's email address locally, avoiding constant authentication. By associating user answers with their email, we can select appropriate tools for the user to see on the dashboard. This seamless integration with the backend ensures efficient data retrieval and tool customization.

## Preference Gathering Tool

### Personalized Dashboard

Upon logging in, users are directed to a personalized dashboard tailored to their needs. The dashboard dynamically adjusts based on the user's responses in the preference gathering tool, ensuring that only relevant elements and tools are presented. This tailored experience allows users to review personal data specific to them while accessing tools specific to their financial needs and goals.

### Property Deposit Estimation for New Buyers

Users receive an immediate estimate of the required deposit for properties in their area. This clear, financial goal can be further explored by pressing the ‘Find out more’ button. This feature empowers users with crucial information for their property investment decisions.

### Suggested Monthly Savings

Users can see a suggested monthly saving and an automatically calculated timeframe based on this saving. A user-friendly slider allows users to adjust their monthly savings, providing immediate feedback on the length of time it will take to reach their deposit goal. This feature promotes financial planning and goal setting.

### Dynamic User Input Adjustment

We understand that property values may change. Therefore, we implemented a filter to allow users to input a different property value if they feel that the evaluation stored against their data is incorrect or out of date. This flexibility reflects on the time required to obtain the money for the deposit, positively or negatively impacting the user's financial timeline.

## Project Structure


## Technology Stack

- **Frontend:** Next.js
- **Backend:** JSON server
- **Styling:** Tailwind CSS
- **Authentication:** Cookies

## How to Install

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Start the application using `npm start`.


