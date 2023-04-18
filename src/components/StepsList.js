import StepsItem from "./StepsItem";

export default function StepsList() {
  return (
    <div className="steps__list">
      <div className="steps__list-title">
        <span className="steps__item-date">Дата (дд.мм.гггг)</span>
        <span className="steps__item-dist">Пройдено км</span>
        <span className="steps__item-actions">Действия</span>
      </div>
      <div className="steps__list-data">
        <StepsItem />
        <StepsItem />
      </div>
    </div>
  );
}
