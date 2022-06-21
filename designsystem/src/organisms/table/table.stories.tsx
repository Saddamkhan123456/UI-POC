
import { ComponentMeta, Story } from "@storybook/react";
import React from "react";
import { Table, TableProps } from "./index";

export default {
  title: "Design System/Organisms/React Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const columns = [
  {
    Header: 'Column 1',
    accessor: 'col1', // accessor is the "key" in the data
  },
  {
    Header: 'Column 2',
    accessor: 'col2',
  },
]

const data = [
  {
    col1: 'Hello',
    col2: 'World',
  },
  {
    col1: 'react-table',
    col2: 'rocks',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'Iron Man',
    col2: 'Avanger',
  },
  {
    col1: 'Batman',
    col2: 'Alfredo',
  },
  {
    col1: 'SuperMan',
    col2: 'SuperWomen',
  },
  {
    col1: 'Hello',
    col2: 'World',
  },
  {
    col1: 'react-table',
    col2: 'rocks',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'Iron Man',
    col2: 'Avanger',
  },
  {
    col1: 'Batman',
    col2: 'Alfredo',
  },
  {
    col1: 'SuperMan',
    col2: 'SuperWomen',
  },
]

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
    columns: columns,
    data: data,
};

export const Sortable = Template.bind({});
Sortable.args = {
  columns: columns,
  data: data,
  isSortable: true
};

export const Selectable = Template.bind({});
Selectable.args = {
  columns: columns,
  data: data,
  isSelectable: true
};


// export const PaginatedTable = Template.bind({});
// PaginatedTable.args = {
//     columns: columns,
//     data: data,
//     isPaginated: true,
// };

