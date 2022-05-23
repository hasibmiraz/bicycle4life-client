import React from 'react';
import CountUp from 'react-countup';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdRateReview, MdEventAvailable } from 'react-icons/md';

const Summary = () => {
  return (
    <div className="my-20">
      <h2 className="text-2xl md:text-4xl text-orange-500 font-bold md:font-semibold text-center font-mono">
        Our Business History
      </h2>
      <div className="shadow w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 h-32">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <BsFillPeopleFill className="w-16 h-16 text-orange-400" />
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value">
            <CountUp duration={3} end={100} />
            K+
          </div>
          <div className="stat-desc">10k+ in the last 2 months</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaMoneyBillAlt className="w-16 h-16 text-orange-400" />
          </div>
          <div className="stat-title">Annual Revenue</div>
          <div className="stat-value">
            <CountUp duration={3} end={120} />
            M+
          </div>
          <div className="stat-desc">8M+ in previous month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <MdRateReview className="w-16 h-16 text-orange-400" />
          </div>
          <div className="stat-title">Total Reviews</div>
          <div className="stat-value">
            <CountUp duration={3} end={35} />
            K+
          </div>
          <div className="stat-desc">2k+ last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <MdEventAvailable className="w-16 h-16 text-orange-400" />
          </div>
          <div className="stat-title">Available Parts</div>
          <div className="stat-value">
            <CountUp duration={3} end={50} />+
          </div>
          <div className="stat-desc">Till Now</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
