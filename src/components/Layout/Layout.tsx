import { ReactNode } from 'react';

type TLayout = {
  children: ReactNode;
};

const Layout = ({ children }: TLayout) => {
  return (
    <div className="p-8 flex items-center w-full flex-col sm:p-12 md:p-16">
      {children}
    </div>
  );
};

export default Layout;
