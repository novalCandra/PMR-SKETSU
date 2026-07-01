// import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Benefits = () => {
  const benefitsList = [
    "Keterampilan Pertolongan Pertama yang Bersertifikat",
    "Kemampuan Kepemimpinan yang Ditingkatkan",
    "Kepercayaan Diri & Kemampuan Berbicara di Depan Umum yang Ditingkatkan",
    "Kerja Sama Tim & Kolaborasi yang Kuat",
    "Sertifikat PMR Resmi untuk Portofolio",
    "Memperluas Jaringan Pertemanan",
    "Kesiapsiagaan Darurat di Dunia Nyata",
    "Pembentukan Karakter & Empati"
  ];

  return (
    <section id="benefits" className="py-24 bg-brand-red relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="crossPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 15 0 L 25 0 L 25 15 L 40 15 L 40 25 L 25 25 L 25 40 L 15 40 L 15 25 L 0 25 L 0 15 L 15 15 Z" fill="white" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#crossPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white/80 font-bold tracking-wide uppercase text-sm mb-2">Mengapa Bergabung dengan Kami?</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Kembangkan Potensi Anda & Tunjukkan Keunggulan Anda
            </h3>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Bergabung dengan PMR bukan sekadar belajar pertolongan pertama. Ini tentang membentuk karakter yang kuat, mengembangkan keterampilan lunak, dan memperoleh pengalaman yang akan membantu kamu dalam karier dan kehidupan pribadi di masa depan.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl relative z-10">
              <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                <div>
                  <h4 className="text-4xl font-extrabold text-brand-dark dark:text-white">100%</h4>
                  <p className="text-gray-500 font-medium">Peningkatan Rasa Percaya Diri</p>
                </div>
                <div className="text-right">
                  <h4 className="text-4xl font-extrabold text-brand-dark dark:text-white">50+</h4>
                  <p className="text-gray-500 font-medium">Acara Tahunan</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Keterampilan Kepemimpinan</span>
                    <span className="text-brand-red font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-brand-red h-3 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Pengetahuan tentang Pertolongan Pertama</span>
                    <span className="text-brand-blue font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '98%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="bg-brand-blue h-3 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Berbicara di Depan Umum</span>
                    <span className="text-pink-500 font-bold">85%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="bg-pink-500 h-3 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element behind card */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
