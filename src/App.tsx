import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "New Delhi", "Hamburg"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <hr />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>Holy guacamole!</strong>
          <span> $$$</span>
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
          console.log("Clicked");
        }}
      >
        Press
      </Button>
      <hr />
      <Counter />
    </div>
  );
}

export default App;
