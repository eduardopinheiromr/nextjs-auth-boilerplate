import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import "@fontsource/open-sans";
// import "@fontsource/open-sans/400.css";
// import "@fontsource/open-sans/600.css";
// import "@fontsource/open-sans/900.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
