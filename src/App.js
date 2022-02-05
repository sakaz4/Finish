import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Disciplines from './components/Disciplines/Disciplines';
import Start from './components/Start/Start';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
	return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Start />}></Route>
                <Route path="/disciplines/" element={<Disciplines />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
		
        

	);
}

export default App;
