// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  const onSubmit = jest.fn()

  render(<Login onSubmit={onSubmit} />)
  const username = screen.getByLabelText('Username')
  const password = screen.getByLabelText('Password')

  userEvent.type(username, 'hhassan')
  userEvent.type(password, '123')

  const submitBtn = screen.getByRole('button')
  userEvent.click(submitBtn, {name: /submit/i})
  expect(onSubmit).toHaveBeenCalledWith({username: 'hhassan', password: '123'})
})

/*
eslint
  no-unused-vars: "off",
*/
