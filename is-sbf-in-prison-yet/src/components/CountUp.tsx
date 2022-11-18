import { useEffect, useState } from 'react';

export const useCountUp = (startDate: Date) => {
  const countUpDate = startDate;

  const [countUp, setCountUp] = useState(
    new Date().getTime() - countUpDate.getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountUp(new Date().getTime() - countUpDate.getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countUpDate]);

  return getReturnValues(countUp);
};

const getReturnValues = (countUp: number) => {
  // calculate time since start time.
  const days = Math.floor(countUp / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countUp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countUp % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countUp % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
