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
      className={`cursor-pointer max-md:w-full py-2 px-4 rounded-[100px] ${
        variant === "primary" ? "bg-primary border-2 border-primary" : "border-primary border-2"
      } `}
    >
      <p className={`font-bold text-base ${variant === "primary"? "text-secondary": "text-primary"}`}>{text}</p>
    </button>
  );
}

export default Button;
