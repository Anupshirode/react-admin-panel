import "./App1.css";
import Footer from "./components/footer/Footer1";
import Header from "./components/header/Header1";
import Routes from "./components/routes/Routes1";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="padding-class">
          <Routes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App1;