import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "tailwindcss/tailwind.css";
import React from "react";
import { AppProps } from "next/app";

import Navbar from "../src/pageComponents/navbar";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Theme accentColor="teal" panelBackground="solid" scaling="110%">
        <Navbar />
        <Component {...pageProps} />
      </Theme>
    </>
  );
};

export default MyApp;
