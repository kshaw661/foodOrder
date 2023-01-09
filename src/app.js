import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <div class="row">
            <div class="mt-2 mb-2">
                <div class="col-lg-6">Logo</div>
                <div class="col-lg-6">Menu</div>
            </div>
        </div>
    );
};
const Body = () => {
    return (
        <div class="row">
            <div class="m-5">
                Body
            </div>
        </div>
    );
};
const Footer = () => {
    return (
        <div class="row">
            <div class="col-lg-12">
                Footer
            </div>
        </div>
    );
};
const AppLayout = (
    <div className='container'>
        
        <Header />
        <Body/>
        <Footer />
        
    </div>    
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(AppLayout);
