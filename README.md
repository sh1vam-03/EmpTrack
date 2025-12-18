# Employee Management System (EMS)

## 📌 Overview
This project is a **Basic Employee Management System (EMS)** developed as part of the **Internship Selection Assignment** for Obzen Technolabs.

The application demonstrates core HR and administrative workflows such as:
- Employee management
- Attendance tracking using RFID/NFC (simulated)
- Payroll calculation
- Task allotment and tracking

The focus of this project is on **clean architecture, business logic understanding, and practical feasibility**, rather than full-scale enterprise features.

---

## 🎯 Objective
To build a simple, functional EMS using **React (Next.js)** that showcases:
- Role-based access (Admin / HR / Employee)
- Attendance-based payroll logic
- Modular and readable frontend structure
- Clear documentation and assumptions

---

## 🧩 Core Features

### 👤 User Roles (Simulated)
- **Admin**
- **HR**
- **Employee**

Role-based access is implemented to control which actions each user can perform.

---

### 🧑‍💼 Employee Management
(Admin / HR only)
- Add new employee
- Edit employee details
- Delete employee
- View employee list

**Employee Fields:**
- Name  
- Employee ID  
- Department  
- Role  
- Monthly Salary  
- RFID / NFC ID  

---

### 🕒 Attendance Management
- RFID / NFC–based attendance (simulated)
- Employee check-in and check-out
- Timestamp-based attendance records
- Attendance history view

📌 *Note:* RFID/NFC functionality is simulated via manual input to demonstrate real-world workflow without hardware dependency.

---

### 💰 Payroll Management
- Monthly payroll calculation
- Attendance-based salary computation
- Payroll summary view
- Auto-generated **Monthly Payroll Report (PDF)**

**Salary Logic:**
Per Day Salary = Monthly Salary / 30
Net Salary = Per Day Salary × Days Present

---

### 📋 Task Management
(Admin / HR)
- Assign tasks to employees
- Set task status (Open / In Progress / Completed)

(Employee)
- View assigned tasks
- Update task status

---

## 🛠 Tech Stack

- **Next.js** (React – Pages Router)
- **JavaScript**
- **Context API** (State Management)
- **LocalStorage** (Data persistence)
- **jspdf** (Payroll PDF generation)
- **Tailwind CSS** (Styling)

---

## 🏗 Architecture & Design

- Page-level components are used for clarity and simplicity.
- Global state is managed using **Context API**.
- Data persistence is handled via **LocalStorage**.
- No backend or database is used, as this is a frontend-focused assignment.

The application is structured to prioritize:
- Readability
- Logical data flow
- Business rule clarity

---

## 🔐 Authentication & Authorization (Important Note)

- **Authentication is simulated** using Employee ID and role selection.
- No passwords or real user verification are implemented.
- Role-based UI restrictions are enforced to demonstrate authorization logic.

📌 This approach is intentional and aligned with the scope of the assignment.

---

## 📡 RFID / NFC Simulation

- Each employee is assigned a unique RFID/NFC ID.
- Attendance is recorded by manually entering the RFID/NFC ID.
- This simulates real-world RFID/NFC attendance systems used in organizations.

---

## 📄 Payroll PDF Report

The Monthly Payroll Report includes:
- Employee details
- Payroll month & year
- Attendance summary
- Salary breakdown
- Net salary payable

The report is system-generated and downloadable as a PDF.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sh1vam-03/employee-management-system.git
cd employee-management-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
npm run dev
```
Open: http://localhost:3000

---

## 📌 Assumptions & Limitations
- Authentication is simulated for demonstration purposes.
- RFID/NFC hardware integration is not implemented.
- Payroll logic is simplified and does not include taxes, deductions, or bonuses.
- This project is designed as an MVP-level prototype, not a production-ready HRMS.

## 🔮 Future Improvements
- Backend integration (Node.js / Firebase)
- Secure authentication & authorization
- Real RFID/NFC hardware support
- Advanced payroll rules (tax, PF, deductions)
- Improved UI/UX and validations

---

## 👨‍💻 Author
**Balaji Bokare**
Frontend / Full Stack Developer

## 📬 Submission Note
This project was developed specifically for internship evaluation and focuses on clarity, correctness, and practical implementation within a limited timeframe.
