import { Box, Flex, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { CreateForm } from '../components/common/CreateForm'
import { DeleteDialog } from '../components/common/DeleteDialog'
import FormModal from '../components/common/FormModal'

import { MemoCard } from '../components/common/MemoCard'
import { UpdateForm } from '../components/common/UpdateForm'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

import { useMemoData } from '../hooks/useMemoData'

const Home: NextPage = () => {
  // 動作確認 Spring Bootのデータを取得できることを確認済み
  // const { memos, getAllMemos, deleteMemo } = useMemoData()

  // useEffect(() => {
  //   getAllMemos()
  //   deleteMemo('101')
  //   console.log(memos)
  // }, [])
  return (
    <Flex minH='100vh' backgroundColor='theme.main' flexFlow={'column'}>
      <Header />
      <Flex justifyContent={'center'} alignItems={'center'} flex={1}>
        <MemoCard />
        <MemoCard />
        <MemoCard />
        <MemoCard />
      </Flex>
      <FormModal />
      <DeleteDialog />
      <Footer />
    </Flex>
  )
}

export default Home
