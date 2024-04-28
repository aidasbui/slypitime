import { ReactNode } from 'react';

type TLayout = {
  children: ReactNode;
};

const Layout = ({ children }: TLayout) => {
  return <div className="p-8 flex items-center w-full flex-col">{children}</div>;
};

export default Layout;
