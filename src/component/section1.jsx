import React from "react";

export const Section1 = () => {
    return (
        <section className="section-padding section-1-bg">
            <div className="container">

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-md-push-6 features-image res-space section1image">
                        {/*<img src="../../public/555x590.jpg" alt="555x590" className="img-responsive"/>*/}
                    </div>
                    <div className="col-sm-12 col-md-6 col-md-pull-6 features-col">
                        <h3>Rapid enablement of AI</h3>
                        <h3><span>in EDGE or CLOUD</span></h3>
                        <h3>25x to 100x times faster!</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};
