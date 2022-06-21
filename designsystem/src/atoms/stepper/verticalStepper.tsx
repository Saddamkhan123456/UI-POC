import React from 'react'
import { HTMLAttributes } from 'react'
import { radios } from '@storybook/addon-knobs'
import { Button } from '../button'

export interface StepperProps extends HTMLAttributes<HTMLElement> {}

const steps = [
  {
    label: 'Step 1',
    component: <div>Step 1 Data</div>,
    exitValidation: false,
  },
  {
    label: 'Step 2',
    component: <div>Step 2 Data</div>,
  },
  {
    label: 'Step 3',
    component: <div>Step 3 Data</div>,
  },
  {
    label: 'Step 4',
    component: <div>Step 4 Data</div>,
  },
]

const labelStates = 'States'
const labelSteps = 'Step Options'
const stateOptions = {
  Active: 'active',
  Error: 'error',
}
const stepOptions = {
  Background: 'step-bg',
  Outline: 'step-outline',
}
const defaultState = 'active'
const defaultStep = 'step-bg'
const groupId = 'GROUP-ID1'

class ComponentStepper extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = { activeStep: 0 }
  }

  handleStepChange(activeStep: any) {
    this.setState({ activeStep })
  }

  nextStep() {
    if (this.state.activeStep < this.props.steps.length - 1) {
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
  }

  previousStep() {
    if (this.state.activeStep > 0) {
      this.setState({ activeStep: this.state.activeStep - 1 })
    }
  }

  render() {
    const { steps, onFinish } = this.props
    const { activeStep } = this.state
    const stepIndicators = steps.map(
      (step: { label: React.ReactNode }, i: number) => {
        return (
          <div
            className={
              `stepper-inner ${activeStep === i ? 'active' : ''}` +
              radios(labelStates, stateOptions, defaultState, groupId)
            }
            onClick={() => this.handleStepChange(i)}
          >
            <div
              className={
                `stepper-number ` +
                radios(labelSteps, stepOptions, defaultStep, groupId)
              }
            >
              <span>{i + 1}</span>
            </div>
            {i !== steps.length && (
              <div className="stepper-label">{step.label}</div>
            )}
          </div>
        )
      },
    )

    return (
      <div className="react-stepper vertical">
        <div className="stepper-indicator  h-96">{stepIndicators}</div>
        <div className="stepper-data">{steps[activeStep].component}</div>
        <div className="stepper-actions text-right mt-3">
          <Button
            onClick={() => this.previousStep()}
            className="btn btn-outline-primary mr-4"
          >
            Previous
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              disabled={!!steps[activeStep].exitValidation}
              onClick={onFinish}
              className="btn btn-primary"
            >
              Submit
            </Button>
          ) : (
            <Button
              disabled={!!steps[activeStep].exitValidation}
              onClick={() => this.nextStep()}
              className="btn btn-primary"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    )
  }
}

export const VerticalStepper = () => {
  const submit = () => {
    alert('submit action')
  }

  return <ComponentStepper steps={steps} onFinish={submit} />
}
