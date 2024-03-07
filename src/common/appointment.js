export default function Appointment() {
    return (
        <>
        <section class="ftco-section ftco-booking bg-light">
            <div class="container ftco-relative">
                <div class="row justify-content-center pb-3">
            <div class="col-md-10 heading-section text-center ftco-animate">
                <span class="subheading">Booking</span>
                <h2 class="mb-4">Make an Appointment</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            </div>
            <h3 class="vr">Call Us: 012-3456-7890</h3>
                <div class="row justify-content-center">
                    <div class="col-md-10 ftco-animate">
                        <form action="#" class="appointment-form">
                    <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="appointment_name" placeholder="Name" />
                            </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="appointment_email" placeholder="Email" />
                            </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                        <input type="text" class="form-control appointment_date" placeholder="Date" />
                        </div>    
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                        <input type="text" class="form-control appointment_time" placeholder="Time" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <div class="select-wrap">
                        <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                        <select name="" id="" class="form-control">
                            <option value="">Professional Makeup</option>
                            <option value="">Manicure Pedicure</option>
                            <option value="">Body Treatment</option>
                            <option value="">Haircut &amp; Coloring</option>
                        </select>
                        </div>
                            </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                        <input type="text" class="form-control" id="phone" placeholder="Phone" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                        </div>
                    </div>
                    </div>
                    <div class="form-group">
                    <input type="submit" value="Make an Appointment" class="btn btn-primary" />
                    </div>
                </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}