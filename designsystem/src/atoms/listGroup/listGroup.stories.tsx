import { Story } from '@storybook/react'
import { List, ListProps } from './listGroup'
import { ListItem } from './listItem'

const ListComponent = {
  title: 'Design System/Atoms/List',
  component: List,
  argTypes: {
    variant: {
      type: 'select',
      options: ['basic'],
      defaultValue: 'basic',
    },
    type: {
      type: 'select',
      options: ['list', 'flush'],
      defaultValue: 'list',
    },
  },
}

export default ListComponent;

const Template: Story<ListProps> = (args) => (
  <List {...args}>
    <ListItem variant="basic" type="flush">
      List item one
    </ListItem>
    <ListItem variant="basic" type="flush">
      List item two
    </ListItem>
    <ListItem variant="basic" type="flush">
      List item three
    </ListItem>
  </List>
)

export const Lists = Template.bind({})
Lists.args = {}
const TemplateMedia: Story<ListProps> = (args) => (
  <List {...args}>
    <ListItem
      variant="basic"
      type="flush"
      children={
        <div className="flex align-start">
          <div
            style={{ width: '50px', height: '50px' }}
            className="bg-theme-primary rounded shrink-0 flex mr-3"
          ></div>
          <div className="media-body">
            <h5 className="font-bold">List-based media object</h5>
            Cras sit amet nibh libero.
          </div>
        </div>
      }
    ></ListItem>
    <ListItem
      variant="basic"
      type="flush"
      children={
        <div className="flex align-start">
          <div
            style={{ width: '50px', height: '50px'}}
            className="bg-theme-primary rounded shrink-0 flex mr-3"
          ></div>
          <div className="media-body">
            <h5 className="font-bold">List-based media object</h5>
            Cras sit amet nibh libero.
          </div>
        </div>
      }
    ></ListItem>
    <ListItem
      variant="basic"
      type="flush"
      children={
        <div className="flex align-start">
          <div
            style={{ width: '50px', height: '50px'}}
            className="bg-theme-primary rounded shrink-0 flex mr-3"
          ></div>
          <div className="media-body">
            <h5 className="font-bold">List-based media object</h5>
            Cras sit amet nibh libero.
          </div>
        </div>
      }
    ></ListItem>
  </List>
)

export const MediaList = TemplateMedia.bind({})
MediaList.args = {}
