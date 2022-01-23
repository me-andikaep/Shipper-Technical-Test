import { FaUserCircle } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { RiCalendar2Fill } from 'react-icons/ri';

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

		default:
			break;
	}
}
