export const metadata = {
  title: "Style Guide | Ruchika Copy Solutions",
  description: "Design tokens, typography, and reusable components preview.",
};

export default function StyleGuidePage() {
  const colors = [
    { name: "brandLight", hex: "#5eb1bf" },
    { name: "brandAccent", hex: "#ed254e" },
    { name: "brandDark", hex: "#042a2b" },
  ];

  return (
    <main className="container py-20 space-y-16">
      {/* Page Title */}
      <section>
        <h1 className="text-5xl font-playfair mb-2 text-brandDark">
          Style Guide
        </h1>
        <p className="text-gray-600">Visual reference for your design system.</p>
      </section>

      {/* Colors */}
      <section>
        <h2 className="text-2xl font-playfair mb-6 text-gray-900">Brand Colors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {colors.map((c) => (
            <div key={c.name} className="flex flex-col items-center">
              <div
                className="w-24 h-24 rounded-xl shadow-md border border-gray-200"
                style={{ backgroundColor: c.hex }}
              />
              <p className="mt-2 font-medium">{c.name}</p>
              <p className="text-sm text-gray-500">{c.hex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-playfair mb-6 text-gray-900">Typography</h2>
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-playfair text-gray-900">Playfair & Display</h1>
            <p className="text-gray-500">Used for headings</p>
          </div>
          <div>
            <p className="text-lg font-inter text-gray-700">
              Inter — clean and modern for body text.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-playfair mb-6 text-gray-900">Buttons</h2>
        <div className="space-x-4">
          <button className="btn">Primary Button</button>
          <button className="btn-outline">Outline Button</button>
        </div>
      </section>

      {/* Spacing Scale */}
      <section>
        <h2 className="text-2xl font-playfair mb-6 text-gray-900">Spacing Scale</h2>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 4, 6, 8, 10, 12].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div className="bg-gray-200 rounded" style={{ width: `${s * 4}px`, height: "16px" }}></div>
              <p className="text-sm text-gray-500 mt-1">p-{s}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
