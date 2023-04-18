export default function StepsForm({ date, dist, onSubmit, onChange }) {
  return (
    <form className="steps__form" id="form" onSubmit={onSubmit}>
      <label htmlFor="date">
        Дата (дд.мм.гггг)
        <input className="steps__form-input" type="date" id="date" value={date} onChange={onChange} />
      </label>
      <label htmlFor="distance">
        Пройдено км
        <input className="steps__form-input" type="number" id="distance" value={dist} onChange={onChange} />
      </label>
      <button className="steps__form-button">OK</button>
    </form>
  );
}
