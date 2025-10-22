const Newsletter = () => {
  return (
    <div className="max-w-4xl mt-4 bg-white/15 p-4 border border-white rounded-lg mx-auto  relative -bottom-28">
        <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-gradient-to-r from-[#c2e9fb] via-[#fefefe] to-[#fceabb]"
      // style={{
      //   background: "linear-gradient(90deg, #c2e9fb 0%, #fefefe 50%, #fceabb 100%)",
      // }}
    >
      <h2 className="text-2xl font-bold text-center mb-2">Stay Ahead with GameHub!</h2>
      <p className="text-center mb-6 text-gray-700">Get the latest game releases, tips, and exclusive updates delivered straight to your inbox.</p>
      <form className="flex justify-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          // type="submit"
          className="bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white font-semibold px-5 rounded-md hover:opacity-90 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
    </div>
  );
};

export default Newsletter;
