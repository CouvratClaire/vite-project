export const ChevronRightIcon = ({
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
        d="M10 7L15 12L10 17"
        stroke="#14213E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
