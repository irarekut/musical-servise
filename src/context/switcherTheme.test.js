/* eslint-disable no-undef */
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { SwitcherTheme } from './switcherTheme'
import { customRender } from '../test-utils'

describe('<ThemeSwitcher />', () => {
  it('should change theme by click', () => {
    const convertHexToRGBA = (hexCode) => {
      let hex = hexCode.replace('#', '')

      if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
      }

      const r = parseInt(hex.substring(0, 2), 16)
      const g = parseInt(hex.substring(2, 4), 16)
      const b = parseInt(hex.substring(4, 6), 16)

      return { r, g, b }
    }
    customRender(<SwitcherTheme />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      backgroundColor: convertHexToRGBA('#181818'),
    })

    fireEvent.click(button)

    expect(button).toHaveStyle({
      backgroundColor: convertHexToRGBA('#F6F5F3'),
    })
  })
})
