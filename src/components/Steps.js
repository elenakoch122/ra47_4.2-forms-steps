import { useState } from 'react';
import StepsForm from './StepsForm';
import StepsList from './StepsList';
import { steps } from '../steps';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment/moment';

export default function Steps() {
  const [date, setDate] = useState('');
  const [dist, setDist] = useState('');
  const [stepsList, setStepsList] = useState(steps);

  const addStep = () => {
    setStepsList((prev) => {
      const stepWithTheSameDate = prev.find(i => i.date === date);
      let newState;

      if (!stepWithTheSameDate) {
        newState = [...prev, { date, dist, id: uuidv4() }];
      } else {
        const newStepWithTheSameDate = Object.assign({}, stepWithTheSameDate);
        newStepWithTheSameDate.dist += dist;
        newStepWithTheSameDate.id = uuidv4();
        onDelete(stepWithTheSameDate.id);
        newState = [...prev, newStepWithTheSameDate];
      }

      newState.sort((a, b) => moment(a.date, 'DD-MM-YYYY').format('x') - moment(b.date, 'DD-MM-YYYY').format('x'));
      return newState;

      // const stepWithTheSameDate = prev.find(i => i.date === date);

      // if (!stepWithTheSameDate) {
      //   const newState = [...prev, { date, dist, id: uuidv4() }];
      //   newState.sort((a, b) => moment(a.date, 'DD-MM-YYYY').format('x') - moment(b.date, 'DD-MM-YYYY').format('x'));
      //   return newState;
      // }

      // stepWithTheSameDate.dist += dist;
      // return prev;
    });

    setDate('');
    setDist('');
  };

  const changeState = (type, value) => {
    if (type === 'text') setDate(value);
    if (type === 'number') setDist(+value);
  };

  const onDelete = (id) => setStepsList((prev) => prev.filter(i => i.id !== id));

  const onEdit = (step) => {
    setDate(step.date);
    setDist(step.dist);
    setStepsList((prev) => prev.filter(i => i.id !== step.id));
  };

  return (
    <div className="steps">
      <StepsForm
        date={date}
        dist={dist}
        addStep={addStep}
        changeState={changeState}
      />
      <StepsList steps={stepsList} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}
