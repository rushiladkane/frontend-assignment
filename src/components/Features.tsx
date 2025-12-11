import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    { title: "Pixel Perfect", description: "Match the Figma exactly." },
    { title: "Accessible", description: "Keyboard-friendly UI." },
    { title: "Fast & Lightweight", description: "Built with Vite & TS." },
    { title: "Animations", description: "Smooth effects as needed." },
  ];

  return (
    <section id="features" className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.title} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  );
}
