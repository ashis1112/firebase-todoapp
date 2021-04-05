import {Route,Switch} from 'react-router-dom'
import Signin from './component/auth/signin'
import Signup from './component/auth/signup'
import Dashboard from './component/dashboard/dashboard'
import Navbar from './component/layout/navbar'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} /> 
      </Switch>
    </div>
  );
}

export default App;
