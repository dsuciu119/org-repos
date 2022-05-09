import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Main Content Layout
import MainContent from "./components/layout/MainContent";

// Screens
import Home from "./screens/Home";
import Organizations from "./screens/Organizations";
import Repositories from "./screens/Repositories";

const App = () => {
    return (
        <MainContent>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/organizations" element={<Organizations />} />
                    <Route path="/repositories/org/:organization" element={<Repositories />} />
                </Routes>
            </Container>
        </MainContent>
    );
};

export default App;