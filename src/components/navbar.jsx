import React from 'react';

// stateless functional component
const Navbar = ({ totalCounters }) => {
    console.log('Navbar - Rendered');
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Products in Cart{" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default Navbar;