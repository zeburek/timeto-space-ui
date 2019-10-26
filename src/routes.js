import Main from './components/Main'
import Dashboard from './components/Dashboard'

export const routes = [
  {
    component: Main,
    routes: [
      {
        path: '/',
        exact: true,
        component: Dashboard
      }
    ]
  }
]
