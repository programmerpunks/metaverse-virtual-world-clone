import DividerBlue from "../shared/DividerBlue";
import CollapseComp from "./CollapseComp";
import Spikes from "./Spikes";

const FAQ = () => {
  return (
    <>
      <div className="bg-yelloww relative pt-20">
        <Spikes />
        <div className=" top-[10%] w-full h-full items-center space-y-10">
          <div className="text-center">
            <div className="pb-10">
              <DividerBlue />
            </div>
            <h1 className="md:text-6xl sm:text-4xl text-3xl font-black uppercase">
              FAQ
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="max-w-complete text-center text-xl px-5 font-light">
              This is your chance to take your reader on a journey. What have
              you achieved along the way and what do you envision next?
              Developing a narrative is really quite simple if you follow a
              template, like the one below. As you fill in your template,
              consider the characters and the setting, the problem you solved,
              the obstacles you hit, the milestones you achieve, and what your
              brand's future looks like.
            </p>
          </div>
          <div className="flex justify-center w-auto">
            <div className="grid w-full md:px-20 sm:px-10 px-5  xl:grid-cols-2 grid-cols-1  gap-10">
              <div className="">
                <CollapseComp />
              </div>
              <div className="">
                <CollapseComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
