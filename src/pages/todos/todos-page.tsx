import { useState } from "react";
import { GetServerSideProps } from "next";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addTask,
  deleteTask,
  toggleTaskCompletion,
} from "@/redux/slices/todo-slice";
import Link from "next/link";
import LogoutButton from "@/components/shared/logout-button";
import { Button } from "@/components/ui/button";

type UserItem = {
  role: string | null;
};

const TodosPage = ({ role }: UserItem) => {
  const [todoTitle, setTodoTitle] = useState("");
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  console.log("ROLE", role);

  const handleAddTask = () => {
    if (role === "admin") {
      // Note: trim become var
      const trimVar = todoTitle.trim();
      if (trimVar) {
        dispatch(addTask(trimVar));
        setTodoTitle("");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="my-6">
        <LogoutButton />
      </div>

      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-center font-bold text-3xl mb-6 text-accent">
          TODO
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            placeholder="Add a task"
            className="flex-1 p-1 lg:p-2 border border-gray-300 text-primary placeholder:text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {role === "admin" && (
            <Button variant="outline" onClick={handleAddTask}>
              Add Task
            </Button>
          )}
          {role === "user" && (
            <Button disabled onClick={handleAddTask}>
              Add Task
            </Button>
          )}
        </div>

        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer "
            >
              <span
                className={`
                  ${todo.completed && "line-through text-gray-500"} 
                  ${!todo.completed && "text-gray-800"}
                  `}
              >
                {todo.title}
              </span>
              {role === "admin" && (
                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      // stopPropagate is to stop all parent event
                      e.stopPropagation();
                      dispatch(toggleTaskCompletion(todo.id));
                    }}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Done
                  </button>
                  <button
                    onClick={(e) => {
                      // stopPropagate is to stop all parent event
                      e.stopPropagation();
                      dispatch(deleteTask(todo.id));
                    }}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Retrieving the roles from cookies (IDK if its from header)
  const role = ctx.req.cookies.role || null;
  if (!role) {
    return {
      redirect: {
        destination: "/login/login-page",
        permanent: false,
      },
    };
  }

  return {
    props: { role }, // Pass role to component
  };
};

export default TodosPage;
