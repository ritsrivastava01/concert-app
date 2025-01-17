import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-fix flex h-[calc(100vh-200px)] min-h-[400px] flex-col items-center justify-center bg-slate-600 bg-[url('/images/hero.jpg')] bg-cover bg-center text-zinc-200">
      <div className="rounded-xl bg-white/30 px-4 py-2 text-center backdrop-blur-md">
        <div className="relative">
          <Image src="/images/logo.png" alt="logo" width={175} height={175} />
          <div className="mb-5 mt-[-70px] flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center gap-1 rounded-full bg-pink-500 *:w-1 *:rounded-full">
              <div className="h-2 animate-wavey bg-pink-300"></div>
              <div className="h-3 animate-wavey bg-pink-200 animation-delay-200"></div>
              <div className="h-4 animate-wavey bg-pink-100 animation-delay-[150ms]"></div>
              <div className="h-3 animate-wavey bg-pink-200 animation-delay-400"></div>
              <div className="animation-delay-[750ms ] h-2 animate-wavey bg-pink-300"></div>
            </div>
          </div>
        </div>
        <div className="text-5xl font-bold">
          tw<span className="text-sky-900">:mf</span>
        </div>
      </div>
      <div className="mt-3 text-sm font-bold">
        Keep me updated with news and promotions
      </div>

      <form className="mt-3 flex gap-2">
        <input
          className="rounded-sm border border-white/40 bg-white/30 p-2 text-sky-900 placeholder-zinc-200 caret-pink-500 outline-pink-500 backdrop-blur-md focus:outline"
          type="email"
          placeholder="Email"
        />
        <button className="btn-pink-700 btn hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20">
          Buy Tickets
        </button>
      </form>
    </section>
  );
};

export default Hero;
