const mode = 'development'

const app = {
  name: 'Untitled',
  apiUrl: (mode === 'development') ? 'http://localhost:5000/' : '',
  appUrl: (mode === 'development') ? 'http://localhost:3000/' : ''
}

export { app }
