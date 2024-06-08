const Footer = () => {
  return (
    <footer dir="rtl" className="bg-[#FFC14D] black mt-10">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-0">
          <div className="md:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">درباره ما</h2>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-300 hover:text-blue-400 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-300 hover:text-pink-500 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-300 hover:text-blue-700 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              خوش آمدید به فروشگاه کتاب ما، جایی که ما با افتخار به شما ارائه
              می‌دهیم انواع گسترده‌ای از کتاب‌ها در انواع ژانرها. هدف ما ارائه
              بهترین تجربه خواندن برای شماست.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">لینک‌های سریع</h2>
            <ul className="text-sm">
              <li>
                <p className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                  صفحه اصلی
                </p>
              </li>
              <li>
                <p className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                  فروشگاه
                </p>
              </li>
              <li>
                <p className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                  درباره
                </p>
              </li>
              <li>
                <p className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                  تماس
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center">
          <p className="text-sm">
            &copy; 2024 فروشگاه کتاب. تمامی حقوق محفوظ است.
          </p>
          <p className="text-sm">
            خیابان کتاب 123، شهر خواندن | info@bookshop.com | (123) 456-7890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
