
import React from 'react';
import { Button } from '@/components/ui/button';

interface FilterButtonsProps {
  filters: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ 
  filters, 
  activeFilter, 
  setActiveFilter 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          variant={activeFilter === filter ? "default" : "outline"}
          className={`rounded-full transition-all ${
            activeFilter === filter
              ? 'shadow-md'
              : 'hover:shadow-sm'
          }`}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
