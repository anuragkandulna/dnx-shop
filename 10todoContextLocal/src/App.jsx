import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

export default function App() {
    const [todos, setTodos] = useState([]);

    // Here, single todo comes from user
    const addTodo = (todo) => {
        // By calling setTodos(todo) will erase all previous values, so to resolve that
        // use differenct concept in JS to unpack previous values and then create a new array.
        setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
    };

    const updateTodo = (id, todo) => {
        // call todos list and iterate over it using map or foreach to update it.
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
        );
    };

    const deleteTodo = (id) => {
        // iterate over all todos and filter out the id given by user and create new todo and return updated list
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        // iterate over all todos and access correct one and flip completed from todo object
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo === id
                    ? { ...prevTodo, completed: !prevTodo.completed }
                    : prevTodo
            )
        );
    };

    // Till here basic context functionality is finished.
    // Next: Browser LocalStorage functionality.
    // This useEffect should only load first time because it also fetches from local storage.
    useEffect(() => {
        // this code is applicable for client side rendering. It does'nt work in server side redering.
        const todos = JSON.parse(localStorage.getItem("todos"));

        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, []);

    // 2nd useEffect to load all all the other times.
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider
            value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
        >
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Manage Your Todos
                    </h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}
