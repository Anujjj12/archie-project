import { Card } from "antd";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Aboutus = () => {
  return (
    <>
      <Header />
      <div className="position-relative">
        <img
          src="/images/siddhi_enterprise.jpg"
          alt="Siddhi Enterprise"
          height="400px"
          width="100%"
          style={{ objectFit: "cover" }}
        />
        <div className="about-us-img-blur"></div>
        <div className="about-us-img-text">About Us</div>
      </div>
      <div className="flex align-center justify-center width-60 m-auto margin-top-100px">
        <Card>
          <p>
            At Siddhi Enterprise, We specialize in providing high-quality
            hardware solutions for furniture fittings. With a commitment to
            excellence and innovation,we cater to the needs of both residential
            and commercial clients, offering a diverse range of products to suit
            various styles and requirments.
          </p>

          <h3>Our Vision</h3>
          <p>
            Our vision at Siddhi Enterprise is to become a leading provider of
            hardware furniture fittings, known for our exceptional quality,
            reliability, and customer service. We aim to continuously innovate
            and evolve our product offerings to meet the evolving needs of our
            customers.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to exceed customer expectations by delivering
            superior products and services that enhance the functionality,
            aesthetics, and durability of furniture. We strive to build
            long-lasting relationships with our clients based on trust,
            integrity, and mutual respect.
          </p>
          <h3>Quality Assurance</h3>
          <p>
            We source our products from trusted manufacturers and ensure that
            each item meets our stringent quality standards.
          </p>
          <h3>Wide Range Of Products</h3>
          <p>
            From drawer slides and hinges to handles and knobs, we offer a
            comprehensive selection of hardware fittings to suit various
            furniture types and designs.
          </p>
          <h3>Expert Guidance</h3>
          <p>
            Our knowledgeable team is dedicated to providing personalized
            assistance and expert advice to help customers find the perfect
            fittings for their projects.
          </p>
          <h3>Commitment to Sustainability</h3>
          <p>
            We are committed to environmental sustainability and strive to offer
            eco-friendly products and practices whenever possible.
          </p>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
