import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, HeartPulse } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-brand-light via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:opacity-10 dark:mix-blend-screen"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:opacity-10 dark:mix-blend-screen"></div>
      <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:opacity-10 dark:mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-0">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-brand-red font-semibold text-xs sm:text-sm max-w-full">
              <Activity className="h-4 w-4 flex-shrink-0" />
              <span>Kegiatan Ekstrakurikuler Palang Merah Remaja</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark dark:text-white leading-tight">
              Menjadi Generasi yang <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-pink-500'>Menyelamatkan Nyawa</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Bergabunglah dengan PMR dan mulailah perjalanan yang penuh dengan nilai-nilai kemanusiaan, kerja sama tim, dan kepemimpinan. Pelajari keterampilan pertolongan pertama yang penting, jalin persahabatan yang langgeng, dan buatlah perubahan nyata di komunitasmu
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <a href="#register" className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-red/40 hover:-translate-y-1">
                Ikuti sekarang <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#about" className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-brand-dark dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                Pelajari Lebih Lanjut
              </a>
            </div>

            {/* Stats/Social Proof */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3 flex-shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover" src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Member" />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-brand-dark dark:text-white">500+ Aktif Anggota</p>
                <p className="text-gray-500 dark:text-gray-400">Bergabunglah dengan keluarga kami yang terus berkembang</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="/hero.png" alt="PMR Youth Volunteers" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 glass px-4 py-3 rounded-2xl flex items-center gap-3"
              >
                <div className="bg-white p-2 rounded-full text-brand-red">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Siap Memberikan Pertolongan Pertama</p>
                  <p className="text-xs text-gray-600">Selalu siap</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
