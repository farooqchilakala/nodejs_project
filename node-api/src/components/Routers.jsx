
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import { UserList } from './UserList';
import { LoginForm } from './LoginForm';
function AppRouters(){
    return 
    <BrowserRouter>
    <div className='row'>
    <Link className='btn btn-dark col' to="/login">Login</Link>
    <Link className='btn btn-dark col' to="/users">Show User</Link>
    </div>
    
        <Switch>
            <Route path="/login">
                <h1>Login page ..</h1>
                <LoginForm/>
            </Route>
            <Route path={["/user"]}>
                <UserList/>
            </Route>
        </Switch>
    </BrowserRouter>
}
export {AppRouters};