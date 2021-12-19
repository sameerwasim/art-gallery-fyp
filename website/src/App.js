import Routes from './routes/'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Context/Auth.context'

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <Routes />
    </AuthProvider>
  );
}

export default App;
