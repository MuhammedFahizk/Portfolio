

"use client"
import {  NavBar, ScrollTop } from "@/app/Components/Layout/Index";
import {Hero, About, Skills, Projects, ContactUs,} from "@/app/Components/sections/Index";

export default function Home() {
  
  return (
    <>
          <NavBar/>
          <ScrollTop/>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <ContactUs/>

    </>
  );
}
