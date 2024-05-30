import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { CustomNavbar } from "./components/CustomNavbar";
function App() {
  return (
    <div className="">
      <Router>
        <div className="absolute w-screen top-0 left-0 right-0 py-1 px-4  bg-gray-100 ">
          <div className=" flex container mx-auto justify-between ">
            <ul className="flex gap-4">
              <li>+7 777 777-77-77</li>
              <li>+7 777 777-77-77</li>
            </ul>
            <ul className="flex gap-4">
              <li>
                <Link to={"/"}>Доставка и оплата</Link>
              </li>
              <li>
                <Link to={"/"}>Пункты выдачи</Link>
              </li>
              <li>
                <Link to={"/"}>Магазины</Link>
              </li>
              <li>
                <Link to={"/"}>Возврат товаров</Link>
              </li>
            </ul>
          </div>
        </div>
        <CustomNavbar />
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
