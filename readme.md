# Bank Account JavaScript Application

This is a simple JavaScript application that simulates a bank account. Users can deposit and withdraw money from their account, and the application will display the balance in Indonesian Rupiah format (Rp) on an HTML page.

## Table of Contents

- [Bank Account JavaScript Application](#bank-account-javascript-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Usage](#usage)
    - [Deposit Money](#deposit-money)
    - [Withdraw Money](#withdraw-money)
  - [Code Explanation](#code-explanation)

## Features

- Deposit money into the bank account.
- Withdraw money from the bank account.
- Display the account balance in Indonesian Rupiah format on an HTML page.
- Handle asynchronous operations using Promises.
- Show loading indicators during transactions.

## Usage

Once the application is running, you can use it to perform the following actions:

### Deposit Money

1. Click the "Tambah Saldo" button.
2. Enter the amount you want to deposit when prompted.
3. If the amount is valid and greater than 0, it will be deposited into your account.
4. Your account balance will be updated, and a success message will be displayed.
5. If the amount is invalid or less than or equal to 0, an error message will be shown.

### Withdraw Money

1. Click the "Kurangi Saldo" button.
2. Enter the amount you want to withdraw when prompted.
3. If the amount is valid and less than or equal to your account balance, it will be withdrawn from your account.
4. Your account balance will be updated, and a success message will be displayed.
5. If the amount is invalid, less than or equal to 0, or exceeds your account balance, an error message will be shown.

## Code Explanation

The application is built using JavaScript and includes HTML and CSS for the user interface. Here's an overview of the key components and their functionality:

- `BankAccount` class: Represents a bank account with methods for depositing and withdrawing money. These methods return Promises to handle asynchronous operations.

- `updateSaldo()` function: Updates the HTML element displaying the account balance in Indonesian Rupiah format.

- `rupiah()` function: Converts a number into the Indonesian Rupiah format.

- `showLoading()` and `hideLoading()` functions: Display and hide loading indicators during transactions.

- `tambahSaldo()` and `kurangiSaldo()` functions: Handle deposit and withdrawal actions by interacting with the `BankAccount` object. They use async/await to handle Promises and display appropriate messages to the user.
