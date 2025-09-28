"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/category-box.jpg",
  "/images/Banner-two.jpg",
  "/images/Banner-five.jpg",
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* First Section - Banner Slider */}
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
   
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
          >
            <Image
              src={img}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8 z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-3xl 2xl:max-w-[1200px]">
            Demo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, justo nec porta ultricies, tortor nunc feugiat ligula, eget varius nibh libero id nunc. Curabitur tincidunt, augue sit amet feugiat tincidunt, mi elit volutpat urna
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/gallery" className="px-6 py-3 bg-primary 2xl:text-[20px] text-white font-semibold rounded-lg border border-transparent hover:bg-transparent hover:border-white transition">
              Gallery Page
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-transparent text-white 2xl:text-[20px] font-semibold rounded-lg border border-white hover:border-transparent hover:bg-primary transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full py-8 md:py-16 bg-white">
        <div className="container mx-auto text-center font-semibold text-black">
          <h2 className="text-3xl md:text-4xl pb-[20px] md:pb-[48px] font-bold text-gray-800 relative after:content-[''] after:block after:w-[100px] md:after:w-[200px] after:bg-primary after:mx-auto after:mt-2 md:after:mt-4 after:h-[3px]">
            About Us Section 
          </h2>
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] px-5 xl:px-[40px] md:px-4 items-start justify-start">
     
          <div className="lg:flex-1 block relative h-[300px] w-full md:h-[400px] lg:h-[400px] 2xl:h-[480px]">
            <Image
              src="/images/category-box.jpg"
              alt="Section Image"
              fill
              className="rounded-xl object-cover shadow-md relative left-column-image-introduction"
            />
          </div>
    
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 md:mb-5">
              Right Side Heading
            </h3>
            <p className="text-gray-700 leading-[26px] mb-5 md:mb-8 2xl:text-[20px] 2xl:leading-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis, justo nec porta ultricies, tortor nunc feugiat ligula,
              eget varius nibh libero id nunc. Curabitur tincidunt, augue sit amet
              feugiat tincidunt, mi elit volutpat urna, nec dictum est ligula id
              metus. Pellentesque ac nibh non lectus lacinia elementum,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis, justo nec porta ultricies, tortor nunc feugiat ligula,
              eget varius nibh libero id nunc. Curabitur tincidunt, augue sit amet
              feugiat tincidunt, mi elit volutpat urna, nec dictum est ligula id
              metus. Pellentesque ac nibh non lectus lacinia elementum,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis, justo nec porta ultricies, tortor nunc feugiat ligula,
              eget varius nibh libero id nunc. Curabitur tincidunt, augue sit amet
              feugiat tincidunt, mi elit volutpat urna
            </p>
            <Link href="/about" className="px-6 py-3 bg-primary text-white text-lg 2xl:text-[20px] font-medium rounded-lg border hover:bg-transparent hover:text-primary hover:border-primary transition">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------ Third Section: Features / Services ------------------ */}
      <section className="w-full py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto text-center mb-5 lg:mb-12 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl pb-[20px] md:pb-[20px] font-bold text-gray-800 relative after:content-[''] after:block after:w-[100px] md:after:w-[200px] after:bg-primary after:mx-auto after:mt-2 md:after:mt-4 after:h-[3px]">
            Feature  Section
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5 2xl:text-[20px] 2xl:leading-[32px] w-full 2xl:max-w-[1200px] max-w-[900px] mx-auto">
            justo nec porta ultricies, tortor nunc feugiat ligula,
            eget varius nibh libero id nunc.Curabitur tincidunt, augue sit amet
            feugiat tincidunt, Curabitur tincidunt, augue sit amet
            feugiat tincidunt, mi elit volutpat urna justo nec porta ultricies, tortor nunc feugiat ligula, eget varius nibh libero id nunc. Curabitur tincidunt, augue sit amet feugiat tincidunt, mi elit volutpat urna


          </p>
        </div>

        <div className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 ">
       
          <div className="group bg-white rounded-xl  transition text-center flex flex-col items-center shadow">
            <div className="w-full h-[200px] bg-gray-100 rounded-xl overflow-hidden relative mb-4">
              <Image
                src="/images/feature-first-image.webp"
                alt="Feature 1"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">Feature One</h3>
            <p className="text-gray-600 text-[16px] leading-[22px] 2xl:text-[20px] 2xl:leading-[30px] px-3 pb-6">
              mi elit volutpat urna, mi elit volutpat urna, mi elit volutpat urna
            </p>
          </div>


       
          <div className="group bg-white rounded-xl  transition text-center flex flex-col items-center shadow">
            <div className="w-full h-[200px] bg-gray-100 rounded-xl overflow-hidden relative mb-4">
              <Image
                src="/images/feature-second-image.jpg"
                alt="Feature 1"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">Feature Two</h3>
            <p className="text-gray-600 text-[16px] leading-[22px] px-3 pb-4 2xl:text-[20px] 2xl:leading-[30px]">
              mi elit volutpat urna, mi elit volutpat urna, mi elit volutpat urna
            </p>
          </div>

         
          <div className="group bg-white rounded-xl  transition text-center flex flex-col items-center shadow">
            <div className="w-full h-[200px] bg-gray-100 rounded-xl overflow-hidden relative mb-4">
              <Image
                src="/images/feature-third-image.webp"
                alt="Feature 1"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">Feature Three</h3>
            <p className="text-gray-600 text-[16px] leading-[22px] px-3 pb-4 2xl:text-[20px] 2xl:leading-[30px]">
              mi elit volutpat urna, mi elit volutpat urna, mi elit volutpat urna
            </p>
          </div>
         
          <div className="group bg-white rounded-xl  transition text-center flex flex-col items-center shadow">
            <div className="w-full h-[200px] bg-gray-100 rounded-xl overflow-hidden relative mb-4">
              <Image
                src="/images/feature-forth-image.webp"
                alt="Feature 1"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">Feature Four</h3>
            <p className="text-gray-600 text-[16px] leading-[22px] px-3 pb-4 2xl:text-[20px] 2xl:leading-[30px]">
              mi elit volutpat urna, mi elit volutpat urna, mi elit volutpat urna
            </p>
          </div>
        </div>
      </section>
      {/* ------------------ Forth Section: Application ------------------ */}
      <section className="py-8 md:py-16  w-full mx-auto">
        <div className="container mx-auto text-center mb-5 lg:mb-12 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl pb-[20px] md:pb-[20px] font-bold text-gray-800 relative after:content-[''] after:block after:w-[100px] md:after:w-[200px] after:bg-primary after:mx-auto after:mt-2 md:after:mt-4 after:h-[3px]">
            Application Section
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5 2xl:text-[20px] 2xl:leading-[32px] w-full max-w-[900px] mx-auto">
            justo nec porta ultricies, tortor nunc feugiat ligula, eget varius nibh libero id nunc.Curabitur tincidunt, augue sit amet feugiat tincidunt, Curabitur tincidunt, augue sit amet feugiat tincidunt

          </p>
        </div>

        <div className="grid container w-full mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8   px-4 md:px-8">
        
          <div className="bg-gray-100  shadow  pb-8 rounded-xl p-6">
            <Image
              src="/images/middle-line.svg"
              height={2}
              width={36}
              alt="Feature 1"
              className="pb-4"
              priority
            />
            <h3 className="text-lg font-semibold text-gray-900 pb-2 2xl:text-[24px] 2xl:leading-[32px]">Better Movement</h3>
            <p className="text-gray-600 text-md leading-[22px] 2xl:text-[20px] 2xl:leading-[32px]">
              One of the biggest advantages of the best portable dehumidifier is that it can be easily moved between different places. This gives humidity control where it is needed the most. From storage rooms to production areas, you can carry it with no trouble.
            </p>
          </div>

        
          <div className="bg-gray-100  shadow  pb-8 rounded-xl p-6">
            <Image
              src="/images/middle-line.svg"
              height={2}
              width={36}
              alt="Feature 1"
              className="pb-4"
              priority
            />
            <h3 className="text-lg font-semibold text-gray-900 pb-2 2xl:text-[24px] 2xl:leading-[32px]">Better Movement</h3>
            <p className="text-gray-600 text-md leading-[22px] 2xl:text-[20px] 2xl:leading-[32px]">
              One of the biggest advantages of the best portable dehumidifier is that it can be easily moved between different places. This gives humidity control where it is needed the most. From storage rooms to production areas, you can carry it with no trouble.
            </p>
          </div>
       
          <div className="bg-gray-100  shadow  pb-8 rounded-xl p-6">
            <Image
              src="/images/middle-line.svg"
              height={2}
              width={36}
              alt="Feature 1"
              className="pb-4"
              priority
            />
            <h3 className="text-lg font-semibold text-gray-900 pb-2 2xl:text-[24px] 2xl:leading-[32px]">Better Movement</h3>
            <p className="text-gray-600 text-md leading-[22px] 2xl:text-[20px] 2xl:leading-[32px]">
              One of the biggest advantages of the best portable dehumidifier is that it can be easily moved between different places. This gives humidity control where it is needed the most. From storage rooms to production areas, you can carry it with no trouble.
            </p>
          </div>
         
          <div className="bg-gray-100  shadow  pb-8 rounded-xl p-6">
            <Image
              src="/images/middle-line.svg"
              height={2}
              width={36}
              alt="Feature 1"
              className="pb-4"
              priority
            />
            <h3 className="text-lg font-semibold text-gray-900 pb-2 2xl:text-[24px] 2xl:leading-[32px]">Better Movement</h3>
            <p className="text-gray-600 text-md leading-[22px] 2xl:text-[20px] 2xl:leading-[32px]">
              One of the biggest advantages of the best portable dehumidifier is that it can be easily moved between different places. This gives humidity control where it is needed the most. From storage rooms to production areas, you can carry it with no trouble.
            </p>
          </div>
        
          <div className="bg-gray-100  shadow  pb-8 rounded-xl p-6">
            <Image
              src="/images/middle-line.svg"
              height={2}
              width={36}
              alt="Feature 1"
              className="pb-4"
              priority
            />
            <h3 className="text-lg font-semibold text-gray-900 pb-2 2xl:text-[24px] 2xl:leading-[32px]">Better Movement</h3>
            <p className="text-gray-600 text-md leading-[22px] 2xl:text-[20px] 2xl:leading-[32px]">
              One of the biggest advantages of the best portable dehumidifier is that it can be easily moved between different places. This gives humidity control where it is needed the most. From storage rooms to production areas, you can carry it with no trouble.
            </p>
          </div>
        
          <div className="bg-gray-100  shadow  pb-8 rounded-xl p-6">
            <Image
              src="/images/middle-line.svg"
              height={2}
              width={36}
              alt="Feature 1"
              className="pb-4"
              priority
            />
            <h3 className="text-lg font-semibold text-gray-900 pb-2 2xl:text-[24px] 2xl:leading-[32px]">Better Movement</h3>
            <p className="text-gray-600 text-md leading-[22px] 2xl:text-[20px] 2xl:leading-[32px]">
              One of the biggest advantages of the best portable dehumidifier is that it can be easily moved between different places. This gives humidity control where it is needed the most. From storage rooms to production areas, you can carry it with no trouble.
            </p>
          </div>
        </div>
      </section>
      {/* ------------------ fifth Section: Fixed Background image ------------------ */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Nature-three.jpg')", backgroundAttachment: "fixed" }}
        ></div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 relative after:content-[''] after:block after:w-[100px] md:after:w-[200px] after:bg-primary after:mx-auto after:mt-2 md:after:mt-4 after:h-[3px]">
            Fixed Background Section
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-[900px] mx-auto pb-6">
            Justo nec porta ultricies, tortor nunc feugiat ligula, eget varius nibh libero id nunc. Curabitur tincidunt, augue sit amet feugiat tincidunt, Curabitur tincidunt, augue sit amet feugiat tincidunt.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 bg-primary text-white text-lg 2xl:text-[20px] font-medium rounded-lg border border-primary hover:bg-transparent hover:text-white hover:border-white transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* ------------------ Contact Us Section ------------------ */}

      <section className="lg:py-16 py-6 bg-gray-50">

        <div className="container mx-auto text-center mb-5 lg:mb-12 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl pb-[20px] md:pb-[20px] font-bold text-gray-800 relative after:content-[''] after:block after:w-[100px] md:after:w-[200px] after:bg-primary after:mx-auto after:mt-2 md:after:mt-4 after:h-[3px]">
            Contact Us Section
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5 2xl:text-[20px] 2xl:leading-[32px] w-full max-w-[900px] mx-auto">
            justo nec porta ultricies, tortor nunc feugiat ligula, eget varius nibh libero id nunc.Curabitur tincidunt, augue sit amet feugiat tincidunt, Curabitur tincidunt, augue sit amet feugiat tincidunt

          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 md:px-8">

          <div className="flex flex-col ">
            <h3 className="text-[26px] md:text-[26px] leading-3 font-bold text-gray-800 pb-[20px] text-center lg:text-left">
              Information in Detail
            </h3>
            <p className="text-gray-600 text-base md:text-lg pb-[20px] 2xl:text-[20px] lg:text-left text-center w-full">
              justo nec porta ultricies, tortor nunc feugiat ligula, eget varius nibh libero
            </p>

            <div className="space-y-1 pb-[20px] lg:text-left text-center">
              <p>
                <span className="font-semibold text-gray-700 2xl:text-[20px]">Email: </span>
                <a href="mailto:info@example.com" className="text-primary hover:underline 2xl:text-[20px]">info@example.com</a>
              </p>
              <p>
                <span className="font-semibold text-gray-700 2xl:text-[20px]">Mobile: </span>
                <a href="tel:+1234567890" className="text-primary hover:underline 2xl:text-[20px]">+1 234 567 890</a>
              </p>
            </div>

           
            <div className="lg:text-left text-center">
              <h3 className="text-[20px] 2xl:text-[24px]  leading-[26px] font-semibold text-gray-800 mb-[16px]">Address</h3>
              <p className="text-gray-600 text-[16px] 2xl:text-[20px]  mb-4">Janawad Road, Borgaon, Karnataka-591216</p>
            
              <div className="h-[290px] xl:h-[260px] 2xl:h-[280px] w-full">
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
          </div>

       
          <div className="bg-white p-8 rounded-xl ">

            <p className="text-gray-600 text-center mb-6 2xl:text-[20px]">
              Fill out the form below and we will get back to you shortly.
            </p>

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
        </div>
      </section>

    </>
  );
}
