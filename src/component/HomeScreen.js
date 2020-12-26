import React, {Component} from "react";

// import {HomeTamplate} from "./HomeTamplate/HomeTamplate";

class OroHome extends Component {
    render() {
        return (
            <div data-spy="scroll" data-target=".navbar-fixed-top" data-offset="100">
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
                <div id="home">
                    <div id="owl-demo" className="owl-carousel owl-theme slider-header  autoHeight owl-demo">
                        <div className="item">
                            <div className="slider-image1 autoHeight bgimage-property bg1 slider1-padding">
                                <div className="container">
                                    <div className="col-sm-12  text-center">
                                        <div className="header-div-1">
                                            <h1><span>Service</span> AI</h1>

                                            <div className="header-btn">
                                                <a href="#contact" className="btn btn-1 ">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-image1 autoHeight bgimage-property bg2 slider1-padding">
                                <div className="container">
                                    <div className="col-sm-12  text-center">
                                        <div className="header-div-1">
                                            <h1><span>AI + IOT </span>Cloud</h1>

                                            <div className="header-btn">
                                                <a href="#contact" className="btn btn-1 ">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-image1 autoHeight bgimage-property bg3 slider1-padding">
                                <div className="container">
                                    <div className="col-sm-12  text-center">
                                        <div className="header-div-1">
                                            <h1><span>Real-Time Edge</span> AI</h1>

                                            <div className="header-btn">
                                                <a href="#contact" className="btn btn-1">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-image1 autoHeight bgimage-property bg4 slider1-padding">
                                <div className="container">
                                    <div className="col-sm-12  text-center">
                                        <div className="header-div-1">
                                            <h1><span>AI</span> Chatbots</h1>

                                            <div className="header-btn">
                                                <a href="#contact" className="btn btn-1">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <section className="section-padding section-1-bg">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-md-push-6 features-image res-space">
                                <img src="../../public/555x590.jpg" alt="555x590" className="img-responsive"/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-md-pull-6 features-col">
                                <h3>Rapid enablement of AI</h3>
                                <h3><span>in EDGE or CLOUD</span></h3>
                                <h3>25x to 100x times faster!</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding bgimage-property" id="services">
                    <div className="container">
                        <div className="heading-div-1 head-h-div text-center">
                            <h2>AI/IOT Cloud</h2>
                            <p>Rapidly connect and cloud manage any hardware for smart control, monitoring and
                                actionable
                                insights. Use
                                our public cloud or host anywhere (GCP, Azure, AWS, private cloud or bare metal).</p>
                            <div className="underline"/>
                        </div>

                        <div className="row services-row">
                            <div
                                className="col-xs-6 col-sm-6 col-md-3 text-center services-space-2 services-space-3 onecolumn-res">
                                <div className="services-div">
                                    <img src="../../public/48x48x1.png" alt="48x48x1" className="image-bottom-space1"/>
                                    <h5><a href="#">Turn any device into a Cloud Managed Intelligent Device</a></h5>
                                    <p className="content-top-space1">Device Management, Multi tenant cloud, Data
                                        isolation and
                                        encryption,
                                        Distributors, VARs, Resellers</p>
                                </div>
                            </div>
                            <div
                                className="col-xs-6 col-sm-6 col-md-3 text-center services-space-2 services-space-3 onecolumn-res">
                                <div className="services-div">
                                    <img src="../../public/48x48x2.png" alt="48x48x2" className="image-bottom-space1"/>
                                    <h5><a href="#">Deploy AI pipelines on your IoT data at scale in minutes</a></h5>
                                    <p className="content-top-space1">Data Lake, Manage all your data, Forecast,
                                        Anomaly,
                                        classNameify,
                                        Pre-built models or build your own</p>
                                </div>
                            </div>
                            <div
                                className="col-xs-6 col-sm-6 col-md-3 text-center services-space-1 services-space-2 onecolumn-res">
                                <div className="services-div">
                                    <img src="../assets/img/48x48x3.png" alt="48x48x3" className="image-bottom-space1"/>
                                    <h5><a href="#">App Store – Select from ready made apps or build your own</a></h5>
                                    <p className="content-top-space1">Visualization, Reporting, Alerts & Notifications,
                                        AI &
                                        Analytics</p>
                                </div>
                            </div>
                            <div
                                className="col-xs-6 col-sm-6 col-md-3 text-center  services-space-1 services-space-2 onecolumn-res">
                                <div className="services-div">
                                    <img src="../../public/48x48x4.png" alt="48x48x4" className="image-bottom-space1"/>
                                    <h5><a href="#">Mobile Apps (iOS/Android) for end user or the administrator</a></h5>
                                    <p className="content-top-space1">Self signup, Notifications, Free/Premium</p>
                                </div>
                            </div>


                        </div>


                    </div>
                </section>

                <section className="section-2-bg two-left-right-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 two-left-bgimage bgimage-property">

                            </div>
                            <div className="container">
                                <div className="col-sm-12 col-md-6 two-left-div">
                                    <h3 className="head-text">Real-time Edge AI</h3>
                                    <p className="text">Cloud is just too far, unreliable, & slow for real-time analysis
                                        and
                                        action. Use
                                        local intelligence at the edge for vision, sound and sensor data:</p>
                                    <div className="underline-1"/>
                                    <ul className="ul-text">
                                        <li>
                                            <p>Identifying human emotions and behavior</p>
                                        </li>
                                        <li><p>Recognizing human actions and interactions</p></li>
                                        <li><p>Understanding surroundings</p></li>
                                        <li><p>Predicting the intent as well as what’s next</p></li>
                                        <li><p>Multiple patterns and objects in parallel</p></li>
                                        <li><p>Small footprints fit for IOT devices</p></li>
                                    </ul>
                                    <div className="btn-top-space">
                                        <a href="#contact" className="btn btn-1">Learn more </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <section className="section-padding testimonial-bg bgimage-property" id="testimonial">
                    <div className="container">
                        <div className="col-sm-12 text-center">


                            <div className="owl-carousel testimonial">

                                <div className="item">
                                    <div className="testimonial-div">
                                        <div className="testimonial-name-div">
                                            <div className="list-div">
                                                <div className="list-div-left">
                                                    <img src="../../public/icon1.png" alt="80x80x1"/>
                                                </div>
                                                <div className="list-div-body">
                                                    <p className="testimonial-name">Safe Drive AI</p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className="testimonial-para">"Edge AI to analyze whats going on inside the
                                            car – the
                                            driver, the
                                            occupants and the cabin. Collision avoidance, occupant comfort, safety, and
                                            more."
                                        </p>


                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-div">
                                        <div className="testimonial-name-div">
                                            <div className="list-div">
                                                <div className="list-div-left">
                                                    <img src="../../public/icon2.png" alt="80x80x2"/>
                                                </div>
                                                <div className="list-div-body">
                                                    <p className="testimonial-name">Sound AI</p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className="testimonial-para">"Scribbling notes during the meeting has long
                                            been the
                                            norm of
                                            business. The need to take notes is important; however, it is time-consuming
                                            and
                                            hinders the
                                            natural flow of conversation. Real-time transcription for meetings, class
                                            Names and
                                            audios
                                            without any data going to cloud."
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-div">
                                        <div className="testimonial-name-div">
                                            <div className="list-div">
                                                <div className="list-div-left">
                                                    <img src="../../public/icon3.png" alt="80x80x3"/>
                                                </div>
                                                <div className="list-div-body">
                                                    <p className="testimonial-name">Air Quality AI</p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className="testimonial-para">"Indoor air is very often contaminated by
                                            harmful
                                            substances created
                                            by everyday cleaning and cooking activities. AI to predict and limit health
                                            risks from
                                            exposure to fine particles and excessive concentrations of CO2."
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-div">
                                        <div className="testimonial-name-div">
                                            <div className="list-div">
                                                <div className="list-div-left">
                                                    <img src="../../public/icon4.png" alt="80x80x4"/>
                                                </div>
                                                <div className="list-div-body">
                                                    <p className="testimonial-name">Sensor AI</p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className="testimonial-para">"AI for Mechanical (e.g., pressure, accel,
                                            strain),
                                            Acoustic (e.g.,
                                            microphone,) Optical (e.g. spectrometer), EM radiation (e.g., radars)
                                            Thermal,
                                            Chemical
                                            (e.g., gas sensors) Magnetic (e.g., magnetometer) Electrical (EEG, ECG)
                                            sensors."
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-padding section-1-bg chatbot" id="news">
                    <div className="container">
                        <div className="heading-div-1 head-h-div text-center">
                            <h2>AI Assistants/ Chatbots</h2>
                            <p className="text">Scale your business by adding a virtual assistant with Artificial
                                Intelligence</p>
                            <div className="underline"/>
                        </div>
                        <div className="row news-row-1">
                            <div className="col-sm-4">
                                <div className="news-img">
                                    <img src="../../public/chatbot.jpg" alt="chatbot" className="img-responsive"/>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-col">

                                    <h4><a href="#">On Prem or Cloud</a></h4>

                                    <p>Host wherever you prefer – at GCP, AWS, Azure, or your premises
                                    </p>

                                </div>
                                <div className="news-col">

                                    <h4><a href="#">State of the Art</a></h4>

                                    <p>Self learning, neural network based design producing fast and consistent
                                        responses.
                                    </p>

                                </div>
                                <div className="news-col">

                                    <h4><a href="#">Privacy & Secure</a></h4>

                                    <p>No 3rd party APIs. Your data and your learning – 100% yours and not shared with
                                        anyone!
                                    </p>

                                </div>
                                <div className="news-col">

                                    <h4><a href="#">Omni channel</a></h4>

                                    <p>Chat with your product via multiple channels or just provide customer support.
                                        Conversations
                                        across all channels – web, sms, email, text, whatsapp, etc.
                                    </p>

                                </div>
                            </div>

                        </div>


                    </div>
                </section>


                <section className="cta-bg cta bgimage-property">
                    <div className="container">
                        <div className="col-sm-12 text-center">
                            <h2>LET'S TALK</h2>
                            <div className="underline"/>
                            <p>About Your Next Project .
                            </p>
                            <div className="btn-top-space">
                                <a href="#contact" className="btn btn-1">Get in touch </a>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="section-padding section-2-bg" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 contact-img" id="canvas1">


                                {/*<iframe id="map_canvas1" className="contact-frame"*/}
                                {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.7792721288038!2d-121.95383008520434!3d37.32405584573623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbaef9d3cc19%3A0x18d75260b41b5980!2s3141%20Stevens%20Creek%20Blvd%2C%20Santa%20Clara%2C%20CA%2095051%2C%20USA!5e0!3m2!1sen!2sin!4v1608922252459!5m2!1sen!2sin"*/}
                                {/*        frameBorder="0" style="border:0;" allowFullScreen="" aria-hidden="false"*/}
                                {/*        tabIndex="0"/>*/}
                            </div>
                            <div className="col-sm-6 ">
                                <div className="form-col-1 no-padding">
                                    <form className="contact-form-1" method="POST">
                                        <div className="form-div-1">
                                            <input className="form-input" type="text" name="name" value=""
                                                   placeholder="Please Enter Name" required autoComplete="off"/>
                                        </div>
                                        <div className="form-div-1">
                                            <input className="form-input" type="email" name="email" value=""
                                                   placeholder="Please Enter Email" required autoComplete="off"/>
                                        </div>

                                        <div className="form-div-1">
                                        <textarea className="form-message" name="message" cols="40" rows="6"
                                                  placeholder="Please Enter Message" required
                                                  autoComplete="off"/>
                                        </div>
                                        <div className="button form-btn text-left">
                                            <button type="submit" className="btn btn-1 submit">Submit</button>
                                        </div>
                                        <div className="messageDiv"><span className="successMessage"> </span>
                                            <span className="failMessage"> </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 footer-col">
                                <div className="footer-logo">
                                    <a href="#"><img src="../../public/footer-img.png" alt="logo"
                                                     className="img-responsive"/></a>
                                </div>

                            </div>
                            <div className="col-sm-4 footer-col-1">

                                <div id="mc_embed_signup" className="subscribe-form">
                                    <h4>Search </h4>
                                    <form
                                        action="http://evethemes.us11.list-manage.com/subscribe/post?u=a795532c55a578843e04b09c0&amp;id=fa362f029a"
                                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                        className="validate form7 clearfix" noValidate>

                                        <input className="subscribe-input" type="email" name="EMAIL" value=""
                                               id="mce-EMAIL"
                                               placeholder="Please Enter Email"/>
                                        <div className="subscribe-btn">
                                            <button className="btn btn-1" id="mc-embedded-subscribe" type="submit">
                                                Search
                                            </button>
                                        </div>

                                        <div id="mce-responses">
                                            <div className="response response-msg" id="mce-error-response"/>
                                            <div className="response response-msg" id="mce-success-response"/>
                                        </div>
                                    </form>
                                    <div id="ResultMsg" className="message">
                                        <p className="SuccessMsg"/>
                                        <p className="FailureMsg"/>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-4">
                                <div className="contact-div">
                                    <ul className="content-ul contact-address contact-address-space">
                                        <li><img src="../../public/32x32x5.png" alt="32x32x5"/></li>
                                        <li>
                                            <p><a href="#">info@oronetworks.com</a></p>
                                        </li>
                                    </ul>
                                    <ul className="content-ul contact-address contact-address-space">
                                        <li><img src="../../public/32x32x6.png" alt="32x32x6"/></li>
                                        <li>
                                            <p>3141 Stevens Creek Blvd San Jose CA 95117</p>
                                        </li>
                                    </ul>

                                    <ul className="content-ul contact-address">
                                        <li><img src="../../public/32x32x8.png" alt="32x32x8"/></li>
                                        <li>
                                            <p> +1 408-203-5641</p>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="content-ul footer1-icon">
                                    <li><a href="https://twitter.com/oronetworks">
                                        <img src="../../public/40x40x2.png"
                                             alt="40x40x2"/></a></li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/oronetworks/">
                                            <img src="../../public/40x40x1.png" alt="40x40x1"/></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="copyright-bg">
                    <div className="container copyright text-center">
                        <p>All rights reserved © 2020, ORO Networks, LLC</p>
                    </div>
                </footer>

            </div>
        );
    }
}

export default OroHome;
