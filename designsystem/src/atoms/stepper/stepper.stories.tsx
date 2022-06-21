import { Story } from '@storybook/react'
import { ReactStepper, StepperProps } from './index'
import { VerticalStepper } from './verticalStepper'

const Stepper = {
  title: 'Design System/Atoms/Stepper',
  component: ReactStepper,
  argTypes: {},
}

export default Stepper

const Template: Story<StepperProps> = (args) => <ReactStepper {...args} />

export const HorizontalStepper = Template.bind({})
HorizontalStepper.args = {}

const TemplateIcon: Story<StepperProps> = (args) => <VerticalStepper />

export const VerticalSteppers = TemplateIcon.bind({})
VerticalSteppers.args = {}
