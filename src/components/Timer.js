import { useEffect, useState } from 'react';

const Timer = ({ deadlineDate, deadlineMinutesHours }) => {
  console.log(deadlineDate);
  console.log(deadlineMinutesHours);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leadingZero = (num) => {
    return num < 10 ? '0' + num : num;
  };

  const getTime = () => {
    // time = deadline date in milliseconds - actual date in milliseconds
    const time = Date.parse(deadlineDate) - Date.now();

    // for the timezones in hours
    const timezoneOffset = new Date().getTimezoneOffset() / 60;

    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours((Math.floor(time / (1000 * 60 * 60)) % 24) + timezoneOffset); // + or - GMT
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  const today = new Date();
  const localTime =
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
      <div> Local Time: {localTime}</div>
      <div>
        {leadingZero(days)} Days {leadingZero(hours)} Hours{' '}
        {leadingZero(minutes)} Minutes {leadingZero(seconds)} Seconds
      </div>
    </div>
  );
};

export default Timer;
