import { cn } from "@/lib/utils";

const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        className,
        "h-[32px] rounded-[10px] bg-gray-300 animate-pulse w-full"
      )}
    ></div>
  );
};

export default Skeleton;
