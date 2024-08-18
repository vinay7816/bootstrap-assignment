import React from 'react';
import mainimg from "../assets/profile-image.avif"
import featuresimg1 from "../assets/working-1.webp"
import feat2 from "../assets/feature2.svg"
import feat3 from "../assets/feature3.webp"
import contactimg from "../assets/contact.png"
import "./page.css"
const Page = () => {
  return (
    <>
    <div>
      
<nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-between align-items-center">
<a className="navbar-brand text-primary mx-4" href="#">Jillion Technologies</a>
<button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse justify-content-end mx-4" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">Products</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">Testimonials</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">Contact Us</a>
        </li>
    </ul>
</div>
</nav>

{/* <!-- Hero Section --> */}
<div className="hero-section row d-flex align-items-center justify-content-between p-5">
<div className="hero-content col-md-6 animate__animated animate__fadeInLeft">
    <h1>WE MAKE YOUR IDEA'S <span>INTO REALITY</span></h1>
    <p className="my-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="hero-buttons">
        <a href="#" className="btn btn-primary animate__animated animate__bounceIn save">Get Started</a>
        <a href="#" className="btn btn-outline-primary animate__animated animate__bounceIn save">Contact Us</a>
    </div>
</div>
<div className="hero-image col-12 col-md-6 animate__animated animate__fadeInRight">
    <img src={mainimg} alt="Hero Image"/>
</div>
</div>


{/* <!-- Features Section --> */}
<div className="features-section-extended py-5">
<div className="container">
    <div className="row align-items-center mb-5">
        <div className="col-md-6">
            <div className="blob-container">
                <img src={featuresimg1} alt="Feature Image" className="img-fluid"/>
            </div>
        </div>
        <div className="col-md-6">
            <h3>Card Title</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>

    <div className="row align-items-center mb-5">
        <div className="col-md-6 order-md-2">
            <div className="blob-container w-100">
                <img src={feat2} alt="Feature Image" className="img-fluid"/>
            </div>
        </div>
        <div className="col-md-6 order-md-1">
            <h3>Card Title</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>

    <div className="row align-items-center">
        <div className="col-md-6">
            <div className="blob-container w-100">
                <img src={feat3} alt="Feature Image" className="img-fluid "/>
            </div>
        </div>
        <div className="col-md-6">
            <h3>Card Title</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</div>
</div>

{/* <!-- Products Section --> */}
<section className="products-section py-5">
<div className="container">
    <h2 className="text-center mb-5">Products</h2>
    <div className="row">
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="path/to/image1.jpg" className="card-img-top" alt="Product Image"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="path/to/image2.jpg" className="card-img-top" alt="Product Image"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="path/to/image3.jpg" className="card-img-top" alt="Product Image"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
{/* 
<!-- Testimonials Section --> */}
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
<div className="carousel-inner">
    <div className="carousel-item active text-center">
        <img src="https://via.placeholder.com/150" className="rounded-circle mb-4 d-block mx-auto" alt="Testimonial Image" style={{width: "150px"}}/>
        <p className="testimonial-text">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas.</p>
        <h5 className="font-weight-bold">PAULA WILSON</h5>
        <small className="text-muted">, Media Analyst</small>
    </div>
    <div className="carousel-item text-center">
        <img src="https://via.placeholder.com/150" className="rounded-circle mb-4 d-block mx-auto" alt="Testimonial Image" style={{width: "150px"}}/>
        <p className="testimonial-text">This is another testimonial text that you can use to showcase customer feedback.</p>
        <h5 className="font-weight-bold">JOHN DOE</h5>
        <small className="text-muted">, Software Engineer</small>
    </div>
    <div className="carousel-item text-center">
        <img src="https://via.placeholder.com/150" className="rounded-circle mb-4 d-block mx-auto" alt="Testimonial Image" style={{width: "150px"}}/>
        <p className="testimonial-text">Another customer testimonial goes here, providing insight into customer satisfaction.</p>
        <h5 className="font-weight-bold">JANE SMITH</h5>
        <small className="text-muted">, Product Manager</small>
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div>

{/* <!-- Contact Us Section --> */}
<section className="container mt-5">
<h2 className="text-center mb-4">Contact Us</h2>
<div className="row d-flex align-items-center justify-content-between">
    <div className="col-md-6 d-flex justify-content-center align-items-center mb-5">
        <img src={contactimg} alt="Contact Image" className="contact-image w-100 h-100 img-fluid"/>
    </div>
    <div className="col-md-6">
        <form>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name"/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
    </div>
</div>
</section>

{/* <!-- Footer --> */}

<footer className="footer mt-5">
<div className="container">
    <div className="row d-flex justify-content-between align-items-start">
        <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:contact@JILIONTECHNOLOGIES.com">contact@JILIONTECHNOLOGIES.com</a></p>
            <p>Phone: 123456789</p>
            <p>Address: C-260, Sector-63, Noida, UP-201301</p>
        </div>
        <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
                <li><a href="/">About Us</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Development Process</a></li>
                <li><a href="/">Career</a></li>
            </ul>
        </div>
        <div className="col-md-3">
            <h5>Service</h5>
            <ul className="list-unstyled">
                <li><a href="/">Website Development</a></li>
                <li><a href="/">Mobile App Development</a></li>
                <li><a href="/">E-commerce Development</a></li>
                <li><a href="/">Customer Software Development</a></li>
            </ul>
        </div>
        <div className="col-md-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
                <li><a href="/">Contact</a></li>
                <li><a href="/">Term & Policy</a></li>
            </ul>
        </div>
    </div>
</div>
</footer>
</div>
    </>
  );
}

export default Page;

