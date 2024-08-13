"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Testimonials</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
        netus in. Aliquet donec morbi convallis pretium
      </p>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="flex flex-col lg:flex-row items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={154}
                    height={154}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-700 text-[0.9rem] italic">{testimonial.quote}</p>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;