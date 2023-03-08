import "./App.css";
import { MainPage } from "./pages/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "./redux/todoReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoActions.fetchTodos());
  }, []);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
