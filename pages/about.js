import Navbar from "../components/Navbar";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Profile</h1>
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium dolor, repellat tenetur officiis aliquam ipsa eum
              quas, corporis suscipit, vitae magnam dolore eos nobis autem
              laboriosam ut accusamus doloremque! Dolorem adipisci voluptatum,
              enim voluptatem consequatur ex molestias nobis doloremque cum
              similique nesciunt doloribus nihil eos eius sit eveniet delectus
              recusandae!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
