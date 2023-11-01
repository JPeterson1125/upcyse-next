import Nav from "@/components/external/Nav";
import Footer from "@/components/external/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-10 bg-white dark:bg-black">
        <Nav />
      </div>
      <div className="flex flex-col md:flex-row items-center p-4 md:p-20 md:mb-10 mt-20 md:mt-0">
        <Image
          src={"/images/designs/upcyse-wave.png"}
          alt="cover-image"
          width={1000}
          height={100}
          className=""
        />
        <div className="p-4 md:p-20">
          <h1 className="text-4xl md:text-6xl font-bold py-4">Our Mission</h1>
          <p className="text-xl md:text-2xl">
            At Upcyse, we're your trusted partner in vacation rental management.
            With our proven strategies and expert team, we help you maximize
            your short-term rental's potential, boost your bookings, and
            increase your revenue.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button
                variant={"outline"}
                className="text-lg p-6 hover:bg-accent w-full"
              >
                Get Started With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center p-8 lg:p-20 lg:mb-10">
        <div className="px-4 lg:px-10 border border-accent">
          <h1 className="text-4xl lg:text-6xl font-bold py-4 lg:py-12 px-4 lg:px-10">
            Our Services
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 p-4 lg:p-10 lg:mb-10">
            <div>
              <strong className="text-2xl">
                Virtual management of your property:{" "}
              </strong>
              <p className="leading-8">
                We prioritize your time by optimizing your property's online
                presence to help you earn more, hassle-free, with no fees or
                high time commitments to get started.
              </p>
            </div>
            <div>
              <strong className="text-2xl">
                Professional photography and marketing:{" "}
              </strong>
              <p className="leading-8">
                We create stunning photos of your property that highlight its
                best features. We then market your property on all the major
                rental platforms to reach the widest possible audience.
              </p>
            </div>
            <div>
              <strong className="text-2xl">
                Expert pricing and revenue optimization:{" "}
              </strong>
              <p className="leading-8">
                We use our expertise in dynamic pricing and revenue management
                to ensure that you are getting the most out of your short-term
                rental. We will also help you set competitive rates and optimize
                your listing descriptions to attract more bookings.
              </p>
            </div>
            <div>
              <strong className="text-2xl">On-site support: </strong>
              <p className="leading-8">
                While we don't physically manage your property, we strive to
                provide as much support as needed to streamline your day-to-day
                operations, minimizing the delays that can occur when relaying
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center p-4 md:p-20 md:mb-10">
        <div className="p-4 md:p-20">
          <h1 className="text-4xl md:text-6xl font-bold py-4">
            About the Team
          </h1>
          <p className="text-xl md:text-2xl">
            Our team is comprised of an in-house professional photographer, SEO
            specialist, and a software developer. We are passionate about
            helping our clients succeed in the short-term rental market.
          </p>
        </div>
        <Image
          src={"/images/designs/upcyse-topo.png"}
          alt="cover-image"
          width={1000}
          height={100}
          className=""
        />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
