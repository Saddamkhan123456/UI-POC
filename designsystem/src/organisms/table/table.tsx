import React from 'react'
import { useTable, useSortBy, useRowSelect, usePagination } from 'react-table'
// import { Button } from '../../atoms/button'
// import { Input } from '../../atoms/input'

export interface TableProps {
    columns: any,
    data: any,
    isSortable?: boolean,
    isSelectable?: boolean,
    // isPaginated?: boolean,
}

const IndeterminateCheckbox = React.forwardRef<HTMLInputElement, {
    indeterminate: any
}>(
  ({ indeterminate, ...rest }, ref) => {

    const defaultRef = React.useRef<HTMLInputElement>()
    const resolvedRef = ref as React.MutableRefObject<HTMLInputElement> || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

export function Table({
    columns,
    data,
    isSortable,
    isSelectable,
    // isPaginated,
    ...props
  }: TableProps) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      // page,
      rows,
      prepareRow,
      // The rest of these things are super handy, too ;)
      // canPreviousPage,
      // canNextPage,
      // pageOptions,
      // pageCount,
      // gotoPage,
      // nextPage,
      // previousPage,
      // setPageSize,
      // state: { pageIndex, pageSize },
    } = useTable({
      columns,
      data,
      initialState: {
        // pageIndex: 1,
        // pageSize: 3
      },
    }, useSortBy, usePagination, useRowSelect,
    hooks => {
      isSelectable && hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
    )
  
    // Render the UI for your table
    return (
      <>
        <table {...getTableProps()} className="table border min-w-full">
          <thead className='border-b'>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th className='margin-0 p-2 border-b border-r bg-theme-neutral10'
                    {...column.getHeaderProps(isSortable ? column.getSortByToggleProps() : '')}>
                        {column.render('Header')}
                      {isSortable && <span>
                        {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                      </span>}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {
            // isPaginated ?
            // <tbody {...getTableBodyProps()}>
            //   {page.map((row: any, i: any) => {
            //     prepareRow(row)
            //     return (
            //       <tr {...row.getRowProps()} className="hover:bg-theme-neutralLighter20">
            //         {row.cells.map((cell: any) => {
            //           return <td className='margin-0 p-2 border-b border-r' {...cell.getCellProps()}>{cell.render('Cell')}</td>
            //         })}
            //       </tr>
            //     )
            //   })}
            // </tbody>
            // :
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()} className="hover:bg-theme-neutral20">
                    {row.cells.map(cell => {
                      return <td className='margin-0 p-2 border-b border-r' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          }
        </table>
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      {/* {isPaginated && <div className="pagination pt-3 flex items-center">
        <Button size="medium" className='rounded-l-md' onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </Button>
        <span style={{ width: '100px' }}>
          <Input
            className='rounded-none'
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
          />
        </span>
        <Button size="medium" className='rounded-r-md' onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </Button>
        <span>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
      </div>} */}
      </>
    )
  }
