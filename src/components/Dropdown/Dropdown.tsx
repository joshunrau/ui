import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';
import { useState } from 'react';

export type DropdownProps<T extends string> = {
  label: string;
  onSelection: (selection: T) => void;
  options: T[];
};

export const Dropdown = <const T extends string>({ label, onSelection, options }: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-min">
      <button
        className="flex items-center justify-center rounded-md p-2 hover:backdrop-emphasize"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        type="button"
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
            onClick={() => {
              onSelection(option);
            }}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
