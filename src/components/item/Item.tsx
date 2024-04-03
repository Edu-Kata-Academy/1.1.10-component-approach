export default function Item() {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">Учить React 4 часа</span>
          <span className="created">создана 3 дня назад</span>
        </label>
        <button className="icon icon-edit">&#9998;</button>
        <button className="icon icon-destroy">&#10006;</button>
      </div>
    </li>
  );
}