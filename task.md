# Payment Collection App - Task List

## Overview
Develop a **React Native (Expo)** application for Android to facilitate loan EMI payments. The app will allow customers to enter their account number, view loan details, make payments, and receive confirmation upon successful transactions.

## Features
### 1. **Home Screen** (Account Input)
- Input field for **Account Number**.
- Button to fetch and display loan details.

### 2. **Loan Details Screen**
- Display customer loan information:
  - Account Number
  - Issue Date
  - Interest Rate
  - Tenure
  - EMI Due
- Button to proceed with payment.

### 3. **Payment Screen**
- Input field for **EMI Amount**.
- Submit button to process the payment.
- Display a loading state during payment processing.

### 4. **Confirmation Screen**
- Show a success message upon payment completion.
- Display transaction details.
- Option to return to the Home Screen.

## Backend API Integration
- **Fetch Loan Details** using `GET /loan-details?account_number=...`
- **Submit Payment** using `POST /pay-emi` with `{ account_number, amount }`
- Handle API response and errors properly.

## UI/UX Considerations
- Ensure a **clean, responsive design**.
- Use **React Native components** efficiently.
- Handle **network errors gracefully**.

## Development Tasks
### 1. **Setup Project**
- Initialize a new **React Native (Expo)** project.
- Install required dependencies (`axios`, `react-navigation`, etc.).

### 2. **Build Screens**
- Implement **Home Screen** (Account Input).
- Implement **Loan Details Screen** (Display Loan Data).
- Implement **Payment Screen** (Enter EMI Amount & Submit Payment).
- Implement **Confirmation Screen** (Display Success Message).

### 3. **API Integration**
- Connect frontend with backend APIs.
- Handle **loading states and errors**.

### 4. **Testing & Debugging**
- Ensure smooth navigation and data flow.
- Validate API requests and responses.

### 5. **Final Deployment & Optimization**
- Test on a **real Android device**.
- Optimize for **performance and responsiveness**.

## Folder Structure

payment-collection-app/
│── node_modules/          # Dependencies
│── assets/                # Static assets (images, icons, etc.)
│── src/                   # Main source code
│   ├── components/        # Reusable UI components
│   ├── screens/           # App screens (Home, Payment, Confirmation)
│   ├── navigation/        # Navigation setup
│   ├── services/          # API service for fetching loan details & payments
│   ├── styles/            # Styling utilities (if using Tailwind or custom styles)
│   ├── utils/             # Helper functions (formatting, validation, etc.)
│── App.tsx                # Entry point of the app
│── package.json           # Dependencies and scripts
│── tsconfig.json          # TypeScript configuration
│── app.json               # Expo configuration
│── .gitignore             # Git ignore file
└── README.md              # Project documentation


 The endpoints are available are 
GET
https://payment.radr.in/customers - 

gives all customer details in the following format - [
  {
    "account_number": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "address": "string",
    "issue_date": "2025-03-12T08:26:56.788Z",
    "interest_rate": 0,
    "tenure": 0,
    "emi_due": 0
  }
]

POST 
https://payment.radr.in/payments
post body to create payment - 
{
  "account_number": "string",
  "payment_amount": 0
}

sample response 

{
  "id": "string",
  "account_number": "string",
  "payment_date": "2025-03-12T08:31:14.309Z",
  "payment_amount": 0,
  "status": "string"
}

GET - Payment history 

https://payment.radr.in/payments/{account_number}
sample response
[
  {
    "id": "string",
    "account_number": "string",
    "payment_date": "2025-03-12T08:31:59.725Z",
    "payment_amount": 0,
    "status": "string"
  }
]






