import React, { useEffect, useState } from "react";
import FadeInOut from "./FadeInOut"
import {
  AboutSection,
  //ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

function RenderEverythingElse({scrolledPassedIntro, scrolledPassedIntroFirst}){
  console.log("QQQ render everything else?..." + scrolledPassedIntro);
    return(
      <FadeInOut show={scrolledPassedIntro} duration={500}>
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        {/*<ContactSection sectionId="contact" heading="Issues?" />*/}
      </FadeInOut>
    );
}

export default function IndexPage() {  
  const [scrollY, setScrollY] = useState(0);
  const [scrolledPassedIntro, setScrolledPassedIntro] = useState(false);
  const [scrolledPassedIntroFirst, setScrolledPassedIntroFirst] = useState(false);

  useEffect(()=>{
     
      function onScroll() {
        setScrollY(window.scrollY);
        console.log("scroll val:" + scrollY)
        if(scrollY >= 50) {
          setScrolledPassedIntro(true);

          if(!scrolledPassedIntroFirst){
            setScrolledPassedIntroFirst(true);
          }
          console.log("but it was set?...");
        }else{
          setScrolledPassedIntro(false);
        }
      }

      window.addEventListener("scroll", onScroll);
      return ()=>{
        window.removeEventListener("scroll", onScroll);
      };
  });

  return (
    <>
      <Seo title="Jed's Portfolio" />
      
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <div style={{height: '20em'}}/>
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        {/*<ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
      
      </Page>
    </>
  );
}

