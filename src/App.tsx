import store from './redux/store'
import { Provider } from 'react-redux'
import RouteComponents from './routes/RouteComponents'

const App = () => {
  return (
    <div className="App">
      <Provider store={ store }>
        <RouteComponents />
      </Provider>
    </div>
  )
}

export default App