"use client";

export default function PrivacyPolicy() {
  return (
    <section className="py-25 mt-7 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        {/* Content Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6 leading-relaxed">
          <p>
            The content available on the website of{" "}
            <span className="font-semibold text-blue">
              Usthi Foundation India School, Puri
            </span>{" "}
            is intended for general information purposes only. It must not be
            copied, reproduced, stored, or transmitted in any form—electronic,
            mechanical, photocopying, recording, or otherwise—without prior
            permission from the organization.
          </p>

          <p>
            We are committed to protecting the privacy of our website visitors.
            Any personal information collected through this website is handled
            responsibly and used only for communication and service-related
            purposes.
          </p>

          <p>
            We take appropriate measures to ensure that your information remains
            secure and is not shared with unauthorized parties.
          </p>
        </div>
      </div>
    </section>
  );
}
