import Navbar from "./Components/Navbar";
import Whitelists from "./Components/Whitelists";

function App() {
  return (
    <div className="bg-primary h-screen">
      <Navbar />
      <div className="container mx-auto">
        <Whitelists />
      </div>
    </div>
  );
}

export default App;
