import { cn } from "@/lib/utils";
import { IconProps } from "@/types/iconProps";
import Spinner from "./spinner";

interface ButtonProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  variants?: "accent" | "secondary" | "outline" | "disabled" | "icon";
  icon?: IconProps;
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
  const IconComponent = icon?.icon;

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
      if (icontheme === "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-700 !text-white rounded-full";
      }
      if (icontheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 !text-primary rounded-full";
      }
      if (icontheme === "gray") {
        variantStyles =
          "bg-gray-700 hover:bg-gray-600 !text-white rounded-full";
      }
      break;

    default:
      break;
  }

  switch (size) {
    case "xs":
      sizeStyles = `text-[12px] leading-[150%] font-medium ${
        variants === "icon"
          ? "flex items-center justify-center w-[34px] h-[34px]"
          : "h-[34px] px-[12px] !py-0 flex items-center"
      }`;
      iconSize = 16;
      break;
    case "sm":
      sizeStyles = `text-[14px] leading-[20px] font-medium ${
        variants === "icon"
          ? "flex items-center justify-center w-[36px] h-[36px]"
          : "px-[12px] py-[8px]"
      }`;
      iconSize = 16;
      break;
    case "base": // Default
      sizeStyles = `text-[14px] leading-[20px] font-medium ${
        variants === "icon"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[20px] py-[10px]"
      }`;
      iconSize = 18;
      break;
    case "lg":
      sizeStyles = `text-[16px] leading-[150%] font-medium ${
        variants === "icon"
          ? "flex items-center justify-center w-[48px] h-[48px]"
          : "px-[20px] py-[12px]"
      }`;
      iconSize = 20;
      break;
    case "xl":
      sizeStyles = `text-[16px] leading-[150%] font-medium ${
        variants === "icon"
          ? "flex items-center justify-center w-[52px] h-[52px]"
          : "px-[24px] py-[14px]"
      }`;
      iconSize = 20;
      break;

    default:
      break;
  }

  return (
    <button
      type="button"
      className={cn(
        variantStyles,
        sizeStyles,
        iconSize,
        isLoading && "cursor-wait",
        className,
        "relative animate"
      )}
      disabled={isDisabled}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variants === "accent" ||
          (variants === "icon" && icontheme === "accent") ||
          icontheme === "gray" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}

      <div className={cn(isLoading && "invisible")}>
        {IconComponent && variants === "icon" ? (
          <IconComponent size={iconSize} />
        ) : (
          <div className={cn(IconComponent && "flex items-center gap-2")}>
            {IconComponent && iconPosition == "left" && (
              <IconComponent size={iconSize} />
            )}
            {children}
            {IconComponent && iconPosition == "right" && (
              <IconComponent size={iconSize} />
            )}
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;
