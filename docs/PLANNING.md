# Trove: Project Plan

## Problem

Most people can't prove what they own until it's gone. After a fire, theft or flood, the insurance company asks for a list of every item, its value and proof of ownership. Most people end up rebuilding that list from memory.

- Only 20% of insured homeowners created or updated a home inventory in the past year, and 25% have never created one. (APCIA / Harris Poll)
- Nearly 80% of insurance professionals say claims are processed 50 to 100% faster when the customer already has a home inventory. (The Hanover / Insurance Journal)
- About two out of every three US homes may be underinsured. (APCIA)
- After Colorado's Marshall Fire, 74% of affected policyholders were underinsured, and 36% were severely underinsured, meaning their coverage paid for less than three quarters of the rebuild cost. (University of Colorado study)

People don't know what their belongings are worth, don't know if their insurance limit covers it, and lose money and time when they file a claim.

## Solution

Trove is a digital record of everything in your home. You add your home, its rooms, and the items in each room with a photo, price, purchase date and receipt. Trove adds it all up and compares the total with your insurance limit, so you can see how much is covered and how much isn't. It warns you when a new purchase pushes you over your limit, reminds you once a year to review your coverage, and gives you a claim-ready report in one click when something goes wrong.

## Target User

Homeowners who want a clear record of what they own and want to know whether their insurance covers it. Renters can use it the same way.

## Features (v1)

1. Sign up and log in with email and password, or continue with Google
2. Add homes, rooms inside each home, and items inside each room (name, photo, price, purchase date, receipt)
3. Dashboard showing the total value of each room and each home
4. Insurance limit for each home, with the underinsured amount shown
5. Coverage bar showing the percentage of belongings covered
6. Alert when a new item pushes the total over the insurance limit
7. Yearly in-app reminder to review the insurance limit
8. One-click claim-ready report, downloadable as PDF

## Scope

### In scope (v1)

- All features listed above
- One user can have multiple homes
- Responsive design for mobile, tablet and desktop
- Marketing website with 9 pages and scroll animations

### Out of scope (later versions)

- Email or SMS reminders
- Sharing a home with family members
- Reading the price from a receipt photo automatically (OCR)
- Item value going down over time (depreciation)
- Connecting directly with insurance companies
- Live updates across devices

## Screens

### Marketing Website (public)

Navbar: Logo, Features, Pricing, Resources (Guides, FAQ), About, Log in, Get started

1. Home (long scrolling page with scroll animations)
   - Hero
   - Stats strip
   - Problem
   - Product preview
   - Features
   - Coverage calculator
   - Use cases
   - FAQ
   - Final call to action
   - Footer
2. Features
3. Pricing (Free and Premium, Premium marked "Coming soon")
4. Guides
5. Guide Article
6. FAQ
7. About
8. Contact
9. Privacy Policy and Terms of Service (one shared layout)

### App (after login)

10. Sign up
11. Log in
12. Dashboard
13. Home Detail
14. Room Detail
15. Add / Edit Item (one shared layout)
16. Item Detail
17. Insurance Settings
18. Claim Report

## Wireframes

Wireframes are in `docs/wireframes/`.

## API Endpoints

### Auth

| Method | Endpoint                    | Purpose                                       |
| ------ | --------------------------- | --------------------------------------------- |
| POST   | `/api/auth/signup`          | Create an account with email and password     |
| POST   | `/api/auth/login`           | Log in with email and password                |
| GET    | `/api/auth/google`          | Start Google sign-in                          |
| GET    | `/api/auth/google/callback` | Google sends the user back here after sign-in |
| POST   | `/api/auth/logout`          | Log out                                       |
| GET    | `/api/auth/me`              | Get the logged-in user                        |

### Homes

| Method | Endpoint                     | Purpose                                             |
| ------ | ---------------------------- | --------------------------------------------------- |
| POST   | `/api/homes`                 | Create a home                                       |
| GET    | `/api/homes`                 | Get all homes of the user                           |
| GET    | `/api/homes/:homeId`         | Get one home                                        |
| PATCH  | `/api/homes/:homeId`         | Update home name or insurance limit                 |
| DELETE | `/api/homes/:homeId`         | Delete a home                                       |
| GET    | `/api/homes/:homeId/summary` | Totals per room, coverage % and underinsured amount |
| GET    | `/api/homes/:homeId/report`  | Data for the claim-ready report                     |

### Rooms

| Method | Endpoint                   | Purpose                 |
| ------ | -------------------------- | ----------------------- |
| POST   | `/api/homes/:homeId/rooms` | Add a room to a home    |
| GET    | `/api/homes/:homeId/rooms` | Get all rooms of a home |
| PATCH  | `/api/rooms/:roomId`       | Rename a room           |
| DELETE | `/api/rooms/:roomId`       | Delete a room           |

### Items

| Method | Endpoint                   | Purpose                            |
| ------ | -------------------------- | ---------------------------------- |
| POST   | `/api/rooms/:roomId/items` | Add an item with photo and receipt |
| GET    | `/api/rooms/:roomId/items` | Get all items in a room            |
| GET    | `/api/items/:itemId`       | Get one item                       |
| PATCH  | `/api/items/:itemId`       | Update an item                     |
| DELETE | `/api/items/:itemId`       | Delete an item                     |

## Tech Stack

- Frontend: React
- Animations: Motion
- Backend: Node.js, Express
- Database: MongoDB
- Auth: Email and password, Google sign-in (OAuth)

## Research Sources

- [APCIA Underinsurance Survey](https://www.propertyinsurancecoveragelaw.com/wp-content/uploads/2022/05/APCIA-Underinsurance-Infographic_FINAL-1.pdf)
- [Insurance Journal: Home Inventory Poll](https://www.insurancejournal.com/magazines/mag-features/2014/09/08/339278.htm)
- [Insurance Business: Widespread Underinsurance](https://www.insurancebusinessmag.com/us/news/property/survey-shows-widespread-underinsurance-among-us-homeowners-559931.aspx)

---
