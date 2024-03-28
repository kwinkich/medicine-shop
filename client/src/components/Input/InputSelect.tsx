interface InputSelectProps {
	valueId: number;
	valueText: string;
}

export const InputSelect: React.FC<InputSelectProps> = ({
	valueId,
	valueText,
}) => {
	return (
		<>
			<option value={valueId}>{valueText}</option>
		</>
	);
};
