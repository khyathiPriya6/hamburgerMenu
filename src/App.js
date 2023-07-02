import {Route, Switch} from 'react-router-dom'
import About from './components/About/index'
import Home from './components/Home/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App
