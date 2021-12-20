import "./App.css";
import MealsPage from "./components/Meals/MealsPage";
import { MealsProvider } from "./components/store/MealsContext";

function App() {
  return (
    <MealsProvider>
      <MealsPage />
    </MealsProvider>
  );
}

export default App;
