import React from 'react';

import './Header.css';

const Header = ({ orderCount }) => {
	return (
		<div className='header-wrapper'>
			<div className='header-title'>Suburb.cafe</div>
			<div>{orderCount}</div>
		</div>
	);
};

export default Header;
