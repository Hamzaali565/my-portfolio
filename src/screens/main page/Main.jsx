import React from "react";
import Header from "../../components/header/header/header/Header";
import Banner from "../../components/header/header/banner/Banner";
import Card from "../../components/header/header/card/Card";
import img from "../../Assets/Images/birthday cal.jpg";
import img2 from "../../Assets/Images/social.jpg";
import img3 from "../../Assets/Images/weather.jpg";
import img4 from "../../Assets/Images/casino.jpg";
const Main = () => {
  const Social = () => {
    window.open("https://vast-teal-cougar-kit.cyclic.app/");
  };
  const Calclator = () => {
    window.open("https://hamzaali565.github.io/birthday-calculator/");
  };
  const Casino = () => {
    window.open("https://fancy-manatee-546e25.netlify.app/");
  };
  const Weather = () => {
    window.open("https://hamzaali565.github.io/Weather-App/");
  };
  const GitHub = () => {
    window.open("https://github.com/hamzaali565");
  };
  const CodeOfCasino = () => {
    window.open("https://github.com/Hamzaali565/web-RJS");
  };
  const CodeOfSocial = () => {
    window.open("https://github.com/Hamzaali565/MongoDB-CRUD-operation");
  };
  const CodeOfCalculator = () => {
    window.open("https://github.com/Hamzaali565/birthday-calculator");
  };
  const CodeOfWeather = () => {
    window.open("https://github.com/Hamzaali565/Weather-App");
  };

  return (
    <div>
      <Header />
      <Banner />
      <div>
        <div className="my-3 text-center text-2xl font-bold text-[#17191A] lg:text-left lg:ml-11">
          Projects
        </div>
        <div className="md:flex flex-wrap justify-center">
          <Card
            projectName={"Social App"}
            src={img2}
            onClick={Social}
            onMove={CodeOfSocial}
          />
          <Card
            projectName={"Casino App"}
            src={img4}
            onClick={Casino}
            onMove={CodeOfCasino}
          />
          <Card
            projectName={"Birthday Calculator"}
            onMove={CodeOfCalculator}
            src={img}
            onClick={Calclator}
          />
          <Card
            projectName={"Weather App"}
            src={img3}
            onClick={Weather}
            onMove={CodeOfWeather}
          />
        </div>
        <div className=" text-sm text-center my-4 sm:text-lg md:text-lg">
          Wanna see more Projects?{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={GitHub}
          >
            let's Go then
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
