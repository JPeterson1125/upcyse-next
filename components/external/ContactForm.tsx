"use client";

import { Button } from "../ui/button";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqkvwrvo");
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Thank you!</h1>
        <p className="text-xl text-center">
          We have received your message and will be in touch shortly!
        </p>
        <Link href="/">
          <Button className="my-20">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center sm:p-4 md:p-10 lg:p-32">
      <Image
        src={"/images/designs/green-logo.png"}
        alt="cover-image"
        layout="fill"
        objectFit="contain"
        className="opacity-10 p-20 z-[-1]"
      />
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="py-2 flex flex-col text-xl">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                name="name"
                id="full-name"
                placeholder="First and Last"
                required
                className="text-lg rounded-lg p-2"
              />
            </div>
            <div className="py-2 flex flex-col text-xl">
              <label htmlFor="email-address">Email Address</label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                placeholder="email@gmail.com"
                required
                className="text-lg rounded-lg p-2"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="py-2 flex flex-col text-xl">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone-number"
                placeholder="123-456-7890"
                required
                className="text-lg rounded-lg p-2"
              />
            </div>
            <div className="py-2 flex flex-col text-xl">
              <label htmlFor="street-address">Property Address</label>
              <input
                type="text"
                name="street"
                id="street-address"
                placeholder="Street"
                required
                className="text-lg rounded-lg p-2"
              />
            </div>
            <fieldset className="locale text-xl pb-2">
              <legend>Location</legend>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className="rounded-lg p-2"
                />
                <select name="state" required className="rounded-lg p-2">
                  <option value="" disabled>
                    State
                  </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <input
                  type="text"
                  name="postal-code"
                  placeholder="12345"
                  required
                  className="rounded-lg p-2"
                />
              </div>
            </fieldset>
            <label className="text-xl" htmlFor="message">
              Message
            </label>
            <textarea
              rows={2}
              name="message"
              id="message"
              placeholder="Include your message here."
              className="w-full block h-20 rounded-lg p-2"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Registration Form Submission"
            />
          </fieldset>
          <Button className="my-2" type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </form>
      </div>
      <div className="p-12 relative left-20">
        <div className="flex flex-col justify-center items-center h-full text-white text-2xl text-center">
          <h1 className="p-6">We Would Love to Hear From You!</h1>
          <h2>
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will respond as quickly as possible.
          </h2>
        </div>
      </div>
    </div>
  );
}
