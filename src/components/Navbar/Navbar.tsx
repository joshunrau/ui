import { match } from 'ts-pattern';
import { Dropdown } from '../Dropdown';
import { ThemeToggle } from '../ThemeToggle';

export type NavbarAnchorItem = {
  kind: 'a';
  label: string;
  href: string;
};

export type NavbarButtonItem = {
  kind: 'button';
  label: string;
  onClick: () => void;
};

export type NavbarItem = NavbarButtonItem | NavbarAnchorItem;

export type NavbarProps = {
  title: string;
  items: NavbarItem[];
  logo?: React.ReactNode;
};

export const Navbar = ({ title, items, logo }: NavbarProps) => {
  return (
    <header className="w-full bg-white/80 text-slate-700 shadow backdrop-blur-lg dark:bg-slate-800/75 dark:text-slate-300">
      <div className="container flex items-center justify-between py-3 font-medium">
        <div className="flex h-10 items-center gap-3 [&>*]:h-full [&>*]:w-auto">
          {logo}
          <span
            className="font-lg whitespace-nowrap align-middle font-semibold leading-none"
            style={{ height: 'auto' }}
          >
            {title}
          </span>
        </div>
        <div className="flex items-center">
          <nav className="flex gap-3">
            {items.map((item) => (
              <div className="flex items-center justify-center p-2 [&>*]:hover:text-slate-900 [&>*]:dark:hover:text-slate-100">
                {match(item)
                  .with({ kind: 'a' }, ({ label, href }) => <a href={href}>{label}</a>)
                  .with({ kind: 'button' }, ({ label, onClick }) => (
                    <button type="button" onClick={onClick}>
                      {label}
                    </button>
                  ))
                  .exhaustive()}
              </div>
            ))}
          </nav>
          <div className="mx-5 h-8 w-[1px] rounded-md bg-slate-300 dark:bg-slate-700" />
          <div className="flex gap-3">
            <ThemeToggle />
            <Dropdown
              label="EN"
              options={['EN', 'FR']}
              onSelection={(selection) => {
                alert(selection);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
