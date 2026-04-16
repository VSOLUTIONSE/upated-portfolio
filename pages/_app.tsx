import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Agentation } from "agentation";

export default function App({ Component, pageProps }: AppProps) {
  const isProduction = process.env.NODE_ENV === "production";
  
  return (
    <>
      <Component {...pageProps} />
      {!isProduction && <Agentation />}
    </>
  );
}
