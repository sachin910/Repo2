import TestimonialCarousel from "../testimonial-carousel";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#3B1C32]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from organizations that have transformed their operations with
            our AI solutions.
          </p>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
