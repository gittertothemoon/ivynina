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
        cocoa: "#A18167",
        espresso: "#2A1710",
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top, rgba(242,229,217,0.22), transparent 55%), radial-gradient(circle at bottom right, rgba(219,194,173,0.22), transparent 55%), linear-gradient(135deg, #2A1710 0%, #A18167 55%, #F2E5D9 120%)",
        "section-texture": "radial-gradient(circle at center, rgba(219,194,173,0.22), transparent 65%)",
      },
      boxShadow: {
        embrace: "0 22px 72px -34px rgba(42, 23, 16, 0.55)",
        lift: "0 18px 40px -20px rgba(42, 23, 16, 0.65)",
      },
    },
  },
  plugins: [],
}
