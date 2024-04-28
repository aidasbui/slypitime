import { addMinutes, format } from 'date-fns';

export const getWakeUpTimes = () => {
  const now = new Date();

  const wakeUpTimes = Array.from({ length: 7 }, (_, index) => {
    const time = addMinutes(now, index * 90);
    return format(time, 'kk:mm');
  });
  return wakeUpTimes;
};

export const timeCardColors = [
  'bg-[#B2A0CE]',
  'bg-[#B8ACD0]',
  'bg-[#BDB8D1]',
  'bg-[#C8D1D4]',
  'bg-[#D3E9D7]',
  'bg-[#D3E9D7]',
  'bg-[#D3E9D7]',
];
