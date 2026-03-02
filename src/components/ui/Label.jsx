export const Label = ({ value }) => {
	return (
		<div className="flex text-sm font-semibold">
			<div>{value}</div>
			<div className="text-red-500">*</div>
		</div>
	);
};
