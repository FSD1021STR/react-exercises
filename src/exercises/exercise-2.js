function SayButton({ name }) {
  function sayName() {
    alert("Hello " + name);
  }

  return (
    <div>
      <button onClick={sayName}>Hello {name}</button>
    </div>
  );
}

export function Exercise2() {
  return <SayButton name="Ana" />;
}
