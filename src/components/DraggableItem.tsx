// src/components/DraggableItem.tsx
'use client';

import React from 'react';
import { useDrag } from 'react-dnd';
import { Animal } from '../types/AnimalTypes';

const ItemTypes = {
  ANIMAL: 'animal',
};

interface DraggableItemProps {
  item: Animal;
  id: string;
  isDraggable: boolean;
  onRemove?: () => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  id,
  item,
  isDraggable,
  onRemove,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ANIMAL,
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        border: '1px dashed gray',
        padding: '0.5rem 1rem',
        marginBottom: '0.5rem',
        backgroundColor: 'white',
      }}
    >
      {item.name} ({item.type})
      {onRemove && (
        <button onClick={onRemove} style={{ marginLeft: '1rem' }}>
          Remove
        </button>
      )}
    </div>
  );
};

export default DraggableItem;
