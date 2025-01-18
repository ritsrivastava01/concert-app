'use client';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

const Headlines = () => {
  const bands = [
    {
      name: 'Corduroy Gary',
      date: '1st July 9pm - Main Stage',
      image: '/images/band1.jpg',
      id: 1,
    },
    {
      name: 'The Mellow Tones',
      date: '2nd July 9pm - Main Stage',
      image: '/images/band2.jpg',
      id: 2,
    },
    {
      name: 'The Slick Six',
      date: '3rd July 9pm - Main Stage',
      image: '/images/band3.jpg',
      id: 3,
    },
    {
      name: 'The Funky Bunch',
      date: '4th July 9pm - Main Stage',
      image: '/images/band4.jpg',
      id: 4,
    },
    {
      name: 'The Groove Collective',
      date: '5th July 9pm - Main Stage',
      image: '/images/band5.jpg',
      id: 5,
    },
    {
      name: 'The Soul Sisters',
      date: '6th July 9pm - Main Stage',
      image: '/images/band6.jpg',
      id: 6,
    },
    {
      name: 'The Jazz Cats',
      date: '7th July 9pm - Main Stage',
      image: '/images/band7.jpg',
      id: 7,
    },
  ];
  return (
    <>
      <h2>
        <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
          Headliners
        </span>
      </h2>
      <p className="pt-4">
        Experience the sonic delight from these made-up artists across 7 days that
        music fans are calling “one of the many gigs that will happen this year”
      </p>
      <div className="flex">
        <button
          id="previous"
          className="hidden cursor-pointer items-center md:flex"
          onClick={() => {
            const carousal = document.getElementById('carousal');
            const width = carousal?.getElementsByTagName('div')[0].clientWidth;
            if (carousal && width) {
              carousal.scrollLeft -= width;
            }
          }}
        >
          <CaretLeft size={72} />
        </button>
        <div
          id="carousal"
          className="mt-4 flex w-full flex-1 snap-x gap-4 overflow-x-auto scroll-smooth pb-5"
        >
          {bands.length > 0 &&
            bands.map((band) => (
              <div className="min-w-[80%] md:min-w-[40%]" key={band.id}>
                <div
                  className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  style={{ backgroundImage: `url(${band.image})` }}
                ></div>
                <h5 className="mt-2">{band.name}</h5>
                <h6>{band.date}</h6>
              </div>
            ))}
        </div>
        <button
          id="next"
          className="hidden cursor-pointer items-center p-2 md:flex"
          onClick={() => {
            const carousal = document.getElementById('carousal');
            const width = carousal?.getElementsByTagName('div')[0].clientWidth;
            if (carousal && width) {
              carousal.scrollLeft += width;
            }
          }}
        >
          <CaretRight size={72} />
        </button>
      </div>
    </>
  );
};

export default Headlines;
