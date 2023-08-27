import React from 'react'
import {Tab, Tabs, TabList, TabPanel, TabPanels} from '@chakra-ui/react'

export default function Profile() {
  return (
    <>
        <Tabs variant='enclosed'>
            <TabList>
                <Tab>Profile Data</Tab>
                <Tab>Prevoius Order History</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </>
  )
}
