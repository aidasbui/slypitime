import { motion } from 'framer-motion';
import { useMemo } from 'react';

import { getTimeCardVariant } from '@/lib/animationUtils';

type TTimeCardProps = {
  time: string;
  colors: string;
  delayFactor: number;
};

const TimeCard = ({ time, colors, delayFactor }: TTimeCardProps) => {
  const animationVariant = useMemo(() => getTimeCardVariant(delayFactor), [delayFactor]);

  return (
    <motion.div
      className={`w-full max-w-[150px] rounded-[5px] p-3 flex justify-center items-center ${colors}`}
      variants={animationVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <p className="font-semibold text-lg">{time}</p>
    </motion.div>
  );
};

export default TimeCard;
