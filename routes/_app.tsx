import { AppProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html class='bg-[#212121ff] text-white'>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="CSS/style.css" />
        <title>ChatApp</title>
      </head>
      <body>
        <Navbar />
        <Component />
      </body>
    </html>
  );
}
