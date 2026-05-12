import React from "react";
import {
  BookOpen,
  FlaskConical,
  Heart,
  Monitor,
  Utensils,
  Shirt,
} from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: <BookOpen size={32} />,
      title: "Library",
      desc: "Reading specimen books and story books for students",
    },
    {
      icon: <Monitor size={32} />,
      title: "Computer Lab",
      desc: "Equipped with computer lab and two digital classrooms",
    },
    {
      icon: <FlaskConical size={32} />,
      title: "Science Lab",
      desc: "Practical science learning environment for students",
    },
    {
      icon: <Heart size={32} />,
      title: "Medical Care",
      desc: "Basic medical care provided for all students",
    },
    {
      icon: <Utensils size={32} />,
      title: "Mid-Day Meal",
      desc: "Nutritious meals provided for students daily",
    },
    {
      icon: <Shirt size={32} />,
      title: "Uniform & Books",
      desc: "School supports students with books and uniforms",
    },
  ];

  return (
    <section className="pt-18 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-1 md:px-10 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-4">
            World-Class <span className="text-gold">Facilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div
                className="w-16 h-16 rounded-xl bg-navy text-cream flex items-center
               justify-center mb-6 group-hover:bg-gold group-hover:text-navy 
               transition-colors duration-300 shadow-lg
               sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-16 lg:h-16 
               "
              >
                {fac.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-3">
                {fac.title}
              </h3>
              <p className="text-navy/70">{fac.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
