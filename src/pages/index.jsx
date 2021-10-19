import Game from '../components/Game'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className='w-full h-screen bg-radial flex justify-center items-center'>
      <Game></Game>
    </div>
  )
}
