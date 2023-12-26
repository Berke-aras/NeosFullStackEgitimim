import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./input";
import PersonInfo from "./PersonInfo";
import HighComponent from "./HighComponent";
import NameShow from "./NameShow";
import "./App.css";
import LoginFormu from "./LoginFormu";
import { useState } from "react";

function App() {
    const name = "Berke";
    const surname = "Arastaman";

    // const isimler = ["Ercüment", "Berke", "Arastaman"];
    const [isimler, setIsimler] = useState(["Ercüment", "Berke", "Arastaman"]);
    const [numbers, setNumber] = useState([1, 2, 3]);

    function handleClick() {
        // isimler.push("Barış");
        // console.log(isimler);

        const copyNames = [...isimler]; // ... = kopyalama - atadığımızda ana değerleri silmemesi için
        copyNames.push("barış");
        setIsimler(copyNames);
    }

    return (
        <>
            <LoginFormu />

            <br />
            <hr />
            <br />

            {isimler.map((isim, i) => {
                return <NameShow isim={isim} key={isim + i} />;
            })}

            <button onClick={handleClick}>buton</button>

            <br />
            <hr />
            <br />

            <div>
                <button className="btn btn-danger">Tıkla</button>
            </div>

            <br />
            <hr />
            <br />

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
