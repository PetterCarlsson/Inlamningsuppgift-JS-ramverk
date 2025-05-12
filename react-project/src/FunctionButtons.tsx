interface FunctionButtonsProps {
  onClickAlphabet: () => void;
  onClickGrade: () => void;
}

export const FunctionButtons = ({
  onClickAlphabet,
  onClickGrade,
}: FunctionButtonsProps) => {
  return (
    <>
      <button className="btn btn-primary mt-3  me-1" onClick={onClickAlphabet}>
        Alfabetisk ordning
      </button>
      <button className="btn btn-primary mt-3" onClick={onClickGrade}>
        Betygsordning
      </button>
    </>
  );
};

export default FunctionButtons;
