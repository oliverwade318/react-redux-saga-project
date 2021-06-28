import { Router } from "react-router-dom";
import history from "./services/history";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";

export default function App() {
  return (
    // Provider chama o Redux junto com a minha configuração do store
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}
