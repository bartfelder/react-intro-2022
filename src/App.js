import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="bg-slate-500 min-h-screen">
      <Dashboard />
    </div>
  </Provider>
);

export default App;
