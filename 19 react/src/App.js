import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "asdf",
      day: "Feb",
      reminder: true,
    },
    {
      id: 2,
      text: "qwer",
      day: "Feb",
      reminder: false,
    },
    {
      id: 3,
      text: "zxcv",
      day: "Jan",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
