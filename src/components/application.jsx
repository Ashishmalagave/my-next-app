export default function Applications() {
  const items = [
    {
      img: "/assets/images/one.svg",
      title: "Indoor Pool",
      text: "Ducted units remove excess moisture from humid air..."
    },
    {
      img: "/assets/images/two.svg",
      title: "Warehouses",
      text: "These duct ceiling dehumidifiers control moisture levels..."
    },
   
  ];

  return (
    <section id="applications" className="py-20 px-6 max-w-[1280px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-6">
        Applications of Dehumidifier For Ductwork
      </h2>
      <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12">
        A duct dehumidifier is one of the best choices for many industries and areas that want fast solutions for high humidity problems. Below you can learn its uses.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#3b2a20] text-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-5">
              <img
                src={item.img}
                alt={item.title}
                width={28}
                height={28}
                loading="lazy"
              />
            </div>
            <h5 className="text-lg font-semibold mb-3">{item.title}</h5>
            <p className="text-sm text-gray-100 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
