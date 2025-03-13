# Payment Collection App

## Overview
The **Payment Collection App** is a React Native (Expo) application designed for Android. It allows users to manage and pay their loan EMIs. Users can enter their account number, fetch loan details, make payments, and view their payment history.

## Features
- **Account Number Input:** Users enter their account number to retrieve loan details.
- **Loan Details Screen:** Displays customer information, loan tenure, interest rate, and EMI due.
- **Payment Processing:** Users enter the EMI amount and proceed with payment.
- **Confirmation Screen:** Displays success message and transaction details after payment.
- **Payment History:** Shows past EMI payments.

## Tech Stack
- **Frontend:** React Native (Expo)
- **Navigation:** React Navigation
- **State Management:** React Hooks
- **Networking:** Axios
- **Styling:** Tailwind CSS & React Native Styles

## Project Structure
```
payment-collection-app/
│── assets/                # Static assets (icons, images)
│── src/                   # Main source code
│   ├── navigation/        # App navigation setup
│   ├── screens/           # UI screens (Account, Payment, Confirmation, Profile)
│   ├── services/          # API calls
│── App.tsx                # Entry point
│── package.json           # Dependencies
│── tsconfig.json          # TypeScript configuration
│── app.json               # Expo configuration
│── README.md              # Project documentation
```

## Installation & Setup
### Prerequisites
- Node.js & npm
- Expo CLI installed (`npm install -g expo-cli`)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/payment-collection-app.git
   cd payment-collection-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the app on an Android emulator or device:
   ```sh
   npm run android
   ```

## API Integration
### Base URL
```
https://payment.radr.in
```
### Endpoints
#### 1. Fetch All Customers
- **GET** `/customers`
- **Response:**
```json
[
  {
    "account_number": "123456",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "address": "123 Street, City",
    "issue_date": "2025-03-12T08:26:56.788Z",
    "interest_rate": 5.5,
    "tenure": 12,
    "emi_due": 1500
  }
]
```

#### 2. Make a Payment
- **POST** `/payments`
- **Request Body:**
```json
{
  "account_number": "123456",
  "payment_amount": 1500
}
```
- **Response:**
```json
{
  "id": "payment123",
  "account_number": "123456",
  "payment_date": "2025-03-12T08:31:14.309Z",
  "payment_amount": 1500,
  "status": "Success"
}
```

#### 3. Get Payment History
- **GET** `/payments/{account_number}`
- **Response:**
```json
[
  {
    "id": "payment123",
    "account_number": "123456",
    "payment_date": "2025-03-12T08:31:59.725Z",
    "payment_amount": 1500,
    "status": "Success"
  }
]
```
