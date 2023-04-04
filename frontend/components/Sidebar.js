import { CalendarIcon, EditIcon, InfoIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import Link from "next/link";


export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" m="4" spacing="4">
        <ListItem>
            <ListIcon as={EditIcon} color="white"></ListIcon>
            <Link href="/">Home</Link>    
        </ListItem>  
        <ListItem>
            <ListIcon as={EditIcon} color="white"></ListIcon>
            <Link href="cards">Cards</Link>    
        </ListItem>                 
        <ListItem>
            <ListIcon as={CalendarIcon} color="white"></ListIcon>
            <Link href="tabular">Tabs</Link>    
        </ListItem>
        <ListItem>
            <ListIcon as={CalendarIcon} color="white"></ListIcon>
            <Link href="forms">Forms</Link>    
        </ListItem>
        <ListItem>
            <ListIcon as={CalendarIcon} color="white"></ListIcon>
            <Link href="toaster">Toast</Link>    
        </ListItem>        
    </List>
  )
}
