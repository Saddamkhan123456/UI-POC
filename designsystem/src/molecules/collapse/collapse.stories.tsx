import { useState } from 'react';
import { Story } from '@storybook/react';
import {
  Collapse,
  CollapseBody,
  CollapseHeader,
  CollapseProps,
} from './collapse';
import classNames from 'classnames';

const CollapseComponent = {
  title: 'Design System/Molecules/Collapse',
  component: Collapse,
};

export default CollapseComponent

const Template: Story<CollapseProps> = (args) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <Collapse {...args}>
      <CollapseHeader
        onClick={handleChange}
        id={1}
        className="rounded p-2 border border-theme-secondary mb-2 cursor-pointer"
      >
        Collapsible Header
      </CollapseHeader>
      <CollapseBody collapsed={expanded}>
        <div
          className={classNames('p-2 rounded border border-theme-secondary')}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </CollapseBody>
    </Collapse>
  );
};
export const Default = Template.bind({});

const AccordionTemplate: Story<CollapseProps> = (args) => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel: any) => (newExpanded: string | Boolean) => {
    console.log('new expanded = ', newExpanded);
    setExpanded(expanded === panel ? '' : panel);
  };
  return (
    <Collapse {...args}>
      <CollapseHeader
        onClick={handleChange('panel1')}
        id={1}
        className="rounded p-2 border border-theme-secondary mb-2 cursor-pointer"
      >
        Collapsible Header 1
      </CollapseHeader>
      <CollapseBody collapsed={expanded === 'panel1'}>
        <div
          className={classNames('p-2 rounded border mb-2 border-theme-secondary')}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </CollapseBody>
      <CollapseHeader
        id={2}
        onClick={handleChange('panel2')}
        className="rounded p-2 border border-theme-secondary mb-2 cursor-pointer"
      >
        Collapsible Header 2
      </CollapseHeader>
      <CollapseBody collapsed={expanded === 'panel2'}>
        <div
          className={classNames('p-2 rounded border border-theme-secondary')}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </CollapseBody>
    </Collapse>
  );
};
export const Accordion = AccordionTemplate.bind({});
