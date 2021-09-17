import { useEffect, useState } from 'react';

const Timer = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leadingZero = (num) => {
    return num < 10 ? '0' + num : num;
  };

  const getTime = () => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  const today = new Date();
  const time =
    leadingZero(today.getHours()) +
    ':' +
    leadingZero(today.getMinutes()) +
    ':' +
    leadingZero(today.getSeconds());

  useEffect(() => {
    setInterval(() => getTime(), 1000);
    return () => getTime();
  });

  return (
    <div>
      <div> Local Time: {time}</div>
      <div>
        {leadingZero(days)} Days {leadingZero(hours)} Hours{' '}
        {leadingZero(minutes)} Minutes {leadingZero(seconds)} Seconds
      </div>
    </div>
  );
};

export default Timer;
