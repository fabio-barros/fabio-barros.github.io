import "../styles/css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home";
function App() {
    return (
        <Router>
            <main>
                <Route path="/" component={Home} exact></Route>
            </main>
        </Router>
    );
}

export default App;
