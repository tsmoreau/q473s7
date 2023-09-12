import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

import { Roboto_Slab } from "next/font/google";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto_slab",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto_slab.variable}`}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
