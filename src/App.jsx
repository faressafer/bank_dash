import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
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
    </div>
  );
}

export default App;
