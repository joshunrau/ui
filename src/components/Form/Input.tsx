export interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

export const Input = (props: InputProps) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-muted" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-slate-600 dark:bg-slate-800 dark:focus:border-sky-700 dark:focus:ring-sky-700 sm:text-sm"
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};
