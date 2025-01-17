import BuyTicket from 'music/components/BuyTicket';
import Header from 'music/components/Header';
import Headlines from 'music/components/Headlines';
import Hero from 'music/components/Hero';
import ModeToggle from 'music/components/ModeToggle';
import Tickets from 'music/components/Tickets';
import Timeline from 'music/components/Timeline';

export default function Home() {
  return (
    <main className="pb-40">
      <ModeToggle />
      <header>
        <Header />
      </header>
      <Hero />
      <section className="mx-auto mt-20 max-w-screen-lg px-2">
        <Headlines />
        <Timeline />
        <Tickets />
        <BuyTicket />
      </section>
    </main>
  );
}
