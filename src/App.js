// import logo from './logo.svg';
// import './App.css';
import Home from "./app/component/home";
import Blog from "./app/component/blog";
import Taskbar from "./app/component/taskbar";
import Footer from "./app/component/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Taskbar />
        <div className="body">
          <Switch>
            <Route path="/about">{/* <About /> */}</Route>
            <Route path="/blu2/blog">
              <Blog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
