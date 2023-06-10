import React from "react";

const About = () => {
  return (
    <div className="bg-image bg-cover w-full h-96 text-center flex flex-col justify-center rounded-xl my-4" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1139651255/photo/martial-arts-fighter.jpg?s=612x612&w=0&k=20&c=3MytyIWBuaUsEyEW7csYrnBhKPgCs_X3K5ZS82UN8Gg=')",backgroundRepeat: 'no-repeat' }}>
      <h2 className="text-3xl text-white">ABOUT <span className="text-pink-600">InfinityMarttialArts</span> SCHOOL</h2>
       <h3 className="font font-semibold text-white">InfinityMarttialArts School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</h3>
       <p className="text-white">We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts schools, we do not require you to sign long term contracts. You just pay one low monthly fee for your martial arts and self defense classes at the beginning of each month. Many martial arts</p>
    </div>
  );
};

export default About;
