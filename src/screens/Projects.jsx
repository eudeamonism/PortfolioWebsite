import { Tabs, Tab, TabList, TabPanels, TabPanel, Text } from "@chakra-ui/react";

import Ecomm from "../Projects/EComm";
import Viewer from "../Projects/Viewer";
import Event from "../Projects/Event";
import Chat from "../Projects/Chat";
import Tour from "../Projects/Tour";
import Porty from "../Projects/Porty";
const Contact = () => {
  return (
    <>
      <Tabs isFitted variant="enclosed" mt="10">
        <TabList color={"gray.600"} mb="1em">
          <Tab _selected={{ color: "white", bg: "#1796F3" }} fontWeight={"medium"}>
            eCommerce
          </Tab>
          <Tab _selected={{ color: "white", bg: "#1796F3" }} fontWeight={"medium"}>
            Viewer
          </Tab>
          <Tab _selected={{ color: "white", bg: "#1796F3" }} fontWeight={"medium"}>
            Event
          </Tab>
          <Tab _selected={{ color: "white", bg: "#1796F3" }} fontWeight={"medium"}>
            Chat
          </Tab>
          <Tab _selected={{ color: "white", bg: "#1796F3" }} fontWeight={"medium"}>
            Touring
          </Tab>
          <Tab _selected={{ color: "white", bg: "#1796F3" }} fontWeight={"medium"}>
            Portfolio
          </Tab>
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
