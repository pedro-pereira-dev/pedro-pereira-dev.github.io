import { ConfigurationType } from '../'

import Configuration from '../../config.json'
const config: ConfigurationType = Configuration

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 w-full flex justify-center p-5 bg-white bg-opacity-80">
      <div className="w-full max-w-5xl">
        <a href="/" className="font-bold text-lg text-black">
          {config?.details?.name}
        </a>
        <div className="flex flex-wrap space-x-10">
          {config?.tabs.map((tab, index) => (
            <a
              href={`#${tab?.anchor}`}
              className="hover:text-black"
              key={`tab-${index}`}
            >
              {tab?.anchor}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
