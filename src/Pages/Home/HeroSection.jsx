export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Elina</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Quantitative</span>{" "}
            <br />
            Researcher
          </h1>
          <p className="hero--section-description">
          Dedicated professional eager to collaborate with industry experts and leverage my technical skills and passion for data to drive positive outcomes
            <br /> 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/elina.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
