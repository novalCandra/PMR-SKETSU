import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { dataConfigMessage } from '../config/DataConfig';


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % dataConfigMessage.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? dataConfigMessage.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-wide uppercase text-sm mb-2">Anggota</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">Pesan & Kesan PMR Sketsu</h3>
        </div>

        <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
          <Quote className="absolute top-8 left-8 h-16 w-16 text-gray-100 dark:text-gray-800 z-0" />

          <div className="relative z-10 min-h-[240px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium italic mb-6">
                  "{dataConfigMessage[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={dataConfigMessage[currentIndex].image}
                    alt={dataConfigMessage[currentIndex].name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-brand-red shadow-lg mb-4 object-cover"
                  />
                  <h4 className="font-bold text-brand-dark dark:text-white text-lg">{dataConfigMessage[currentIndex].name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{dataConfigMessage[currentIndex].class}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-4 md:px-0 md:-left-6 md:w-[calc(100%+3rem)] pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-red pointer-events-auto transition-transform hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-red pointer-events-auto transition-transform hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {dataConfigMessage.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-brand-red' : 'w-2 bg-gray-300 dark:bg-gray-700'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
