import React from "react";

export const Header = () => {
    return (
        <header>
            <nav className="topbar navbar navbar-default navbar-fixed-top clearfix" id="top-nav">
                <div className="container">
                    <div className="logo-image">
                        <a href="#"><img src="../../public/logo.png" alt="logo"/></a>
                    </div>
                    <div className="navbar-right nav">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav" id="menu_1">
                                    <li className="menu">
                                        <a href="#home" className="pagescroll">Home</a>
                                    </li>
                                    <li className="menu">
                                        <a href="#contact" className="pagescroll">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
