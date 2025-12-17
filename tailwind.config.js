/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        caramel: "#C58C61",
        clay: "#8A5A3C",
        latte: "#ECD7C0",
        espresso: "#2A1710",
        blush: "#F5E5D7",
        sienna: "#B06B45",
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top, rgba(245,229,215,0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(138,90,60,0.45), transparent 50%), linear-gradient(135deg, #2A1710 0%, #3A2216 35%, #1C0F0A 100%)",
        "section-texture": "radial-gradient(circle at center, rgba(197,140,97,0.15), transparent 65%)",
      },
      boxShadow: {
        embrace: "0 22px 72px -34px rgba(42, 23, 16, 0.55)",
        lift: "0 18px 40px -20px rgba(5, 2, 0, 0.65)",
      },
    },
  },
  plugins: [],
}
