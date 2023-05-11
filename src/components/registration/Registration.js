import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Wrapper from '../second-components/wrapper/Wrapper';
import { useForm } from 'react-hook-form';
import {
	InputWithLabel
} from '../second-components/form-autorization-inputs/InputWithLabel.js';
import SvgIcons from '../second-components/svg-icons/SvgIcons';

export default function Registration() {
	const { register, handleSubmit, formState: { errors }, setError } = useForm({
		defaultValues: {
			email: '',
			lastName: '',
			firstName: '',
			surname: '',
			specialiry: '',
			year: '',
			adress: '',
			work: '',
			password: '',
			passwordRepeated: '',
		}
	});

	const registration = (data) => {
		if (data.password !== data.passwordRepeated) {
			setError('passwordRepeated', { message: 'Пароли должны совпадать' });
			return;
		}
	};

	const emailErrorMessage = 'Пожалуйста, введите почту';
	const lastNameErrorMessage = 'Пожалуйста, введите фамилию';
	const firstNameErrorMessage = 'Пожалуйста, введите имя';
	const surnameErrorMessage = 'Пожалуйста, введите отчество';
	const specialityErrorMessage = 'Пожалуйста, введите специальность';
	const yearErrorMessage ='Пожалуйста, введите год выпуска';
	const adressErrorMessage = 'Пожалуйста, введите город проживания';
	const workErrorMessage ='Пожалуйста, введите место работы';
	const passwordErrorMessage = 'Пожалуйста, введите пароль';
	const passwordRepeatedErrorMessage = 'Пожалуйста, введите пароль';

	return (
		<Wrapper>
			<Container className="shadow_element bg-light rounded-3">
				<Link to="/Authorization" className="text-primary p-2 position-fixed">
					<SvgIcons id="arrow-left" color="primary" size="20"/>
					Вернуться
				</Link>
				<form onSubmit={handleSubmit(registration)}
							style={{ maxWidth: '550px', minHeight: '100vh' }}
							className="d-flex flex-column justify-content-evenly mx-auto text-primary">
					<div className="d-flex flex-column">
						<h1 className="mb-5">Регистрация</h1>
						<InputWithLabel errors={errors}
														type="email"
														title="Электронная почта"
														register={register('email',
															{ required: emailErrorMessage })}/>
						<InputWithLabel errors={errors}
														type="lastName"
														title="Фамилия"
														register={register('lastName',
															{ required: lastNameErrorMessage })}/>									
						<InputWithLabel errors={errors}
														type="firstName"
														title="Имя"
														register={register('firstName',
															{ required: firstNameErrorMessage })}/>
						<InputWithLabel errors={errors}
														type="surname"
														title="Отчество"
														register={register('surname',
															{ required: surnameErrorMessage })}/>
						<InputWithLabel errors={errors}
														type="speciality"
														title="Специальность"
														register={register('speciality',
															{ required: specialityErrorMessage })}/>
						<InputWithLabel errors={errors}
														type="year"
														title="Год выпуска"
														register={register('year',
															{ required: yearErrorMessage })}/>
						<InputWithLabel errors={errors}
														type="adress"
														title="Город проживания"
														register={register('adress',
															{ required: adressErrorMessage })}/>
						<InputWithLabel errors={errors}
														type="work"
														title="Работа"
														register={register('work',
															{ required: workErrorMessage })}/>
						<InputWithLabel errors={errors}
														type="password"
														title="Введите пароль"
														register={register('password',
															{ required: passwordErrorMessage })}/>
						<InputWithLabel errors={errors}
														type="password"
														title="Повторите пароль"
														register={register('passwordRepeated',
															{ required: passwordRepeatedErrorMessage })}/>
					</div>
					<button type="submit"
									className="btn text-primary border border-2 fs-5 p-3">
						{'Зарегистрироваться'.toUpperCase()}
					</button>
				</form>
			</Container>
		</Wrapper>
	);
}