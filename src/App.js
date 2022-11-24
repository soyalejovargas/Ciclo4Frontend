import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { BlogPage } from "./pages/BlogPage";
import { Inmuebles } from "./pages/Inmuebles";
import { DetalleInmueble } from "./pages/DetalleInmueble";
import { Menu } from "./components/Menu";
import { NotFound } from "./pages/NotFound";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inmuebles" element={<Inmuebles/>} />
          <Route path="/inmuebles/:id" element={<DetalleInmueble/>} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </Container>
  );
}

export default App;
