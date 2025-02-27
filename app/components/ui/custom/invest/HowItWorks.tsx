import React from "react";
import close_up from "~/assets/bee-farm-close-up.png";
import moneyBox from "~/assets/Money Box.png";
import trophy from "~/assets/Trophy.png";
import barChart from "~/assets/Bar Chart.png";
import idea from "~/assets/Idea.png";
import line from "~/assets/line_1.png";
const HowItWorks = () => {
  return (
    <div className="px-5 md:px-10 lg:px-[198px] py-16 uid">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-start mt-4 mb-6 md:mt-6 md:mb-8">
        How It Works ...
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <img
          className="h-56 md:h-full object-cover uid w-full rounded-lg"
          src={close_up}
          alt="close up"
        />
        {/* Content Section */}
        <div className="relative lg:ml-20 lg:w-[415px] grid gap-5">
          {/* Section 1 */}
          <div className="relative grid items-start gap-4 mb-6">
            <div className="uid flex w-full items-center gap-5">
              <img className="w-12 h-12" alt="Idea" src={idea} />
              <h3 className="text-xl md:text-2xl font-semibold">
                Explore Opportunities
              </h3>
            </div>
            <div className="flex w-full  gap-5">
              <div className="w-12 flex items-center justify-center">
                <div className="w-0.5 h-full bg-gray-300 ml-2"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 uid w-full">
                Access detailed information about the cost of beehives,
                locations, beekeepers available to manage them, and the expected
                returns.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="relative grid items-start gap-4 mb-6">
            <div className="uid flex w-full items-center gap-5">
              <img className="w-12 h-12" alt="Money box" src={moneyBox} />
              <h3 className="text-xl md:text-2xl font-semibold">
                Make Your Investment
              </h3>
            </div>
            <div className="flex w-full  gap-5">
              <div className="w-12 flex items-center justify-center">
                <div className="w-0.5 h-full bg-gray-300 ml-2"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 uid w-full">
                Choose your preferred investment option, whether it{"’"}s a
                short-term (6 months - 1 year) or long-term (2 years - 5 years)
                commitment.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="relative grid items-start gap-4 mb-6">
            <div className="uid flex w-full items-center gap-5">
              <img className="w-12 h-12" alt="Bar chart" src={barChart} />
              <h3 className="text-xl md:text-2xl font-semibold">
                Track Your Progress
              </h3>
            </div>
            <div className="flex w-full  gap-5">
              <div className="w-12 flex items-center justify-center">
                <div className="w-0.5 h-full bg-gray-300 ml-2"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 uid w-full">
                Use our intuitive dashboard to monitor your investment{"’"}s
                progress, including hive health, honey production, and sales.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="relative grid items-start gap-4 mb-6">
            <div className="uid flex w-full items-center gap-5">
              <img className="w-12 h-12" alt="Trophy" src={trophy} />
              <h3 className="text-xl md:text-2xl font-semibold">
                Reap the Rewards
              </h3>
            </div>
            <div className="flex w-full  gap-5">
              <div className="w-12 flex items-center justify-center">
                <div className="w-0.5 h-full bg-gray-300 ml-2"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 uid w-full">
                At the end of the investment period, receive your returns, along
                with the satisfaction of knowing you’ve made a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
