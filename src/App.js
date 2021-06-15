import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify';
import {Route, Switch, Redirect} from 'react-router-dom'
import Movies from './components/Movies'
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import MoviesForum from './components/MoviesForum';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

function App() {

  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <div className='container'>
        <Switch>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/movies/new" component={MoviesForum}/>
          <Route path="/movies/:id" component={MoviesForum}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/customers" component={Customers}/>
          <Route path="/rentals" component={Rentals}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect from="/" exact to="/movies"/>
          <Redirect to="/not-found"/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
