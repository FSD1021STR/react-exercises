function HelloButton() {
  function sayHello() {
    alert("Hello!");
  }

  return <button onClick={sayHello}>Say Hello!</button>;
}

export function Exercise1() {
  return <HelloButton />;
}
