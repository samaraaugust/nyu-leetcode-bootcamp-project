import Layout from "../Layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Policy from "../Policy/Policy";
import SearchPage from "../SearchPage/SearchPage";
import Details from "../Details/Details";
import { DataProvider  } from "../FilterContext/FilterContext";
function App() {
  return (
    <DataProvider>
      <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '80px', boxSizing: 'border-box'}}>
        <Router>
          <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/restaurant/:param" element={<Details />} />
            </Routes>
          </Layout>
        </Router> 
      </div>
    </DataProvider>
  );
}

export default App;
