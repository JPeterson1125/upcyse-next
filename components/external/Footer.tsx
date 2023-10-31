import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightString = `Copyright © ${currentYear} Upcyse. All rights reserved.`;

  return (
    <footer>
      <div className="container mx-auto py-12 mt-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-500 light:invert">
              At Upcyse, we're committed to maximizing your property's potential
              in the competitive short-term rental market. Our mission is clear:
              drive high web traffic directly to your property listing through
              captivating photos that invite guests to experience your home's
              beauty firsthand.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-500 light:invert">
              <li className="mb-2">
                <a className="flex items-center" href="mailto:info@upcyse.com">
                  <FaEnvelope className="mr-2" />
                  info@upcyse.com
                </a>
              </li>
              <li>
                <a className="flex items-center" href="tel:715-781-8007">
                  <FaPhone className="mr-2" />
                  715-781-8007
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <ul className="text-gray-500 light:invert">
              <li className="flex items-center mb-2">
                <a
                  className="flex items-center"
                  href="https://www.instagram.com/upcyse/"
                >
                  <FaInstagram className="mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="flex items-center"
                  href="https://www.facebook.com/Upcyse/"
                >
                  <FaFacebook className="mr-2" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-600">{copyrightString}</div>
      </div>
    </footer>
  );
}
