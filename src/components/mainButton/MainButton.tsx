import "./MainButton.css";
import { Arrow } from "@/utils/icons/icons";

type ButtonProps = {
  hasIcon: boolean;
  children: React.ReactNode;
};

function MainButton({ hasIcon, children }: ButtonProps) {
  return (
    <button className="main-button">
      {children}
      {hasIcon ? <Arrow /> : null}
    </button>
  );
}

export default MainButton;
