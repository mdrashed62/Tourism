import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";
import "swiper/css";
import "swiper/css/bundle";
import { useLoaderData } from "react-router-dom";
import SpotCards from "../SpotCards";
import { useEffect, useState } from "react";
import CountryCard from "../CountryCard";
import Extra1 from "../Extra1";
import Extra2 from "../Extra2";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const [countriesData, setCountriesData] = useState([]);
  const spots = useLoaderData();
  // const firstSixSpots = spots.slice(0, 6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tourist-server-one.vercel.app/countryData"
        );
        const data = await response.json();
        console.log(data);
        setCountriesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <div className="lg:pl-2 mb-10">
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
                <h2 className="text-2xl md:text-4xl text-center lg:text-6xl text-green-500 font-semibold md:mt-14">
                  Journey Beyond the Ordinary <br /> Find Your Dream Vacation
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide slide2 rounded-xl ">
                <h2 className="text-2xl md:text-4xl  text-center lg:text-6xl font-semibold md:mt-20">
                  Experience the World Tailored <br /> Travel Packages for Every
                  Explorer
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide slide3 rounded-xl">
                {" "}
                <h2 className="text-2xl md:text-4xl text-center lg:text-6xl  font-semibold md:mt-20">
                  Discover Your Next Adventure <br /> Unforgettable Destinations
                  Await
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide slide4 rounded-xl ">
                <h2 className="text-2xl md:text-4xl text-center lg:text-6xl  font-semibold md:mt-20">
                  Create Lasting Memories <br /> Exclusive Tours and Experiences
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide slide5 rounded-xl ">
                <h2 className="text-2xl md:text-4xl text-center lg:text-6xl  font-semibold md:mt-20">
                  Your Gateway to Paradise <br /> Explore Unique Getaways
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="text-center">
            <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-8 mb-4">
              Explore Our Collection <br /> of--
              <span style={{ color: "red", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["beautiful", "Tourist", "Spots"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h3>
            <p>
              Embark on a journey through our extensive collection of
              breathtaking tourist spots. From serene beaches to majestic
              mountains, <br /> we offer a diverse selection of destinations to
              satisfy every travelers wanderlust. Discover the beauty <br /> of
              the world and create unforgettable memories at each unique
              location
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {spots.length > 0 &&
                spots
                  ?.slice(0, 6)
                  ?.map((spot) => (
                    <SpotCards key={spot._id} spot={spot}></SpotCards>
                  ))}
            </div>
          </div>
        </div>
        <h1 className="text-2xl lg:text-5xl text-center font-semibold mb-4">
          More Spots With Countries
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {countriesData?.map((country) => (
            <CountryCard key={country._id} country={country}></CountryCard>
          ))}
        </div>
      </div>
      <div></div>

      <Extra1></Extra1>
      <Extra2></Extra2>
    </div>
  );
};

export default Home;
