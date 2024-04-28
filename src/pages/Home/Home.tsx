import Layout from '../../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full gap-12 items-center">
        <h1 className="text-4xl font-bold text-center">Slypitime</h1>

        <p className="text-left whitespace-pre-line">
          {`Welcome to Sleepytime! This is a simple app that helps you quickly calculate an estimate of when to set your alarm. 
          
          Click on the button below to see the times
          you should try waking up at. 
          
          Please note that these are only estimates and may
          not work for everyone and additional 20 minutes are added to give you time to
          fall asleep.`}
        </p>

        <div className="w-full flex justify-center items-center"></div>
      </div>
    </Layout>
  );
};

export default Home;
