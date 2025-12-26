/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#F2E5D9",
        latte: "#EFDCCC",
        clay: "#E9D3C0",
        caramel: "#DBC2AD",
        sienna: "#D1B7A1",
        espresso: "#A18167",
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top, rgba(242,229,217,0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(161,129,103,0.55), transparent 55%), linear-gradient(135deg, #A18167 0%, #D1B7A1 40%, #F2E5D9 100%)",
        "section-texture": "radial-gradient(circle at center, rgba(219,194,173,0.22), transparent 65%)",
      },
      boxShadow: {
        embrace: "0 22px 72px -34px rgba(161, 129, 103, 0.55)",
        lift: "0 18px 40px -20px rgba(161, 129, 103, 0.55)",
      },
    },
  },
  plugins: [],
}
