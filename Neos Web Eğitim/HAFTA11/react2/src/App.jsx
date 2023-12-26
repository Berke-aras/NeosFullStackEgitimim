import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./input";
import PersonInfo from "./PersonInfo";
import HighComponent from "./HighComponent";
import "./App.css";

function App() {
    const name = "Berke";
    const surname = "Arastaman";
    return (
        <>
            <div className="w-50 h-50">
                <button className="btn btn-danger">Tıkla</button>
            </div>

            <HighComponent />
            <br />
            <hr />
            <br />
            <PersonInfo name={name} soyad={surname} age={22} />
            <br />
            <hr />
            <br />
            <Input />
        </>
    );
}

export default App;
