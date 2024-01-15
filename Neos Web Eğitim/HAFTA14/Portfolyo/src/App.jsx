// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import Hakkimizda from "./pages/Hakkimizda";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import ToDoHome from "./ToDoApp/Pages/ToDoHome";
import MagazaHome from "./Magaza/pages/MagazaHome";

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
                { path: "magaza", element: <MagazaHome /> },
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
