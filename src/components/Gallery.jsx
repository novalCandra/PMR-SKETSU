// import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery({ gallery }) {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-red font-bold tracking-wide uppercase text-sm mb-2">Galeri Kami</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white mb-6">Moment persahabatan dan Solidaritas PMR</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Simak sekilas sesi Diklat, dan momen-mone seru yang kita nikmati bersama
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer"
            >
              <img
                src={item.src}
                alt={`PMR Activity ${index + 1}`}
                className="w-full h-48 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-lg">FOTO {index + 1}</h4>
                  <p className="text-white/80 text-sm">{item.deskripsi}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
