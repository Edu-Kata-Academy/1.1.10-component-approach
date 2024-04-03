import Item from '../item/Item.jsx';

export default function List() {
  return (
    <ul className="todo-list">
      <Item key={1} />
      <Item key={2} />
      <Item key={3} />
    </ul>
  );
}