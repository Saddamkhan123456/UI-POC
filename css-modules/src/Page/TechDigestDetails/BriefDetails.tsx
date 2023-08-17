import React from "react";
import SidebarBody from "../../Components/Molecules/Sidebar/SidebarBody";
import SidebarHeader from "../../Components/Molecules/Sidebar/SidebarHeader";

const BriefDetails = () => {
  return (
    <>
      <SidebarHeader title="Brief Details" variant="h1" />
      <SidebarBody>
        <h6>Purescript is a distributed streaming platform. What exactly does that mean?</h6>
        <p>A streaming platform has three key capabilities:</p>
        <ul>
          <li>
            Publish and subscribe to streams of records, similar to a message queue or enterprise messaging system.
          </li>
          <li>Store streams of records in a fault-tolerant durable way.</li>
          <li>Process streams of records as they occur.</li>
        </ul>
        <p>Purescript is generally used for two broad classes of applications:</p>
        <ul>
          <li> Building real-time streaming applications that transform or react to the streams of data</li>
          <li> Building real-time streaming applications that transform or react to the streams of data</li>
        </ul>

        <p>
          To understand how Purescript does these things, let's dive in and explore Purescript's capabilities from the
          bottom up. First a few concepts:
        </p>
        <ul>
          <li>
            Purescript is run as a cluster on one or more servers that can span multiple data centers. The Purescript
            cluster stores stream of records in categories called topics.
          </li>
          <li>Each record consists of a key, a value, and a timestamp.</li>
          <li>
            The Streams API allows an application to act as a stream processor, consuming an input stream from one or
            more topics and producing an output stream to one or more output topics, effectively transforming the input
            streams to output streams.
          </li>
          <li>
            The Connector API allows building and running reusable producers or consumers that connect Purescript topics
            to existing applications or data systems. For example, a connector to a relational database might capture
            every change to a table.
          </li>
          <li>
            Purescript is run as a cluster on one or more servers that can span multiple data centers. The Purescript
            cluster stores stream of records in categories called topics.
          </li>
          <li>
            The Connector API allows building and running reusable producers or consumers that connect Kafka topics to
            existing applications or data systems. For example, a connector to a relational database might capture every
            change to a table.
          </li>
          <li>
            Purescript is run as a cluster on one or more servers that can span multiple data centers. The Purescript
            cluster stores stream of records in categories called topics.
          </li>
        </ul>
      </SidebarBody>
    </>
  );
};

export default BriefDetails;
