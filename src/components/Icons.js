import * as React from "react";

export const GithubIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const XIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 1668.56 1221.19",
    }}
    viewBox="0 0 1668.56 1221.19"
    className={`w-full h-auto ${className}`}
    {...props}
  >
    <path d="m336.33 142.251 386.39 516.64-388.83 420.05h87.51l340.42-367.76 275.05 367.76h297.8l-408.13-545.7 361.92-390.99h-87.51l-313.51 338.7-253.31-338.7h-297.8zm128.69 64.46h136.81l604.13 807.76h-136.81l-604.13-807.76z" />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...props }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="1080.000000pt"
    height="1080.000000pt"
    viewBox="0 0 1080.000000 1080.000000"
    preserveAspectRatio="xMidYMid meet"
    className={`w-full h-auto ${className}`}
    {...props}
  >
    <g
      transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
      stroke="none"
    >
      <path
        d="M5955 8748 c-24 -71 -324 -1052 -322 -1054 14 -14 509 -156 569 -164
243 -30 462 84 563 294 146 304 37 620 -263 762 -46 22 -515 174 -536 174 -4
0 -9 -6 -11 -12z m279 -177 c204 -63 271 -96 348 -169 100 -95 142 -214 127
-362 -19 -178 -135 -330 -294 -385 -68 -23 -179 -30 -245 -16 -117 25 -390
115 -390 128 0 34 265 863 274 860 6 -2 87 -28 180 -56z"
      />
      <path
        d="M3830 8478 c-24 -10 -46 -21 -48 -23 -4 -4 436 -1077 447 -1088 4 -4
29 1 55 13 54 23 55 12 -4 152 l-38 91 54 115 c30 63 54 116 54 118 0 13 44
-9 248 -122 l227 -126 51 17 c57 19 81 32 74 38 -3 3 -124 71 -270 152 -146
82 -267 150 -269 152 -2 1 39 101 92 220 54 120 97 221 97 225 0 10 -101 -29
-117 -45 -7 -7 -74 -142 -149 -302 -74 -159 -139 -293 -142 -297 -4 -4 -74
158 -157 359 -82 201 -152 366 -155 368 -3 1 -25 -6 -50 -17z"
      />
      <path
        d="M3523 7851 c-150 -55 -266 -193 -295 -350 -32 -169 77 -368 246 -451
160 -79 351 -44 484 88 83 82 114 147 120 246 l5 79 -39 -6 c-22 -4 -44 -7
-50 -7 -6 0 -14 -26 -17 -60 -6 -72 -37 -129 -102 -189 -67 -61 -125 -85 -210
-85 -50 0 -84 6 -118 22 -65 29 -148 110 -183 179 -24 50 -29 70 -29 138 0 97
27 157 100 224 66 61 125 85 210 86 l70 0 9 43 c5 23 6 46 2 50 -17 16 -151
12 -203 -7z"
      />
      <path
        d="M7058 7841 c-121 -39 -215 -123 -274 -244 -80 -166 -46 -337 94 -476
91 -91 175 -133 281 -139 49 -3 81 0 85 6 3 6 4 28 0 50 l-6 39 -67 5 c-83 6
-156 42 -223 109 -58 58 -88 121 -95 199 -6 63 15 150 44 186 18 22 19 21 283
-202 145 -123 269 -223 275 -221 21 7 95 130 111 184 25 86 16 211 -21 285
-90 183 -302 278 -487 219z m208 -96 c124 -37 214 -157 214 -283 0 -52 -6 -80
-28 -126 l-27 -59 -228 193 c-247 208 -240 198 -170 241 77 48 156 59 239 34z"
      />
      <path
        d="M7596 6984 l-258 -376 17 -32 c41 -77 -7 -76 477 -11 238 31 443 59
455 62 l21 5 -26 44 c-15 24 -34 44 -42 44 -9 0 -182 -22 -385 -49 -203 -28
-371 -48 -373 -47 -1 2 96 146 217 321 l221 318 -22 36 c-11 20 -26 42 -32 49
-9 9 -71 -74 -270 -364z"
      />
      <path
        d="M2845 7097 c-134 -63 -251 -279 -243 -449 l3 -63 46 -3 47 -3 4 88
