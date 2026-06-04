import { useEffect, useRef, useState } from "react";
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

const InfiniteScroll = () => {
  const [next, setNext] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setNext((prev) => prev + 2);
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-slate-900">Infinite Scroll</h1>

          <p className="mt-3 text-slate-500">
            React + Intersection Observer API
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.slice(0, next).map((user) => (
            <div
              key={user.id}
              className="
              group
              bg-white/80
              backdrop-blur-sm
              border border-slate-200
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="
                  h-14
                  w-14
                  rounded-full
                  bg-gradient-to-r
                  from-indigo-500
                  to-purple-500
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  text-lg
                "
                >
                  {user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <h2 className="font-bold text-lg text-slate-900">
                    {user.name}
                  </h2>

                  <p className="text-sm text-slate-500">{user.city}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-slate-600 break-all">
                  📧 {user.email}
                </p>

                <span
                  className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  bg-indigo-50
                  text-indigo-700
                  text-xs
                  font-semibold
                "
                >
                  {user.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {next < users.length && (
          <div
            ref={containerRef}
            className="flex flex-col items-center justify-center py-12"
          >
            <div
              className="
              w-12
              h-12
              rounded-full
              border-4
              border-slate-300
              border-t-indigo-600
              animate-spin
            "
            />

            <p className="mt-4 text-slate-500 text-sm">Loading more users...</p>
          </div>
        )}

        {next >= users.length && (
          <div className="text-center py-12">
            <p className="text-slate-500">
              🎉 You've reached the end of the list
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
