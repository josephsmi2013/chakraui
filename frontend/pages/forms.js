import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'

export default function Forms() {
  return (
    <form>
        <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder='Enter name here' p={0}/>

            <Editable defaultValue="I'm an editable control">
                <EditablePreview/>
                <EditableInput/>
            </Editable>
        </FormControl>
    </form>
  )
}
