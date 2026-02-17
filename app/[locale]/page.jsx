import Banner from "../_component/Banner"
import Services from "../_component/Services"
import Skills from "../_component/Skills"
import Projects from "../_component/Projects"
import Contact from "../_component/Contact"
import Info from "../_component/Info"

export default function Home({params}) {
  return (
    <>
      <Banner />
      <Services />
      <Skills params={params}/>
      <Projects params={params}/>
      <Info />
      <Contact />
    </>
  );
}
