import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, HeartHandshake } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-red font-bold tracking-wide uppercase text-sm mb-2">Tentang PMR
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white mb-6">Lebih dari Sekadar Kegiatan Ekstrakurikuler</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Palang Merah Remaja (PMR) adalah cabang sukarelawan remaja dari Palang Merah. Kami adalah komunitas pelajar yang bersemangat dan berkomitmen pada kemanusiaan, kesehatan, serta kesiapsiagaan bencana.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Mission */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-red-100 dark:hover:border-gray-700">
            <div className="bg-red-100 dark:bg-red-900/40 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="h-7 w-7 text-brand-red" />
            </div>
            <h4 className="text-xl font-bold text-brand-dark dark:text-white mb-3">Misi Kami</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Untuk membekali kaum muda dengan keterampilan penting yang dapat menyelamatkan nyawa, mempromosikan gaya hidup sehat, serta menumbuhkan semangat pengabdian sukarela di lingkungan sekolah dan masyarakat.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-red-100 dark:hover:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900/40 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-brand-blue dark:text-blue-400" />
            </div>
            <h4 className="text-xl font-bold text-brand-dark dark:text-white mb-3">Visi Kami</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Menciptakan generasi muda yang tangguh, penuh empati, dan terampil, yang siap berperan sebagai pendidik sebaya dan petugas tanggap darurat.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-red-100 dark:hover:border-gray-700">
            <div className="bg-pink-100 dark:bg-pink-900/40 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <HeartHandshake className="h-7 w-7 text-pink-600 dark:text-pink-400" />
            </div>
            <h4 className="text-xl font-bold text-brand-dark dark:text-white mb-3">Nilai-Nilai Kami</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Kemanusiaan, Ketidakberpihakan, Netralitas, Kemandirian, Pelayanan Sukarela, Persatuan, dan Universalitas. Kami menjalankan prinsip-prinsip ini berdasarkan 7 Prinsip Dasar.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
