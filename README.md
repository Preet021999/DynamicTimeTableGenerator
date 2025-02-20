# Dynamic Time Table Generator

## 📌 Project Overview

The **Dynamic Time Table Generator** is a web application built using **ASP.NET MVC** that allows users to create a weekly timetable dynamically based on their input parameters. Users can specify the number of working days, subjects per day, and total subjects, and the system will generate a structured timetable accordingly.

## 🛠️ Technologies Used

- **ASP.NET MVC**
- **C#**
- **Entity Framework**
- **Razor Views**
- **jQuery & JavaScript**
- **Bootstrap**
- **Toastify.js** (for notifications)

## 🚀 Features

✅ **User Input Form**

- Accepts **number of working days** (1-7)
- Accepts **number of subjects per day** (1-8)
- Accepts **total number of subjects**
- Auto-calculates **total weekly hours**

✅ **Subject Hours Allocation**

- User assigns **hours per subject**
- Ensures total hours match weekly hours before submission
- Validates subject names & hours dynamically

✅ **Dynamic Time Table Generation**

- Places subjects based on assigned hours
- Ensures even distribution across the week
- Generates a **structured timetable**

✅ **Validation & Error Handling**

- Prevents **negative/invalid inputs**
- **Error messages displayed** below fields
- **Toast notifications** for success/error messages

## 📂 Project Structure

```
📂 DynamicTimeTableGenerator
│── 📁 Controllers
│   ├── HomeController.cs
│   ├── TimeTableController.cs
│
│── 📁 Models
│   ├── ModelTimeTable.cs
│   ├── ModelSubjects.cs
│
│── 📁 Views
│   ├── Home
│   │   ├── Index.cshtml
│   ├── TimeTable
│   │   ├── EnterDetails.cshtml
│   │   ├── SubjectHoursForm.cshtml
│   │   ├── TimeTableResult.cshtml
│
│── 📁 Scripts
│   ├── subjecthours.js
│   ├── validation.js
│
│── 📁 wwwroot
│   ├── css
│   ├── js
│
│── 📄 README.md
│── 📄 Startup.cs
│── 📄 Program.cs
```

## 🎯 How to Run the Project

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Preet021999/DynamicTimeTableGenerator.git
cd DynamicTimeTableGenerator
```

### 2️⃣ Open in Visual Studio

- Open `DynamicTimeTableGenerator.sln`
- Restore NuGet packages

### 3️⃣ Run the Application

- Press `F5` or `Ctrl + F5`
- The app will launch in your browser

## 📸 Screenshots

📌 **Coming Soon!**

## 📝 Future Enhancements

🔹 User authentication (login/logout)\
🔹 Export timetable to **PDF or Excel**\
🔹 Drag-and-drop timetable customization

## 🤝 Contributing

We welcome contributions! Feel free to submit **issues** or **pull requests** to improve the project.

## 📄 License

This project is **open-source** under the **MIT License**.

---

💡 *Developed by *[*Preet021999*](https://github.com/Preet021999)

