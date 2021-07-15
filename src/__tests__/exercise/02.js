// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
// 🐨 import the `render` and `fireEvent` utilities from '@testing-library/react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'
import {toHaveTextContent} from '@testing-library/jest-dom'

test('counter increments and decrements when the buttons are clicked', () => {
  //arrange..
  const {container} = render(<Counter />)
  const [decrement, increment] = container.querySelectorAll('button')
  const message = container.firstChild.querySelector('div')
  expect(message.textContent).toBe('Current count: 0')

  fireEvent.click(increment) //act!
  expect(message).toHaveTextContent('Current count: 1') //assert!

  fireEvent.click(decrement) //act!
  expect(message).toHaveTextContent('Current count: 0') //assert!
})
