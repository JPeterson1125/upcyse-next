import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div id="faq" className="p-12">
      <h1 className="mt-10 font-bold text-4xl text-center md:text-left">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full py-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>What Are Your Fees?</AccordionTrigger>
          <AccordionContent>
            <p className="p-2">
              ▪️ We have a truly one-of-a-kind business model that minimizes the
              risk for our customers by promising no hidden fees, no upfront
              investment or cost, and a negotiable percentage-based commission
              system that helps both parties feel secure.
            </p>{" "}
            <p className="p-2">
              {" "}
              ▪️ Upcyse's commission-based pricing structure means we only make
              money when you make money, which keeps us conditioned to maximize
              your earning potential. Our homeowners don't stick around because
              they have to finish their contract they stay because they have
              seen our impact and love the services they have received.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            What Makes Upcyse Stand Out from Competitors?
          </AccordionTrigger>
          <AccordionContent>
            <p className="p-2">
              ▪️ Upcyse is determined to make its mark in the short-term rental
              space. We strive to do this by completing the complex tasks of
              marketing/promoting your property and giving you the flexibility
              to decide who cleans and monitors your property to your liking.{" "}
            </p>
            <p className="p-2">
              ▪️ When it comes to management companies most will charge 30-50%
              of your rental income in exchange for providing you with their
              services. But as sad as it is, some management providers may not
              be well equipped to handle those tasks in this day and age. The
              average rental manager may lack the resources and expertise to
              promote your property most effectively. On top of this, there is
              the headache of having to deal with hidden fees and ridiculously
              high on-site commissions that may not even help with causing
              guests to book your rental. We are happy to promise a comfortable
              commission with none of the added headache!
            </p>
            <p className="p-2">
              ▪️ When considering management companies, it is common to
              encounter a fee structure of 30-50% of your rental income in
              exchange for their services. However, it is unfortunate that some
              management providers may not possess the necessary resources or
              expertise to effectively handle these responsibilities in today's
              day and age. The typical rental manager may lack the knowledge and
              tools needed to effectively market your property. Furthermore,
              there may be hidden fees and excessively high on-site commissions
              that do not contribute to securing bookings for your rental. At
              our company, we pride ourselves on offering a fair and comfortable
              commission structure without the added complications.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How Will You Promote My Property To Travelers?
          </AccordionTrigger>
          <AccordionContent>
            <p className="p-2">
              ▪️ First and foremost, we will list your property on all major
              marketplaces for short-term rental properties such as Airbnb,
              Vrbo, Booking.com, and Google —but that is not what makes our
              promotion so effective.{" "}
            </p>
            <p className="p-2">
              ▪️ Almost anyone can create a listing. We strive to create
              listings with the goal of converting browsing travelers into
              paying guests.{" "}
            </p>
            <p className="p-2">
              ▪️ Every travel site has its own algorithm for determining which
              properties will be ranked higher up in the search results for a
              designated area. This can be a difficult process to beat but with
              our team working diligently to promote your listing’s performance
              by creating a professionally written and photographed listing
              whilst going through the daily tasks of analyzing and optimizing
              your listing. We have developed a method that is consistent and
              effective so you don't have to worry.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How Do You Handle On-Site Home Services?
          </AccordionTrigger>
          <AccordionContent>
            <p className="p-2">
              ▪️ Our unparalleled flexibility is exemplified by our ability to
              offer on-site home services for your Airbnb guests. At Upcyse, we
              recognize that property owners are best equipped to manage their
              own properties. Therefore, we provide a comprehensive range of
              options for servicing your property, including self-service,
              utilizing your trusted partners, or collaborating with us to
              identify a trusted partner in the area.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            How Do I Know If My Property Is a Good Fit For Upcyse?
          </AccordionTrigger>
          <AccordionContent>
            <p className="p-2">
              ▪️ At Upcyse, we take the quality of our guests' experience
              seriously. To ensure that we can provide the best possible
              service, we require that the properties we work with meet certain
              standards. These include safety, cleanliness, guest readiness, and
              accurate representation. We also ask that you keep your booking
              calendar up to date to prevent any potential conflicts. Finally,
              it's important that you have the appropriate approvals from your
              city to operate your property as a short-term rental.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>How Do I Get Started?</AccordionTrigger>
          <AccordionContent>
            <p className="p-2">
              ▪️ To begin your journey with Upcyse, we invite you to click any
              of the green buttons and send us a message about your current
              situation. This will help us determine if your property is a good
              fit for our services. If your property meets our requirements,
              we'll arrange a call with one of our expert Vacation Rental
              Advisors to guide you through the sign-up process. Our aim is to
              make the process as smooth as possible, and we'll work diligently
              to have you up and running in just two weeks, provided your
              property is ready for photography. We look forward to the
              opportunity to partner with you.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
