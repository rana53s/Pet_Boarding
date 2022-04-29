import { Routes, Route } from "react";
import { HomePage } from "../Components/Home/Home";
import { Navbar } from "../Components/Navbar/Navbar";


export const AllRoutes = () => {

    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </>
    );
}
