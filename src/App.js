import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./App.css";

const PricingCard = ({ title, price, features, link }) => {
  const [style, api] = useSpring(() => ({
    transform: "scale(1)",
    boxShadow: "8px 4px 15px rgb(8, 255, 45)",
  }));

  const handleMouseEnter = () => {
    api.start({
      transform: "scale(1.10)",
      boxShadow: "0px 8px 30px rgba(8, 255, 45, 8)",
    });
  };

  const handleMouseLeave = () => {
    api.start({
      transform: "scale(1)",
      boxShadow: "0px 4px 15px rgba(255, 255, 255, 8)",
    });
  };

  const Spoiler = ({ children }) => (
    <span className="spoiler" title="Click to reveal">
      {children}
    </span>
  );

  return (
    <animated.div
      className="pricing-card"
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="title">
        {title}
        <div className="underline" />
      </h2>
      <div className="price">{price}</div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="tick">✓</span>{" "}
            {feature.isSpoiler ? (
              <Spoiler>{feature.text}</Spoiler>
            ) : (
              <span>{feature.text}</span>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={() => window.open(link, "_blank")}
        className="animated-button"
      >
        Order Now
      </button>
    </animated.div>
  );
};

const PricingPage = () => {
  const plans = [
    {
      title: "FamXCreeps",
      price: "₹499 LifeTime",
      features: [
        { text: "Desi Exclusive Videos", isSpoiler: false },
        { text: "C̶r̶e̶e̶p̶ Videos", isSpoiler: false },
        { text: "100% Desi / Foreigners Also Available !", isSpoiler: true },
        { text: "Price Is Fixed", isSpoiler: true },
        { text: "Screenshots Are Uploaded", isSpoiler: true },
      ],
      link: "https://t.me/FamXButcher",
    },
    {
      title: "FamXInc3st VIP",
      price: "₹1999 Permanent",
      features: [
        { text: "Desi Exclusive Videos", isSpoiler: false },
        { text: "Sleeping Videos,B̶r̶*̶t̶a̶l̶ ", isSpoiler: false },
        { text: "S̶l̶e̶e̶p̶i̶n̶g̶ ̶P̶i̶l̶l̶s̶ ̶E̶x̶c̶l̶u̶s̶i̶v̶e̶!", isSpoiler: true },
        { text: "Brother & Sister Exclusive", isSpoiler: true },
        { text: "Screenshots Are Uploaded", isSpoiler: true },
        { text: "Price Is Fixed !", isSpoiler: true },
      ],
      link: "https://t.me/FamXButcher",
    },
    {
      title: "All in One",
      price: "₹7000 Permanent",
      features: [
        { text: "Desi Exclusive Videos", isSpoiler: false },
        { text: "Snapchat Videos", isSpoiler: false },
        { text: "C*CKOLD , School girl,Sh#male ,interfaith,M0m S0n (s0n= Aged ),VIP TANGO ,Forest", isSpoiler: true },
        { text: "Cuckold & Femdom Exclusive", isSpoiler: true },
        { text: "Transgender & BDSM Exclusive ,Redr00m,indian R̶@̶p̶e̶,Foreign/indian P̶e̶d̶o̶m̶o̶m̶ ", isSpoiler: true },
        { text: "OnlyFans, Adult TikTok, Camgirl  Videos,Bro Sis", isSpoiler: true },
      ],
      link: "https://t.me/FamXButcher",
    },
    {
      title: "Numbers For Otp",
      Countries: "USA/UK/INDIAN/RUSSIA",
      features: [
        { text: "USA AT ₹350 ", isSpoiler: false },
        { text: "UK AT ₹450", isSpoiler: false },
        { text: "INDIAN AT ₹180", isSpoiler: true },
        { text: "Russia at ₹950", isSpoiler: true },
      ],
      link: "https://t.me/FamXButcher",
    },
  ];

  return (
    <div className="pricing-page">
    <div className="top-bar">
      <div className="famx-world">FamX World</div>
      <div className="backup">
        <a href="https://t.me/BackupFamX" target="_blank" rel="noopener noreferrer" className="no-underline">
          @BackupFamX
        </a>
      </div>
    </div>



    
      <div className="content">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
