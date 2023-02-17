import { Route, Routes } from "react-router-dom";
import MainLayout from "./Contaner/MainLayout/MainLayout";
import Wrapper from "./HOC/Wrapper";

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path=":id" element={<MainLayout />} />
        </Route>
      </Routes>
    </Wrapper>
  );
};

export default App;
