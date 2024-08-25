import { Button as CnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  variant?:
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | "link"
    | null;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const buttonColors = {
  "outline-primary": "border-primary text-primary",
  "outline-secondary": "border-secondary text-secondary",
  "link-primary": "text-primary",
  "link-secondary": "text-secondary",
};

function buttonCombinations(variant: string, color: string) {
  if (!variant || !color) return;
  //@ts-expect-error whatever
  return buttonColors[`${variant}-${color}`];
}

function Button(props: ButtonProps) {
  const {
    variant = "default",
    label = "Button",
    size = "default",
    color = "primary",
    className,
    onClick,
  } = props;
  return (
    <CnButton
      onClick={onClick}
      variant={variant}
      size={size}
      className={cn(className, buttonCombinations(variant, color))}
      {...props}
    >
      {label}
    </CnButton>
  );
}

export default Button;
