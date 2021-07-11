import Gallery from "./Gallery";
import QuoteGenerator from "./QuoteGenerator";
import "./styles.css";
import UserPicker from "./UserPicker";
import useSize from "./UseSize";

export default function App() {
  const size = useSize();

  return (
    <div className="App">
      <h1>CodeSandbox</h1>
      <h2>Some crazy and silly test cases</h2>
      <p>
        Window size width:{size.width} - height:{size.height}
      </p>

      <p>Using Local Storage:</p>
      <UserPicker />

      <p>Using fetch and api call:</p>
      <QuoteGenerator />

      <p>Character Gallery</p>
      <Gallery />
    </div>
  );
}
