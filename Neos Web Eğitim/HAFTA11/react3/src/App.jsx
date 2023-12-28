import Effect from "./pages/Effect";
import "./App.css";
import Controller from "./pages/Controller";
import Requester from "./pages/Requester";

function App() {
    return (
        <>
            <Requester />
            <br />
            <hr />
            <br />
            <Controller />
            <br />
            <hr />
            <br />
            <Effect />
        </>
    );
}

export default App;
