import config from '../../config.json'

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 w-full flex justify-center p-5 bg-white bg-opacity-80">
      <div className="w-full max-w-5xl">
        <a href="/" className="font-bold text-lg text-black">
          {config.name}
        </a>
        <div className="flex flex-wrap space-x-10">
          {config.tabs.map((tab, index) => (
            <a
              href={`#${tab.name.toLowerCase()}`}
              className="hover:text-black"
              key={`tab-${index}`}
            >
              {tab.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
