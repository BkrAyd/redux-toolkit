import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import { Store } from "./app/Store";

function App() {
  return (
    <div>
      <Provider store={Store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
