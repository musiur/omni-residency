import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "lucide-react";

const Selector = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <div className="flex items-center gap-[8px]">
          <User className="w-4 h-4 stroke-plain_gray" />
          <SelectValue placeholder="Select Person Number" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Person</SelectLabel>
          {[1, 2, 3, 4, 5, 6].map((num) => {
            return (
              <SelectItem value={num.toString()} key={num}>
                {num}&nbsp;Adult
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selector;
