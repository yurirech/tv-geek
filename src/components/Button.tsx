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
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const {
    variant = "default",
    label = "Button",
    size = "default",
    className,
    onClick,
  } = props;
  return (
    <CnButton
      onClick={onClick}
      variant={variant}
      size={size}
      className={cn(className)}
    >
      {label}
    </CnButton>
  );
}

export default Button;
