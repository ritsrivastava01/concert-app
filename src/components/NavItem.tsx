import { ReactNode } from 'react';

export type NavProps = {
  title?: string;
  href?: string;
  icon?: ReactNode;
  children?: ReactNode;
};
const NavItem = ({ title, href, icon, children }: NavProps) => {
  return (
    <div className="menu-item group relative inline-block">
      <a className="flex items-center justify-center gap-2" href={`#${href}`}>
        {icon}
        {title}
      </a>
      <span className="absolute bottom-0 left-1/2 h-[.5] w-0 rounded-full bg-slate-800 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      {children}
    </div>
  );
};

export default NavItem;
