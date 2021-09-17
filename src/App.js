import { useState } from 'react';
import Input from './components/Input';
import Timer from './components/Timer';

const App = () => {
  const [deadline, setDeadline] = useState('2022-01-01');
  const onChangeDate = (event) => {
    setDeadline(event.currentTarget.value);
  };

  return (
    <div>
      <div>
        <Input
          htmlFor="deadline"
          text="your Date"
          type="date"
          id="deadline"
          placeholder="2022-01-01"
          value={deadline}
          onChange={onChangeDate}
        />
      </div>
      <div>
        <p>Your Date: {deadline}</p>
      </div>
      <div>
        <Timer deadline={deadline} />
      </div>
    </div>
  );
};

export default App;
