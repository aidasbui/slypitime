import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import ClockSVG from '@/components/assets/ClockSVG';
import { Button } from '@/components/ui/button';
import { containerVariants } from '@/lib/animationUtils';

import Layout from '../../components/Layout';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/calculate');
  };

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Layout>
        <div className="flex flex-col w-full gap-10 items-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <ClockSVG className="w-[80px]" />

            <h1 className="text-4xl font-bold text-center">
              <span className="text-[#d2c4e7]">Slypi</span>time
            </h1>
          </div>

          <p className="text-left whitespace-pre-line sm:text-center sm:max-w-[400px]">
            {`Welcome to Slypitime! This is a simple app that helps you quickly calculate an estimate of when to set your alarm - based on the length of sleep cycles. 
          
          Click on the button below to see the times you should try waking up at. 
          
          Please note that additional 20 minutes are added to give you time to fall asleep.`}
          </p>

          <div className="w-full flex justify-center items-center">
            <Button
              className="bg-[#d2c4e7] text-black hover:bg-[#e5d8f9]"
              onClick={handleNavigate}
            >
              Sleepy
            </Button>
          </div>
        </div>
      </Layout>
    </motion.div>
  );
};

export default Home;
