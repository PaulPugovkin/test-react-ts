import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage'




const App: React.FC = () => {

  return (
    <>
      <NavBar/>
      <div className="container">
        <Switch>
        <Route exact path='/' component={TodosPage} />
        <Route path='/about' component={AboutPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
