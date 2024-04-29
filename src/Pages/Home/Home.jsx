
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './home.css'
import "swiper/css";
import "swiper/css/bundle";
import { useLoaderData } from "react-router-dom";
import SpotCards from "../SpotCards";
import { useEffect, useState } from "react";
import CountryCard from "../CountryCard";



const Home = () => {
  const [countriesData, setCountriesData] = useState()
  const spots = useLoaderData();
  const firstSixSpots = spots.slice(0, 6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/countryData');
        const data = await response.json();
        console.log(data) 
        setCountriesData(data)
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <div>
        <div className="max-w-6xl mx-auto px-4 mb-10">
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation, Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            className="mySwiper"
          >
            <SwiperSlide>
            <div className="slide slide1 rounded-xl">
                <h2 className="text-2xl md:text-4xl text-center lg:text-6xl text-green-500 font-semibold md:mt-14">Journey Beyond the Ordinary <br /> Find Your Dream Vacation</h2>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide slide2 rounded-xl ">
                <h2 className="text-2xl md:text-4xl  text-center lg:text-6xl font-semibold md:mt-20">Experience the World Tailored <br /> Travel Packages for Every Explorer</h2></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide slide3 rounded-xl"> <h2 className="text-2xl md:text-4xl text-center lg:text-6xl  font-semibold md:mt-20">Discover Your Next Adventure <br /> Unforgettable Destinations Await</h2></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide slide4 rounded-xl "><h2 className="text-2xl md:text-4xl text-center lg:text-6xl  font-semibold md:mt-20">Create Lasting Memories <br /> Exclusive Tours and Experiences</h2></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide slide5 rounded-xl "><h2 className="text-2xl md:text-4xl text-center lg:text-6xl  font-semibold md:mt-20">Your Gateway to Paradise <br /> Explore Unique Getaways</h2></div>
            </SwiperSlide>
          </Swiper>

          <div className="text-center">
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-2xl md:text-4xl lg:text-6xl font-bold mt-8 mb-4"
            >
              Explore Our more Collection <br /> of beautiful Tourist Spot
            </h3>
            <p data-aos="fade-up" data-aos-duration="3000">
            Embark on a journey through our extensive collection of breathtaking tourist spots. From serene beaches to majestic mountains, <br />  we offer a diverse selection of destinations to satisfy every travelers wanderlust. Discover the beauty <br />  of the world  and create unforgettable memories at each unique location
            </p>
          </div>
          <div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
              firstSixSpots.map(spot => <SpotCards key={spot._id} spot={spot}></SpotCards>)
            }
            </div>
          </div>
        </div>
        <h1 className="text-5xl text-center font-semibold mb-4">More Spots With Countries</h1>
          <div>
            {
              countriesData?.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
            }
          </div>
      </div>
    </div>
  );
};

export default Home;
