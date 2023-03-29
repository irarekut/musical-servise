/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react'
import { render, cleanup } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ThemeContext, themes } from './context/ContextTheme'
import { musicApi } from './api/api'
import authReducer from './store/slises/auth'
import filterReducer from './store/slises/filter'
import playerReducer from './store/slises/player'
import favoriteReducer from './store/slises/favorite'

function AllProviders({ children }) {
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export function withStoreProvider(store) {
  return function Wrapper({ children }) {
    return (
      <AllProviders>
        <Provider store={store}>{children}</Provider>
      </AllProviders>
    )
  }
}

export const setupApiStore = (api, withoutListeners) => {
  const getStore = () =>
    configureStore({
      reducer: {
        [musicApi.reducerPath]: musicApi.reducer,
        auth: authReducer,
        player: playerReducer,
        filter: filterReducer,
        favorite: favoriteReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(musicApi.middleware),
    })
  const initialStore = getStore()
  const refObj = {
    api,
    store: initialStore,
    wrapper: withStoreProvider(initialStore),
  }

  let cleanupListeners

  beforeEach(() => {
    const store = getStore()
    refObj.store = store
    refObj.wrapper = withStoreProvider(store)

    if (!withoutListeners) {
      cleanupListeners = setupListeners(store.dispatch)
    }
  })

  afterEach(() => {
    cleanup()

    if (!withoutListeners) {
      cleanupListeners()
    }

    refObj.store.dispatch(api.util.resetApiState())
  })

  return refObj
}

export const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options })
