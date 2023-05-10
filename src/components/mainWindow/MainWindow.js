import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import MapInteractive from '../mapInteractive/MapInteractive';
import Authorization from '../authorization/Authorization';

export default function MainWindow() {
	return(
	<>
		<div className='header'>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		<div className='header-1'><Navbar.Brand>Interactiva Map Graduates</Navbar.Brand></div>
		<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<div className='header-2'><Button variant="primary" onClick={Authorization}>Авторизация</Button> </div>
			</Navbar.Collapse>
		</Navbar>
		</div>
		<div className='intro'>
			<h1 class="intro-title">
				Интерактивная карта выпускников 
			</h1>
			<button className="map-button" onClick={MapInteractive}>Открыть карту</button>
		</div>
	</>
)}