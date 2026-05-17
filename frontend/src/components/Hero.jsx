function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to MyApp
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Connect with your teams in real-time using our modern group chat
          platform. Create groups, share messages instantly, and collaborate
          seamlessly with a clean WhatsApp-inspired interface built using the
          MERN stack and Socket.io.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg transition">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default Hero;
