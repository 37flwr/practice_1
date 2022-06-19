import { Route, BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
import { publicRoutes } from './routes/routeList'
import './App.scss';
import Layout from './components/Layout';

function App() {
  console.log(publicRoutes);
  return (
    <Router>
      <Layout>
          <Routes>
          {publicRoutes.map(
            ({ path, component: Component, exact }, idx) => {
              console.log(path);
              return <Route
              key={idx}
              path={path}
              exact={exact}
              element={<Component />}
              />
            })
          }
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
