import { Box, Flex, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { MemoCard } from '../components/common/MemoCard'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

const Home: NextPage = () => {
  return (
    <Flex minH='100vh' backgroundColor='theme.main' flexFlow={'column'}>
      <Header />
      <Flex justifyContent={'center'} alignItems={'center'} flex={1}>
        <MemoCard />
        <MemoCard />
        <MemoCard />
        <MemoCard />
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Home
