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
      <Waves className="lg:w-50 w-20 md:block" />
      <Waves className="lg:w-50 w-20 md:block" />
    </div>
  );
}

export { WavesGroup };
