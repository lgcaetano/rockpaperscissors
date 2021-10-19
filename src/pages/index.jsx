import Game from '../components/game'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className='w-full h-screen bg-radial flex justify-center items-center'>
      <Game></Game>
    </div>
  )
}
