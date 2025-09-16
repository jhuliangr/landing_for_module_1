function Button({
  type,
  text,
  variant = "primary",
}: {
  type: "submit" | "reset" | "button";
  text: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      type={type}
      className={`cursor-pointer w-full md:w-fit py-[15px] px-10 rounded-[100px] ${
        variant === "primary" ? "bg-[#092754] " : "border-[#092754] border-2"
      } `}
    >
      <p className={`font-bold text-sm md:text-[22px] ${variant === "primary"? "text-[#FFE5AF]": "text-[#092754]"}`}>{text}</p>
    </button>
  );
}

export default Button;
