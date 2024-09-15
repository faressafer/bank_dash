import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="bg-[#F4F5FA]">
      <div>
        <div className="w-72 fixed bg-white h-full">
           <Sidebar/>
        </div>
        <div className="min-h-screen w-full border md:static">
          <div className="flex w-[calc(100%-18rem)]  h-[55px] bg-white absolute top-0 left-0 ml-72">
            <Navbar/>
          </div>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/"/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
