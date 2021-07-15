// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  //arrange...
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(<Counter />, div)

  //also arrange
  const msgDiv = div.firstChild.querySelector('div')
  expect(msgDiv.textContent).toBe('Current count: 0') //assert

  const btns = div.querySelectorAll('button') //arrange buttons!

  const increment = btns[1]

  const incrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  increment.dispatchEvent(incrementClickEvent)

  expect(msgDiv.textContent).toBe('Current count: 1') //assert

  const decrement = btns[0]
  //check that counter decrements onClick:

  const decrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  decrement.dispatchEvent(decrementClickEvent)
  expect(msgDiv.textContent).toBe('Current count: 0')

  //always clean up after,  If you don't cleanup, then it could impact other tests and/or cause a memory leak

  div.remove()
})

/* eslint no-unused-vars:0 */
