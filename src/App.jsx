import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/general/Header";
import RegisterExperimentDetails from "./pages/RegisterExperimentDetails";
import { Toaster } from "react-hot-toast";
import RegisterExperimentVariables from "./pages/RegisterExperimentVariables";
import ExperimentList from "./pages/ExperimentList";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import MemberList from "./pages/MemberList";
import RegisterMember from "./pages/RegisterMember";
import LaboratoryList from "./pages/LaboratoryList";
import LaboratoryDetails from "./pages/LaboratoryDetails";
import RegisterLaboratory from "./pages/RegisterLaboratory";
import ExperimentDetails from "./pages/ExperimentDetails";
import MicroorganismList from "./pages/MicroorganismList";
import SubstrateList from "./pages/SubstrateList";
import ProductList from "./pages/ProductList";
import MicroorganismDetails from "./pages/MicroorganismDetails";
import SubstrateDetails from "./pages/SubstrateDetails";
import ProductDetails from "./pages/ProductDetails";
import RegisterMicroorganism from "./pages/RegisterMicroorganism";
import RegisterSubstrate from "./pages/RegisterSubstrate";
import RegisterProduct from "./pages/RegisterProduct";
import MemberDetails from "./pages/MemberDetails";
import Account from "./pages/Account";
import Simulation from "./pages/Simulation";
import ParamterEstimation from "./pages/ParameterEstimation";
import LinearRegression from "./pages/LinearRegression";

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
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/" element={<Home />} />

            {/* Experiments */}
            <Route path="/experiment-list" element={<ExperimentList />} />
            <Route path="/experiments/:id" element={<ExperimentDetails />} />
            <Route
              path="/register-exp-details"
              element={<RegisterExperimentDetails />}
            />
            <Route
              path="/register-exp-variables"
              element={<RegisterExperimentVariables />}
            />

            {/* Laboratories */}
            <Route path="/laboratory-list" element={<LaboratoryList />} />
            <Route path="/laboratories/:id" element={<LaboratoryDetails />} />
            <Route
              path="/register-laboratory"
              element={<RegisterLaboratory />}
            />

            {/* Microorganism */}
            <Route path="/microorganism-list" element={<MicroorganismList />} />
            <Route
              path="/microorganisms/:id"
              element={<MicroorganismDetails />}
            />
            <Route
              path="/register-microorganism"
              element={<RegisterMicroorganism />}
            />

            {/* Substrate */}
            <Route path="/substrate-list" element={<SubstrateList />} />
            <Route path="/substrates/:id" element={<SubstrateDetails />} />
            <Route path="/register-substrate" element={<RegisterSubstrate />} />

            {/* Product */}
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/register-product" element={<RegisterProduct />} />

            {/* Members */}
            <Route path="/member-list" element={<MemberList />} />
            <Route path="/members/:id" element={<MemberDetails />} />
            <Route path="/register-member" element={<RegisterMember />} />

            {/* ///////////////////  Analysis  ////////////////////////////////// */}

            <Route path="/simulation" element={<Simulation />} />
            <Route
              path="/parameter-estimation"
              element={<ParamterEstimation />}
            />

            <Route path="/linear-regression" element={<LinearRegression />} />
          </>
        )}
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
