import React from 'react';
import CountUp from 'react-countup';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdRateReview, MdEventAvailable } from 'react-icons/md';
import ReactVisibilitySensor from 'react-visibility-sensor';

const Summary = () => {
  const counter = (count) => {
    return (
      <CountUp duration={3} end={count} redraw={true}>
        {({ countUpRef, start }) => (
          <ReactVisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef}></span>
          </ReactVisibilitySensor>
        )}
      </CountUp>
    );
  };
  return (
    <div className="my-20">
      <h2 className="text-2xl md:text-4xl text-orange-500 font-bold md:font-semibold text-center font-mono my-8">
        Our Business History
      </h2>
      <div className="flex justify-center">
        <div className="stats stats-vertical lg:stats-horizontal shadow w-11/12 mx-auto">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <BsFillPeopleFill className="w-16 h-16 text-orange-400" />
            </div>
            <div className="stat-title">Customers</div>
            <div className="stat-value">{counter(100)}K+</div>
            <div className="stat-desc">10k+ in the last 2 months</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaMoneyBillAlt className="w-16 h-16 text-orange-400" />
            </div>
            <div className="stat-title">Annual Revenue</div>
            <div className="stat-value">{counter(120)}M+</div>
            <div className="stat-desc">8M+ in previous month</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <MdRateReview className="w-16 h-16 text-orange-400" />
            </div>
            <div className="stat-title">Total Reviews</div>
            <div className="stat-value">{counter(35)}K+</div>
            <div className="stat-desc">2k+ last month</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <MdEventAvailable className="w-16 h-16 text-orange-400" />
            </div>
            <div className="stat-title">Available Parts</div>
            <div className="stat-value">{counter(50)}+</div>
            <div className="stat-desc">Till Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
