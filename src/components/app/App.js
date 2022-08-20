import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Spinner from '../spinner/Spinner';

import './App.scss';
const Home = lazy(() => import('../../page/Home/Home'));
const Page404 = lazy(() => import('../../page/Page404'));
const InfoCountry = lazy(() => import('../../page/infoCountry/InfoCountry'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner /> }>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/oneCountry/:id' element={<InfoCountry />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
