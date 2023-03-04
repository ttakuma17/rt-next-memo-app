import { Box, Button, Flex, Heading, Spacer, Switch, Textarea } from '@chakra-ui/react'
import React from 'react'

export const MemoCard = () => {
  return (
    <Box
      bg={'white'}
      m={4}
      py={4}
      px={4}
      w='360px'
      h='300px'
      boxShadow='2xl'
      borderRadius={'xl'}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
    >
      <Flex>
        <Heading size='lg' pl={1} pb={4}>
          title
        </Heading>
      </Flex>
      <Textarea
        resize='none'
        h='160px'
        isReadOnly={true}
        autoFocus={false}
        value={'description'}
        textColor='gray.500'
      ></Textarea>
      <Flex pt={4} mb={4} alignItems='center'>
        <Button mr={4}>Update</Button>
        <Button>Delete</Button>
        <Spacer />
        <Switch id='isSwitch' px={4} ml={4} />
      </Flex>
    </Box>
  )
}
