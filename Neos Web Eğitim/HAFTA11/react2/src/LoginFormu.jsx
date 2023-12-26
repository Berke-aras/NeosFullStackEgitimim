import React, { useState } from "react";

function LoginFormu() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleClick() {
        const body = {
            username: username,
            password: password,
        };

        console.log(body);
    }
    return (
        <>
            <div>
                Kullanıcı Adı:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                Parola:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleClick}>Giriş Yap</button>
        </>
    );
}

export default LoginFormu;
