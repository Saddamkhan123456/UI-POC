import React from 'react';
import './App.css';
import { Button } from './atoms/button';
import { Card, CardHeader, CardBody, CardFooter } from './molecules/card';

function App() {
  return (
    <div className='App container mx-auto'>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
      <Card cardClass="border" shadow={true}>
        <CardHeader>
          Card Header
        </CardHeader>
        <CardBody>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
        <ul className='list-disc space-y-2'>
          <li className='flex items-start text-red-600'>
            <span className='h-6 flex items-center sm:h-7'>
              <svg className='flex-shrink-0 h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
            </span>
            <p className='ml-2'>
              Customizing your 
              <code className='text-sm font-bold text-gray-900'>
                tailwind.config.js
              </code>{' '}
              file
            </p>
          </li>
        </ul>
        </CardBody>
        <CardFooter>
          <div className="flex justify-end gap-4">
          <Button
            isRounded
            size="small"
            variant="secondary"
          >
            Cancel
          </Button>
          <Button
            isRounded
            size="small"
            variant="primary"
          >
            Apply
          </Button>
          </div>
        </CardFooter>
      </Card>
      </div>
    </div>
  );
}

export default App;
