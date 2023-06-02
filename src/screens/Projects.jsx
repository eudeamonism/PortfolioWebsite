import { Tabs, Tab, TabList, TabPanels, TabPanel, Text } from "@chakra-ui/react";

import Ecomm from "../Projects/EComm";
import Viewer from "../Projects/Viewer";
import Event from "../Projects/Event";
import Chat from "../Projects/Chat";
import Tour from "../Projects/Tour";
import Porty from '../Projects/Porty'
const Contact = () => {
  return (
    <>
      <Tabs isFitted variant="enclosed" mt="10">
        <TabList mb="1em">
          <Tab>eCommerce</Tab>
          <Tab>Viewer</Tab>
          <Tab>Event</Tab>
          <Tab>Chat</Tab>
          <Tab>Touring</Tab>
          <Tab>Portfolio</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Ecomm />
          </TabPanel>
          <TabPanel>
            <Viewer />
          </TabPanel>
          <TabPanel>
            <Event />
          </TabPanel>
          <TabPanel>
            <Chat />
          </TabPanel>
          <TabPanel>
            <Tour />
          </TabPanel>
          <TabPanel>
            <Porty />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Contact;
