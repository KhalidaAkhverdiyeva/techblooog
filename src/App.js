
import '../src/index.css'
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
