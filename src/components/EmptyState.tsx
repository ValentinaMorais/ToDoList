import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FilterType } from '../types/todo';

interface EmptyStateProps {
  filter: FilterType;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ filter }) => {
  const getEmptyMessage = () => {
    switch (filter) {
      case 'pending':
        return {
          title: 'Nenhuma tarefa pendente!',
          subtitle: 'Parabéns! Você completou todas as suas tarefas.',
        };
      case 'completed':
        return {
          title: 'Nenhuma tarefa completa',
          subtitle: 'Complete algumas tarefas para vê-las aqui.',
        };
      default:
        return {
          title: 'Nenhuma tarefa ainda',
          subtitle: 'Comece adicionando sua primeira tarefa acima.',
        };
    }
  };

  const { title, subtitle } = getEmptyMessage();

  return (
    <div className="text-center py-12">
      <div className="mb-4">
        <CheckCircle2 className="w-16 h-16 text-gray-300 mx-auto" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};
