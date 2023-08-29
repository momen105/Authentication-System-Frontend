import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Layout from "./layout/Main";
import PrivateRoute from './utils/PrivateRoute'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrivateRoute >
          <Route path="/" element={< Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          </Route>
        </PrivateRoute>
      </BrowserRouter>
    </div>
  );
}

export default App;
