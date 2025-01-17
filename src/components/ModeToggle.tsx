'use client';
import { Moon, Sun } from '@phosphor-icons/react';

const ModeToggle = () => {
  return (
    <div
      id="dark-mode-toggle"
      className="fixed right-0 top-24 z-10 inline-block cursor-pointer rounded-l-md bg-zinc-900 text-5xl text-zinc-200 *:p-2 dark:bg-zinc-200 dark:text-zinc-900"
    >
      <button
        className="block dark:hidden"
        onClick={() => document.body.classList.add('dark')}
      >
        <Sun />
      </button>
      <button
        className="hidden dark:block"
        onClick={() => document.body.classList.remove('dark')}
      >
        <Moon />
      </button>
    </div>
  );
};

export default ModeToggle;
