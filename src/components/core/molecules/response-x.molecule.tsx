import { toast } from "@/components/ui/use-toast";

const ResponseX = ({
  title = "You submitted the following values:",
  result,
}: {
  title: string;
  result: any;
}) => {
  const { success, message, detail } = result;
  toast({
    variant: success ? "default" : "destructive",
    title,
    description: (
      <div>{message ? message : detail ? detail : "Something went wrong"}</div>
    ),
  });
  return null;
};
export default ResponseX;
