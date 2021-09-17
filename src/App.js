import { useState } from 'react';
import Input from './components/Input';
import Timer from './components/Timer';

const App = () => {
  const [deadlineDate, setDeadlineDeadline] = useState('2022-01-01');
  const [deadlineMinutesHours, setDeadlineMinutesHours] = useState('00:00');

  const onChangeDate = (event) => {
    setDeadlineDeadline(event.currentTarget.value);
  };
  const onChangeTime = (event) => {
    setDeadlineMinutesHours(event.currentTarget.value);
  };

  return (
    <div>
      <div>
        <Input
          htmlFor="deadlineDate"
          text="your Date"
          type="date"
          id="deadlineDate"
          placeholder="2022-01-01"
          value={deadlineDate}
          onChange={onChangeDate}
        />
      </div>
      <div>
        <Input
          htmlFor="time"
          text="your Time"
          type="time"
          id="time"
          placeholder="00:00"
          value={deadlineMinutesHours}
          onChange={onChangeTime}
        />
      </div>
      <div>
        <p>
          Your selected Date and Time: {deadlineDate} {deadlineMinutesHours}
        </p>
      </div>
      <div>
        <Timer deadlineDate={deadlineDate} />
      </div>
    </div>
  );
};

export default App;
