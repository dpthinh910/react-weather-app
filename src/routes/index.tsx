import { Suspense } from "react";
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import MainLayout from "../components/Layout";
import Spin from "../components/Spinner";
import lazyImport from "../utils/lazyImport";

const { NotFoundPage } = lazyImport(() => import('src/pages/NotFoundPage'), 'NotFoundPage');

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