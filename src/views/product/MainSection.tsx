export default function MainSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-3">Sneakers Sport</h3>
        <p className="text-gray-600 mb-4">
          Ringan dan nyaman digunakan untuk aktivitas harian maupun olahraga.
        </p>
        <p className="font-bold text-gray-900">Rp 499.000</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-3">Casual Street</h3>
        <p className="text-gray-600 mb-4">
          Desain modern dengan material berkualitas tinggi.
        </p>
        <p className="font-bold text-gray-900">Rp 599.000</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-3">Running Pro</h3>
        <p className="text-gray-600 mb-4">
          Sol empuk dan fleksibel untuk performa maksimal saat berlari.
        </p>
        <p className="font-bold text-gray-900">Rp 699.000</p>
      </div>
    </section>
  );
}