
"use client"
import React, { useState, useEffect } from 'react';

const CountDown = ({ initialTime }:{initialTime:number}) => {
  const calculateTimeLeft = () => {
    const difference = initialTime - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex items-center justify-center">
      <div className=" border text-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black">Flash Sale!</h2>
            <p className="text-black">Hurry, sale ends soon!</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-[#f57207] px-4 py-2 rounded-md">
              <span className="text-4xl font-bold" id="days">
                {timeLeft.days}
              </span>
              <span className="text-black"> days</span>
            </div>
            <div className="bg-[#f57207] px-4 py-2 rounded-md">
              <span className="text-4xl font-bold" id="hours">
                {timeLeft.hours}
              </span>
              <span className="text-black"> hours</span>
            </div>
            <div className="bg-[#f57207] px-4 py-2 rounded-md">
              <span className="text-4xl font-bold" id="minutes">
                {timeLeft.minutes}
              </span>
              <span className="text-black"> minutes</span>
            </div>
            <div className="bg-[#f57207] px-4 py-2 rounded-md">
              <span className="text-4xl font-bold" id="seconds">
                {timeLeft.seconds}
              </span>
              <span className="text-black"> seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
