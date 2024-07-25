// remember to fix this issue wint the tailwind/nuxt
// https://github.com/tailwindlabs/tailwindcss-intellisense/issues/663#issuecomment-1316788128

module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        // 'big-shoulders': ['"Big Shoulders Display"', 'sans-serif'],
        'unbounded': ['"Unbounded"', 'sans-serif'],
        'redhat': ['"Red Hat Display"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
