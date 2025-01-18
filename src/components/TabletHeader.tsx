import {
  Headset,
  House,
  LineSegments,
  Ticket,
} from '@phosphor-icons/react/dist/ssr';
import NavItem from './NavItem';

const TabletHeader = () => {
  return (
    <div className="hidden flex-1 justify-end md:flex">
      {/* <div className="menu-item group relative inline-block">
        <a className="flex items-center justify-center gap-2" href="#headlines">
          <House />
          Home
        </a>
        <span className="absolute bottom-0 left-1/2 h-[.5] w-0 rounded-full bg-slate-800 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      </div> */}
      <NavItem title="Home" href="headlines" icon={<House />} />

      <NavItem title="Lineup" href="lineup" icon={<LineSegments />} />

      <NavItem title="Tickets" icon={<Ticket />}>
        <div className="absolute right-0 top-full hidden whitespace-nowrap rounded-b-md bg-pink-500 text-right group-hover:block">
          <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
            <span>Single day Ticket</span>
          </div>
          <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
            <span>7 day Ticket</span>
          </div>
        </div>
      </NavItem>
      <NavItem title="Supports" href="supports" icon={<Headset />} />
    </div>
  );
};

export default TabletHeader;
