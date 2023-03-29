/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { setupApiStore } from '../../test-utils'
import Registration from './registration'
import { musicApi } from '../../api/api'

const BASE_API_URL = 'https://painassasin.online/'

export const handlers = [
  rest.get(`${BASE_API_URL}registration`, (req, res, ctx) =>
    res(ctx.json([{ token: '', isLogin: false }]))
  ),
]
const server = setupServer(...handlers)

// Мокируем api store
const storeRef = setupApiStore(musicApi)

describe('<Registration />', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())
  it('should render successfully and match snapshot', () => {
    const { container } = render(<Registration />, {
      wrapper: storeRef.wrapper,
    })

    expect(container).toMatchSnapshot()
  })

  it('should show requested data', async () => {
    render(<Registration />, { wrapper: storeRef.wrapper })

    expect(screen.getByPlaceholderText('Логин')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Пароль')).toBeInTheDocument()
    expect(await screen.findByText('Зарегистрироваться')).toBeInTheDocument()
  })
})
