import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import Wrapper from '../second-components/wrapper/Wrapper';
import Header from '../header/Header';
import UserInfo from './UserInfo';
import NavButton from '../second-components/nav-button/NavButton';
import SvgIcons from '../second-components/svg-icons/SvgIcons';

export default function UserCabinet({header: {title, isFluid}}) {
	const [activeBtn, setActiveBtn] = useState('user-info');

	const isUserInfoActive = activeBtn === 'user-info';

	const userIcon = <SvgIcons id="person" color="primary" size="20"/>;

	return (
		<Wrapper>
			<Header title={title} isFluid={isFluid}></Header>
			<Container
				className="shadow_element bg-light border border-2 rounded-3 flex-grow-1">
				<Row>
					<NavButton text="Личная информация"
										 icon={userIcon}
										 handler={() => setActiveBtn('user-info')}
										 isActive={isUserInfoActive}/>
				</Row>
                <UserInfo/>
				<Row className="d-flex justify-content-center mt-5">
					<div className="d-flex flex-column w-75">
						<Link to="/"
									className="btn bg-transparent border border-2">
							Выход
						</Link>
					</div>
				</Row>
			</Container>
		</Wrapper>
	);
}