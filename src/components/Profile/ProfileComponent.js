import React from 'react'
import {Tab, Tabs, TabList, TabPanel, TabPanels, Heading} from '@chakra-ui/react'
import ProductGrid from '../Products/ProductGrid'
import OrderComponent from '../Order/OrderComponent'
import ProfileDetails from './ProfileDetails'

export default function ProfileComponent(props) {
  return (
  <Tabs>
    <TabList>
      <Tab>User data</Tab>
      <Tab>Previous orders</Tab>
      <Tab>Own products</Tab>
      <Tab>Saved products</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <ProfileDetails user={props.user} />
      </TabPanel>
      <TabPanel>
        <Heading>Previous orders</Heading>
        <OrderComponent orders={props.user.orders} />
      </TabPanel>
      <TabPanel>
        <Heading>Products created</Heading>
        <ProductGrid products={props.user.productsCreated}/>
      </TabPanel>
      <TabPanel>
      <Heading>Saved products</Heading>
        <ProductGrid products={props.user.savedProducts} />
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}
