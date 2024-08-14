
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./MainPage";
import { Provider } from "react-redux";
import appStore from "../Store/appStore";
function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
    <RouterProvider router={appRouter}/> 
     </div>
    </Provider>
  );

}

export default App;
