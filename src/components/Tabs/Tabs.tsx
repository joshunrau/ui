import { cn } from '@/utils/cn';

export type Tab = {
  isActive?: boolean;
  label: string;
  onClick: () => void;
};

export type TabsProps = {
  tabs: Tab[];
};

export const Tabs = ({ tabs }: TabsProps) => {
  return (
    <div>
      <div className="sm:hidden">
        <select
          className="block w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500"
          defaultValue={tabs.find((tab) => tab.isActive)?.label}
          id="tabs"
          name="tabs"
        >
          {tabs.map((tab) => (
            <option key={tab.label}>{tab.label}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-slate-200">
          <nav aria-label="Tabs" className="-mb-px flex">
            {tabs.map((tab) => (
              <button
                aria-current={tab.isActive ? 'page' : undefined}
                className={cn(
                  tab.isActive
                    ? 'border-sky-500 text-sky-600'
                    : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-700',
                  'w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium'
                )}
                key={tab.label}
                onClick={tab.onClick}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
