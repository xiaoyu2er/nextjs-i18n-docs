export const Check = ({ size }: { size: number }) => {
  return (
    <svg
      data-testid="geist-icon"
      height="16"
      stroke-linejoin="round"
      viewBox="0 0 16 16"
      width="16"
      style={{ width: size, height: size }}
      color="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const Cross = ({ size }: { size: number }) => {
  return (
    <svg
      data-testid="geist-icon"
      height="16"
      stroke-linejoin="round"
      style={{ width: size, height: size }}
      color="currentColor"
      viewBox="0 0 16 16"
      width="16"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
