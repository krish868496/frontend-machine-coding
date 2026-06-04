import React, { useState } from "react";
const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    role: "Frontend Developer",
    city: "Delhi",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya@example.com",
    role: "Backend Developer",
    city: "Mumbai",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    email: "rohan@example.com",
    role: "UI Designer",
    city: "Bangalore",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha@example.com",
    role: "QA Engineer",
    city: "Pune",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram@example.com",
    role: "DevOps Engineer",
    city: "Hyderabad",
  },
  {
    id: 6,
    name: "Neha Joshi",
    email: "neha@example.com",
    role: "Product Manager",
    city: "Chandigarh",
  },
  {
    id: 7,
    name: "Aditya Mehta",
    email: "aditya@example.com",
    role: "Full Stack Developer",
    city: "Jaipur",
  },
  {
    id: 8,
    name: "Kritika Rao",
    email: "kritika@example.com",
    role: "HR Manager",
    city: "Kolkata",
  },
  {
    id: 9,
    name: "Rahul Nair",
    email: "rahul@example.com",
    role: "Mobile Developer",
    city: "Chennai",
  },
  {
    id: 10,
    name: "Simran Kaur",
    email: "simran@example.com",
    role: "Data Analyst",
    city: "Lucknow",
  },
  {
    id: 11,
    name: "Arjun Patel",
    email: "arjun@example.com",
    role: "Software Engineer",
    city: "Ahmedabad",
  },
  {
    id: 12,
    name: "Meera Iyer",
    email: "meera@example.com",
    role: "Technical Writer",
    city: "Kochi",
  },
  {
    id: 13,
    name: "Karan Malhotra",
    email: "karan@example.com",
    role: "Cloud Engineer",
    city: "Noida",
  },
  {
    id: 14,
    name: "Pooja Sharma",
    email: "pooja@example.com",
    role: "Business Analyst",
    city: "Indore",
  },
  {
    id: 15,
    name: "Yash Thakur",
    email: "yash@example.com",
    role: "React Developer",
    city: "Surat",
  },
  {
    id: 16,
    name: "Tanvi Desai",
    email: "tanvi@example.com",
    role: "Angular Developer",
    city: "Nagpur",
  },
  {
    id: 17,
    name: "Dev Khanna",
    email: "dev@example.com",
    role: "Node.js Developer",
    city: "Bhopal",
  },
  {
    id: 18,
    name: "Ananya Sen",
    email: "ananya@example.com",
    role: "Scrum Master",
    city: "Patna",
  },
  {
    id: 19,
    name: "Harsh Jain",
    email: "harsh@example.com",
    role: "Python Developer",
    city: "Kanpur",
  },
  {
    id: 20,
    name: "Ishita Roy",
    email: "ishita@example.com",
    role: "AI Engineer",
    city: "Gurgaon",
  },
];
const Pagination = () => {
  const usersPerPage = 2;
  const totalPages = Math.ceil(users.length / usersPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      {users
        ?.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
        .map((user) => (
          <div key={user?.id} className="p-3 border border-gray-500">
            <h3>{user?.name}</h3>
            <p>{user?.email}</p>
            <p>{user?.role}</p>
            <p>{user?.city}</p>
          </div>
        ))}
      <div className="flex gap-3 items-center justify-center my-20">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1) ? (
            <button
              key={page}
              className={`px-3 py-1 border border-gray-500 ${
                currentPage === page ? "bg-black text-white" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ) : page === currentPage - 2 || page === currentPage + 2 ? (
            <span key={page}>...</span>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Pagination;
