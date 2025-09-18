import Button from "../Button";

function Section5() {
  return (
    <div className="md:h-[1080px] py-5 relative flex items-center justify-center w-[80%] mx-auto">
      <div className="w-8/12 flex flex-col gap-[60px]">
        <p className="text-primary text-[64px] font-bold">
          Enjoy the beach as it should be: worry-free.
        </p>
        <p className="text-3xl w-[70%]">
          The beach is for experiencing, not worrying about your belongings.
          With SafeBox, you have the freedom to swim, stroll, or relax knowing
          everything is safe.
        </p>
        <Button text="Book your locker now" type="button" />
      </div>
      <img
        src="/assets/pictures/2.png"
        alt="lockers"
        className="size-[500px] overflow-hidden rounded-[999px]"
      />
    </div>
  );
}

export default Section5;
