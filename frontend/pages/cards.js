import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Text, Flex, Box, Spacer, Divider, Button, HStack, Heading, Avatar } from '@chakra-ui/react'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  return {
      props: {index: data}
  }
}


export default function Cards({index}) {
  return (
    <SimpleGrid spacing="4" minChildWidth="250px">
      {index && index.map(todo => (
            <Card key={todo.id} borderTop="8px" borderColor={'purple.400'}>
              <CardHeader>
                <Flex>
                  <Avatar />
                  <Spacer />
                  <Box>
                    <Heading></Heading>
                    <Text>ID: {todo.id}</Text>                    
                    <Text>Author: Joe Smith</Text>                    
                    </Box>
                </Flex>
              </CardHeader>
              <CardBody color="gray.600">
                <Text>{todo.title}</Text>
              </CardBody>
              <Divider color={'gray.200'} />
              <CardFooter p="0" bgColor={'purple.200'}>
                  <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                  <Button variant="ghost" leftIcon={<EditIcon />}>Edit</Button>
              </CardFooter></Card>
        ))} 
    </SimpleGrid>
  )
}
