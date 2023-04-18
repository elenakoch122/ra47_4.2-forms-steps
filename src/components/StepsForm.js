export default function StepsForm() {
  return (
    <div className="steps__form">
      <label htmlFor="date">
        Дата (дд.мм.гггг)
        <input className="steps__form-input" type="date" name="" id="date" />
      </label>
      <label htmlFor="distance">
        Пройдено км
        <input className="steps__form-input" type="number" name="" id="distance" />
      </label>
      <button className="steps__form-button">OK</button>
    </div>
  );
}
