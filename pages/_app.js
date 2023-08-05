import "../styles/background.css";
import "../styles/game.css";
import "../styles/intro.css";
import Background from "../components/Background";
// import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Background />
      {/* <AnimatePresence mode="wait" initial={false}> */}
      <Component {...pageProps} key={router.asPath} />
      {/* </AnimatePresence> */}
    </>
  );
}

/*mode="wait": This just tells Framer Motion to complete any exit animations (exiting page) 
before starting a new animation (new page) on the new component.
initial: Setting this to false means it’s not going to play the animation 
on the first page load, which just feels better.*/
