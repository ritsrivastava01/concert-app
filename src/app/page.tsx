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
      <section id="hero">
        <Hero />
      </section>

      <section className="mx-auto mt-20 max-w-screen-lg px-4">
        <section id="headlines">
          <Headlines />
        </section>
        <section id="lineup">
          <Timeline />
        </section>
        <section id="tickets">
          <Tickets />
        </section>
        {/* <section>
          <BuyTicket />
        </section> */}
      </section>
    </main>
  );
}
