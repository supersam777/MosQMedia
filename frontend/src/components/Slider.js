import React from 'react'

function Slider() {
    return (
        <div className="container">
        <section id="carousel">
            <div className="carousel slide" data-ride="carousel" id="carousel-1">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <div className="jumbotron pulse animated hero-nature carousel-hero">
                            <h1 className="hero-title">Hero Nature</h1>
                            <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                            <p><a className="btn btn-primary hero-button plat" role="button" href="#">Learn more</a></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="jumbotron pulse animated hero-photography carousel-hero">
                            <h1 className="hero-title">Hero Photography</h1>
                            <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                            <p><a className="btn btn-primary hero-button plat" role="button" href="#">Learn more</a></p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="jumbotron pulse animated hero-technology carousel-hero">
                            <h1 className="hero-title">Hero Technology</h1>
                            <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                            <p><a className="btn btn-primary hero-button plat" role="button" href="#">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><i className="fa fa-chevron-left"></i><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><i className="fa fa-chevron-right"></i><span className="sr-only">Next</span></a></div>
                <ol className="carousel-indicators">
                    <li data-target="#carousel-1" data-slide-to="0"></li>
                    <li data-target="#carousel-1" data-slide-to="1"></li>
                    <li data-target="#carousel-1" data-slide-to="2" className="active"></li>
                </ol>
            </div>
        </section>
    </div>
    )
}

export default Slider
