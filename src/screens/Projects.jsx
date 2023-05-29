import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";

import Ecomm from "../Projects/EComm";
import Viewer from '../Projects/Viewer'
import Event from "../Projects/Event";
import Chat from '../Projects/Chat';
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
          <TabPanel>
            <Viewer />
          </TabPanel>
          <TabPanel>
            <Event />
          </TabPanel>
          <TabPanel>
            <Chat />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Contact;
