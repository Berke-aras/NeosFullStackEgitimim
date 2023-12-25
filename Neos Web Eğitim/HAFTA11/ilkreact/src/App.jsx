import Component from "./component";
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
        </>
    );
}

export default App;
