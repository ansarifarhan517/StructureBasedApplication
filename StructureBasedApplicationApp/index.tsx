import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/app'
import './index.css'
import ThemeWrapper from '@ui-library/utilities/components/ThemeWrapper'
import store from '@redux/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('app')

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <Provider store={store}>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </Provider>)
}
