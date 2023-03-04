import { Box, Text, Flex, Spacer, Button } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'

export const Header = () => {
  return (
    <Box height={70} bg={'cyan.600'}>
      <Text fontSize='2xl' color={'white'}>
        <Flex>
          <Box pl={4} pt={4}>
            <AiOutlineEdit size={40} />
          </Box>
          <Box pl={2} pt={4}>
            Notes App
          </Box>
          <Spacer />
          <Button mr={4} mt={4} color={'cyan.900'}>
            Create
          </Button>
        </Flex>
      </Text>
    </Box>
  )
}
