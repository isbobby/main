import Header from "./components/Header";
import Content from "./components/Content";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div className="App">
      <Backdrop>
        <Header></Header>
        <Content></Content>
      </Backdrop>
    </div>
  );
}

export default App;
