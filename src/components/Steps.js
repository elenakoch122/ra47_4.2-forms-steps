import { useState } from 'react';
import StepsForm from './StepsForm';
import StepsList from './StepsList';
import { steps } from '../steps';
import { v4 as uuidv4 } from 'uuid';

export default function Steps() {
  const [date, setDate] = useState('');
  const [dist, setDist] = useState('');
  const [stepsList, setStepsList] = useState(steps);

  const addStep = (e) => {
    e.preventDefault();
    console.log('до', stepsList);
    setStepsList((state) => state.push({ date, dist, id: uuidv4() }));
    console.log('после', stepsList);
    // steps.push({ date, dist, id: uuidv4() });
  };

  const onChange = (e) => {
    const { type, value } = e.target;
    if (type === 'date') setDate(value);
    if (type === 'number') setDist(value);
  };

  return (
    <div className="steps">
      <StepsForm
        date={date}
        dist={dist}
        onSubmit={addStep}
        onChange={onChange}
      />
      <StepsList steps={stepsList}/>
    </div>
  );
}
