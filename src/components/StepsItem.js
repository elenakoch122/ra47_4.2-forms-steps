export default function StepsItem({ item, onDelete, onEdit }) {
  return (
    <div className="steps__item">
      <span className="steps__item-date">{item.date}</span>
      <span className="steps__item-dist">{item.dist}</span>
      <div className="steps__item-actions">
        <span className="steps__item-actions-btn edit" onClick={() => onEdit(item)}>✎</span>
        <span className="steps__item-actions-btn delete" onClick={() => onDelete(item.id)}>✘</span>
      </div>
    </div>
  );
}
