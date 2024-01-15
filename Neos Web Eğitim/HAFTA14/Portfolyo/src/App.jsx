import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import Hakkimizda from "./pages/Hakkimizda";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import ToDoHome from "./ToDoApp/Pages/ToDoHome";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            children: [
                { path: "/", element: <Anasayfa /> },
                { path: "hakkimizda", element: <Hakkimizda /> },
                { path: "contactus", element: <ContactUs /> },
                { path: "todo", element: <ToDoHome /> },
            ],
        },
    ]);

    return (
        <div className="wrapper">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
