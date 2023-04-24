import StepsItem from "./StepsItem";

export default function StepsList({ steps, onDelete, onEdit }) {
  return (
    <div className="steps__list">
      <div className="steps__list-title">
        <span className="steps__item-date">Дата (дд.мм.гггг)</span>
        <span className="steps__item-dist">Пройдено км</span>
        <span className="steps__item-actions">Действия</span>
      </div>
      <ul className="steps__list-data">
        {steps.map(s => <li key={s.id}><StepsItem item={s} onDelete={onDelete} onEdit={onEdit}/></li>)}
      </ul>
    </div>
  );
}
