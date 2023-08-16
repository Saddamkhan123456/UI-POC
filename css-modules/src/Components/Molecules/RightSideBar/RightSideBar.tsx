import React from "react";
import SidebarBody from "../Sidebar/SidebarBody";
import SidebarHeader from "../Sidebar/SidebarHeader";
import Sidebar from "../Sidebar/Sidebar";

const RightSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader title="About - Brief Details" variant="h1" />
      <SidebarBody>
        Purescript is a distributed streaming platform. What exactly does that mean? A streaming platform has three key
        capabilities: Publish and subscribe to streams of records, similar to a message queue or enterprise messaging
        system. Store streams of records in a fault-tolerant durable way. Process streams of records as they occur.
        Purescript is generally used for two broad classes of applications: Building real-time streaming applications
        that transform or react to the streams of data Building real-time streaming applications that transform or react
        to the streams of data To understand how Purescript does these things, let's dive in and explore Purescript's
        capabilities from the bottom up. First a few concepts: Purescript is run as a cluster on one or more servers
        that can span multiple data centers. The Purescript cluster stores stream of records in categories called
        topics. Each record consists of a key, a value, and a timestamp. The Streams API allows an application to act as
        a stream processor, consuming an input stream from one or more topics and producing an output stream to one or
        more output topics, effectively transforming the input streams to output streams. The Connector API allows
        building and running reusable producers or consumers that connect Purescript topics to existing applications or
        data systems. For example, a connector to a relational database might capture every change to a table.
        Purescript is run as a cluster on one or more servers that can span multiple data centers. The Purescript
        cluster stores stream of records in categories called topics. The Connector API allows building and running
        reusable producers or consumers that connect Kafka topics to existing applications or data systems. For example,
        a connector to a relational database might capture every change to a table. Purescript is run as a cluster on
        one or more servers that can span multiple data centers. The Purescript cluster stores stream of records in
        categories called topics.
      </SidebarBody>
    </Sidebar>
  );
};

export default RightSideBar;
