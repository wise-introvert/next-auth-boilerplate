import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      {typeof window == "undefined" ? (
        <div>Loading...</div>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}
