
import {  Div } from "@/app/Components/Common/Index";
import {  NavBar } from "@/app/Components/Layout/Index";
import {Hero, About} from "@/app/Components/sections/Index";
import { Skills } from "@/app/Components/sections/Skills";
import { Projects } from "./Components/sections/Projects";
export default function Home() {
  return (
    <>
          {/* <NavBar/> */}
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>

    </>
  );
}
