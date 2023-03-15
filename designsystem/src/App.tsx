import './App.css';
import { Footer } from './atoms/footer/footer';
import { Navbar } from './atoms/navbar/navbar';
import RouteConfig from './Route/RouteConfig';
import { Provider } from 'react-redux';
import store from './store/configureStore';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='flex flex-col h-full overflow-auto'>
        <Navbar />
        <div className='h-full overflow-auto flex flex-col'>
          <RouteConfig />
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
