import React from 'react';
import { 
    YMaps, Map, ObjectManager, FullscreenControl, TypeSelector, ZoomControl, ListBoxItem, ListBox, Placemark 
} from '@pbe/react-yandex-maps';
import { Navbar, Button } from 'react-bootstrap';
import $ from 'jquery';
import { Link } from 'react-router-dom';

export default function MapInteractive(){

    const names = ['Информатика и вычислительная техника','Системный анализ и управление',
    'Автоматизация технологических процессов и производств','Управление в технических системах','Программная инженерия'];

    return(
    <>
        <div className='header'>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		<div className='header-1'><Navbar.Brand>Interactiva Map Graduates</Navbar.Brand></div>
		<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<div className='header-2'>
                        <Link to="/">
							<button type="submit" >
							    На главную
							</button>
						</Link> 
                </div>
			</Navbar.Collapse>
		</Navbar>
	</div>
    <YMaps>
        <div id="map">
            <Map id="map" width={"100%"} height={"95vh"} state={{ center: [56.48709021589891,84.95253425162498], zoom: 11,       
                }} options={{ restrictMapArea: [[-60.35,-175.84885671644034],[75.47,-175.84885671651065]], 
                searchControlProvider: 'yandex#search',}} >

                    <FullscreenControl />
                    <TypeSelector options={{ float: "right" }} />
                    <ZoomControl options={{ float: "right" }} />

                    <ListBox data={{ content: "Специальность" }} >
                        <ListBoxItem data={{ content: "Информатика и вычислительная техника", }} />
                        <ListBoxItem data={{content: "Системный анализ и управление",}} />
                        <ListBoxItem data={{content: "Автоматизация технологических процессов и производств",}}/>
                        <ListBoxItem data={{content: "Управление в технических системах",}} />
                        <ListBoxItem data={{content: "Программная инженерия"}} />
                    </ListBox>


                    <div className='objects'>
                      <Placemark geometry={[56.48709021589891,84.95253425162498] } modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                      properties={{
                        balloonContent: "Информатика и вычислительная техника",
                        balloonContentHeader: "Высоцкая Ольга Витальевна",
                        balloonContentBody:"Специальность: Информатика и вычислительная техника",
                        balloonContentFooter: "Год выпуска: 2023",
                        }}
                      options={{preset: "islands#blueIcon"}}
                      />
                      <Placemark geometry={[56.601872646408616,84.8922931289062] } modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                       properties={{
                        balloonContent: "Информатика и вычислительная техника",
                        balloonContentHeader: "Островский Владимир Сергеевич",
                        balloonContentBody:"Специальность: Информатика и вычислительная техника",
                        balloonContentFooter: "Год выпуска: 2023",
                        }}
                      options={{preset: "islands#redIcon"}} />
                      <Placemark geometry={[56.50668919629225,85.02550235742181] } options={{preset: "islands#darkOrangeIcon"}} />
                      <Placemark geometry={[56.45539545108418,84.9753772353515] } options={{preset: "islands#pinkIcon"}} />
                      <Placemark geometry={[56.468320434533354,84.94516483300775] } options={{preset: "islands#brownIcon"}} />
                    </div>
            </Map>
        </div>
    </YMaps>
    </>
)};
