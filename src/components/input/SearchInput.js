import PropTypes from 'prop-types';

const SearchInput = ({ prefixIcon, onChange, value }) => {
	return (
		<div className='wrapper-search-input'>
			{prefixIcon}
			<input type='text' className='search-input' />
		</div>
	);
};

SearchInput.propTypes = {
	prefixIcon: PropTypes.element,
	onChange: PropTypes.func,
	value: PropTypes.string,
};

export default SearchInput;
