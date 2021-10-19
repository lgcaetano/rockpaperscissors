import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Game from '../components/game'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className='w-full h-screen bg-radial flex justify-center items-center'>
      <Game></Game>
    </div>
  )
}
