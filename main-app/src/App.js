import Header from "./components/Header";
import NUSContent from "./components/NUSContent";
import Backdrop from "./components/Backdrop";
import ReadingContent from "./components/ReadingContent";
import PNCContent from "./components/PNCContent";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Backdrop>
        <Introduction></Introduction>
        <Header title="University Class Notes"></Header>
        <NUSContent></NUSContent>
        <Header title="Paper and Code"></Header>
        <PNCContent></PNCContent>
        <Header title="Reading summary"></Header>
        <ReadingContent></ReadingContent>
      </Backdrop>
    </div>
  );
}

export default App;
