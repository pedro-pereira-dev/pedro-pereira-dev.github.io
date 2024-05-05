import { ConfigurationType } from '../'

import Configuration from '../../config.json'
const config: ConfigurationType = Configuration

export default function Footer() {
  return (
    <footer className="w-full flex flex-wrap justify-center space-x-2 p-7 text-white bg-zinc-800">
      <div>
        Copyright &copy; {config?.details?.name} {new Date().getFullYear()}.
      </div>
      <div>All rights reserved.</div>
    </footer>
  )
}
