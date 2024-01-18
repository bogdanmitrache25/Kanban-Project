import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <App />
  </div>
);
