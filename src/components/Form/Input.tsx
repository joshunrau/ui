export interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

export const Input = (props: InputProps) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};
