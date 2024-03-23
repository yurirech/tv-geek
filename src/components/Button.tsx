import { Button as CnButton } from "@/components/ui/button";

interface ButtonProps {
  label: string;
  variant?:
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className: string;
}

function Button(props: ButtonProps) {
  const { variant = "destructive", label = "Button", className } = props;
  return (
    <CnButton className={className} variant={variant}>
      {label}
    </CnButton>
  );
}

export default Button;
