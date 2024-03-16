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
}

function Button(props: ButtonProps) {
  const { variant = "outline", label = "Button" } = props;
  return <CnButton variant={variant}>{label}</CnButton>;
}

export default Button;
