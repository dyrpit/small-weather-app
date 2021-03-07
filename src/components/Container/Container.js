import React from 'react';
import PropTypes from 'prop-types';

import './Container.css';

const Container = ({ children }) => {
	return <section className='container'>{children}</section>;
};

Container.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Container;
