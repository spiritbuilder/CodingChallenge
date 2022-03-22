import "./App.css";
import "./Components/Success/Success.css";
import { Route, Routes } from "react-router-dom";
import LandPage from "./Pages/LandPage";
import LandModal from "./Modals/LandPageModal/LandPageModal";
import LandModal2 from "./Modals/LandPageModal/LandPageModal1";
import BankLoginModal from "./Modals/Banks/BankLoginModal";
import AccessBank from "./Modals/Banks/AccessBank";
import Success from "./Components/Success/Success";
import AccessLogin from "./Modals/Banks/AccessLogin";
import FirstLogin from "./Modals/Banks/FirstLogin";
import ZenithLogin from "./Modals/Banks/ZenithLogin";
import AccountHistory from "./Pages/AccountHistory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/LandModal1" element={<LandModal />} />
      <Route path="/LandModal2" element={<LandModal2 />} />
      <Route path="/BankLoginModal" element={<BankLoginModal />} />
      <Route path="/AccessBank" element={<AccessBank />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/AccessLogin" element={<AccessLogin />} />
      <Route path="/FirstLogin" element={<FirstLogin />} />
      <Route path="/ZenithLogin" element={<ZenithLogin />} />
      <Route path="/AccountHistory" element={<AccountHistory />} />
    </Routes>
  );
}

export default App;
