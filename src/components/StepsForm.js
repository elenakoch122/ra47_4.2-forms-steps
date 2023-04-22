export default function StepsForm({ date, dist, addStep, changeState }) {
  const onSubmit = (e) => {
    e.preventDefault();
    addStep();
  };

  const onChange = (e) => {
    changeState(e.target.type, e.target.value)
  };

  return (
    <form className="steps__form" id="form" onSubmit={onSubmit}>
      <label htmlFor="date">
        Дата (дд.мм.гггг)
        <input className="steps__form-input" type="text" id="date" value={date} onChange={onChange} placeholder="дд.мм.гггг" pattern="\d{2}\.\d{2}\.\d{4}" required />
      </label>
      <label htmlFor="distance">
        Пройдено км
        <input className="steps__form-input" type="number" id="distance" value={dist} onChange={onChange} required />
      </label>
      <button className="steps__form-button">OK</button>
    </form>
  );
}
