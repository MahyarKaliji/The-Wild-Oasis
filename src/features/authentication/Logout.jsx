import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
// import { logout } from "../../services/apiAuth";
// import { useNavigate } from "react-router-dom";

function Logout() {
  //   const navigate = useNavigate();
  const { logout, isPending } = useLogout();

  //   function handleClick() {
  //     logout();
  //     // navigate("/login");
  //   }

  return (
    <ButtonIcon onClick={logout} disabled={isPending}>
      {isPending ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
