import QuoteGenerator from "./QuoteGenerator";
import "./styles.css";
import UserPicker from "./UserPicker";
import useSize from "./UseSize";

export default function App() {
  const size = useSize();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>
        Window size width:{size.width}: height:{size.height}
      </p>
      <UserPicker />
      <QuoteGenerator />
    </div>
  );
}
