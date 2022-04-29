import { Routes, Route } from "react";
import { Entity } from "../Components/Entity/Entity";
import { HomePage } from "../Components/Home/Home";
import { Navbar } from "../Components/Navbar/Navbar";


export const AllRoutes = () => {

    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/entity" element={<Entity/>} />
            </Routes>
        </>
    );
}
