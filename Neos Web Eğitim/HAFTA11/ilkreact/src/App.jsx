import Component from "./component";
import Click from "./click";
import State from "./state";
import "./App.css";

function App() {
    return (
        <>
            <Component />

            <div className="deneme"></div>

            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "gray",
                }}
            ></div>
            <State />
            <Click />
        </>
    );
}

export default App;
