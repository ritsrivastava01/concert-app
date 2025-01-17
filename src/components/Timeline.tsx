const Timeline = () => {
  return (
    <section>
      <h2 className="mt-20">Timelup</h2>
      <p>
        Follow the timetable and stage to ensure you don't miss your favourite
        artists
      </p>
      <div className="relative mt-5 rounded-lg bg-zinc-800 px-3 py-4 text-zinc-200">
        <div className="absolute left-1/2 top-0 -ml-2 h-full w-4 rounded-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900">
          <div className="sticky top-1/2">
            <div className="relative size-4">
              <div className="absolute size-4 animate-ping rounded-full bg-pink-500 opacity-75"></div>
              <div className="relative size-4 rounded-full bg-rose-500"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-2"> 1st July</h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">Jackie Chaston</div>
            <div className="text-zinc-400">6pm - Saga Stage</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">The Daisies</div>
            <div className="text-zinc-400">8pm - Main Stage</div>
          </div>
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-2"> 2st July</h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">The Dastardly Spaniard</div>
            <div className="text-zinc-400">7pm - Saga Stage</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">The Daisies</div>
            <div className="text-zinc-400">8pm - Main Stage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
