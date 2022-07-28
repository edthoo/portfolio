import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'


function Header(props) {
  const { headerRef } = props.data

  return (
    <nav ref={headerRef} className="max-w-screen h-16 bg-[#171717] text-white flex items-center justify-between px-4 xl:px-12">
      <h1 className="text-sm ml-1">Edmund Thoo</h1>
      <div className="flex">
        <a href="https://github.com/edthoo" className="mx-2">
          <FaGithub className="text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/edmund-thoo-95b80b139/" className="mx-2">
          <FaLinkedin className="text-xl" />
        </a>
      </div>
      <a href="https://drive.google.com/file/d/1Xo-5fFJi3hmM1kB59SlG2qegMj9d8kCb/view?usp=sharing" className="text-white bg-[#3c6e71] hover:bg-[#5D8689] font-medium rounded-lg text-sm px-3 py-1 dark:bg-[#3c6e71] dark:hover:bg-[#5D8689]">resume</a>
    </nav>
  )
}

export default Header