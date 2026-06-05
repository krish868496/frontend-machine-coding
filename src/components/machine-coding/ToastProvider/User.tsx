import { useToast } from "../../../hooks/useToast";

const Users = () => {
  const { addToast } = useToast();

  return (
    <div className="flex gap-4 p-10 h-screen flex justify-center items-center">
      <button
        onClick={() =>
          addToast("User Created Successfully", "success", "top-right")
        }
        className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
      >
        Success Toast
      </button>

      <button
        onClick={() =>
          addToast("Failed To Create User", "error", "top-right")
        }
        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
      >
        Error Toast
      </button>

      <button
        onClick={() =>
          addToast("Password Will Expire Soon", "warning", "top-right")
        }
        className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
      >
        Warning Toast
      </button>
    </div>
  );
};

export default Users;
