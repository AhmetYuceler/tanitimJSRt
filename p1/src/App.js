import Anasayfa from "./menu/Anasayfa";
import Hakkimizda from "./menu/Hakkimizda";
import Iletisim from "./menu/Iletisim";
import Paketler from "./menu/Paketler";
import Duyurular from "./menu/Duyurular";
import GirisYap from "./login/giris";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/Paketler" element={<Paketler />} />
        <Route path="/Duyurular" element={<Duyurular />} />
        <Route path="/GirisYap" element={<GirisYap />} />
      </Routes>
    </>
  );
}

export default App;
