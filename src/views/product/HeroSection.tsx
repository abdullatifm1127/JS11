interface HeroSectionProps {
  onLogout: () => void;
}

const HeroSection = ({ onLogout }: HeroSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center shadow-lg">
      <h1 className="text-4xl font-bold mb-4">🛍️ Toko Produk</h1>
      <p className="text-lg opacity-90 mb-8">Anda sudah login dan dapat mengakses halaman ini</p>
      <button 
        onClick={onLogout} 
        className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition transform hover:scale-105"
      >
        Kembali ke Login
      </button>
    </div>
  );
};

export default HeroSection;