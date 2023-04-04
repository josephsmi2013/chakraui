import { Button, useToast } from '@chakra-ui/react'


export default function ToastExample() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Toast Title',
            description: "This is a toast description",
            status: 'success',
            duration: 3000,
            isClosable: true
          })
        }
      >
        Show Toast
      </Button>
    )
  }