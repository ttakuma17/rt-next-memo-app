import { Box, Button, Center, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Page404: React.FC = () => {
  return (
    <Flex justify={'center'} align={'center'} h={'100vh'} bg={'white'}>
      <Image src='/disapointed.png' alt='' width={300} height={300} />
      <Box padding={20}>
        <Heading as={'h1'}>404</Heading>
        <Spacer />
        <Text fontSize='4xl'>お探しのページは見つかりませんでした</Text>
        <Spacer />
        <Link href='/'>
          <Button colorScheme='blue'>ホームに戻る</Button>
        </Link>
      </Box>
    </Flex>
  )
}

export default Page404
