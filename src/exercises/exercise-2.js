function sayName(x) {
  alert("Hello " + x);
}

function SayButton({ name }) {
  return (
    <div>
      <button onClick={() => sayName(name)}>Hello {name}</button>
    </div>
  );
}

export function Exercise2() {
  return <SayButton name="Ana" />;
}
