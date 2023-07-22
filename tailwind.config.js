/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      height: ["responsive", "hover", "focus"],
    },
  },
  theme: {
    extend: {
      boxShadow: {
        'md': '4px 4px 0px #FFFFFF',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        BPdots: ["Bpdots", "cursive"],
        minimum_wide: ["minimum wide", "cursive"],
        Bitcrusher: ["Bitcrusher", "sans-serif"],
        ProximaNova: ["ProximaNova", "cursive"],
        Ocraext: ["Ocraext", "cursive"],
        Teko: ["Teko", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/static/herobg.png')",
        "bg-gif": "url('/static/homev2bg.gif')",
        "team-bg": "url('/static/bgImg5.png')",
        focusBlur: "rgba(255, 255, 255, 0.07)",
      },
      transitionProperty: {
        height: "height",
      },
      fontSize: {
        xss: "10px",
        button: "8px",
      },
      spacing: {
        "9px": "9px",
        "8px": "8px",
        "7px": "7px",
        "5px": "5px",
        "3px": "3px",
        "2px": "2px",
        "450px": "450px",
        "470px": "470px",
      },
      letterSpacing: {
        widest: "2px",
      },
      boxShadow: {
        BtnShadow: "4px 4px 0px #FFFFFF",
        Btn2Shadow: "4px 4px 0px #5ebff3",
        Btn3Shadow: "4px 4px 0px #db38b9",

        BtnClickedShadow: "1px 1px 0px #FFFFFF",
        modalShadow: "10px 10px 0px rgba(255, 255, 255, 0.15)",
      },
      clipPath: {
        mypolygon:
          "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
      },

      screens: {
        xs: "375px",
      },

      colors: {
        primary: "#DB38B9",
        secondary: "#50CFFB",
        BtnColor: "#82006D",
        LaunchBtn: "#0088D5",
        mainBg: "#232323",
        comBg: "#0F151CD1",
        bgColor: "#12181D",
        bgColor2: "#2A5277",
        bgColor3: "#132538",
        bgColorv2: "#1c0222",
        bgColor2v2: "#2A0E24",
        bgColor3v2: "rgba(179, 179, 179, 0.2)",
        bubbleBg: "rgba(255, 255, 255, 0.07)",
        color2V2: "#f9e999",
        yellow: "#FF971C",
        gray: "#ffffff42",
        gray2: "#646464",
        gray3: "#ffffff0a",
        whitesh: "#D1D1D1",
        lightblue: "#50C5FB",
        darkOrange:"#FF8A00",
        magenta:"#FF00C7" ,
        transparentBG:"rgba(98, 205, 255, 0.04)",
        darkBG:'rgba(0, 0, 0, 0.41)',
        gradient:
          "linear-gradient(360deg, #12181D 12.82%, rgba(18, 24, 29, 0) 91.03%)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-clip-path"),
  ],
};
