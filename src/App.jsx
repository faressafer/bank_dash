import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Transactions from "./components/Transactions";
import Accounts from "./components/Accounts";
import Investements from "./components/Investements";
import Loans from "./components/Loans";
import Services from "./components/Services";
import Privileges from "./components/Privileges";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#F4F5FA]">
        {/* Sidebar */}
        <div className="w-72 fixed bg-white h-full">
          <Sidebar />
        </div>
        <div className="flex-1 ml-72">
          {/* Navbar */}
          <div className="w-full h-[70px] bg-white">
            <Navbar />
          </div>
          {/* Main Content */}
          <div> {/* Padding to avoid overlap with Navbar */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Transactions" element={<Transactions />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/investments" element={<Investements />} />
              <Route path="/Loans" element={<Loans />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Privileges" element={<Privileges />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
