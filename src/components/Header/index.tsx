export default function Header() {
  return (
    <nav className="sticky top-0 z-10 w-full flex justify-center p-5 bg-white bg-opacity-80">
      <div className="w-full max-w-5xl">
        <a href="/" className="font-bold text-lg text-black">
          Pedro Pereira
        </a>
        <div className="flex flex-wrap space-x-10">
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#experience" className="hover:text-black">
            Experience
          </a>
          <a href="#education" className="hover:text-black">
            Education
          </a>
          <a href="#projects" className="hover:text-black">
            Projects
          </a>
        </div>
      </div>
    </nav>
  )
}
