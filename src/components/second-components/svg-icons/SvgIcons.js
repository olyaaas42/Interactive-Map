import React from 'react';
import { HandySvg } from 'handy-svg';
import arrowRight from '../../../icons/arrow-right-square.svg';
import pencil from '../../../icons/pencil.svg';
import person from '../../../icons/person-circle.svg';
import arrowLeft from '../../../icons/arrow-left.svg';

export default function SvgIcons({ id, color, size }) {
	const colors = {
		primary: '#3D5499FF',
		secondary: '#6c757d'
	};

	switch (id) {
		case 'arrow-right': {
			return <HandySvg src={arrowRight}
											 width={size}
											 height={size}
											 fill={colors[color]}/>;
		}
		case 'Tusur':{
			return <HandySvg src={arrowRight}
											 width={size}
											 height={size}
											 fill={colors[color]}/>;
		}
		case 'pencil': {
			return <HandySvg src={pencil}
											 width={size}
											 height={size}
											 fill={colors[color]}/>;
		}
		case 'person': {
			return <HandySvg src={person}
											 width={size}
											 height={size}
											 fill={colors[color]}/>;
		}
		case 'arrow-left': {
			return <HandySvg src={arrowLeft}
											 width={size}
											 height={size}
											 fill={colors[color]}/>;
		}
		default: {
			return null;
		}
	}
}