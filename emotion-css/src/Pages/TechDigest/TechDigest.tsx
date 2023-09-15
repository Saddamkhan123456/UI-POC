import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Navbar from '../../Components/Molecules/Navbar';
import Accordian from '../../Components/Molecules/Accordian';
import Typography from '../../Components/Atoms/Typography';
import { AccordianList } from '../../Constants/Accordian.contant';

const options = ['Home', 'Languages', ' Purescript'];

const digestContainer = css`
  display: flex;
  flex-direction: column;
`;

const digestBody = css`
  padding: 2.5rem;
  background: #f8f8f8;
  display: flex;
  gap: 2.5rem;
  height: calc(100vh - 4.375rem);
`;

const digestLeftSection = css`
  width: 25rem;
  border-radius: 0.375rem;
  padding: 2.5rem;
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
`;

const digestRightSection = css`
  ${digestLeftSection};
  flex: 1;
  width: 100%;
  padding: 3.5rem 4rem;
  overflow-y: auto;
  ${digestContainer};
  gap: 1.5rem;
`;

const StyledTechDigestContainer = styled.div`
  ${digestContainer}
`;

const StyledTechDigestBody = styled.div`
  ${digestBody}
`;

const StyledTechDigestLeftSection = styled.div`
  ${digestLeftSection}
`;
const StyledTechDigestRightSection = styled.div`
  ${digestRightSection}
`;
const TechDigest = () => {
  return (
    <StyledTechDigestContainer>
      <Navbar options={options} showInput />
      <StyledTechDigestBody>
        <StyledTechDigestLeftSection>
          {AccordianList.map((item) => {
            return <Accordian label={item.label} listItems={item.listItems} />;
          })}
        </StyledTechDigestLeftSection>
        <StyledTechDigestRightSection>
          <Typography variant={'h3'} text={'About - Brief Details'} />
          <div>
            <Typography
              variant={'body'}
              text={
                'Purescript is a distributed streaming platform. What exactly does that mean?'
              }
              fontWeight='bold'
            />
            <Typography
              variant={'body'}
              text={`A streaming platform has three key capabilities: publish and subscribe to streams of records, similar to a message queue or enterprise messaging system. Store streams of records in a fault-tolerant durable way.Process streams of records as they occur. 
                 Purescript is generally used for two broad classes of applications:Building real-time streaming applications that transform or react to the streams of data. 
                   Building real-time streaming applications that transform or react to the streams of data. To understand how Purescript does these things, lets dive in and explore Purescripts capabilities from the bottom up. First a few concepts: Purescript is run as a cluster on one or more servers that can span multiple data centers. The Purescript cluster stores stream of records in categories called topics. 
                   Each record consists of a key, a value, and a timestamp. The Streams API allows an application to act as a stream processor, consuming an input stream from one or more topics and producing an output stream to one or more output topics, effectively transforming the input streams to output streams. The Connector API allows building and running reusable producers or consumers that connect Purescript topics to existing applications or data systems. 
                   For example, a connector to a relational database might capture every change to a table. Purescript is run as a cluster on one or more servers that can span multiple data centers. The Purescript  cluster stores stream of records in categories called topics. The Connector API allows building and running reusable producers or consumers that connect Kafka topics to existing applications or data systems. For example, a connector to a relational database might capture every change to a table. 
                   Purescript is run as a cluster on one or more servers that can span multiple data centers. The Purescript cluster stores stream of records in categories called topics.`}
            />
          </div>
        </StyledTechDigestRightSection>
      </StyledTechDigestBody>
    </StyledTechDigestContainer>
  );
};

export default TechDigest;
