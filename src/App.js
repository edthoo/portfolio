import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Sidebar from './Sidebar/Sidebar';
import React, { useRef, useEffect, useState } from 'react';


function App() {
  const [visibleSection, setVisibleSection] = useState()

  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const stackRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const sectionRefs = [
    { section: "about", ref: aboutRef },
    { section: "stack", ref: stackRef },
    { section: "projects", ref: projectsRef },
    { section: "contact", ref: contactRef },
  ]

  const scrollTo = (element) => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const getDimensions = (element) => {
    const { height } = element.getBoundingClientRect();
    const offsetTop = element.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <main className="mx-auto bg-[#1d1d1d]">
      <Header data={{ headerRef }}></Header>
      <div className="grid grid-cols-3 lg:grid-cols-6">
        <Sidebar data={{ scrollTo, aboutRef, stackRef, projectsRef, contactRef, visibleSection }}></Sidebar>
        <Body data={{ aboutRef, stackRef, projectsRef, contactRef }}></Body>
      </div>
    </main>
  );
}

export default App;
