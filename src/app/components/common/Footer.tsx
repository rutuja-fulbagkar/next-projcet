"use client"
import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-800 text-gray-300" id="footer_contents">
        <section className="bg-cover bg-center py-12 px-4"
        // style="background-image: url('assets/images/testi-image.jpg')"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold text-white">Join Our Mailing List</h2>
            <p className="text-gray-200 mt-2">For receiving our news and updates in your inbox directly.</p>
            <form className="mt-4 flex justify-center" method="post" data-name="Subscribe">
              <input
                type="email"
                name="EMAIL"
                placeholder="Your email address"
                required
                className="px-4 py-2 w-2/3 md:w-1/3 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
              >
                Sign up
              </button>
            </form>
          </div>
        </section>

        <div className="bg-gray-900 py-12 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              {/* <img src="assets/images/logo-white.png" alt="logo" className="mb-4" /> */}
              <p className="text-gray-400">
                Duty the obligations of business will frequently occur that pleasure
                have too repudiated annoyances endures accepted.
              </p>
              <div className="flex items-center mt-4">
                {/* <img src="assets/images/authour-image.png" alt="Need help" className="w-12 h-12 rounded-full mr-4" /> */}
                <div>
                  <h6 className="text-sm text-gray-200">Need Help?</h6>
                  <a href="#" className="link hover:underline">Free Consultation</a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Information</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">How it’s Work</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Key Areas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Essentials</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Infrastructure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Client Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sitemap</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-gray-400 mb-4">
                <strong>Location:</strong><br />
                280 Granite Run Drive Suite #200<br />
                Lancaster, PA 1760
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Phone:</strong><br />
                <a href="tel:+9806071234" className="link hover:underline">+98 060 712 34</a>
              </p>
              <p className="text-gray-400">
                <strong>Mail Us:</strong><br />
                <a href="mailto:sendmail@creote.com" className="link hover:underline">sendmail@creote.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-700 py-4 px-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>
              &copy; {currentYear} <a href="https://themeforest.net/user/steelthemes" className="link hover:underline">Steelthemes</a>. All
              Rights Reserved.
            </p>
            <ul className="flex space-x-4 mt-2 md:mt-0">
              <li><a href="#" className="hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline">Private Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </>
  )
}
