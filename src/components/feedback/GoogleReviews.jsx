import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { SiGooglenews } from "react-icons/si";
import logo from "../../assets/structure/bookinglogo.png"
import { BiLogoBootstrap } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";

const bookingReviews = [
  {
    name: "Patrick",
    date: "2025-05-21",
    rating: 10,
    review: "☺The collection is truly sympathetic and sincere. The logement is impeccable and soigné. Petit déjeuner copieux...",
  },
  {
    name: "Tyler",
    date: "2025-05-14",
    rating: 10,
    review: "Exceptional",
  },
  {
    name: "Helga",
    date: "2025-05-11",
    rating: 10,
    review: "☺Der Ausblick von unserem Bett auf die Burg. The reichhaltige und qualitativ...",
  },
  {
    name: "Simone_kushi",
    date: "2025-05-10 ",
    rating: 10,
    review: "Exceptional",
  },
  {
    name: "Peter",
    date: "2025-05-11",
    rating: 10,
    review: "zu Empfehlen!",
  },
  {
    name: "Aloysius",
    date: "2025-05-05",
    rating: 10,
    review: "☺This vanuit de suite was magnificent! There was a big upgrade for 20 euros for the first time! De bedden waren heerlijk!!! En alles...",
  },
  {
    name: "Mary",
    date: "2025-05-05",
    rating: 10,
    review: " · If you happen to go to..",
  },
  {
    name: "Savior",
    date: "2025-05-05",
    rating: 10,
    review: "That idea you have of the legendary warmth of southern Italy? It's here. I travel most weeks for work in Italy but have never had an experience like this. Yes the beds are insanely...",
  },
  {
    name: "Veronika",
    date: "2025-05-05",
    rating: 10,
    review: "· The host was very friendly and hospitable. The breakfast was very tasty and varied. Time spent there was very enjoyable.",
  },
];

const googleReviews = [
  {
    name: "Alessia Ranzani",
    date: "2025-07-05",
    rating: 5,
    review: "Our family stay in this property was a wonderful experience. Reading the reviews and seeing the photos, I had high expectations but the reality exceeded them! The brand new property has a clean and linear style, but warm and welcoming.The rooms are spacious and bright, the bed is very comfortable and the sheets smell good like home Large and comfortable shower The breakfast buffet satisfies all palates, offering top quality local products Cleanliness is impeccable everywhere. The location allows you to reach different destinations, but also allows you to appreciate the beauty of the hinterland landscape. The managers are kind and welcoming, ready to satisfy every request.After 3 days of stay, it felt like being with family.The passion they transmit for their land and this place is contagious!",
  },
  {
    name: "Helen V.",
    date: "2025-07-05",
    rating: 5,
    review: "We werden heel hartelijk ontvangen in een werkelijk prachtige omgeving. Het huis en de kamers waren luxueus en heel verzorgd. Het bijt was rijkelijk, met heel veel keuze en kwaliteitsvolle producten. Ik raad het iedereen aan!",
  },
  {
    name: "Concetta Cavallaro",
    date: "2025-05-04",
    rating: 5,
    review: "We spent a night at this wonderful property during our little tour of the Sicilian hinterland. We couldn't have stayed in a better place: cleanliness, hospitality, services, breakfast... everything perfect and managed with kindness and courtesy by the owners. Definitely recommended. Our four-legged friend was also lovingly welcomed",
  },
  {
    name: "Adriana Mento",
    date: "2025-04-27",
    rating: 5,
    review: "Friendly hosts, available for suggestions on attractions to visit and restaurants to eat at. Excellent breakfast, buffet and international, tasty drinks and fresh products. Well-kept structure, very clean and quiet. Comfortable rooms, well-kept. Parking available and private useful for those traveling by motorbike.",
  },
  {
    name: "Mario Valenti",
    date: "2025-04-27",
    rating: 5,
    review: "I stayed at this property during a motorbike trip. A truly wonderful property, located right in front of the Mussomeli castle, it has a large garden with the possibility of parking the vehicle. Completely new with super-equipped rooms, clean, beautiful and very welcoming. Super abundant breakfast. The owners are truly wonderful people, their only and true goal is to make the guest happy. Always available and friendly.",
  },
  {
    name: "Between Between",
    date: "2025-04-27",
    rating: 5,
    review: "We arrived in Mussomeli for a short trip. We found this splendid structure of very recent construction, with a view directly on the castle and a convenient parking inside the villa. The structure is managed by a couple of guys who immediately showed themselves to be extremely helpful and kind. Excellent cleaning. Highly recommended.",
  },
  {
    name: "claudia ventura",
    date: "2025-04-27",
    rating: 5,
    review: "Brand new structure with attentive, helpful and courteous staff. Rooms tastefully furnished and equipped with all comforts. Excellent and varied breakfast. Definitely recommended.",
  },
  {
    name: "Neil Scicluna",
    date: "2025-04-08",
    rating: 5,
    review: "Best accommodation on the whole island. Brand new, lovely rooms, we didn't miss anything. The hosts are a family who welcomed us warmly. All in all a perfect stay and the best stay we had on Sicily.",
  },
  {
    name: "JF",
    date: "2025-04-08",
    rating: 5,
    review: "Best accommodation on the whole island. Brand new, lovely rooms, we didn't miss anything. The hosts are a family who welcomed us warmly. All in all a perfect stay and the best stay we had on Sicily.",
  },

];

