import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Docs, Donation, Games, Register, ShareInfo} from "./views";
import NavBar from "./component/NavBar/NavBar"
import axios from 'axios';
import Footer from 'component/Footer/Footer';
axios.defaults.baseURL= 'http://localhost:3001/';

function App() {
    
    //const location = useLocation();
    

    return(
        <div>
            <NavBar />

            <Route exact path='/' render ={() => <Home />} />

            <Route exact path='/games'>
                <Games />
            </Route>

            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/contact">
                <Contact />
            </Route>

            <Route exact path="/docs">
                <Docs />
            </Route>

            <Route exact path="/docs/share">
                <ShareInfo />
            </Route>

            <Route exact path="/register">
                <Register />
            </Route>

            <Route exact path="/donation">
                <Donation />
            </Route>       
        </div>

    )
}

export default App;