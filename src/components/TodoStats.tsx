import React from 'react';
import { CheckCircle, Clock, List } from 'lucide-react';

interface TodoStatsProps {
  stats: {
    total: number;
    pending: number;
    completed: number;
  };
}

export const TodoStats: React.FC<TodoStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-full">
            <List className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Total</p>
            <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-600 rounded-full">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm text-orange-600 font-medium">Pendentes</p>
            <p className="text-2xl font-bold text-orange-900">{stats.pending}</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-600 rounded-full">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Completas</p>
            <p className="text-2xl font-bold text-green-900">{stats.completed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};