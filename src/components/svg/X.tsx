import { type ComponentProps } from "react";

function X(props: ComponentProps<"svg">) {
  return (
    <svg
      width="50"
      height="45"
      viewBox="0 0 50 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M39.3742 0H47.0448L30.2912 19.0601L50 45H34.5719L22.4794 29.2716L8.65928 45H0.977836L18.894 24.6094L0 0H15.8192L26.7384 14.3762L39.3742 0ZM36.6797 40.4351H40.9279L13.505 4.32692H8.94176L36.6797 40.4351Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default X;
