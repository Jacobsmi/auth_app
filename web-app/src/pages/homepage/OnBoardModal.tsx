import { Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Input } from "@chakra-ui/react";

const OnboardModal = ({ isOpen, handleClose }: { isOpen: boolean, handleClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={handleClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent maxWidth={"500px"}>
        <ModalHeader>User Info</ModalHeader>
        <ModalCloseButton onClick={handleClose} />
        <ModalBody>
          <Text>We just need a little more information to get you started.</Text>
          <FormControl>
            <Input type="text" placeholder="First Name" id="firstname" w={"40%"} mr={"10%"} />
            <Input type="text" placeholder="Last Name" id="lastname" w={"40%"} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={handleClose}>
            Cancel
          </Button>
          <Button colorScheme={"blue"}>Sign Up</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default OnboardModal;