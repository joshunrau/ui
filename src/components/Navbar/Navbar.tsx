export const Navbar = () => {
  return (
    <header className="w-full bg-white/80 text-slate-700 shadow backdrop-blur-lg dark:bg-slate-800/75 dark:text-slate-300">
      <div className="container flex flex-wrap items-center py-3 font-medium md:flex-nowrap">
        <button
          aria-label="Menu Button"
          className="flex h-10 items-center [&>svg]:h-full [&>svg]:w-auto"
          id="nav-toggle"
          type="button"
        >
          <svg
            width="320pt"
            height="259pt"
            version="1.0"
            viewBox="0 0 320 259"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden fill-sky-900 dark:fill-slate-100 md:block"
          >
            <g transform="translate(0 259) scale(.1 -.1)">
              <path d="m1399 2576c-165-24-516-124-657-187-188-84-421-286-539-467-210-320-252-646-118-913 88-174 249-284 511-349 37-9 45-16 70-68 38-75 161-199 234-234 69-33 170-52 235-43 193 24 422 85 710 189 55 20 114 36 130 36 29 0 63-8 360-79 72-17 180-38 240-47l110-16 70 27c225 84 361 265 385 510 5 44 18 106 30 139 46 127 33 260-40 410-22 46-40 93-40 106 0 87-67 234-146 320-28 30-64 80-80 110-45 86-173 208-268 255-43 22-95 55-115 74-52 48-126 94-201 124-90 35-135 46-258 63-59 7-138 21-177 29-102 22-330 27-446 11zm259-241c113-27 230-102 294-190 32-43 35-44 74-39 23 3 68 0 100-6 159-33 280-153 313-310l12-55 77-37c137-65 230-169 280-312 51-144 28-322-56-451-48-73-189-210-236-230-29-12-147-15-738-15-789-1-735-5-864 75-248 155-331 433-207 693 38 79 159 198 240 236l61 29-1 81c-2 152 51 283 158 390 131 130 314 183 493 141z"></path>
              <path d="m1133 1826-28-24-3-502c-2-367 1-506 9-516 16-20 1281-21 1296-1 12 14 173 657 173 688 0 11-13 34-29 50-25 24-38 29-79 29h-50l-4 65c-3 51-9 70-26 88-23 22-23 22-456 25l-433 3-18 40c-33 72-50 79-196 79-121 0-129-1-156-24zm312-94 30-57 880-10 6-114-1043-6-21-25c-15-18-39-93-77-245l-55-220-3 355c-1 195 0 361 3 367 3 10 38 13 127 13h123l30-58zm1078-256c4-10-80-366-144-608l-10-38h-599c-398 0-600 3-600 10 0 24 154 626 163 638 15 19 1183 18 1190-2z"></path>
              <path d="m2004 935c-10-25 4-47 28-43 17 2 24 11 26 31 3 23 0 27-23 27-14 0-28-7-31-15z"></path>
              <path d="m2124 935c-10-25 4-47 28-43 17 2 24 11 26 31 3 23 0 27-23 27-14 0-28-7-31-15z"></path>
              <path d="m2244 935c-10-25 4-47 28-43 17 2 24 11 26 31 3 23 0 27-23 27-14 0-28-7-31-15z"></path>
              <path d="m1940 401c-70-22-136-57-227-119l-73-49 28-35c79-104 244-177 438-193 159-13 324 46 438 159 52 51 126 154 126 177 0 3-51 9-112 13-62 4-191 20-286 37-198 33-255 35-332 10z"></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="p-1 md:hidden"
            id="menu-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
          <span className="font-lg ml-3 hidden whitespace-nowrap font-semibold md:block">Open Data Capture</span>
        </button>
        <nav
          className="transition-mh order-last flex w-full flex-col overflow-hidden duration-300 md:order-none md:flex-row md:justify-end md:gap-3"
          id="nav-dropdown"
        >
          <a className="p-2" href="/en/">
            Overview
          </a>
          <a className="p-2" href="/en/team">
            Team
          </a>
          <a className="p-2" href="/en/blog">
            Blog
          </a>
        </nav>
        <div className="mx-5 hidden h-8 w-[1px] rounded-md bg-slate-300 dark:bg-slate-700 md:block"></div>
        <div className="flex flex-grow justify-end gap-3">
          <button
            aria-label="Change Theme"
            className="relative h-10 w-10 rounded-md transition-transform hover:backdrop-brightness-95 dark:hover:backdrop-brightness-150"
            id="theme-toggle"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="absolute inset-2 h-6 w-6 dark:opacity-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="absolute inset-2 h-6 w-6 opacity-0 dark:opacity-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              ></path>
            </svg>
          </button>
          <div className="relative">
            <button
              aria-label="Change Language"
              className="flex items-center justify-center rounded-md p-2 hover:backdrop-brightness-95 dark:hover:backdrop-brightness-150"
              id="language-toggle"
              type="button"
            >
              <span className="uppercase">en</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="ml-1 h-4 w-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg>
            </button>
            <div
              className="absolute mt-1 hidden w-full rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-10 dark:bg-slate-800"
              id="language-toggle-dropdown"
            >
              <a
                className="block cursor-pointer p-2 text-center uppercase first:rounded-t-md last:rounded-b-md hover:backdrop-brightness-95 dark:hover:backdrop-brightness-150"
                href="https://opendatacapture.org/"
              >
                en
              </a>
              <a
                className="block cursor-pointer p-2 text-center uppercase first:rounded-t-md last:rounded-b-md hover:backdrop-brightness-95 dark:hover:backdrop-brightness-150"
                href="https://opendatacapture.org/fr/"
              >
                fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
