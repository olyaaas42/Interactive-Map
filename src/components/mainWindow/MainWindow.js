import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function MainWindow() {
	return(
	<>
		<div className='header'>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		<div className='header-1'><Navbar.Brand>Interactiva Map Graduates</Navbar.Brand></div>
		<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<div className='header-2'>
					<Button variant="primary" >Авторизация</Button> </div>
			</Navbar.Collapse>
		</Navbar>
		</div>
		<div className='intro'>
			<h1 class="intro-title">
				Интерактивная карта выпускников 
			</h1>
			<Link to="/MapInteractive">
				<button className="map-button">Открыть карту</button>
			</Link>
		</div>
	</>
)}