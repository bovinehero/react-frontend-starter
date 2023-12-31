import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import './api/axiosDefaults.js'; 
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";


// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
// https://reactrouter.com/en/main/upgrading/v5

function App() {
  return (
    
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Routes>
              <Route exact path="/" element={<h1>Home page</h1>} />
              <Route exact path="/signin" element={<SignInForm />} />
              <Route exact path="/signup" element={<SignUpForm />} />
              <Route path='*' element={<p>Page not found!</p>} />
            </Routes>
          </Container>
        </div>
  );
}

export default App;
