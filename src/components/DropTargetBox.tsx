// src/components/DropTargetBox.tsx
"use client";

import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Animal } from "../types/AnimalTypes";
import DraggableItem from "./DraggableItem";

const ItemTypes = {
  ANIMAL: "animal",
};

const DropTargetBox: React.FC = () => {
  const [droppedItems, setDroppedItems] = useState<Animal[]>([]);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ANIMAL,
    drop: (item: Animal, monitor) => handleDrop(item, monitor),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDrop = (item: Animal, monitor: any) => {
    console.log("Item dropped:", item);
    setDroppedItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (itemId: string) => {
    console.log("Removing item: "+itemId);
    setDroppedItems((prevItems) =>
      prevItems.filter((animal) => animal.name !== itemId)
    );
  };

  return (
    <div
      ref={drop}
      style={{
        height: "12rem",
        width: "12rem",
        border: "1px solid black",
        position: "relative",
        backgroundColor: isOver ? "lightblue" : "white",
      }}
    >
      {isOver ? "Release to drop" : "Drag an animal here"}

      <div style={{ marginTop: "1rem" }}>
        {droppedItems.map((item, index) => (
          <DraggableItem
            item={item}
            key={item.name}
            id={item.name}
            isDraggable={false} // Make items non-draggable when dropped
            onRemove={() => handleRemoveItem(item.name)} // Add a callback to remove item
          />
        ))}
      </div>
    </div>
  );
};

export default DropTargetBox;
