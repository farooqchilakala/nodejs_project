import logo from './logo.svg';
import './App.css';
import { LoginForm } from './components/LoginForm';
import { UserList } from './components/UserList';
import { AppRouters } from './components/Routers';

function App() {
  return (
    <div className='container mt-4' >
      <LoginForm/>
      <UserList/>
      <AppRouters/>
    </div>
  );
}

export default App;
