import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import Rates from "./pages/Rates";
import { useEffect } from "react";
import { userInfo } from "./services/getUserInfo";
import { useDispatch } from "react-redux";
import { baseCurrencyThunk } from "./redux/thunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // const latitude = position?.coords?.latitude;
        // const longitude = position?.coords?.longitude;
        // userInfo(latitude, longitude);
        console.log(position.coords);
        const crd = position?.coords;
        dispatch(baseCurrencyThunk(crd));
      });
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/rates" element={<Rates />} />
      </Route>
    </Routes>
  );
}

export default App;
