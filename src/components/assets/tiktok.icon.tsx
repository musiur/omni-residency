import { cn } from "@/lib/utils";

const TikTok = ({ className }: { className: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <path d="M9.11106 2H11.1481C11.474 4.36966 13.1852 4.96208 14 4.96208V6.81338C13.0222 7.10959 11.6913 6.19628 11.1481 5.7026V10.1457C11.1481 12.7375 9.11106 13.4781 8.2963 13.8483C7.48153 14.2186 3 14.2186 3 10.1457C3 6.88743 5.98762 6.3197 7.48143 6.44312V8.29442C5.03699 7.92416 4.22217 10.8862 6.25921 11.6268C7.88884 12.2192 8.83945 10.8862 9.11106 10.1457V2Z" />
    </svg>
  );
};

export default TikTok;
