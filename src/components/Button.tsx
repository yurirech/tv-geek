import { Button as CnButton } from "@/components/ui/button";

interface ButtonProps {
  label: string;
  variant: string;
}

function Button(props: ButtonProps) {
  const { variant = "outline", label = "Button" } = props;
  return <CnButton variant="outline">{label}</CnButton>;
}

export default Button;
