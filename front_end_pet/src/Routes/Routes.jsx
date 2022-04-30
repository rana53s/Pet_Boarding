import { Routes, Route } from "react-router";
import { CreateEntity } from "../Components/Entity/CreateEntity";
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
        <Route exact path="/listing/:id" element={<CreateEntity />} />
        <Route exact path="/mui" element={<MUIDemo/>} />
      </Routes>
    </>
  );
};
