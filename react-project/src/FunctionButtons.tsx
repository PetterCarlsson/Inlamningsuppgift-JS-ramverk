import type Button from "./Button";

interface FunctionButtonsProps {
  buttons: Button[];
}

export const FunctionButtons = ({ buttons }: FunctionButtonsProps) => (
  <>
    {buttons.map((btn) => (
      <button className="btn btn-primary mt-3 me-1" onClick={btn.onClick}>
        {btn.label}
      </button>
    ))}
  </>
);

export default FunctionButtons;
