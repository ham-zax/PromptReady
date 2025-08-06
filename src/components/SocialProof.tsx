import React from "react";
import Testimonials from "./Testimonials";
import SignupForm from "./SignupForm";

const SocialProof: React.FC = () => (
  <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <Testimonials />
        <SignupForm />
      </div>
    </div>
  </section>
);

export default SocialProof;