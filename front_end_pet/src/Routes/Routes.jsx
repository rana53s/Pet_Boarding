import { Routes, Route } from "react-router";
import { CreateEntity } from "../Components/Entity/CreateEntity";
import { IndividualEntity } from "../Components/Entity/IndividualEntitity";
import { HomePage } from "../Components/Home/Home";
import { MUIDemo } from "../Components/MUi";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/listing/create" element={<CreateEntity />} />
        <Route exact path="/listing/:id" element={<IndividualEntity/>} />
        <Route exact path="/mui" element={<MUIDemo/>} />
      </Routes>
    </>
  );
};