c6 103 31 176 85 247 71 93 161 114 266 62 32 -15 57 -31 57 -36 0 -4 -35 -68
-79 -142 -43 -74 -88 -160 -100 -191 -37 -101 -24 -187 42 -256 99 -104 251
-92 359 28 103 115 138 256 92 375 -5 13 5 10 43 -13 28 -17 53 -31 56 -31 4
0 19 19 33 42 26 40 26 42 8 55 -50 37 -456 270 -504 290 -74 30 -149 30 -215
0z m493 -320 c52 -100 21 -238 -74 -333 -68 -68 -153 -72 -219 -10 -73 70 -50
149 131 443 l14 23 62 -38 c47 -29 68 -50 86 -85z"
      />
      <path
        d="M8010 6379 c-262 -39 -419 -257 -366 -509 28 -131 104 -253 187 -295
25 -14 27 -13 52 22 l26 37 -54 48 c-76 68 -107 137 -113 251 -5 98 8 146 58
216 27 37 119 101 146 101 6 0 46 -151 90 -341 l79 -340 35 6 c62 11 159 63
213 114 130 123 157 303 72 478 -77 158 -242 240 -425 212z m193 -124 c98 -41
168 -137 182 -249 13 -105 -41 -219 -132 -276 -61 -39 -80 -39 -88 3 -4 17
-34 144 -66 281 -46 194 -56 252 -47 258 17 11 110 0 151 -17z"
      />
      <path
        d="M2416 6351 c-3 -4 -16 -54 -31 -111 -14 -58 -28 -110 -30 -117 -3 -8
-29 -5 -94 12 l-90 23 -11 -49 c-7 -26 -9 -52 -6 -57 3 -6 38 -18 78 -27 40
-10 77 -21 81 -25 5 -4 1 -34 -7 -68 -21 -78 -21 -79 12 -85 15 -3 34 -8 43
-12 14 -5 20 7 34 64 11 48 22 71 32 71 8 0 128 -29 267 -65 147 -38 273 -65
303 -65 64 0 129 34 165 86 37 52 61 152 53 213 -9 67 -15 73 -62 65 l-40 -6
4 -67 c5 -75 -13 -120 -60 -155 -43 -32 -88 -26 -359 45 -185 48 -248 68 -248
79 0 8 13 63 29 122 16 59 26 110 23 112 -18 10 -82 24 -86 17z"
      />
      <path
        d="M2723 5679 c-53 -13 -127 -78 -159 -141 -13 -27 -47 -136 -74 -243
-27 -108 -58 -211 -70 -230 -58 -93 -175 -110 -261 -38 -55 47 -89 146 -89
262 0 68 30 191 60 251 12 23 20 43 18 44 -2 1 -22 9 -45 18 -49 19 -51 17
-82 -55 -87 -203 -57 -480 65 -603 55 -54 106 -74 194 -74 92 0 140 20 193 79
52 58 72 108 118 301 45 185 63 232 105 274 65 63 159 63 227 -2 113 -106 113
-396 2 -562 -19 -29 -35 -54 -35 -56 0 -2 18 -13 41 -24 39 -20 42 -21 60 -4
33 29 87 154 104 236 37 187 2 377 -90 486 -56 67 -185 104 -282 81z"
      />
      <path
        d="M7710 5318 l0 -58 173 0 c96 0 363 -3 595 -7 l422 -6 0 55 0 56 -282
6 c-156 3 -424 7 -595 9 l-313 4 0 -59z"
      />
      <path
        d="M7896 5049 c-188 -65 -294 -229 -284 -444 3 -74 9 -102 31 -147 59
-121 163 -201 303 -234 212 -50 417 62 489 266 88 250 -40 500 -290 565 -82
21 -177 19 -249 -6z m207 -104 c118 -31 191 -87 235 -183 21 -47 24 -64 20
-136 -8 -132 -66 -223 -175 -273 -47 -22 -65 -24 -141 -21 -102 4 -183 36
-245 96 -58 55 -80 105 -85 192 -5 94 22 173 81 238 82 88 189 119 310 87z"
      />
      <path
        d="M7210 4444 c-32 -45 -33 -47 -14 -61 10 -8 95 -69 187 -136 l169
