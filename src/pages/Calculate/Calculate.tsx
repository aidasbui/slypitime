import { motion } from 'framer-motion';
import { useMemo } from 'react';

import Layout from '@/components/Layout';
import TimeCard from '@/components/TimeCard';
import { containerVariants } from '@/lib/animationUtils';
import { getWakeUpTimes, timeCardColors } from '@/lib/timeUtils';

const Calculate = () => {
  const wakeUpTimes = useMemo(() => getWakeUpTimes(), []);

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Layout>
        <div className="w-full flex flex-col gap-14">
          <h1 className="text-3xl font-bold text-center">
            <span className="text-[#d2c4e7] block sm:inline">Optimal</span> Wake-Up Times
          </h1>

          <div className="w-full flex flex-col items-center justify-center gap-3 text-gray-900">
            {wakeUpTimes.map((wakeUpTime, index) => {
              if (index === 0) return;

              return (
                <TimeCard
                  time={wakeUpTime}
                  colors={timeCardColors[index - 1]}
                  key={wakeUpTime}
                  delayFactor={index}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    </motion.div>
  );
};

export default Calculate;
