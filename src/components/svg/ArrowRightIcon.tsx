export const ArrowRightIcon = ({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 5L20 12M20 12L13.3333 19M20 12L4 12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
