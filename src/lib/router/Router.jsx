import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Flag from '../../pages/flag/Flag';
import Layout from '../../components/layout/Layout';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='flag' element={<Flag />} />
      </Route>
    </Routes>
  );
};

export default Router;
