import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/test" element={<ProtectedRoute><>Test</></ProtectedRoute>} />
      <Route index element={<Homepage />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
