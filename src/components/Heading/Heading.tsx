export type HeadingProps = {
  subtitle?: string;
  title: string;
};

export const Heading = ({ subtitle, title }: HeadingProps) => {
  return (
    <div className="border-b border-slate-200 py-5">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="sm:w-0 sm:flex-1">
          <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
          {subtitle && <p className="mt-1 truncate text-sm text-slate-600">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};
