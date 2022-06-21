import { HTMLAttributes } from 'react'

export interface HrProps extends HTMLAttributes<HTMLElement> {}
export const Hr = ({className, ...props }: HrProps) => {
  return (
    <>
      <hr className={className}></hr>
    </>
  )
}
