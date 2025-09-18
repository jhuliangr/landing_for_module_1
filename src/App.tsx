import Footer from "./components/Footer";
import Header from "./components/Header";
import { Section1 } from "./components/sections/Section1";
import { Section2 } from "./components/sections/Section2";
import { Section3 } from "./components/sections/Section3";
import { Section4 } from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}

export { App };
