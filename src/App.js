import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Greetings from './components/Greetings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greetings />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
