import React from 'react';
import { Loader } from 'lucide-react';

export const LoadingSpinner = ({ message = 'Loading health news...' }) => (
  <div className="flex flex-col items-center justify-center py-20">
    <Loader className="w-12 h-12 text-blue-600 animate-spin" />
    <p className="mt-4 text-gray-600">{message}</p>
  </div>
);