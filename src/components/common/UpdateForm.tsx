import { Box, Button, Flex, FormLabel, Input, Radio, RadioGroup, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

export const UpdateForm = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [markDiv, setMarkDiv] = useState(1)

  return (
    <Box p={4} m={4} w={540} margin={'auto'} h={540} borderRadius={'lg'} bg={'white'}>
      <Box pb={4}>
        <FormLabel>Title</FormLabel>
        <Input type='text' placeholder='Type your memo title !!' />
      </Box>
      <Box pb={4}>
        <FormLabel>Category</FormLabel>
        <Input type='text' placeholder='Type your memo category !!' />
      </Box>
      <Box pb={4}>
        <FormLabel>Description</FormLabel>
        <Textarea placeholder='Type your memo description !!'></Textarea>
      </Box>
      <Box pb={4}>
        <FormLabel>Date</FormLabel>
        <Input type='text' placeholder='Date should be typed to YYYY/MM/DD !!' />
      </Box>
      <Box>
        <FormLabel>Hidden Switch</FormLabel>
        <RadioGroup defaultValue='1'>
          <Flex flexDirection={'column'}>
            <Radio value='1'>ON</Radio>
            <Radio value='0'>OFF</Radio>
          </Flex>
        </RadioGroup>
      </Box>
      <Button background='cyan.500' color='white' _hover={{ background: 'cyan.600' }}>
        Update
      </Button>
    </Box>
  )
}
