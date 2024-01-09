import "./App.css";
import Navbar from "./components/navbar";
import SummarizeWebpage from "./components/summarize_webpage";
import Footer from "./components/footer";

function App() {

  return (
    <div className="App flex flex-col min-h-screen absolute inset-0 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] ">
      <Navbar />
      <div className="flex-grow">
        <SummarizeWebpage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
