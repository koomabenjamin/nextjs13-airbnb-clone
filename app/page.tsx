import Image from 'next/image'
import { BiLoaderAlt } from 'react-icons/bi';

export default function Home() {
  return (
    <div
      className='
        text-rose-500
        text-2xl'
    >
      <span>Loading...</span>
      <BiLoaderAlt/>
    </div>
  )
}
