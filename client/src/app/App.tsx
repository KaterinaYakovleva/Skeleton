import { Provider } from "react-redux";
import Router from "./router/router";
// import { AlertProvider } from "@/features/alert";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      {/* <AlertProvider> */}
        <Router />
      {/* </AlertProvider> */}
    </Provider>
  );
}

export default App;
