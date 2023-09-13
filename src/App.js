import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Header, AnimatedRoute } from './Components/ExportComponents';

const App = () => {

    return (

        <BrowserRouter>
            <Header />
            <AnimatedRoute />
        </BrowserRouter>

    );
}
export default App;
