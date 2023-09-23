import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default App