import React from "react";

const featuresLeft = [
  {
    icon: "https://demo.wpthemego.com/themes/sw_pharxtore/wp-content/uploads/2023/10/Why_Choose_Us_icon6.png",
    title: "Lowest Price Guarantee",
    desc: "We offer unbeatable prices with a promise to match or beat any competitor’s price on your medications.",
  },
  {
    icon: "https://demo.wpthemego.com/themes/sw_pharxtore/wp-content/uploads/2023/10/Why_Choose_Us_icon6.png",
    title: "Authentic Medicines Only",
    desc: "All our products are sourced directly from licensed manufacturers and suppliers, ensuring 100% authenticity.",
  },
  {
    icon: "https://demo.wpthemego.com/themes/sw_pharxtore/wp-content/uploads/2023/10/Why_Choose_Us_icon6.png",
    title: "Trusted by Thousands",
    desc: "Join thousands of satisfied customers who rely on our platform for timely and reliable healthcare solutions.",
  },
];

const featuresRight = [
  {
    icon: "https://demo.wpthemego.com/themes/sw_pharxtore/wp-content/uploads/2023/10/Why_Choose_Us_icon6.png",
    title: "Fast & Secure Delivery",
    desc: "We ensure quick and safe doorstep delivery with real-time tracking to keep you informed every step of the way.",
  },
  {
    icon: "https://demo.wpthemego.com/themes/sw_pharxtore/wp-content/uploads/2023/10/Why_Choose_Us_icon6.png",
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is available round the clock to answer your queries and resolve any issues instantly.",
  },
  {
    icon: "https://demo.wpthemego.com/themes/sw_pharxtore/wp-content/uploads/2023/10/Why_Choose_Us_icon6.png",
    title: "Easy Prescription Upload",
    desc: "Upload your prescription effortlessly and get the right medicines delivered without hassle or long wait times.",
  },
];


export default function WhyChooseUs() {
  return (
    <div className="bg-white  py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800 ">
        WHY CHOOSE US
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Features */}
        <div className="flex flex-col gap-8">
          {featuresLeft.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
               <div className=" text-black  w-28 h-28  rounded-full text-xl">
                <img src={feature.icon}></img>
              </div>
              <div>
                <h4 className="text-md font-semibold text-black">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Doctor Image */}
        <div className="flex justify-center">
          <img
            src="https://demo.wpthemego.com/themes/sw_pharxtore/wp-content/uploads/2023/10/why-choose-us.png"
            alt="doctor"
            className="w-full max-w-xs md:max-w-sm object-contain"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-8">
          {featuresRight.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className=" text-black  w-28 h-28  rounded-full text-xl">
                <img src={feature.icon}></img>
              </div>
              <div>
                <h4 className="text-md font-semibold ">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
