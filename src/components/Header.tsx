import Image from 'next/image';
import MobileHeader from './MobileHeader';
import TabletHeader from './TabletHeader';

const Header = () => {
  return (
    <nav className="sticky top-0 z-10 flex bg-gradient-to-r from-rose-500 to-pink-500 text-zinc-200">
      <div className="flex items-center gap-2 p-2">
        <Image src="/images/logo-inverted.png" alt="logo" width={50} height={50} />
        <div className="text-2xl font-bold">
          Beat<span className="text-sky-900">Nation</span>
        </div>
      </div>
      <MobileHeader />
      <TabletHeader />
    </nav>
  );
};

export default Header;
