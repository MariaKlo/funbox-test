import "./App.css";
import { Items } from "./components/Items/Items.jsx";
import { data } from "./constants/data";

export const App = () => {
  return (
    <div className="App">
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <Items data={data} />
    </div>
  );
};
