module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: { white: { A700: "#ffffff" }, black: { "900_59": "#00000059" }, gray: { "900_59": "#14141459" } },
      boxShadow: {},
      fontFamily: { titilliumweb: "Titillium Web", passionone: "Passion One" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
