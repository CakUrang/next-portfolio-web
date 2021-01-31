import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
              accusantium dolor.
            </p>
            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img
                  src="/img/random-app.webp"
                  alt="portfolio-image"
                  className="portfolio-image"
                />
                <h4 className="portfolio-name">Random Web App</h4>
                <div className="portfolio-category">Web App</div>
              </div>
              <div className="portfolio-item">
                <img
                  src="/img/of-spc.webp"
                  alt="portfolio-image"
                  className="portfolio-image"
                />
                <h4 className="portfolio-name">Off Spc</h4>
                <div className="portfolio-category">Web Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
