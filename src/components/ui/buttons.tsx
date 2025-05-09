import { cn } from "@/lib/utils";

interface ButtonProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  variants?: "accent" | "secondary" | "outline" | "disabled" | "icon";
  icon?: unknown;
  icontheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button = ({
  size = "base",
  variants = "accent",
  icon,
  icontheme = "accent",
  iconPosition = "right",
  isDisabled,
  isLoading,
  className,
  children,
}: ButtonProps) => {
  let variantStyles: string = "";
  let sizeStyles: string = "";
  let iconSize: number = 0;

  switch (variants) {
    case "accent": //Default
      variantStyles =
        "bg-primary hover:bg-primary-700 !text-white rounded-xl cursor-pointer";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 !text-primary rounded-xl cursor-pointer";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-200/50 border border-gray-100 !text-gray rounded-xl cursor-pointer";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-50 border border-gray-100 !text-gray-300 rounded-xl cursor-not-allowed";
      break;
    case "icon":
      variantStyles = "";
      break;

    default:
      break;
  }

  switch (size) {
    case "xs":
      sizeStyles = "text-[12px] leading-[150%] font-medium px-[12px] py-[8px]";
      break;
    case "sm":
      sizeStyles = "text-[14px] leading-[20px] font-medium px-[12px] py-[8px]";
      break;
    case "base":
      sizeStyles = "text-[14px] leading-[20px] font-medium px-[20px] py-[10px]";
      break;
    case "lg":
      sizeStyles = "text-[16px] leading-[150%] font-medium px-[20px] py-[12px]";
      break;
    case "xl":
      sizeStyles = "text-[16px] leading-[150%] font-medium px-[24px] py-[14px]";
      break;

    default:
      break;
  }

  return (
    <button
      type="button"
      className={cn(variantStyles, sizeStyles, className, "")}
      onClick={() => console.log(alert("Tu as cliqué 🎉"))}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
