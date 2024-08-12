
import '../src/index.css'
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <RouterProvider router={routers} />
      </div>
    </ThemeProvider>

  );
}

export default App;