-122 -60 -7 c-198 -22 -355 -225 -340 -438 19 -255 304 -456 549 -384 109 32
212 121 266 232 22 45 29 74 32 139 1 46 -2 97 -8 114 -6 18 -10 33 -8 35 1 1
29 -17 61 -42 33 -24 63 -44 66 -44 4 0 20 18 35 40 24 35 26 43 14 54 -8 7
-203 149 -434 316 -231 167 -434 314 -451 327 l-31 23 -33 -46z m491 -436 c72
-34 138 -94 174 -159 27 -49 30 -63 30 -144 0 -100 -13 -135 -79 -212 -85 -98
-239 -128 -358 -70 -209 102 -272 327 -138 496 91 115 238 150 371 89z"
      />
      <path
        d="M2737 4211 c-290 -131 -530 -241 -533 -244 -3 -2 5 -26 18 -51 15
-32 28 -46 38 -43 8 2 252 111 541 242 l527 237 -22 49 c-11 27 -25 48 -31 48
-5 0 -248 -107 -538 -238z"
      />
      <path
        d="M3070 3909 c-195 -127 -417 -270 -493 -320 l-138 -89 31 -45 c17 -25
33 -45 35 -45 2 0 226 144 499 321 l496 321 -31 44 c-16 24 -33 44 -37 44 -4
0 -167 -104 -362 -231z"
      />
      <path
        d="M3296 3579 l-279 -310 34 -35 c18 -19 39 -34 45 -34 7 0 85 81 174
179 201 223 240 251 353 251 76 0 129 -23 192 -81 60 -56 88 -110 89 -175 1
-81 -38 -141 -231 -353 l-171 -189 40 -38 39 -39 62 65 c170 180 318 354 344
408 24 48 28 69 28 137 -1 68 -5 88 -29 134 -38 73 -118 151 -191 187 -51 25
-72 29 -142 29 -91 0 -93 3 -29 65 l36 34 -37 38 c-20 21 -40 38 -43 37 -3 0
-130 -140 -284 -310z"
      />
      <path
        d="M6806 3489 c-161 -38 -321 -191 -351 -335 -5 -29 -4 -31 33 -42 56
-17 57 -17 69 31 51 185 290 302 458 223 49 -23 115 -76 115 -93 0 -4 -131
-95 -291 -201 l-290 -192 30 -43 c58 -85 140 -145 235 -172 237 -69 492 111
513 361 17 202 -140 418 -339 464 -52 12 -129 11 -182 -1z m399 -340 c51 -152
-13 -299 -160 -370 -108 -52 -225 -34 -313 47 -43 41 -46 45 -28 55 10 6 123
81 250 165 127 85 232 154 233 154 1 0 9 -23 18 -51z"
      />
      <path
        d="M6198 3184 c-27 -8 -48 -20 -48 -27 0 -7 30 -107 66 -222 83 -262 91
-335 49 -421 -30 -61 -77 -102 -151 -130 -34 -13 -43 -21 -39 -33 4 -9 9 -29
12 -44 8 -40 26 -43 87 -13 72 35 124 88 156 159 l27 59 17 -66 c10 -37 22
-69 27 -71 4 -3 29 0 54 6 43 11 46 14 40 38 -13 54 -238 766 -244 772 -3 4
-27 0 -53 -7z"
      />
      <path
        d="M4713 2993 c-28 -71 -65 -167 -83 -215 -19 -49 -39 -88 -45 -88 -6 0
-127 45 -269 100 -142 55 -259 100 -261 100 -6 0 -38 -90 -34 -94 2 -2 119
-47 259 -101 140 -54 259 -102 264 -106 7 -7 -121 -362 -144 -400 -4 -6 -119
33 -305 105 -165 64 -302 113 -306 108 -9 -9 -32 -82 -27 -87 13 -12 704 -273
709 -267 8 9 399 1020 399 1031 0 8 -82 41 -101 41 -3 0 -29 -57 -56 -127z"
      />
    </g>
  </svg>
);

export const LinkArrow = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
