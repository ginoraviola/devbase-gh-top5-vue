/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "50px": "50px",
        "75px": "75px",
      },
      height: {
        "50px": "50px",
        "75px": "75px",
      },
      boxShadow: {
        header: "0px 2px 4px 0px #00000080",
      },
      colors: {
        header: "#282828",
        btn: "#3B89FF",
        btnHover: "#2564C5",
      },
    },
  },
  plugins: [],
};
