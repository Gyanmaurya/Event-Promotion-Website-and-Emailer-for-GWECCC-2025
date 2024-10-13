
# Event Promotion Website and Emailer for GWECCC 2025

## Project Overview
This project involves creating a responsive website and a mobile-friendly emailer to promote the **GWECCC 2025** event. The website provides event details and a registration form, while the emailer is designed to be compatible with major email clients and devices.

## Website (React.js)

### How to Run the Website

To start the development server for the website, follow these steps:

1. Navigate to the project directory:
   ```bash
   cd gweccc2025
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

### Tools and Libraries Used

- **React.js**: The website is built using React.js to create a modular and scalable application.
- **Components**: The website structure is component-based, with the following key components:
  - `HeroSection`: Contains the event title, date, and brief description.
  - `AboutSection`: Provides information about the event's theme and importance.
  - `EventDetails`: Displays the event schedule, topics, and speakers.
  - `RegistrationForm`: A form that allows users to register for the event.

Each component is located inside the `components/` directory, and all components are imported and used within `App.jsx`.

### Website Features

- **Fully Responsive**: The website is designed to be responsive across all devices, from mobile to desktop.
- **Clean Design**: Follows a professional and modern design standard.
- **Registration Form**: Includes fields like name, email, contact, organization, and delegate type (Regular, VIP, Student).

## Emailer (HTML)

### Email Template Overview

The emailer for **GWECCC 2025** is a mobile-friendly HTML email that promotes the event. The design ensures compatibility across major email clients and is responsive for both desktop and mobile devices.

### How to Use

- **File Location**: The emailer code is written in the `index.html` file.
- **Design Compatibility**: The email template has been tested across multiple email clients to ensure it renders correctly. This includes:
  - **Outlook** (Windows, Mac versions, Mobile) All
  - **Gmail** (Desktop and Mobile) All
  - **Apple Mail** All
  - **Yahoo Mail** All
  - **Mobile Devices**: iOS Mail, Android Gmail, and others.
  - **Desktop Browsers**: Chrome, Firefox, Safari, and Edge.
  - **Chrome**:All
  - **Firefox**:All 
  - **Safari** 
  - **Edge**
### Testing Process

To ensure the email's compatibility across devices, I used **Litmus** to test the email template across more than 20 different email clients and devices, including:

- **Outlook**: 2013, 2016, Office 365 (Windows/Mac)
- **Gmail**: Desktop and Mobile
- **Apple Mail**: Desktop and iOS
- **Yahoo Mail**
- **Android Gmail**

The email renders properly on all these clients, ensuring text, images, and buttons are readable and clickable across different screen sizes.

## Summary

This project delivers a **responsive website** and **mobile-friendly emailer** for the GWECCC 2025 event. The website highlights event details and offers a registration form, while the emailer ensures proper compatibility across popular email platforms. Both the website and emailer were tested thoroughly for functionality and responsiveness across a wide range of devices.
