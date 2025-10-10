/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1010px",
        xl: "1365px",
      },
      fontFamily: {
        sans: [
          "Poppins",
          "Inter",
          "Montserrat",
          "Open Sans",
          "arial",
          "sans-serif",
        ],
      },
      colors: {
        // Background colors
        primary: {
          DEFAULT: "#939393",
          dark: "#181a1b",
        },
        input: {
          DEFAULT: "rgba(255, 255, 255, 0.2)",
          dark: "rgba(24, 26, 27, 0.2)",
        },
        error: {
          DEFAULT: "#ff4848",
          dark: "#a10000",
        },

        // Text colors
        text: {
          DEFAULT: "#ffffff",
          dark: "#e8e6e3",
        },
        placeholder: {
          DEFAULT: "#ffffff",
          dark: "#e8e6e3",
        },

        // Border colors
        border: {
          DEFAULT: "#DEE5EC",
          dark: "#2b3b4b",
        },
        errorBorder: {
          DEFAULT: "#ff4405",
          dark: "#b12d00",
        },

        // Button colors
        buttonPrimary: {
          DEFAULT: "#ff0066",
          dark: "#cc0052",
        },
        buttonPrimaryBorder: {
          DEFAULT: "#ff0066",
          dark: "#b30047",
        },
        buttonSecondary: {
          DEFAULT: "rgba(255, 255, 255, 0.15)",
          dark: "rgba(24, 26, 27, 0.15)",
        },
        buttonSecondaryBorder: {
          DEFAULT: "#ffffff",
          dark: "#303436",
        },

        // Checkbox colors
        checkbox: {
          DEFAULT: "deeppink",
          dark: "#c00068",
        },
        checkboxBorder: {
          DEFAULT: "#D0D5DD",
          dark: "#3b4043",
        },

        // Dropdown colors
        dropdown: {
          DEFAULT: "#ffffff",
          dark: "#181a1b",
        },
        dropdownText: {
          DEFAULT: "#111827",
          dark: "#d6d3cd",
        },
        dropdownBorder: {
          DEFAULT: "#e5e7eb",
          dark: "#363b3d",
        },
      },
    },
  },
  plugins: [],
};
