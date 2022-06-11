import { Outlet } from 'react-router-dom';
import Header from './header';


const Layout: React.FunctionComponent= () => {
  return (
    <>
      <Header />
      {/* Returns the element for the child route */}
      <Outlet />
    </>
  );
};

export default Layout;
