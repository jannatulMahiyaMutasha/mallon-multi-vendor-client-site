#  Mallon — Full-Stack Multi Vendor Medicine Selling E-commerce Platform

A comprehensive medicine e-commerce platform with role-based dashboards (Admin, Seller, User), Stripe payment integration, dynamic product advertising, multilingual support, and rich reporting features.

---

---

##  Live Site

 **Live URL:** [https://mallon-multi-vendor.web.app/]

---

##  Demo Admin Credentials

To explore the **Admin Dashboard**, use the following test credentials:

```plaintext
 Email: mahi12@gmail.com 
 Password: Mahi@12#

##  Features Overview

###  Navbar
- Logo + Website Name
- Navigation: Home, Shop
- Cart Icon with item count
- Language Dropdown
- **Join Us** button (if not logged in)
- Logged-in users see profile picture with dropdown:
  - Update Profile
  - Dashboard
  - Logout

---

##  Home Page

###  Slider Section
- Showcases banner advertisements added by the **Admin**.
- Admin can dynamically add/remove products in the slider.

###  Category Card Section
- Displays minimum 6 category cards with:
  - Category Name
  - Basic Image
  - Medicine Count
- Clicking a category navigates to that category’s medicine page (tabular format).

###  Discount Products
- Displays all discounted medicines in a **draggable card slider**.
- Built using `Swiper.js`.

###  Custom Sections
- Two additional sections customized for the platform.
- Fully responsive and designed with TailwindCSS.

###  Footer
- Contains website links, contact info, policies, and branding.

---

##  User Features

###  Authentication
- **Sign Up**: Fields for username, email, password, photo upload, role selection (User/Seller).
- **Login**: With email + password.
- **Social Login**: Google or GitHub. Defaults to "user" role.

###  Shop Page
- Displays all medicines in **table format**.
- Each row includes:
  - Eye icon to view medicine details in modal
  - Select button to add to cart

###  Category Details Page
- Displays medicines of a selected category (tablet, syrup, capsule, etc.).
- Same UI/UX as shop page.

###  Cart Page
- Shows selected medicines with:
  - Name, Company, Price per Unit, Quantity
- Controls:
  - Increase/Decrease Quantity
  - Remove Item
  - Clear All
  - Checkout button

###  Checkout Page
- Users pay via **Stripe**.
- On successful payment → redirected to **Invoice Page**.

###  Invoice Page
- Includes:
  - Website logo
  - User info
  - Purchase summary
  - **Print as PDF** feature

###  User Dashboard: Payment History
- Displays user's transaction history with:
  - Transaction ID
  - Status: Paid / Pending

---

##  Admin Dashboard

###  Overview
- Displays:
  - Total Sales Revenue
  - Paid Total
  - Pending Total

###  Manage Users
- Promote/demote users to/from: Admin / Seller / Normal User

###  Manage Category
- View all categories
- Add, Update, Delete functionality via modal
- Form Fields: Category Name, Category Image (URL/File)

###  Payment Management
- Shows all payment records:
  - Status: Pending / Paid
  - Admin can **accept payments** to mark them as Paid

###  Sales Report
- View complete sales data:
  - Filters by date range
  - Downloadable in:
    - PDF
    - DOCX
    - CSV
    - XLSX

###  Manage Banner Advertisements
- View all advertise requests (image, name, description, seller email)
- Toggle button to add/remove from homepage slider

---

##  Seller Dashboard

###  Overview
- Shows:
  - Paid Sales Total
  - Pending Sales Total

###  Manage Medicines
- Add/Edit/Delete medicine records
- Modal Form Fields:
  - Name, Generic Name, Description, Image, Category, Company, Mass Unit, Price, Discount %

###  Payment History
- View sales of seller’s medicines
- Shows:
  - Buyer Info
  - Status: Pending / Paid

###  Ask For Advertisement
- Submit medicines for banner ad promotion
- Shows:
  - Submitted medicines with status: Pending / Using in Banner
- Modal form for image + description submission

---

##  Tech Stack

###  Frontend
- React.js
- Tailwind CSS
- Swiper.js
- Axios
- React Router DOM
- React Hook Form
- Stripe JS
- React Icons
- React Data Table

###  Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for Auth
- bcrypt.js for password hashing
- Stripe for Payments



