import { Tabs, Tab, TabList, TabPanels, TabPanel, Spacer } from "@chakra-ui/react";

import Ecomm from "../Projects/EComm";

const Contact = () => {
  return (
    <>
      <Tabs isFitted variant="enclosed" mt='10'>
        <TabList mb="1em">
          <Tab>eCommerce</Tab>
          <Tab>Viewer</Tab>
          <Tab>Event</Tab>
          <Tab>Chat</Tab>
          <Tab>Touring</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Ecomm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Contact;
