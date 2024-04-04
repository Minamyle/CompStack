import BookDemo1 from "../../components/BookDemo1";
import BookDemo2 from "../../components/BookDemo2";
import Compstack from "../../components/Compstack";
import Hero from "../../components/Hero";
import WhyComp from "../../components/WhyComp";

export default function Home() {
  return (
    <>
      <Hero />
      <Compstack />
      <BookDemo1 />
      <WhyComp />
      <BookDemo2 />
    </>
  );
}
