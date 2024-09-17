import { toast } from "@/components/ui/use-toast";

const ResponseX = ({
  title = "You submitted the following values:",
  result,
}: {
  title: string;
  result: any;
}) => {
  const { success, message, detail, errors } = result;
  
  toast({
    variant: success ? "default" : "destructive",
    title,
    description: (
      <div>
        <div>
          {message ? message : detail ? detail : "Something went wrong"}
        </div>
        {errors?.length
          ? errors.map((item: any, index1: number) => {
              const values = Object.values(item);
              return (
                <ul key={index1}>
                  {values?.length
                    ? values.map((error: any, index2: number) => {
                        return (
                          <li key={index2} className="w-full">
                            {error}
                          </li>
                        );
                      })
                    : null}
                </ul>
              );
            })
          : null}
      </div>
    ),
  });
  return null;
};
export default ResponseX;
