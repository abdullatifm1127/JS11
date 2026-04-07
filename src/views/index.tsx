import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Praktikum Next.js Pages Router</title>
      </head>
      
      <Navbar />

      <h1>Praktikum Next.js Pages Router abdul</h1>
      <p>Mahasiswa D4 Teknik InfromatikaPengembangan Web</p>
    </div>
  )
}

    