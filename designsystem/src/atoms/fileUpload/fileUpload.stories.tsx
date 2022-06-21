import { Story } from '@storybook/react'
import { FileUpload, FileUploadProps } from './index'

const FileUploadComponent =  {
  title: 'Design System/Atoms/File Upload',
  component: FileUpload,
  argTypes: {
    size: {
      type: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'small',
    },
    disabled: {
      type: 'boolean',
    },
  },
}

export default FileUploadComponent;

const Template: Story<FileUploadProps> = (args) => <FileUpload {...args} />

export const FileUploadInput = Template.bind({})
FileUploadInput.args = {
  size: 'medium',
  FileType: 'default',
}
