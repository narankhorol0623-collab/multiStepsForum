import { ErrorMessage } from "./ErrorMessage";
import { Label } from "./Label";

export const Input = ({
  placeholderName,
  LabelValue,
  ErrorMessageValue,
  type,
  hidden = false,
}) => {
  return (
    <div className="flex flex-col text-black">
      <Label value={LabelValue} />

      <input
        type={type}
        placeholder={placeholderName}
        className="border rounded-lg w-104px h-11 pl-3.25"
        hidden={hidden}
      />

      {/* <ErrorMessage /> */}
    </div>
  );
};