const ReviewCard = ({ review, platform }) => (
  <div className="p-2">
    <div className="border h-50 p-4 shadow-sm rounded-sm border-gray-200 ">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gray-700 text-white flex items-center justify-center font-bold text-sm">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold">{review.name}</p>
            <p className="text-xs text-gray-400">{review.date}</p>
          </div>
        </div>
        {platform === "booking" ? (
          <BiLogoBootstrap className="text-[#1C3B7C]" size={20} />
        ) : (
          <AiFillGoogleCircle  className="text-[#1C3B7C]" size={20} />
        )}
      </div>

      <div className="flex items-center mb-2 gap-1">
        {platform === "booking" ? (
          <span className="text-sm font-bold text-blue-800">
            <span className="p[4px] rounded-sm bg-[#1C3B7C] mr-1">⭐</span>
            <span className="p[4px] rounded-sm bg-[#1C3B7C] mr-1">⭐</span>
            <span className="p[4px] rounded-sm bg-[#1C3B7C] mr-1">⭐</span>
            <span className="p[4px] rounded-sm bg-[#1C3B7C] mr-1">⭐</span>
            <span className="p[4px] rounded-sm bg-[#1C3B7C] mr-1">⭐</span>
            {review.rating}</span>
        ) : (
          <div className="flex gap-1 text-yellow-500 ">
            {Array.from({ length: review.rating }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        )}
      </div>

      <p className="text-sm text-gray-600 h-24 overflow-y-auto">{review.review}</p>
    </div>
  </div>
);

const ReviewSlider = ({ data, platform }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((review, index) => (
        <ReviewCard key={index} review={review} platform={platform} />
      ))}
    </Slider>
  );
};

const PlatformSummary = ({ logo, ratingCount, source }) => (
  <div className="text-center mb-4 md:mb-0">
    <h3 className="font-bold text-sm text-gray-600">EXCELLENT</h3>
    <div className="flex justify-center mt-1 ">
      {Array(5).fill(0).map((_, i) => (
        <FaStar className="text-white bg-[#1C3B7C] text-xl mr-1 p-1" key={i} />
      ))}
    </div>
    <p className="text-sm mt-1 text-gray-500">Based on {ratingCount} reviews</p>
    <img src={logo} alt={`${source} logo`} className="w-24 mt-1 mx-auto" />
  </div>
);

const GoogleRevie = () => {
  return (
    <div className=" py-10 px-4">
      {/* Booking.com Section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <PlatformSummary
            logo={logo}
            ratingCount={35}
            source="Booking"
          />
          <div className="w-full md:w-4/5">
            <ReviewSlider data={bookingReviews} platform="booking" />
          </div>
        </div>
      </div>

      {/* Google Section */}
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <PlatformSummary
            logo="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            ratingCount={37}
            source="Google"
          />
          <div className="w-full md:w-4/5">
            <ReviewSlider data={googleReviews} platform="google" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleRevie;
