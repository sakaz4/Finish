import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Disciplines from './components/Disciplines/Disciplines';
import Start from './components/Start/Start';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dh from './components/Dh/Dh';
import Xc from './components/Xc/Xc';
import Road from './components/Road/Road';
import Cx from './components/Cx/Cx';
import Contacts from './components/Contacts/Contacts';


function App() {
	return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Start />}></Route>
                <Route path="/disciplines/" element={<Disciplines />}></Route>
                <Route path="/disciplines/dh/" element={<Dh />}></Route>
                <Route path="/disciplines/xc/" element={<Xc />}></Route>
                <Route path="/disciplines/road/" element={<Road />}></Route>
                <Route path="/disciplines/cx/" element={<Cx />}></Route>
                <Route path="/contacts/" element={<Contacts />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
		
        

	);
}

export default App;
