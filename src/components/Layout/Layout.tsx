import { ReactNode } from 'react';

import Footer from '../Footer';

type TLayout = {
  children: ReactNode;
};

const Layout = ({ children }: TLayout) => {
  return (
    <div className="p-8 flex items-center w-full flex-col sm:p-12 md:p-16 md:pb-0 pb-0 sm:pb-0 min-h-screen">
      {children}
      <div className="my-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
