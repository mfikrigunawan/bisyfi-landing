import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Bisyfi 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-xl mb-6"
        >
          Jasa pembuatan website modern, cepat, dan siap menghasilkan.
        </motion.p>

        <motion.a
          href="https://wa.me/628XXXXXXXXXX"
          target="_blank"
          className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600"
          whileHover={{ scale: 1.1 }}
        >
          Hubungi via WhatsApp
        </motion.a>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Layanan Kami</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Landing Page</h3>
            <p>Website cepat untuk jualan & convert client.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Company Profile</h3>
            <p>Tingkatkan kepercayaan bisnis Anda.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Custom Web App</h3>
            <p>Solusi sesuai kebutuhan bisnis Anda.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-green-600">
        <h2 className="text-3xl font-bold mb-4">
          Siap punya website profesional?
        </h2>
        <a
          href="https://wa.me/628XXXXXXXXXX"
          target="_blank"
          className="bg-black px-6 py-3 rounded-xl"
        >
          Konsultasi Gratis
        </a>
      </section>

    </div>
  );
}

export default Home;