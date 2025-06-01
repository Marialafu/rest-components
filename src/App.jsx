import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import ModeProviders from './providers/ModeProviders';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ModeProviders>
        <Router />
      </ModeProviders>
    </BrowserRouter>
  );
};

export default App;
