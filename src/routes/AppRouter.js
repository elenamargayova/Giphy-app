import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import RandomGiphy from '../components/Cards/RandomGiphy';
import ErrorLog from '../components/Cards/Error';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header /> 
            <Switch>
                <Route path="/" component={Cards} exact={true}/>
                <Route path="/random" component={RandomGiphy} />
                <Route component={ErrorLog}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
)

export default AppRouter;