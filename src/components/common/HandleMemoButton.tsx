import { Button } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children: React.ReactNode
  onClick: (id: any) => void
  disabled?: boolean
  loading?: boolean
}

export const HandleMemoButton: React.FC<Props> = (props) => {
  const { children, onClick, disabled } = props
  return (
    <Button
      my={2}
      mx={4}
      bg='cyan.500'
      color='white'
      _hover={{ opacity: 0.8 }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
