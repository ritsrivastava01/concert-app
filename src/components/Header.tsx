'use client';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className="static top-0 flex bg-gradient-to-r from-rose-500 to-pink-500 text-zinc-200">
      <div className="flex items-center gap-2 p-2">
        <Image src="/images/logo-inverted.png" alt="logo" width={50} height={50} />
        <div className="text-2xl font-bold">
          tw<span className="text-sky-900">:mf</span>
        </div>
      </div>
      <div className="my-auto ml-auto cursor-pointer pr-4 md:hidden">
        <button
          id="mobile-menu-button"
          className="group"
          onClick={(e) => e.currentTarget.classList.toggle('open')}
        >
          <div className="relative top-0 h-1 w-8 rounded-xl bg-zinc-200 transition-all group-open:top-2 group-open:rotate-45"></div>
          <div className="my-1 h-1 w-8 rounded-xl bg-zinc-200 transition-all group-open:opacity-0"></div>
          <div className="relative top-0 h-1 w-8 rounded-xl bg-zinc-200 transition-all group-open:-top-2 group-open:-rotate-45"></div>
        </button>

        <div className="absolute left-0 top-[62px] w-full bg-gradient-to-r from-rose-500 to-pink-500 text-zinc-200">
          mob nac
        </div>
      </div>
      <div className="hidden flex-1 justify-end md:flex">
        <div className="menu-item">
          <span>Home</span>
        </div>
        <div className="menu-item">
          <span>Lineup</span>
        </div>
        <div className="menu-item group">
          <span>Tickets</span>
          <div className="absolute right-0 top-full hidden whitespace-nowrap rounded-b-md bg-pink-500 text-right group-hover:block">
            <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
              <span>Single day Ticket</span>
            </div>
            <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
              <span>7 day Ticket</span>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <span>Support</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
