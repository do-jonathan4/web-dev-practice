import "./App.css";
import { Application } from "./components/application/application";
// import { CounterTwo } from "./components/counter-two/CounterTwo";
import { Counter } from "./components/counter/counter";
import { MuiMode } from "./components/mui/mui";
import { Skills } from "./components/skills/skills";
// import { Users } from "./components/users/Users";
import { AppProviders } from "./providers/providers";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={["HTML", "CSS"]} />
        <Counter />
        {/* <CounterTwo count={1} /> */}
        {/* <Users /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
