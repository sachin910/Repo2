import WorkshopTimeline from "../workshop-timeline";

export default function WorkshopSection() {
  return (
    <section id="workshop" className="py-20 bg-[#1A1A1D]/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Workshop</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive 10-Day AI Workshop equips participants with
            practical skills and knowledge to implement AI solutions.
          </p>
        </div>

        <WorkshopTimeline />
      </div>
    </section>
  );
}
