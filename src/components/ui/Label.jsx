export const Label = ({ value }) => {
  return (
    <div className="flex text-sm font-semibold space-x-0.5">
      <div>{value}</div>
      <div className="text-red-500">*</div>
    </div>
  );
};
