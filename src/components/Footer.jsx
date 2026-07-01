import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-xl tracking-tight text-brand-dark dark:text-white">PMR<span className="text-brand-red">Sketsu</span></span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Memberdayakan kaum muda melalui nilai-nilai kemanusiaan, kesehatan, dan kegiatan sukarela sejak tahun 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-red dark:hover:text-brand-red transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-red dark:hover:text-brand-red transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.63-1.07 5.3-3.15 7.02-1.74 1.45-4.14 2.1-6.4 1.78-2.61-.36-5.01-2.07-6.07-4.49-1.16-2.6-1-5.65.4-8.08 1.4-2.4 4.16-3.88 6.96-3.95v4.02c-1.65.1-3.23 1.34-3.77 2.92-.5 1.5-.16 3.2.92 4.38 1.1 1.2 2.94 1.54 4.45.89 1.45-.62 2.37-2.06 2.4-3.66.05-3.08.02-6.17.03-9.25-.01-2.85-.01-5.7.01-8.55z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-brand-dark dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About PMR', 'Activities', 'Gallery', 'Testimonials'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' pmr', '')}`} className="text-gray-500 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-brand-dark dark:text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 dark:text-gray-400">
                  SMK NEGERI 1 SUKOREJO<br />
                  Jl. Sumbergareng, Krajan, Sukorejo, Kec. Sukorejo, Pasuruan, Jawa Timur 67161
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-red flex-shrink-0" />
                <span className="text-gray-500 dark:text-gray-400">+62 838-4823-3610 (Kak Sofia)</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} PMR SMKN NEGERI 1 SUKOREJO
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-brand-red">Privacy Policy</a>
            <a href="#" className="hover:text-brand-red">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
