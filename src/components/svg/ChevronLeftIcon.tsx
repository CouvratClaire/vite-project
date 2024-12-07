export const ChevronLeftIcon = ({
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
        d="M15 17L10 12L15 7"
        stroke="#14213E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
