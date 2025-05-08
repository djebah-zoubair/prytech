import { cn } from "@/lib/utils";

interface TypographyProps {
  components?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  variants?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-sm"
    | "body-base"
    | "body-lg"
    | "xs"
    | "2xs"
    | "3xs"
    | "4xs";
  themes?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className?: string;
  children?: React.ReactNode;
}

const Typography = ({
  components: Component = "h2",
  variants = "h2",
  themes = "black",
  weight = "regular",
  className,
  children,
}: TypographyProps) => {
  let variantStyles: string = "";
  let colorStyles: string = "";

  switch (variants) {
    case "display":
      variantStyles = "text-8xl";
      break;
    case "h1":
      variantStyles = "text-7xl";
      break;
    case "h2":
      variantStyles = "text-6xl";
      break;
    case "h3": //Default
      variantStyles = "text-5xl";
      break;
    case "h4":
      variantStyles = "text-4xl";
      break;
    case "h5":
      variantStyles = "text-3xl";
      break;
    case "lead":
      variantStyles = "text-2xl";
      break;
    case "lead":
      variantStyles = "text-2xl";
      break;
    case "body-lg":
      variantStyles = "text-lg";
      break;
    case "body-base":
      variantStyles = "text-base";
      break;
    case "body-sm":
      variantStyles = "text-sm";
      break;
    case "xs":
      variantStyles = "text-xs";
      break;
    case "2xs":
      variantStyles = "text-2xs";
      break;
    case "3xs":
      variantStyles = "text-3xs";
      break;
    case "4xs":
      variantStyles = "text-4xs";
      break;
    default:
      break;
  }

  switch (themes) {
    case "black": //Default
      colorStyles = "text-gray";
      break;
    case "gray":
      colorStyles = "text-gray-400";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secondary";
      break;
    default:
      break;
  }

  return (
    <Component
      className={cn(
        variantStyles,
        colorStyles,
        weight == "medium" && "font-medium",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
