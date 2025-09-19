import Button from "../Button";

function Section5() {
  return (
    <div className="min-h-screen py-20 lg:py-50 flex max-lg:flex-col items-center justify-center px-3 md:px-10 lg:px-30 lg:gap-40 gap-10">
      <div className="flex flex-col items-start gap-10">
        <h2 className="text-primary text-4xl md:text-6xl font-bold md:text-center">
          Enjoy the beach as it should be: worry-free.
        </h2>
        <p className="text-base md:w-5/6">
          The beach is for experiencing, not worrying about your belongings.
          With SafeBox, you have the freedom to swim, stroll, or relax knowing
          everything is safe.
        </p>
        <Button text="Book your locker now" type="button" />
      </div>
      <img
        src="/assets/pictures/2.png"
        alt="lockers"
        className="overflow-hidden object-cover max-lg:rounded-3xl rounded-full min-h-60 h-120 lg:min-w-120 max-lg:w-full"
      />
    </div>
  );
}

export default Section5;
