import React from "react";

interface Item {
  id: number;
  name: string;
}

export const Todo: React.FC = (): JSX.Element => {
  const [text, setText] = React.useState<string>("");
  const [items, setItems] = React.useState<Item[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, { id: items.length + 1, name: text }]);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button>Add</button>
      {items.map((item: Item) => (
        <p>{item.name}</p>
      ))}
    </form>
  );
};
