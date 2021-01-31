import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <div className="contact">
              <p className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium dolor.
              </p>
              <ul className="contact-links">
                <li className="contact-item">Email: lutfhi@me.com</li>
                <li className="contact-item">Phone: +621234918471</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
