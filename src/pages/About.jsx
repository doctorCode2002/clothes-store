import React from "react";

const About = () => {
  return (
    <div className="bg-primary-50 text-primary-900">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-primary-100 to-primary-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Store
          </h1>
          <p className="text-lg text-primary-700 leading-relaxed">
            A modern e-commerce brand built on quality, trust, and a seamless
            shopping experience.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-primary-700 mb-4 leading-relaxed">
              What started as a simple idea has grown into a platform trusted
              by thousands of customers. We believe shopping online should be
              simple, secure, and enjoyable.
            </p>
            <p className="text-primary-700 leading-relaxed">
              Every product we sell is carefully selected to meet our quality
              standards and your expectations.
            </p>
          </div>

          <div className="h-64 rounded-2xl bg-primary-200 flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]">
            <span className="text-primary-600">Brand Visual</span>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary-100">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-12">
          <div className="p-6 rounded-xl bg-white hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-primary-700 leading-relaxed">
              To provide exceptional products, transparent pricing, and a
              customer-first experience at every step.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-primary-700 leading-relaxed">
              To become a trusted global destination for online shopping.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Premium Quality",
              "Fast Shipping",
              "Secure Payments",
              "Dedicated Support",
            ].map((item) => (
              <div
                key={item}
                className="group p-6 rounded-xl bg-white border border-primary-200
                hover:border-primary-500 hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300"
              >
                <h4 className="font-semibold mb-2 group-hover:text-primary-600 transition">
                  {item}
                </h4>
                <p className="text-sm text-primary-700">
                  Designed to give you confidence and peace of mind.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-primary-50">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["10K+", "Customers"],
            ["5K+", "Orders"],
            ["50+", "Brands"],
            ["24/7", "Support"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="hover:scale-105 transition-transform duration-300"
            >
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-sm text-primary-200">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Meet the Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="group bg-white p-6 rounded-xl border border-primary-200
                hover:shadow-xl transition-all duration-300 text-center"
              >
                <div
                  className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-200
                  group-hover:bg-primary-300 transition"
                />
                <h4 className="font-semibold">Team Member</h4>
                <p className="text-sm text-primary-700">Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-700 text-primary-50">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Start Shopping With Confidence
          </h2>
          <p className="mb-8 text-primary-100">
            Discover products crafted with care and delivered with trust.
          </p>
          <a
            href="/shop"
            className="inline-block px-10 py-3 rounded-lg font-medium
            bg-primary-50 text-primary-900
            hover:bg-primary-200 hover:scale-105
            transition-all duration-300"
          >
            Visit Shop
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
