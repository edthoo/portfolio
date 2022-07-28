import React from 'react';


function Sidebar(props) {
  const { scrollTo, aboutRef, stackRef, projectsRef, contactRef, visibleSection } = props.data

  const highlightAbout = () => {
    if (visibleSection === "about") {
      return "selected"
    } else {
      return ""
    }
  }

  const highlightStack = () => {
    if (visibleSection === "stack") {
      return "selected"
    } else {
      return ""
    }
  }

  const highlightProjects = () => {
    if (visibleSection === "projects") {
      return "selected"
    } else {
      return ""
    }
  }

  const highlightContact = () => {
    if (visibleSection === "contact") {
      return "selected"
    } else {
      return ""
    }
  }

  return (
    <div className="relative my-auto">
      <div className="fixed top-1/2 px-3 border-r-2 border-r-white text-white lg:text-lg lg:left-4 lg:px-12">
        <h1 className={highlightAbout()} onClick={() => {scrollTo(aboutRef.current)}}>about</h1>
        <h1 className={highlightStack()} onClick={() => {scrollTo(stackRef.current)}}>tech stack</h1>
        <h1 className={highlightProjects()} onClick={() => {scrollTo(projectsRef.current)}}>projects</h1>
        <h1 className={highlightContact()} onClick={() => {scrollTo(contactRef.current)}}>contact</h1>
      </div>
    </div>
  )
}

export default Sidebar