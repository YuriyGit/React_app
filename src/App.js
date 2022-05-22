import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Contents from "./components/Contents/Contents";

function App() {
    return (
        <div className = "app_wrapper">
            <Header/>
            <Navbar/>
            <Contents/>

        </div>
    );
}

export default App;
