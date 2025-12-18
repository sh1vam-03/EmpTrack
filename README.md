# Employee Management System (EMS)
> **Submission for Task 2 – React Developer Internship Assignment**

This project is a React-based Employee Management System designed to demonstrate core HR and administrative functionalities. It fulfills the requirements for a comprehensive system managing Employees, Attendance, Payroll, and Tasks.

## 🎯 Objective
Build a Basic Employee Management System (EMS) using React/Next.js that demonstrates role-based access for **Admin**, **HR**, and **Employees**, covering the entire lifecycle of employee management from onboarding to payroll processing.

## ✅ Implemented Features

### 1. Employee Management
*   **CRUD Operations**: Admin/HR can Add, Edit, and Delete employees.
*   **Comprehensive Fields**: Limits management to Name, ID, Department, Role, Salary, and NFC ID.
*   **Role-Based Security**: Admin/HR cannot modify their own or equal-level privileges to prevent system lockouts; they strictly manage 'Employee' roles.

### 2. Attendance System
*   **NFC Simulation**: A dedicated "Check In / Check Out" widget simulates mobile NFC attendance.
*   **Real-time Tracking**: Captures precise timestamps for entry and exit.
*   **History & Filtering**: Employees view their own logs; Management can filter records by date and employee ID.

### 3. Payroll Management
*   **Salary Logic**: Automated calculation of Net Salary based on "Present Days" data directly from the Attendance logs.
*   **Context-Driven Accuracy**: Uses a centralized `AttendanceContext` to ensure payroll generation uses the exact same data source as the attendance reports.
*   **Pay Slip Generation**: Generates and downloads professional PDF pay slips using `jspdf`.

### 4. Task Allotment / Ticketing
*   **Workflow**: Admin/HR assigns tasks -> Employee marks status (Open → In Progress → Completed).
*   **Dashboards**: Separate views for "My Tasks" (Employee) and "Team Tasks" (Admin/HR).

## �️ Tech Stack using Next.js 15

*   **Framework**: Next.js 15 (React 19)
*   **State Management**: React Context API (`AuthContext`, `EmployeeContext`, `AttendanceContext`, `TaskContext`)
*   **Styling**: Tailwind CSS 4
*   **Persistence**: `localStorage` (Mock Backend Simulation)
*   **PDF Engine**: `jspdf`

## 🏗️ Architecture & Component Structure

The application follows a **Page-Based Routing** architecture supported by **Context Providers** for global state management.

### Directory Structure
```
src/
├── context/               # Global State logic (The "Brain")
│   ├── AuthContext.js     # User session & role handling
│   ├── EmployeeContext.js # CRUD for employee data
│   ├── AttendanceContext.js # Centralized logic for check-ins & stats
│   └── TaskContext.js     # Task assignment & status updates
│
├── pages/                 # Routes (The "Views")
│   ├── index.js           # Login Page
│   ├── employees.js       # Main Dashboard (Employee list & Profile)
│   ├── attendance.js      # Attendance History View
│   ├── payroll.js         # Salary Processing & PDF Download
│   └── tasks.js           # Task Board
│
├── components/            # Reusable UI Blocks (The "Bricks")
│   ├── common/            # Navbar, Buttons, Layouts
│   ├── employees/         # Forms and List tables
│   ├── attendance/        # CheckInOut Widget, AttendanceTable
│   └── tasks/             # TaskForm, TaskList
│
└── utils/                 # Helpers
    ├── salaryCalculator.js # Pure logic for salary math
    └── pdfGenerator.js     # PDF creation logic
```

## 🚀 Getting Started

### Installation
1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd employee-management-system
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000)

### 🔑 Demo Credentials (Permissions)

| Role | Employee ID | Capabilities |
|------|-------------|--------------|
| **Admin** | `EMP001` | Full Management (Employees, Payroll, Tasks) |
| **HR** | `EMP002` | HR Management (Same as Admin) |
| **Employee** | `EMP003` | Self Service (Check In/Out, View Slips) |

*Note: No password required for this demo.*

## 🔮 Future Improvements

1.  **Backend Integration**: Replace `localStorage` with a real database (PostgreSQL/MongoDB) and Node.js API.
2.  **Advanced Authentication**: Implement JWT/OAuth for secure, persistent sessions.
3.  **Leave Management**: Add module for Sick/Casual Leave applications and approval workflows.
4.  **Analytics Dashboard**: Visual charts for attendance trends and task completion rates.

---
**Deliverable for**: React Developer Internship Task 2
**Developed by**: Balaji Bokare
