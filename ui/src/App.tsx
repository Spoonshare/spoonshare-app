import { RouterProvider } from 'react-router-dom';

import './App.scss';
import { router } from './routes';
import { Header, Footer } from './shared';

function App() {
  return (
    <div className='App'>
      <Header />
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </div>
  );
}

export default App;
