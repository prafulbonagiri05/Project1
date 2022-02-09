import './App.css';
import Reservation from './components/Reservation';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ReservationForm from './components/ReservationForm';
import UpdateReservation from './components/UpdateReservation';
import GetRooms from './components/GetRooms';
import AddRooms from './components/AddRooms';
import UpdateRooms from './components/UpdateRooms';
import Navbar from './components/Navbar';
import PaymentDetails from './components/PaymentDetails';
import IssueBills from './components/IssueBills';
import GetPaymentDetails from './components/GetPaymentDetails';
import Home from './components/Home';
import AddGuest from './components/AddGuest';
import Log from './components/Log';
import PaymentGateway from './components/PaymentGateway';
import Owner from './components/Owner';
import Logrec from './components/Logrec';
import Customer from './components/Customer';

function App() {

  return (
    <div>
       
      <Router>
        <Navbar />
        <div>
          
          <Switch>
           <Route path="/" exact component={Home}></Route>
            <Route path="/logowner" exact component={Log}></Route>
            <Route path="/logrec" exact component={Logrec}></Route>
            <Route path="/owner" exact component={Owner}></Route>
            <Route path="/customer" exact component={Customer}></Route>
            <Route path="/SearchRooms/addReservation" exact component={ReservationForm}></Route>
            <Route path="/reservations" exact component={Reservation}></Route>
            <Route path="/updateReservation/:id" component={UpdateReservation}></Route>
            <Route path="/reservations/addGuests" exact component={AddGuest}></Route>

            <Route path="/SearchRooms" exact component={GetRooms}></Route>
            <Route path="/SearchRooms/addRooms" exact component={AddRooms}></Route>
            <Route path="/SearchRooms/updateRooms/:id" exact component={UpdateRooms}></Route>
            <Route path="/reservations/SetRates" exact component={PaymentDetails}></Route>
            <Route path="/SetRates/issueBills" exact component={IssueBills}></Route>
            <Route path="/SetRates/issueBills/getPaymentDetails" exact component={GetPaymentDetails}></Route>
            <Route path="/PaymentGateway" exact component={PaymentGateway}></Route>
            <Reservation />
            
            </Switch>
            </div>
            </Router>


    </div>
  );
}

export default App;