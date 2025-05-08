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
      variantStyles = "text-red-500";
      break;

    default:
      break;
  }

  return (
    <Component className={cn(variantStyles, weight == "medium" && "font-medium", className)}>
      {children}
    </Component>
  );
};

export default Typography;
