import { SVGProps } from "react";

export const ReceiptIcon = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M6.5 22C5.66667 22 4.95833 21.7083 4.375 21.125C3.79167 20.5417 3.5 19.8333 3.5 19V16H6.5V2L8 3.5L9.5 2L11 3.5L12.5 2L14 3.5L15.5 2L17 3.5L18.5 2L20 3.5L21.5 2V19C21.5 19.8333 21.2083 20.5417 20.625 21.125C20.0417 21.7083 19.3333 22 18.5 22H6.5ZM18.5 20C18.7833 20 19.0208 19.9042 19.2125 19.7125C19.4042 19.5208 19.5 19.2833 19.5 19V5H8.5V16H17.5V19C17.5 19.2833 17.5958 19.5208 17.7875 19.7125C17.9792 19.9042 18.2167 20 18.5 20ZM9.5 9V7H15.5V9H9.5ZM9.5 12V10H15.5V12H9.5ZM17.5 9C17.2167 9 16.9792 8.90417 16.7875 8.7125C16.5958 8.52083 16.5 8.28333 16.5 8C16.5 7.71667 16.5958 7.47917 16.7875 7.2875C16.9792 7.09583 17.2167 7 17.5 7C17.7833 7 18.0208 7.09583 18.2125 7.2875C18.4042 7.47917 18.5 7.71667 18.5 8C18.5 8.28333 18.4042 8.52083 18.2125 8.7125C18.0208 8.90417 17.7833 9 17.5 9ZM17.5 12C17.2167 12 16.9792 11.9042 16.7875 11.7125C16.5958 11.5208 16.5 11.2833 16.5 11C16.5 10.7167 16.5958 10.4792 16.7875 10.2875C16.9792 10.0958 17.2167 10 17.5 10C17.7833 10 18.0208 10.0958 18.2125 10.2875C18.4042 10.4792 18.5 10.7167 18.5 11C18.5 11.2833 18.4042 11.5208 18.2125 11.7125C18.0208 11.9042 17.7833 12 17.5 12ZM6.5 20H15.5V18H5.5V19C5.5 19.2833 5.59583 19.5208 5.7875 19.7125C5.97917 19.9042 6.21667 20 6.5 20Z" />
      </g>
    </svg>
  );
};
