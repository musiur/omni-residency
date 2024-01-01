//an atom built with icon and text
import { Smile } from "lucide-react";

const Textcon = ({
  icon = <Smile />,
  text = "Hello there!",
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex items-center justify-start gap-[8px]">
      {icon}
      {text}
    </div>
  );
};

export default Textcon;
