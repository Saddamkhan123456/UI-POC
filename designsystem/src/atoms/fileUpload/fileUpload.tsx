import classNames from 'classnames'
import { HTMLAttributes } from 'react'

export interface FileUploadProps extends HTMLAttributes<HTMLElement> {
  FileType?: 'default'
  size?: 'small' | 'medium' | 'large'
  disabled: boolean
}
export const FileUpload = ({
  FileType = 'default',
  size = 'medium',
  disabled,
  className,
  ...props
}: FileUploadProps) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 w-96">
        <input
          className={classNames(
            FileType === 'default' && !disabled
              ? 'form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-dotted border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              : FileType === 'default' &&
                  'bg-theme-disabled text-theme-neutral35',
            size === 'small' && 'py-1 px-1.5 text-sm',
            size === 'medium' && 'py-2 px-3 text-base',
            size === 'large' && 'py-3 px-4 text-base',
            className,
            'form-control block w-full  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-dotted border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
          )}
          type="file"
          id="formFile"
        />
      </div>
    </div>
  )
}
