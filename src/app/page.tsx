// src/app/page.tsx
import React from 'react';
import DraggableItem from '../components/DraggableItem';
import DropTargetBox from '../components/DropTargetBox';
import { Animal } from '../types/AnimalTypes';

const Home: React.FC = () => {
  const items: Animal[] = [
    { id: '1', type: 'Cat', name: 'Whiskers' },
    { id: '2', type: 'Dog', name: 'Rover' },
    { id: '3', type: 'Mouse', name: 'Squeaky' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React DnD with Next.js 13</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div>
          {items.map((item, index) => (
            <DraggableItem id={item.id} key={index} item={item} isDraggable />
          ))}
        </div>
        <DropTargetBox />
      </div>
    </div>
  );
};

export default Home;
