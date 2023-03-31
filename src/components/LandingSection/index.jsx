import Flash from "./Flash";
import Left from "./Left";
import Right from "./Right";

const LandingSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark">
      <div className="flex justify-center">
        <div className="max-w-complete grid xl:grid-cols-2 grid-cols-1 w-full items-center gap-5">
          <div className="py-10 ">
            <Left />
          </div>
          <div className=" py-10">
            <Right />
          </div>
        </div>
      </div>
      <Flash />
    </div>
  );
};

export default LandingSection;
