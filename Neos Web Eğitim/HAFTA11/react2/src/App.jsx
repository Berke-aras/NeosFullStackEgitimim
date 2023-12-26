import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./input";
import PersonInfo from "./PersonInfo";
import HighComponent from "./HighComponent";
import NameShow from "./NameShow";
import "./App.css";
import { useState } from "react";

function App() {
    const name = "Berke";
    const surname = "Arastaman";

    // const isimler = ["Ercüment", "Berke", "Arastaman"];
    const [isimler, setIsimler] = useState(["Ercüment", "Berke", "Arastaman"]);

    function handleClick() {
        // isimler.push("Barış");
        // console.log(isimler);

        const copyNames = [...isimler]; // ... = kopyalama - atadığımızda ana değerleri silmemesi için
        copyNames.push("barış");
        setIsimler(copyNames);
    }

    return (
        <>
            {isimler.map((isim, i) => {
                return <NameShow isim={isim} key={i} />;
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
