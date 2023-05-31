import React from "react";
import Header from "../../components/header/header/header/Header";
import Banner from "../../components/header/header/banner/Banner";
import Card from "../../components/header/header/card/Card";
import img from "../../Assets/Images/birthday cal.jpg";
import img2 from "../../Assets/Images/social.jpg";
import img3 from "../../Assets/Images/weather.jpg";
import img4 from "../../Assets/Images/casino.jpg";
import Heading from "../../components/header/header/heading/Heading";
import Paragraph from "../../components/header/header/heading/Paragraph";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

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
  const ScrollToDiv = () => {
    const targetDiv = document.getElementById("targetDiv");
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToDiv2 = () => {
    const targetDiv = document.getElementById("targetDiv2");
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToDiv3 = () => {
    const targetDiv = document.getElementById("targetDiv3");
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header
        onClickProject={ScrollToDiv}
        onClickAbout={ScrollToDiv2}
        onClickContact={ScrollToDiv3}
      />

      <Banner />
      {/* cards */}
      <div className="md:border-4 md:rounded-xl md:my-6 md:mx-2" id="targetDiv">
        <div className="my-3 text-center text-2xl font-bold text-[#17191A] lg:text-left lg:ml-7 ">
          PROJECTS
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
        <div className=" text-sm font-bold text-center my-4 sm:text-lg md:text-lg">
          Wanna see more Projects?{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={GitHub}
          >
            let's Go then
          </span>
        </div>
      </div>
      <div className="h-1 bg-gray-200 mx-2 md:hidden" />
      {/* about */}
      <div
        className="md:border-4 md:rounded-xl md:my-6 md:mx-2"
        id="targetDiv2"
      >
        <div className="flex justify-center text-2xl font-bold mt-3 lg:justify-start  lg:mx-5">
          ABOUT
        </div>
        <div className="mx-5">
          {/* Intro */}
          <div>
            <Heading Heading="INTRODUCTION:" />
            <Paragraph
              Paragraph="I'm Muhammad Hamza Ali, an aspiring web developer with a passion for IT.
      I'm dedicated to creating beautiful and functional digital experiences.
      Through continuous learning and staying up-to-date with the latest
      technologies, I aim to deliver high-quality results. Let's collaborate to
      bring your digital vision to life."
            />
          </div>
          {/* Education */}
          <div>
            <Heading Heading="EDUCATION:" />
            <Paragraph Paragraph="I have completed my intermediate education and recently completed a comprehensive Web development training program at Saylani Welfare Mass I.T Training in Pakistan. I'm excited to continue my education in pursuit of a degree and apply the skills I've gained to make a meaningful contribution in the field of Web development." />
          </div>
          {/* Skills and Expertise */}
          <div>
            <Heading Heading="SKILLS AND EXPERTISE:" />
            <Paragraph Paragraph="I possess expertise in a range of technologies including React.js, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, Material-UI, and Bootstrap. With proficiency in these frameworks and databases, I am well-equipped to develop robust and scalable web applications." />
          </div>
          {/* Experince */}
          <div>
            <Heading Heading="EXPERINCE:" />
            <Paragraph Paragraph="I have hands-on experience building web applications using the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. This comprehensive expertise allows me to develop dynamic and responsive web apps with a focus on efficient database management, seamless front-end interactions, and smooth user experiences." />
          </div>
        </div>
      </div>
      <div className="h-1 bg-gray-200 mx-2 md:hidden my-3" />
      {/* Contact */}
      <div
        className="md:border-4 md:rounded-xl md:my-6 md:mx-2 md:py-2"
        id="targetDiv3"
      >
        <div className="text-2xl font-bold flex justify-center md:justify-start md:ml-4 ml-2">
          CONTACT
        </div>
        {/* Email */}
        <div className="space-x-2 flex justify-start ml-2 md:ml-4 mt-2 items-center md:justify-start ">
          <MdEmail className="inline text-3xl text-blue-800" />
          <a
            href="mailto:alimuhammadhamza402@gmail.com"
            className="text-blue-500 underline cursor-pointer"
          >
            alimuhammadhamza402@gmail.com
          </a>
        </div>
        {/* Contact */}
        <div className="space-x-2 flex justify-start ml-2 md:ml-4 mt-2 items-center md:justify-start">
          <IoMdContact className="inline text-3xl" />
          <a
            href="tel:+923111011484"
            className="text-blue-500 underline cursor-pointer"
          >
            +923111011484
          </a>
        </div>
        {/* whatsaap */}
        <div className="space-x-2 flex justify-start ml-2 md:ml-4 mt-2 items-center md:justify-start">
          <BsWhatsapp className="inline text-3xl text-green-700" />
          <a
            href="https://wa.me/+923111011484"
            className="text-blue-500 underline cursor-pointer"
          >
            03111011484
          </a>
        </div>
        {/* Linkedin */}
        <div className="space-x-2 flex justify-start ml-2 md:ml-4 mt-2 items-center md:justify-start">
          <BsLinkedin className="inline text-3xl text-blue-800" />
          <a
            href="https://www.linkedin.com/in/hamzaali-/"
            className="text-blue-500 underline cursor-pointer"
          >
            Vist My LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
