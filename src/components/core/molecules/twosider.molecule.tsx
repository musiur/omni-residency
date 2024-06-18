import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export type TwoSiderMoleculeProps = {
  image: string;
  h2: React.ReactNode;
  p: string;
  btnText: string;
  btnLink: string;
  highlighter: string;
  imgOnRight: boolean;
  imgMaxW: boolean;
};

const TwoSiderMolecule = ({ details }: { details: TwoSiderMoleculeProps }) => {
  const { image, h2, p, btnLink, btnText, highlighter, imgOnRight, imgMaxW } =
    details;
  return (
    <div
      className={clsx("flex flex-col  gap-[48px] justify-center", {
        "md:flex-row-reverse": imgOnRight,
        "md:flex-row": !imgOnRight,
        "items-center md:items-end": imgMaxW,
        "items-center": !imgMaxW,
      })}
    >
      <div className="overflow-hidden  rounded-2xl">
        <Image
          src={image}
          alt="image"
          width={1000}
          height={1000}
          className={clsx({
            "max-w-[300px] md:max-w-[484px]": imgMaxW,
            "w-full h-full": !imgMaxW,
          })}
        />
      </div>
      <div
        className={clsx({
          "max-w-[320px] md:max-w-[530px]": imgMaxW,
          "w-full h-full": !imgMaxW,
        })}
      >
        <div>
          <p className="px-[16px] py-[12px] rounded-full bg-muted_orange text-primary font-medium inline-flex text-center">
            {highlighter}
          </p>
          <h2 className="pt-[16px]">{h2}</h2>
        </div>
        <p className="text-plain_gray py-[24px]">{p}</p>
        {btnText ? (
          <Link href={btnLink}>
            <Button>{btnText}</Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default TwoSiderMolecule;
