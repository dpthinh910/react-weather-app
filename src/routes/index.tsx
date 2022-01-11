import { Suspense } from "react";
import { Outlet, useRoutes } from 'react-router-dom';
import { MainLayout } from "../components/Layout";
import Spin from "../components/Spinner";
import lazyImport from "../utils/lazyImport";

const { NotFoundPage } = lazyImport(() => import('src/pages/NotFoundPage'), 'NotFoundPage');
const { HomePage } = lazyImport(() => import('src/pages/HomePage'), 'HomePage');

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<Spin/>}>
        <Outlet />
      </Suspense>
    </MainLayout> 
  );
}

export function AppRoutes() {
  const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <HomePage /> }
      ]
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];
  const element = useRoutes([...routes]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{element}</>
}

export default App;