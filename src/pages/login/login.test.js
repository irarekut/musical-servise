/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { setupApiStore } from '../../test-utils'
import Login from './login'
import { musicApi } from '../../api/api'

const BASE_API_URL = 'https://painassasin.online/'

export const handlers = [
  rest.get(`${BASE_API_URL}login`, (req, res, ctx) =>
    res(ctx.json([{ token: '', isLogin: false }]))
  ),
]
const server = setupServer(...handlers)

// Мокируем api store
const storeRef = setupApiStore(musicApi)

describe('<Login />', () => {
  beforeAll(() => server.listen())

  // Чистим обработчики между тестами
  afterEach(() => server.resetHandlers())

  // Отрубаем сервер после выполнения тестов.
  // НЕ ЗАБЫВАЙТЕ ЭТО ДЕЛАТЬ, иначе сервер будет работать вхолостую
  afterAll(() => server.close())
  it('should render successfully and match snapshot', () => {
    const { container } = render(<Login />, { wrapper: storeRef.wrapper })

    expect(container).toMatchSnapshot()
  })

  it('should show requested data', async () => {
    render(<Login />, { wrapper: storeRef.wrapper })

    // Ждем ответа от сервера. Как только он придет,
    // отрисуется пункт списка
    expect(await screen.findByText('Войти')).toBeInTheDocument()
    expect(await screen.findByText('Зарегистрироваться')).toBeInTheDocument()
  })
})
