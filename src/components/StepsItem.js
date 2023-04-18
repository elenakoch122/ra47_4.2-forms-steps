export default function StepsItem({ item }) {
  return (
    <div className="steps__item">
      <span className="steps__item-date">20.06.2023</span>
      <span className="steps__item-dist">15</span>
      <div className="steps__item-actions">
        <span className="steps__item-actions-btn edit">✎</span>
        <span className="steps__item-actions-btn delete">✘</span>
      </div>
    </div>
  );
}
