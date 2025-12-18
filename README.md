# Employee Management System

A modern, responsive Employee Management Dashboard built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**. This application provides role-based access control for Administrators, HR Managers, and Employees to manage attendance, payroll, and tasks efficiently.

## 🚀 Features

### 🔐 Authentication & Roles
- **Role-Based Access Control (RBAC)**: Distinct interfaces for Admin, HR, and Employees.
- **Secure Login**: Session management using Context API and LocalStorage.

### 👥 Employee Management (Admin/HR)
- **CRUD Operations**: Add, Edit, and Delete employee records.
- **Profile Management**: View detailed employee profiles including department and base salary.
- **Visibility Control**: Admin/HR users manage *only* standard Employees (cannot modify other Admins/HRs).

### 📅 Attendance System
- **NFC-Style Check In/Out**: Digital "Check In" widget for Employees to mark their daily attendance.
- **Automatic Tracking**: Records timestamp and status.
- **History View**: Employees see their own history; Admin/HR can filter and view all Employee attendance records.
- **Consistency**: Attendance "Present Days" logic is centralized to ensure Payroll accuracy.

### 💰 Payroll Management
- **Automated Calculation**: Calculates Net Salary based on "Present Days" from the attendance system.
- **Robust Logic**: Handles salary inputs safely (numbers/strings).
- **PDF Generation**: Generate and download detailed Salary Slips (via `jspdf`).
- **Role-Gated**: Only Admin/HR can process payroll; Employees can only view/download their slips.

### 📝 Task Management
- **Assignment**: Admin/HR can assign tasks to specific Employees.
- **Tracking**: Status updates (Open -> In Progress -> Completed).
- **Filtered Views**: Employees see only their tasks; Managers see team tasks.

### 📱 Responsive Design
- **Mobile First**: Fully optimized for mobile devices (Check In/Out on the go).
- **Dark Mode**: System-aware or user-toggled dark mode support (via Tailwind).

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (Page Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **PDF Generation**: jsPDF
- **State Management**: React Context API
- **Persistence**: Browser LocalStorage

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd employee-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Demo Credentials

Use the following ID cards to log in and test different roles (Password is not required for this demo):

| Role | Employee ID | Permissions |
|------|-------------|-------------|
| **Admin** | `EMP001` | Full Access (Manage Employees, Payroll, Tasks) |
| **HR** | `EMP002` | HR Management (Same as Admin, minus System Config) |
| **Employee** | `EMP003` | Self Management (Check In/Out, View Tasks/Payroll) |

## 📂 Project Structure

```
src/
├── components/      # Reusable UI components (Buttons, Navbar, Forms)
├── context/         # Global State (Auth, Employee, Attendance, Task)
├── data/            # Mock data for initial state
├── pages/           # Application Routes
│   ├── index.js     # Login Page
│   ├── employees.js # Dashboard & Employee List
│   ├── attendance.js# Attendance History
│   ├── payroll.js   # Salary Processing
│   └── tasks.js     # Task Board
├── styles/          # Global styles (Tailwind)
└── utils/           # Helper functions (Salary Calc, PDF Generator)
```

## 🤝 Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
