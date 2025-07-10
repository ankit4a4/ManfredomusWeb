import { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleReviews from './GoogleReviews';

const Review = () => {
  // Booking.com Reviews
  const bookingReviews = [
    {
      name: 'Patrick',
      date: '2025-05-21',
      rating: 10,
      text: '☺The collection is truly sympathetic and sincere. The logement is impeccable and soigné. Petit déjeuner copieux et varié. A good time.',
      source: 'Booking.com',
    },
    {
      name: 'Tyler',
      date: '2025-05-14',
      rating: 10,
      text: 'exceptional',
      source: 'Booking.com',
    },
    {
      name: 'Helga',
      date: '2025-05-11',
      rating: 10,
      text: '☺Der Ausblick von unserem Bett auf die Burg.\nThe reichhaltige und qualitativ hochwertige Frühstück\n · Keine Sessel um gemütlich auf Balkon zu sitzen wir',
      source: 'Booking.com',
    },
    {
      name: 'Simone_kushi',
      date: '2025-05-10',
      rating: 10,
      text: 'exceptional',
      source: 'Booking.com',
    },
    {
      name: 'Peter',
      date: '2025-05-10',
      rating: 8,
      text: 'zu Empfehlen!\n · Die besondere Gastfreundlichkeit, die sauberen Räume und das taste Frühstück, sowie der Parkplatz sind optimal für einen Aufenthalt. Abgelegen von den großen Touristen Massen, sehr schöne Lage.',
      source: 'Booking.com',
    },
    {
      name: 'Aloysius',
      date: '2025-05-05',
      rating: 9,
      text: '☺This vanuit de suite was magnificent! There was a big upgrade for 20 euros for the first time! De bedden waren heerlijk!!! En alles prachtig nieuw, smaakvol en mooi ingericht. De hele familie zet zich in voor deze plek, super mooi.\nWe had a great time, we had a great time.\n · Niets',
      source: 'Booking.com',
    },
    {
      name: 'Mary',
      date: '2025-05-04',
      rating: 10,
      text: 'A corner of rural paradise\n · If you happen to go to Mussomeli, then you must choose this structure. It is a corner of paradise immersed in the Sicilian countryside...',
      source: 'Booking.com',
    },
    {
      name: 'Savior',
      date: '2025-05-04',
      rating: 10,
      text: 'exceptional',
      source: 'Booking.com',
    },
    {
      name: 'Julia',
      date: '2025-05-02',
      rating: 10,
      text: 'Comfortable, elegant... with an incredible welcome\n · That idea you have of the legendary warmth of southern Italy? It\'s here. I travel most weeks for work in Italy but have never had an experience like this...',
      source: 'Booking.com',
    },
    {
      name: 'Veronika',
      date: '2025-04-28',
      rating: 10,
      text: 'Exceptional\n · The host was very friendly and hospitable. The breakfast was very tasty and varied. Time spent there was very enjoyable.',
      source: 'Booking.com',
    },
  ];

  // Google Reviews
  const googleReviews = [
    {
      name: 'Alessia Ranzani',
      date: '2025-07-05',
      rating: 5,
      text: 'Our family stay in this property was a wonderful experience. The brand new property has a clean and linear style, but warm and welcoming...',
      source: 'Google',
    },
    {
      name: 'Helen V.',
      date: '2025-07-05',
      rating: 5,
      text: 'We werden heel hartelijk ontvangen in een werkelijk prachtige omgeving... Ik raad het iedereen aan!',
      source: 'Google',
    },
    {
      name: 'Concetta Cavallaro',
      date: '2025-05-04',
      rating: 5,
      text: 'We spent a night at this wonderful property during our little tour of the Sicilian hinterland... Definitely recommended.',
      source: 'Google',
    },
    {
      name: 'Adriana Mento',
      date: '2025-04-27',
      rating: 5,
      text: 'Friendly hosts, available for suggestions on attractions to visit and restaurants to eat at. Excellent breakfast...',
      source: 'Google',
    },
    {
      name: 'Mario Valenti',
      date: '2025-04-27',
      rating: 5,
      text: 'I stayed at this property during a motorbike trip... Super abundant breakfast. The owners are truly wonderful people...',
      source: 'Google',
    },
    {
      name: 'Between Between',
      date: '2025-04-27',
      rating: 5,
      text: 'We arrived in Mussomeli for a short trip... Excellent cleaning. Highly recommended.',
      source: 'Google',
    },
    {
      name: 'claudia ventura',
      date: '2025-04-26',
      rating: 5,
      text: 'Brand new structure with attentive, helpful and courteous staff... Definitely recommended.',
      source: 'Google',
    },
    {
      name: 'Neil Scicluna',
      date: '2025-04-08',
      rating: 5,
      text: 'We absolutely loved our stay at Manfredomus... Highly recommend the place and we are looking forward to another visit!',
      source: 'Google',
    },
    {
      name: 'JF',
      date: '2025-04-08',
      rating: 5,
      text: 'Best accommodation on the whole island. Brand new, lovely rooms, we didn\'t miss anything. All in all a perfect stay...',
      source: 'Google',
    },
  ];

  const [activeSource, setActiveSource] = useState('all');
  const sliderRef = useRef(null);

  // Combine and filter reviews
  const filteredReviews = [
    ...bookingReviews.map(r => ({ ...r, sourceType: 'booking' })),
    ...googleReviews.map(r => ({ ...r, sourceType: 'google' }))
  ].filter(review =>
    activeSource === 'all' ||
    (activeSource === 'booking' && review.sourceType === 'booking') ||
    (activeSource === 'google' && review.sourceType === 'google')
  );

  // Slider settings
  const sliderSettings = {
    ref: sliderRef,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  // Enhanced rating stars with partial filling
  const RatingStars = ({ rating, max = 10 }) => {
    const percentage = (rating / max) * 100;
    return (
      <div className="relative inline-block">
        <div className="flex">
          {[...Array(max)].map((_, i) => (
            <span key={i} className="text-xl text-[#e4ddd4]">
              ★
            </span>
          ))}
        </div>
        <div
          className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
          style={{ width: `${percentage}%` }}
        >
          <div className="flex">
            {[...Array(max)].map((_, i) => (
              <span key={i} className="text-xl text-[#A5886E]">
                ★
              </span>
            ))}
          </div>
        </div>
        <span className="ml-2 text-sm font-medium text-[#A5886E]">
          {rating}/{max}
        </span>
      </div>
    );
  };

  // Source badge component
  const SourceIcon = ({ source }) => {
    const isBooking = source.includes('Booking');

    return (
      <div className={`flex items-center px-2 py-1 rounded-full ${isBooking ? 'bg-[#f0ebe6]' : 'bg-[#eef0e6]'
        }`}>
        <span className={`text-xs font-medium ${isBooking ? 'text-[#000]' : 'text-[#0F9D58]'
          }`}>
          {source}
        </span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-20">


      <GoogleReviews />




    </div>
  );
};

export default Review;