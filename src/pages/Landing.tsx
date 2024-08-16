import Button from "@/components/Button";
import useGetMockedData from "@/hooks/useGetMockedData";

function Landing() {
  const { firstName, lastName } = useGetMockedData();

  return (
    <div>
      <Button label="Button" />
      <span>{firstName}</span>
      <span>{lastName}</span>
    </div>
  );
}

export default Landing;
