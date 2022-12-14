import React from 'react'
import ReactDOM from 'react-dom'
import { AuthorizationApp } from './AuthorizationApp'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hocs/AuthProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ApiProvider } from './hocs/ApiProvider'
import { BrowserRouter as Router } from 'react-router-dom'

import 'antd/dist/antd.css'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ApiProvider>
            <AuthProvider>
              <AuthorizationApp />
            </AuthProvider>
          </ApiProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
