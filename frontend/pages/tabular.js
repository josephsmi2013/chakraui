import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from '@chakra-ui/react'


export default function Tabular() {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>One</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Two</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
