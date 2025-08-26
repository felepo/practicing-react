const StaticComponent = () => {
  const item = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {
        item.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))
      }
    </ul>
  );
}

export default StaticComponent;