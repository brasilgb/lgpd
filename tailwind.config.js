module.exports = {
  purge: [
    './resources/**/*.blade.php', 
    './resources/js/**/*.js',
    './resources/js/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
   ],
}
