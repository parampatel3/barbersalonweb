import Appointment from "../common/appointment";
import Footer from "../common/footer";
import Header from "../common/header";

export default function Service () {
    return (
        <>
        <Header />
        <Servicenav />
        <Servicemenu />
        <Appointment />
        <Servicepricing />
        <Footer />
        </>
    );
}

function Servicenav() {
    return (
        <>
         <section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg-1.jpg');" data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
             <div class="container">
                <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                <div class="col-md-9 ftco-animate pb-5 text-center">
                    <h2 class="mb-0 bread">Services</h2>
                    <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-round-forward"></i></a></span> <span>Services <i class="ion-ios-arrow-round-forward"></i></span></p>
                </div>
             </div>
            </div>
         </section>
        </>
    );
}

function Servicemenu() {
    return (
        <>
         <section class="services-section ftco-section">
            <div class="container">
                <div class="row justify-content-center pb-3">
                <div class="col-md-10 heading-section text-center ftco-animate">
                    <span class="subheading">Services</span>
                    <h2 class="mb-4">Services Menu</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                </div>
                <div class="row no-gutters d-flex">
                <div class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services d-block text-center">
                    <div class="icon"><span class="flaticon-male-hair-of-head-and-face-shapes"></span></div>
                    <div class="media-body">
                        <h3 class="heading mb-3">Haircut &amp; Styling</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    </div>    
                </div>
                <div class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services d-block text-center">
                    <div class="icon"><span class="flaticon-beard"></span></div>
                    <div class="media-body">
                        <h3 class="heading mb-3">Beard</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    </div>      
                </div>
                <div class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services d-block text-center">
                    <div class="icon"><span class="flaticon-beauty-products"></span></div>
                    <div class="media-body">
                        <h3 class="heading mb-3">Makeup</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    </div>      
                </div>
                <div class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services d-block text-center">
                    <div class="icon"><span class="flaticon-healthy-lifestyle-logo"></span></div>
                    <div class="media-body">
                        <h3 class="heading mb-3">Body Treatment</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    </div>      
                </div>
                </div>
            </div>
         </section>
        </>
    );
}
 
function Servicepricing() {
    return (
        <>
        <section class="ftco-section ftco-pricing">
            <div class="container">
                    <div class="row justify-content-center pb-3">
                <div class="col-md-10 heading-section text-center ftco-animate">
                    <span class="subheading">Pricing</span>
                    <h2 class="mb-4">Our Prices</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                </div>
                    <div class="row">
                        <div class="col-md-3 ftco-animate">
                            <div class="pricing-entry pb-5 text-center">
                                <div>
                                    <h3 class="mb-4">Hair Style</h3>
                                    <p><span class="price">$50.00</span> <span class="per">/ session</span></p>
                                </div>
                                <ul>
                                    <li>Hair Dryer</li>
                                            <li>Hair Coloring</li>
                                            <li>Hair Cut</li>
                                            <li>Hair Dresser</li>
                                            <li>Hair Spa</li>
                                </ul>
                                <p class="button text-center"><a href="#" class="btn btn-primary px-4 py-3">Get Offer</a></p>
                            </div>
                        </div>
                        <div class="col-md-3 ftco-animate">
                            <div class="pricing-entry pb-5 text-center">
                                <div>
                                    <h3 class="mb-4">Manicure Pedicure</h3>
                                    <p><span class="price">$34.50</span> <span class="per">/ session</span></p>
                                </div>
                                <ul>
                                    <li>Manicure</li>
                                            <li>Pedicure</li>
                                            <li>Coloring</li>
                                            <li>Nails</li>
                                            <li>Nail Cut</li>
                                </ul>
                                <p class="button text-center"><a href="#" class="btn btn-primary px-4 py-3">Get Offer</a></p>
                            </div>
                        </div>
                        <div class="col-md-3 ftco-animate">
                            <div class="pricing-entry active pb-5 text-center">
                                <div>
                                    <h3 class="mb-4">Makeup</h3>
                                    <p><span class="price">$54.50</span> <span class="per">/ session</span></p>
                                </div>
                                <ul>
                                    <li>Makeup</li>
                                            <li>Professional Makeup</li>
                                            <li>Blush On</li>
                                            <li>Facial Massage</li>
                                            <li>Facial Spa</li>
                                </ul>
                                <p class="button text-center"><a href="#" class="btn btn-primary px-4 py-3">Get Offer</a></p>
                            </div>
                        </div>
                        <div class="col-md-3 ftco-animate">
                            <div class="pricing-entry pb-5 text-center">
                                <div>
                                    <h3 class="mb-4">Body Treatment</h3>
                                    <p><span class="price">$89.50</span> <span class="per">/ session</span></p>
                                </div>
                                <ul>
                                    <li>Massage</li>
                                            <li>Spa</li>
                                            <li>Foot Spa</li>
                                            <li>Body Spa</li>
                                            <li>Relaxing</li>
                                </ul>
                                <p class="button text-center"><a href="#" class="btn btn-primary px-4 py-3">Get Offer</a></p>
                            </div>
                        </div>
                    </div>
            </div>
		</section>
        </>
    );
}

export { Servicenav, Servicemenu, Servicepricing }