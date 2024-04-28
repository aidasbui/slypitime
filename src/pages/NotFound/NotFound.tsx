import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-10 justify-center items-center h-[40dvh]">
        <h1 className="text-3xl text-center">
          Oops! It looks like the page you&apos;re looking for doesn&apos;t exist.
        </h1>

        <p className="text-center">
          Feel free to come back to the{' '}
          <Link to="/" className="block underline text-blue-300">
            Home page
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
