import { useState } from "react";

const Todos = () => {
  const [todosList, setTodosList] = useState<{ id: string; title: string }[]>(
    [],
  );

  const [isEdit, setIsEdit] = useState<string>("");

  const [todo, setTodo] = useState<{
    id: string;
    title: string;
  }>({
    id: "",
    title: "",
  });

  const handleTodos = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const handleEdit = (id: string) => {
    setIsEdit(id);

    const editTodo = todosList.find((todo) => todo.id === id);

    if (editTodo) {
      setTodo(editTodo);
    }
  };

  const handleDelete = (id: string) => {
    const filteredTodos = todosList.filter((todo) => todo.id !== id);

    setTodosList(filteredTodos);

    if (isEdit === id) {
      setIsEdit("");
      setTodo({
        id: "",
        title: "",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo.title.trim() === "") return;

    if (isEdit === "") {
      const newTodo = {
        id: crypto.randomUUID(),
        title: todo.title,
      };

      setTodosList((prev) => [...prev, newTodo]);
    } else {
      setTodosList(
        todosList.map((t) =>
          t.id === isEdit ? { ...t, title: todo.title } : t,
        ),
      );

      setIsEdit("");
    }

    setTodo({
      id: "",
      title: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex justify-center items-start">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-5 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo App
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            placeholder="Enter your todo..."
            className="flex-1 border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleTodos}
            value={todo.title}
          />

          <button
            type="submit"
            className={`rounded-lg px-5 py-3 font-medium text-white transition cursor-pointer ${
              isEdit === ""
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isEdit === "" ? "Add Todo" : "Update Todo"}
          </button>
        </form>

        <div className="mt-8">
          {todosList.length > 0 ? (
            <ul className="space-y-4">
              {todosList.map((todo) => (
                <li
                  key={todo.id}
                  className="flex flex-col sm:flex-row r sm:justify-between gap-4 border border-gray-200 rounded-xl p-4 bg-gray-50"
                >
                  <span className="text-gray-800 break-words">
                    {todo.title}
                  </span>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(todo.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-10 text-gray-500">
              No todos found. Please add some todos.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
