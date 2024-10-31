import React from "react";
import ShortMenu from "../../assets/Components/ShortMenu";
import OurMenuBanner from "../../assets/Components/OurMenuBanner";
import SectionTitle from "../../assets/Components/SectionTitle";
import ContactMethodCard from "./ContactMethodCard";

const ContactUs = () => {
  const soupBg =
    "https://i.ibb.co.com/Lz217NW/pexels-navada-ra-628779-1703272.jpg";
  return (
    <div>
      <OurMenuBanner
        bgImage={soupBg}
        title={"CONTACT US"}
        sub_title={"FELL FREE TO SUGGEST US OR ANY INCONVENIENCE"}
      ></OurMenuBanner>
      <SectionTitle subTitle="Visit Us" sectionTitle="OUR LOCATION"></SectionTitle>
      <ContactMethodCard></ContactMethodCard>
    </div>
  );
};

export default ContactUs;
