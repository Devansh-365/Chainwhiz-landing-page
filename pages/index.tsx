import { Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chainwhiz</title>
        <meta 
        name="description" 
        content="A bounty marketplace for Web3 projects, builders,and communities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Home
