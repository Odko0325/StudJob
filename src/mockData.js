export const mockUsers = [
  {
    id: 1,
    email: "student@example.com",
    password: "student123",
    role: "student"
  },
  {
    id: 2,
    email: "admin@example.com",
    password: "admin123",
    role: "admin"
  }
];

export const mockJobs = [
  {
    id: 1,
    title: "Программ хангамжийн инженер",
    company: "TechCorp",
    description: "Бидэнтэй PHP, JavaScript чиглэлээр ажиллах мэргэжилтэн хайж байна.",
    category: "professional",
    location: "Улаанбаатар",
    salary: "3,000,000₮",
    postedDate: "3 хоногийн өмнө",
    requirements: ["PHP", "JavaScript", "MySQL"]
  },
  {
    id: 2,
    title: "Кафегийн үйлчлэгч",
    company: "Coffee Time",
    description: "Цагийн ажилчдыг шуурхай ажилд авна. 18-35 насны эрэгтэй, эмэгтэй.",
    category: "part-time",
    location: "Сүхбаатар дүүрэг",
    salary: "8,000₮/цаг",
    postedDate: "1 өдрийн өмнө",
    requirements: ["Харилцааны чадвар"]
  },
  // Add more jobs with different categories...
];