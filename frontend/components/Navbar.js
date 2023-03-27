import { Flex, Box, Heading, Spacer, ButtonGroup, Button, Image, HStack} from '@chakra-ui/react'

export default function Navbar() {
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
          <Heading size="md" color="purple">No-Cry</Heading>
        </HStack>
      </Box>
      <Spacer />
      <ButtonGroup gap="2" colorScheme="purple">
        <Button>Sign Up</Button>
        <Button>Log in</Button>
      </ButtonGroup>
    </Flex>
  );
}
