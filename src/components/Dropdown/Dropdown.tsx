import { useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';

export type DropdownProps<T extends string> = {
  label: string;
  options: T[];
  onSelection: (selection: T) => void;
};

export const Dropdown = <const T extends string>({ label, options, onSelection }: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-min">
      <button
        className="flex items-center justify-center rounded-md p-2 hover:backdrop-emphasize"
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="whitespace-nowrap">{label}</span>
        <ChevronDownIcon className="ml-1 h-4 w-4" />
      </button>
      <div
        className={clsx(
          'absolute mt-1 w-full rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-10 dark:bg-slate-800',
          isOpen ? 'block' : 'hidden'
        )}
      >
        {options.map((option) => (
          <button
            className="block w-full p-2 text-center hover:backdrop-emphasize"
            key={option}
            type="button"
            onClick={() => {
              onSelection(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
