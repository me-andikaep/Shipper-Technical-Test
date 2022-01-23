import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import {
	MdHome,
	MdAdd,
	MdArrowBackIos,
	MdArrowForwardIos,
} from 'react-icons/md';
import { RiCalendar2Fill, RiMoreFill } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Icons({
	type,
	size,
	style,
	className,
	color,
	onClick,
}) {
	switch (type) {
		case 'user':
			return (
				<FaUserCircle style={{ ...style }} className={className} size={size} />
			);
		case 'home':
			return <MdHome style={{ ...style }} className={className} size={size} />;
		case 'calendar':
			return (
				<RiCalendar2Fill
					style={{ ...style }}
					className={className}
					size={size}
				/>
			);
		case 'search':
			return (
				<AiOutlineSearch
					style={{ ...style }}
					className={className}
					size={size}
					onClick={onClick}
				/>
			);
		case 'add':
			return <MdAdd style={{ ...style }} className={className} size={size} />;
		case 'more':
			return (
				<RiMoreFill style={{ ...style }} className={className} size={size} />
			);
		case 'previous':
			return (
				<MdArrowBackIos
					style={{ ...style }}
					className={className}
					size={size}
				/>
			);
		case 'next':
			return (
				<MdArrowForwardIos
					style={{ ...style }}
					className={className}
					size={size}
				/>
			);
		default:
			break;
	}
}

Icons.propTypes = {
	type: PropTypes.string,
	size: PropTypes.number,
	style: PropTypes.any,
	className: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
};
