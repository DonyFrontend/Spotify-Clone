import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import store from './app/providers/store/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './shared/const/i18n.ts'
import {LogIn} from './features/auth/login/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Suspense fallback='Loading...'>
              <Routes>
                <Route path='/app/login' element={<LogIn/>}/>
                <Route path='/*' element={<App/>}/>
              </Routes>
            </Suspense>
          </I18nextProvider>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
