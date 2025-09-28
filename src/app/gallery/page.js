import Link from "next/link";
import Image from "next/image";


export default function GalleryPage() {

  const galleryItems = [
    { id: 1, src: "/images/Nature-one.jpg" },
    { id: 2, src: "/images/Nature-two.jpg" },
    { id: 3, src: "/images/Nature-three.jpg" },
    { id: 4, src: "/images/Nature-four.jpg" },
    { id: 5, src: "/images/Nature-five.jpg" },
    { id: 6, src: "/images/Nature-six.jpg" },
  ];
  return (
    <>

      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/Nature.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>


        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>


        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Gallery
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-[900px] mx-auto pb-6">
            Discover the moments we’ve captured and the stories we’ve created.
          </p>
          <Link href="/"
            className="px-6 py-3 bg-primary 2xl:text-[20px] text-white font-semibold rounded-lg border border-transparent hover:bg-transparent hover:border-white transition"
          >
            Explore More
          </Link>
        </div>
      </section>

      {/* Second Section  */}
      <section id="gallery" className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-800 mb-5 md:mb-12 relative after:content-[''] after:block after:w-[100px] md:after:w-[200px] after:bg-primary after:mx-auto after:mt-2 md:after:mt-4 after:h-[3px]">
            Gallery Image Section
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition h-64" // fixed height
              >
                <Image
                  src={item.src}
                  alt={`Gallery ${item.id}`}
                  fill
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  )
}