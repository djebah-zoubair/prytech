import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  size?: "small" | "medium" | "large";
  src: string;
  alt: string;
}

const Avatar = ({ size = "medium", src, alt }: AvatarProps) => {
  let sizeAvatar: string = "";

  switch (size) {
    case "small":
      sizeAvatar = "w-[24px] h-[24px]";
      break;
    case "medium": // Default
      sizeAvatar = "w-[34px] h-[34px]";
      break;
    case "large":
      sizeAvatar = "w-[50px] h-[50px]";
      break;

    default:
      break;
  }

  return (
    <div className={cn(sizeAvatar, "relative rounded-full bg-gray-100")}>
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-full object-cover object-center"
      />
    </div>
  );
};

export default Avatar;
