import React from 'react';
import { ListTodo } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-blue-600 rounded-full">
          <ListTodo className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Lista de Afazeres</h1>
      </div>
      <p className="text-gray-600 text-lg">
        Organize suas tarefas de forma simples e eficiente
      </p>
    </header>
  );
};