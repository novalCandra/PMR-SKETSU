import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Heart, Siren, Droplets, Tent, Trophy } from 'lucide-react';

const activities = [
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Pelatihan Pertolongan Pertama",
    desc: "Pelajari keterampilan CPR yang komprehensif, perawatan luka, dan penanganan keadaan darurat dari para profesional bersertifikat.",
    color: "bg-red-50 text-red-500 dark:bg-red-900/30 dark:text-red-400"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Layanan Sosial",
    desc: "Ikut serta dalam program-program pengabdian kepada masyarakat, kunjungan ke panti asuhan, dan kegiatan pembersihan lingkungan.",
    color: "bg-pink-50 text-pink-500 dark:bg-pink-900/30 dark:text-pink-400"
  },
  {
    icon: <Siren className="h-8 w-8" />,
    title: "Tanggap Bencana",
    desc: "Ikuti simulasi latihan gempa bumi dan kebakaran agar siap menghadapi keadaan darurat yang sesungguhnya.",
    color: "bg-orange-50 text-orange-500 dark:bg-orange-900/30 dark:text-orange-400"
  },
  {
    icon: <Droplets className="h-8 w-8" />,
    title: "Donor Darah",
    desc: "Mengorganisir dan menjadi sukarelawan dalam kegiatan donor darah yang diselenggarakan di seluruh sekolah bekerja sama dengan Palang Merah.",
    color: "bg-red-50 text-brand-red dark:bg-red-900/30 dark:text-red-500"
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Pelatihan Kepemimpinan",
    desc: "Kembangkan kemampuan berbicara di depan umum, manajemen proyek, dan kepemimpinan tim.",
    color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
  },
  {
    icon: <Tent className="h-8 w-8" />,
    title: "Kamp Pembinaan Tim",
    desc: "Bergabunglah dalam perkemahan tahunan kami yang berfokus pada keterampilan bertahan hidup di alam terbuka dan mempererat ikatan, untuk menumbuhkan ketangguhan dan persahabatan.",
    color: "bg-green-50 text-green-500 dark:bg-green-900/30 dark:text-green-400"
  }
];

const Activities = () => {
  return (
    <section id="activities" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-red font-bold tracking-wide uppercase text-sm mb-2">Apa yang Kami Lakukan</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white mb-6">Kegiatan yang Menarik & Berarti</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Kurikulum kami dirancang agar sangat interaktif, praktis, dan menyenangkan. kamu tidak hanya akan duduk di ruang kelas Anda akan terjun langsung ke lapangan untuk membuat perubahan.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${activity.color}`}>
                {activity.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-dark dark:text-white mb-3">{activity.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">
                {activity.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Activities;
