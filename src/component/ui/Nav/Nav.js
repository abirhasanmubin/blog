// import {FaHome} from 'react-icons/fa'
// import {BiMenu} from 'react-icons/bi'

export default function Nav() {
  return (
    <nav className={'flex bg-teal-500 gap-2'}>
      <a className="text-white text-xl hover:text-blue-800" href="/">Home</a>
      <a className="text-white text-xl hover:text-blue-800" href="/">Blog</a>
      <a className="text-white text-xl hover:text-blue-800" href="/">About</a>
    </nav>
  )
}