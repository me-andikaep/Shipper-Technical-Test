import PropTypes from 'prop-types';

const SearchInput = ({ prefixIcon, onChange, value, dataTestId }) => {
	return (
		<div className='wrapper-search-input'>
			{prefixIcon}
			<input
				type='text'
				className='search-input'
				onChange={onChange}
				value={value}
				data-testid={dataTestId}
			/>
		</div>
	);
};

//hanya tipe props tertentu yang diterima
SearchInput.propTypes = {
	prefixIcon: PropTypes.element,
	onChange: PropTypes.func,
	value: PropTypes.string,
};

export default SearchInput;
