const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix login bug",
        taskDescription: "Resolve authentication issue in login module",
        taskCategory: "Development",
        date: "2026-03-20"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update UI",
        taskDescription: "Improve dashboard design",
        taskCategory: "Design",
        date: "2026-03-18"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write API docs",
        taskDescription: "Document all REST endpoints",
        taskCategory: "Documentation",
        date: "2026-03-22"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Improve query performance",
        taskCategory: "Backend",
        date: "2026-03-25"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS issues",
        taskDescription: "Resolve layout bugs",
        taskCategory: "Frontend",
        date: "2026-03-19"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy app",
        taskDescription: "Deployment to production failed",
        taskCategory: "DevOps",
        date: "2026-03-21"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add search feature",
        taskDescription: "Implement search functionality",
        taskCategory: "Feature",
        date: "2026-03-23"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create landing page",
        taskDescription: "Design homepage UI",
        taskCategory: "Design",
        date: "2026-03-24"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug fixing",
        taskDescription: "Fix reported issues",
        taskCategory: "Maintenance",
        date: "2026-03-18"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment integration",
        taskDescription: "Integrate payment gateway",
        taskCategory: "Backend",
        date: "2026-03-20"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup project",
        taskDescription: "Initialize project structure",
        taskCategory: "Setup",
        date: "2026-03-17"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review team code",
        taskCategory: "Review",
        date: "2026-03-19"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API integration",
        taskDescription: "Connect frontend with backend",
        taskCategory: "Integration",
        date: "2026-03-22"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Unit testing",
        taskDescription: "Write test cases",
        taskCategory: "Testing",
        date: "2026-03-21"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO optimization",
        taskDescription: "Improve search ranking",
        taskCategory: "Marketing",
        date: "2026-03-26"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Content writing",
        taskDescription: "Write blog articles",
        taskCategory: "Content",
        date: "2026-03-18"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Analytics setup",
        taskDescription: "Integrate analytics tools",
        taskCategory: "Analytics",
        date: "2026-03-23"
      }
    ]
  }
];

const admin = [
  {
    id: 0,
    email: "admin@example.com",
    password: "123"
  }
];



export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    
}