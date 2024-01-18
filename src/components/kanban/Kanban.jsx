// kanban/Kanban.jsx
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import Card from "../card/Card";
import { useState } from "react";
import "./kanban.scss";

const Kanban = () => {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    // Tu lógica de reordenamiento aquí
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="kanban_section"
                ref={provided.innerRef}
              >
                <div className="kanban_section_title">{section.title}</div>
                <div className="kanban_section_content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          <Card>{task.title}</Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
