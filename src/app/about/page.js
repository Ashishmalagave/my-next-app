
import Image from "next/image";
import Link from "next/link";




export default function AboutPage() {

    const team = [
    { id: 1, name: "John Doe", role: "CEO", img: "/images/profile-picture.jpg" },
    { id: 2, name: "Jane Smith", role: "Designer", img: "/images/profile-picture.jpg" },
    { id: 3, name: "Mike Johnson", role: "Developer", img: "/images/profile-picture.jpg" },
    { id: 4, name: "Emily Davis", role: "Marketing", img: "/images/profile-picture.jpg" },
  ];
  return (
    <>
      <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center">

        <Image
          src="/images/About-Us-Banner.jpg"
          alt="About Us Banner"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="px-4 md:px-8 relative text-center  container text-lg md:text-xl text-white mb-6 ">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed mx-auto max-w-3xl 2xl:max-w-[900px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-primary text-white text-lg 2xl:text-[20px] font-medium rounded-lg border  border-transparent hover:bg-transparent hover:text-white hover:border-white transition"
          >
            Contact Us
          </Link>
        </div>
      </section>


      <section className="w-full py-8 md:py-16 bg-white">
        <div className="container mx-auto text-center font-semibold text-black">
          <h2 className="text-3xl md:text-4xl pb-[20px] md:pb-[48px] font-bold text-gray-800 relative after:content-[''] after:block after:w-[100px] md:after:w-[200px] after:bg-primary after:mx-auto after:mt-2 md:after:mt-4 after:h-[3px]">
            Introduction section
          </h2>
        </div>

        <div className="container relative mx-auto flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] px-5 xl:px-[40px] md:px-4 items-start justify-start">
          <div className="lg:flex-1 block left-column-image-introduction relative h-[300px] w-full md:h-[420px] lg:h-[430px] 2xl:h-[520px]">
            <Image
              src="/images/About-us-section-profile.jpg"
              alt="Section Image"
              fill
              className="rounded-xl object-cover shadow-md relative left-column-image-introduction"
            />
          </div>

    
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 md:mb-5">
              Right Side Heading
            </h3>
            <p className="text-gray-700 leading-[26px] mb-5 2xl:text-[20px] 2xl:leading-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis, justo nec porta ultricies, tortor nunc feugiat ligula,
              eget varius nibh libero id nunc. Curabitur tincidunt, augue sit amet
              feugiat tincidunt, mi elit volutpat urna, nec dictum est ligula id
              metus. Pellentesque ac nibh non lectus lacinia elementum,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis
            </p>
            <p className="text-gray-700 leading-[26px] mb-5 2xl:text-[20px] 2xl:leading-[32px]">
              justo nec porta ultricies, tortor nunc feugiat ligula,
              eget varius nibh libero id nunc. Curabitur tincidunt, augue sit amet
              feugiat tincidunt, mi elit volutpat urna, nec dictum est ligula id
              metus. Pellentesque ac nibh non lectus lacinia elementum,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis, justo nec porta ultricies, tortor nunc feugiat ligula,
              eget varius nibh libero id nunc. Curabitur tincidunt, augue sit amet
              feugiat tincidunt, mi elit volutpat urna
            </p>
            <button className="px-6 py-3 bg-primary text-white text-lg 2xl:text-[20px] font-medium rounded-lg border hover:bg-transparent hover:text-primary hover:border-primary transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full pb-8 md:pb-16 bg-white">

        <div className="container mx-auto text-center mb-5 lg:mb-12 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl pb-[20px] md:pb-[20px] font-bold text-gray-800 relative after:content-[''] after:block after:w-[100px] md:after:w-[200px] after:bg-primary after:mx-auto after:mt-2 md:after:mt-4 after:h-[3px]">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5 2xl:text-[20px] 2xl:leading-[32px] w-full 2xl:max-w-[1200px] max-w-[900px] mx-auto">
            justo nec porta ultricies, tortor nunc feugiat ligula,
            eget varius nibh libero id nunc.Curabitur tincidunt, augue sit amet
            feugiat tincidunt, Curabitur tincidunt, augue sit amet
            feugiat tincidunt, mi elit volutpat urna justo nec porta ultricies, tortor nunc feugiat ligula, eget varius nibh libero id nunc. Curabitur tincidunt, augue sit amet feugiat tincidunt, mi elit volutpat urna
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">

            <div className="relative group bg-gray-100 p-4 flex flex-col justify-start items-start overflow-hidden rounded-lg">

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src="/images/our-mission-card-one.webp"
                  alt="Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              </div>

              <div className="relative w-full justify-between z-10 flex items-center gap-2 mb-2">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <span className="font-bold text-gray-700 group-hover:text-white transition-colors duration-300 text-[16px] md:text-[36px] text-right">01</span>
              </div>
              <h3 className="text-xl font-semibold pt-[6px] md:pt-[30px] mb-1 2xl:mb-4 relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm 2xl:text-[18px] lg:text-[16px] relative pb-[0px] md:pb-[30px] z-10 group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
              </p>
            </div>


            <div className="relative group bg-gray-100 p-4 flex flex-col justify-start items-start overflow-hidden rounded-lg">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image src="/images/our-mission-card-two.webp" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              </div>
              <div className="relative w-full justify-between z-10 flex items-center gap-2 mb-2">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">★</div>
                <span className="font-bold text-gray-700 group-hover:text-white transition-colors duration-300 text-[16px] md:text-[36px] text-right">02</span>
              </div>
              <h3 className="text-xl font-semibold pt-[6px] md:pt-[30px] mb-1 2xl:mb-4 relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm 2xl:text-[18px] lg:text-[16px] relative pb-[0px] md:pb-[30px] z-10 group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className="relative group bg-gray-100 p-4 flex flex-col justify-start items-start overflow-hidden rounded-lg">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image src="/images/our-mission-card-three.webp" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              </div>
              <div className="relative w-full justify-between z-10 flex items-center gap-2 mb-2">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">⚡</div>
                <span className="font-bold text-gray-700 group-hover:text-white transition-colors duration-300 text-[16px] md:text-[36px] text-right">03</span>
              </div>
              <h3 className="text-xl font-semibold pt-[6px] md:pt-[30px] mb-1 2xl:mb-4 relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm 2xl:text-[18px] lg:text-[16px] relative pb-[0px] md:pb-[30px] z-10 group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className="relative group bg-gray-100 p-4 flex flex-col justify-start items-start overflow-hidden rounded-lg">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image src="/images/our-mission-card-four.webp" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              </div>
              <div className="relative w-full justify-between z-10 flex items-center gap-2 mb-2">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">☀</div>
                <span className="font-bold text-gray-700 group-hover:text-white transition-colors duration-300 text-[16px] md:text-[36px] text-right">04</span>
              </div>
              <h3 className="text-xl font-semibold pt-[6px] md:pt-[30px] mb-1 2xl:mb-4 relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm 2xl:text-[18px] lg:text-[16px] relative pb-[0px] md:pb-[30px] z-10 group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </section>
 {/* Team Section*/}
        <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
         <h2 className="text-3xl text-center md:text-4xl pb-[30px] md:pb-[60px] font-bold text-gray-800 relative after:content-[''] after:block after:w-[100px] md:after:w-[200px] after:bg-primary after:mx-auto after:mt-2 md:after:mt-4 after:h-[3px]">Our Team Section</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="relative group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="w-full h-[300px] relative">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
