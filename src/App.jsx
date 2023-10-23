import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/general/Header";
import RegisterExperimentDetails from "./pages/RegisterExperimentDetails";
import { Toaster } from "react-hot-toast";
import RegisterExperimentVariables from "./pages/RegisterExperimentVariables";
import ExperimentList from "./pages/ExperimentList";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import RegisterUser from "./pages/RegisterUser";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {!token ? (
          <>
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route
              path="/register-experiment"
              element={<RegisterExperimentDetails />}
            />

            <Route
              path="/register-experiment-variables"
              element={<RegisterExperimentVariables />}
            />

            <Route path="/experiment-list" element={<ExperimentList />} />

            <Route path="/user-list" element={<UserList />} />

            <Route path="/register-user" element={<RegisterUser />} />
          </>
        )}
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
