import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello world" }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    // Evertime we have to write entire function definitions and we'll get state and action.
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };

            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        // add update reducer
    },
});

// individually export all reducers
export const { addTodo, removeTodo } = todoSlice.actions;

// register reducer to store so that store is aware of reducers accessing the data.
export default todoSlice.reducer;
