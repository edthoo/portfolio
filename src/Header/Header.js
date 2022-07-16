

function Header() {

  return (
    <nav className="w-screen h-20 bg-slate-400 flex items-center justify-end px-4">
        <ul className="grid grid-cols-5 gap-4 text-center">
          <li>about</li>
          <li>experience</li>
          <li>work</li>
          <li>contact</li>
          <li>resume</li>
        </ul>
    </nav>
  )
}

export default Header