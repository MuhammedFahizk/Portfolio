
import {  NavBar } from "@/app/Components/Layout/Index";
import {Hero, About, Skills, Projects, ContactUs} from "@/app/Components/sections/Index";

export default function Home() {
  return (
    <>
          <NavBar/>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <ContactUs/>

    </>
  );
}
