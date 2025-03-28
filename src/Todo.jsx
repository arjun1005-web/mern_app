import React from 'react';
import { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        setTodo([...todo, { task: newTask, completed: false }]); 
        setNewTask(""); 
    };

    const deleteTask = (indexToDelete) => {
        setTodo(todo.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div
            style={{
                backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/021/686/124/large_2x/blue-background-high-resolution-wallpaper-free-free-photo.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "Full",
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                    width: "400px",
                }}
            >
                <img
                    src="https://png.pngtree.com/png-clipart/20220719/ourmid/pngtree-arjun-text-png-png-image_6007011.png"
                    alt="Todo App"
                    style={{
                        width: "75px",
                        height: "75px",
                        marginBottom: "20px",
                    }}
                />
                <h2>Sample Page</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your list here"
                        onChange={(e) => setNewTask(e.target.value)}
                        value={newTask}
                        style={{
                            backgroundColor: "lightgray",
                            padding: "10px",
                            borderRadius: "5px",
                            width: "80%",
                            marginBottom: "10px",
                        }}
                    />
                    <button
                        onClick={addTask}
                        disabled={!newTask}
                        style={{
                            backgroundColor: "lightblue",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginLeft: "10px",
                        }}
                    >
                        Add
                    </button>
                </div>
                <ul
                    style={{
                        backgroundColor: "white",
                        listStyleType: "none",
                        padding: "0",
                        borderRadius: "5px",
                        marginTop: "10px",
                    }}
                >
                    {todo.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "10px",
                                padding: "10px",
                                backgroundColor: "whitesmoke",
                                borderRadius: "5px",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <span>{item.task}</span>
                            <button
                                onClick={() => deleteTask(index)}
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    marginLeft: "auto",
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;