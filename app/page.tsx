import Image from "next/image";
import Nav from "@/components/external/Nav";
import { Button } from "@/components/ui/button";
import Title from "@/components/external/Title";
import Promo from "@/components/external/Promo";
import Footer from "@/components/external/Footer";
import Faq from "@/components/external/Faq";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 z-10 bg-white dark:bg-black">
        <Nav />
      </div>
      <Title />
      <Promo />
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
