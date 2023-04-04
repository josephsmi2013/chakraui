import { Flex, Box, Heading, Spacer, Button, Image, HStack, useToast, Avatar, AvatarBadge, Text} from '@chakra-ui/react'

export default function Navbar() {
  const toast = useToast();

  const showToast = () =>
  toast({
    title: 'Sign Up',
    description: "Sign up is currently closed",
    status: 'error',
    duration: 3000,
    isClosable: true,
    position: 'top'
  })
  
  return (
    <Flex as="nav" minWidth="max-content" alignItems="center" gap="2" m="4">
      <Box p="2">
        <HStack>
          <Image
            boxSize="50px"
            borderRadius="full"
            src="https://static7.depositphotos.com/1193075/726/i/450/depositphotos_7269076-stock-photo-pro-football-on-the-field.jpg"
            mr="2"
          ></Image>
          <Heading size="md" color={'purple.500'}>No-Cry</Heading>
        </HStack>
      </Box>
      <Spacer />
 
      <HStack spacing="20px">
        <Avatar name="Joseph Smith"> 
          <AvatarBadge width="1.3em" bg="white">
              <Text fontSize={"xs"} color="purple">99</Text>
          </AvatarBadge>
        </Avatar>
        <Button onClick={showToast} colorScheme="purple"> Sign Up</Button>
        <Button colorScheme="purple">Log in</Button>
      </HStack>
    </Flex>
  );
}
