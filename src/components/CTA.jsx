import { motion } from 'framer-motion';
import { Send, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section id="register" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Mau Jadi Pahlawan <span className="text-brand-red">Kemanusiaan Masa Kini?</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Mari Bergabung dengan PMR!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://forms.gle/Y9xHU5Zkq2oin7re8" target='_blank'>
                <button className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-brand-red/40 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Pendaftaran Online <Send className="h-5 w-5" />
                </button>
              </a>
            </div>

            <p className="mt-8 text-white/60 text-sm">
              Pendaftaran akan segera ditutup! Kuota untuk semester ini terbatas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
