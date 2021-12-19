const mode = 'development'

const app = {
  name: 'Untitled',
  apiUrl: (mode === 'development') ? 'http://localhost:5000/' : ''
}

export { app }
