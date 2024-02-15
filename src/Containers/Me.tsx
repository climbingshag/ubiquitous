import { useMe } from "../Api/Models/User/MeHooks";

// just a dummy component to test api hook
export function Me() {
  const me = useMe();
  console.log("ME", me);
  return <></>;
}

export default Me;
