import Button from "../Button";
import { WavesGroup } from "../WavesGroup";

function Section1() {
  return (
    <div className="md:min-h-screen py-26 pt-56 px-3 lg:px-30 md:px-10 gap-30 grid lg:grid-cols-2 relative">
      <WavesGroup position="hidden md:flex absolute lg:bottom-10 -bottom-10 left-5" />
      <div className="flex flex-col justify-center items-center md:items-start gap-10">
        <h2 className="text-primary max-lg:text-center text-4xl md:text-6xl font-bold">
          Shocking and Emotional
        </h2>
        <p className="font-normal text-base text-black text-center md:w-3/4 md:text-left">
          With SafeBox, the smart solar-powered sand lockers, you can store your
          valuables and enjoy the beach without worries.
        </p>
        <div className="flex max-sm:flex-col gap-4 justify-start w-full">
          <Button type="button" text="Book your locker" />
          <Button
            type="button"
            variant="secondary"
            text="Find out how it works"
          />
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 md:grid-cols-8 gap-5 px-5 md:px-0 pb-20">
        <img
          src="/assets/pictures/1.png"
          className="md:h-[699px] object-cover rounded-[100px] col-span-4"
        />
        <img
          src="/assets/pictures/2.png"
          className="md:h-[699px] object-cover rounded-[100px] col-span-3"
        />
        <img
          src="/assets/pictures/1.png"
          className="md:h-[699px] object-cover rounded-[100px] col-span-1"
        />
      </div>
    </div>
  );
}

export { Section1 };
