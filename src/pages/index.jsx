import Game from '../components/Game'
import 'tailwindcss/tailwind.css'
import { useState } from 'react'

export default function Home() {

  const [modalFlag, setModalFlag] = useState(false)

  return (
    <div className='w-full h-screen bg-radial flex justify-center items-center'>
      <Game></Game>
      <div className={`fixed w-screen z-10 h-screen inset-0 modal flex justify-center items-center ${modalFlag ? "" : "hidden"}`}>
        <div className="rounded-lg   w-80 flex flex-col justify-between items-center bg-gray-200 p-5">
          <div className="text-gray-900 font-bold text-2xl flex justify-between items-center w-full mb-5">
            <div>
              RULES
            </div>
            <button onClick={() => setModalFlag(false)}>
              <img src="images/icon-close.svg" className="w-6 h-6" alt="" />
            </button>
          </div>
          <img src="images/image-rules-bonus.svg" className="w-full" alt="" />
        </div>
      </div>
      <button className="bg-transparent border-2 border-gray-200 p-3 font-semibold tracking-widest
       absolute right-8 bottom-8 rounded-lg px-10" onClick={() => setModalFlag(true)}>
        RULES
      </button>
    </div>
    
  )
}
