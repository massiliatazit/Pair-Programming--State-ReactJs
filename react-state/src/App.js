  
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Warning from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import horror from "./data/horror.json";
import Books from "./components/Books";
import BookSearch from "./components/Search";

function App() {
  return (
    <div className="App">
      <Warning message="I'm a warning message!"></Warning>
      <MyBadge color="danger" text="I'm a badge!"></MyBadge>
      <BookSearch horrorbook={horror}></BookSearch>
      <Books horrorbook={horror} />
    </div>
  );
}
export default App;
