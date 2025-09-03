import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
}



