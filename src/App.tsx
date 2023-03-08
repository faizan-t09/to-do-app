import "./App.css";
import { MainPage } from "./pages/MainPage";

function App() {
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) =>
  //       setTasks(
  //         json.map((element: taskType) => {
  //           return { ...element, done: false };
  //         })
  //       )
  //     );
  // }, []);

  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
