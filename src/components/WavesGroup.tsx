import Waves from "./svg/Waves";

function WavesGroup({
  position,
}: {
  position: string;
}) {
  return (
    <div
      className={`${position} flex gap-5 text-[#C1C9D4]`}
    >
      <Waves className="w-20 md:w-fit md:block" />
      <Waves className="w-20 md:w-fit md:block" />
    </div>
  );
}

export { WavesGroup };
