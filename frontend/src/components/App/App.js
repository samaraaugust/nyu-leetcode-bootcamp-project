import Layout from "../Layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Policy from "../Policy/Policy";
import SearchPage from "../SearchPage/SearchPage";
import Restaurant from "../Restaurant/Restaurant";
import Details from "../Details/Details";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/restaurant" element={<Details />} />
            {/* <Route path="/contact" component={Contact} /> */}
            {/* Additional routes for other pages */}
        </Routes>
      </Layout>
    </Router> 
  );
}

export default App;
