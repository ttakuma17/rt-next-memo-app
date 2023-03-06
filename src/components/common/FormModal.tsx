import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { CreateForm } from './CreateForm'

export const FormModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <div>
      <Button onClick={onOpen}>Create or Update</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>登録フォーム</ModalHeader>
          <ModalBody>
            <CreateForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
export default FormModal
