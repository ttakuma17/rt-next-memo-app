import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

import AppPageTitle from '@/components/common/AppPageTitle'

const Home: NextPage = () => {
  return (
    <Box minH='100vh' backgroundColor='theme.main'>
      <AppPageTitle />
    </Box>
  )
}

export default Home
