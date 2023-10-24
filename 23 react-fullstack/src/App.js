import "./App.css";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
