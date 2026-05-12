"use client";

export default function TermsAndConditions() {
  return (
    <section className="py-25 mt-7 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
          Terms and Conditions
        </h1>

        {/* Content Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6 leading-relaxed">
          <p>
            You may use the website of{" "}
            <span className="font-semibold text-blue">
              Usthi Foundation India School, PURI
            </span>{" "}
            only for lawful and personal (non-commercial) purposes. You must not
            use the website in any way that may harm, disrupt, or affect its
            performance, or violate the rights of any individual or
            organization.
          </p>

          <p>
            By accessing and using this website, you agree to follow all
            applicable laws and regulations based on your location.
          </p>
        </div>
      </div>
    </section>
  );
}
