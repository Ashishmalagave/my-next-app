import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage()
{
    return(
        <>
              <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center">
                <Image
                  src="/images/contact-us-scaled-live.webp"
                  alt="About Us Banner"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>       
                <div className="px-4 md:px-8 relative text-center  container text-lg md:text-xl text-white mb-6 ">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
                  <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed mx-auto max-w-3xl 2xl:max-w-[900px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam
                  </p>
 
                </div>
              </section>

   {/* Contact Us Section */}
                  <section className="relative z-10 -mt-12 lg:-mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row bg-transparent shadow-xl rounded-xl overflow-hidden">
       
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-primary focus:outline-none 2xl:text-[16px]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-primary focus:outline-none 2xl:text-[16px]"
              />


              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-primary focus:outline-none 2xl:text-[16px]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-primary focus:outline-none 2xl:text-[16px]"
              />


              <input
                type="text"
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded-lg w-full sm:col-span-2 focus:ring-2 focus:ring-primary focus:outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="p-3 border border-gray-300 rounded-lg w-full sm:col-span-2 resize-none focus:ring-2 focus:ring-primary focus:outline-none"
              />

              <div className="sm:col-span-2 text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-transparent hover:text-primary hover:border-primary border border-primary transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

  
          <div className="w-full lg:w-1/2 bg-gray-700 p-8 md:p-12 flex flex-col items-center justify-center text-center text-white">

            <div className="mb-6">
              <Image
                src="/images/megapack-logo-white.png" 
                alt="Logo"
                width={150}
                height={50}
              />
            </div>
 
            <p className="mb-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
</p>
<p className="mb-10 text-lg">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
 
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-primary transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-primary transition"><FaTwitter /></a>
              <a href="#" className="hover:text-primary transition"><FaInstagram /></a>
              <a href="#" className="hover:text-primary transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </section>


<section className="pt-8 md:pt-16 ">
  <div className="container mx-auto px-6">
         <h2 className="text-3xl md:text-4xl text-center pb-[20px] md:pb-[48px] font-bold text-gray-800 relative after:content-[''] after:block after:w-[100px] md:after:w-[200px] after:bg-primary after:mx-auto after:mt-2 md:after:mt-4 after:h-[3px]">
           Find us here
          </h2>
    <div className="h-[290px] xl:h-[360px] 2xl:h-[360px] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.97630367603315!2d74.50952388510959!3d16.59558130093685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e6ad68b27521%3A0x4c6b8801e57c1fef!2sBoragaon%2C%20Karnataka%20591216%2C%20India!5e0!3m2!1sen!2sus!4v1758818723820!5m2!1sen!2sus"
        width="100%"
        height="100%"
        className="rounded-lg border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

        </>
    )
}