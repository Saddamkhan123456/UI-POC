import classNames from 'classnames'

export interface ListProps {
  disabled?: boolean
  type?: 'list' | 'flush'
  children?: any
}

export const List = ({ type = 'list', disabled, children }: ListProps) => {
  return (
    <ul
      className={classNames(
        type === 'list' && !disabled
          ? 'bg-white rounded-lg border border-gray-200 w-96 text-gray-900 list-none'
          : type === 'list' &&
              'bg-white rounded-lg border border-gray-200 w-96 text-gray-900 list-none',
      )}
    >
      {children}
    </ul>
  )
}
