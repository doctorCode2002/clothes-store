import React from "react";

const Contact = () => {
  return (
    <div className="bg-primary-50 text-primary-900">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-primary-100 to-primary-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-primary-700 leading-relaxed">
            Have a question, feedback, or need support? We’re here to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="text-primary-700 leading-relaxed">
              Reach out to us anytime. Our support team typically responds
              within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                ["Email", "support@yourstore.com"],
                ["Phone", "+1 (234) 567-890"],
                ["Address", "123 Commerce Street, Online City"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="p-5 rounded-xl bg-white border border-primary-200
                  hover:border-primary-500 hover:shadow-lg
                  transition-all duration-300"
                >
                  <p className="text-sm text-primary-600">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            className="bg-white p-8 rounded-2xl border border-primary-200
            hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-primary-200
                focus:border-primary-500 focus:ring-2 focus:ring-primary-200
                outline-none transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-primary-200
                focus:border-primary-500 focus:ring-2 focus:ring-primary-200
                outline-none transition"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-primary-200
                focus:border-primary-500 focus:ring-2 focus:ring-primary-200
                outline-none transition resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium
                bg-primary-600 text-primary-50
                hover:bg-primary-700 hover:scale-[1.02]
                transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map / Location */}
      <section className="py-20 bg-primary-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            className="h-72 rounded-2xl bg-primary-200
            flex items-center justify-center
            hover:scale-[1.01] transition-transform duration-300"
          >
            <span className="text-primary-600">
              Map / Location Embed
            </span>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-primary-900 text-primary-50">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Need Immediate Help?
          </h2>
          <p className="text-primary-200 mb-8">
            Visit our help center or reach out to our support team anytime.
          </p>
          <a
            href="/help"
            className="inline-block px-10 py-3 rounded-lg font-medium
            bg-primary-50 text-primary-900
            hover:bg-primary-200 hover:scale-105
            transition-all duration-300"
          >
            Visit Help Center
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
