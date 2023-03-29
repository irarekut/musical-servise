/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BtnLogin from './btn'

describe('<BtnLogin />', () => {
  describe('Snapshots tests', () => {
    it('should render successfully and match snapshot', () => {
      const { container } = render(<BtnLogin>Войти</BtnLogin>)

      expect(container).toMatchSnapshot()
    })
  })
  describe('Attributes tests', () => {
    it('should set type="submit" by default', () => {
      render(<BtnLogin />)

      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })
  })
  describe('Callbacks tests', () => {
    it("should call 'onClick' prop", () => {
      const cb = jest.fn()

      render(<BtnLogin onClick={cb} />)

      fireEvent.click(screen.getByRole('button'))

      expect(cb).toBeCalledTimes(1)
    })
  })
})
