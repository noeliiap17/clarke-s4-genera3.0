import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
			<body>
				<header>
					<div class="container__header">
						<div class="container__nav-button">
							<button type="button" name="button" class="nav__button" id="nav__button"></button>
						</div>
						<nav class="header__nav">
							<div class="container__nav">
								<ul class="nav__list hidden">
									<li class="nav__list__item"><a href="index.html#design" class="nav__link">Diseño</a></li>
									<li class="nav__list__item"><a href="index.html#form" class="nav__link">Completa tu CV</a></li>
									<li class="nav__list__item"><a href="index.html#previo" class="nav__link">Previsualización</a></li>
								</ul>
							</div>
						</nav>
						<a href="index.html"><div class="header__logo"></div></a>
					</div>
				</header>
				<main>
					<div class="hero">
						<img class="hero__img-mobile" src="images/cover_mobile2.png" alt="Imagen de portada movil">
						<img class="hero__img-desktop" src="images/desktop.png" alt="Imagen de portada escritorio">
					</div>
					<h1 class="title-hero">Diseña tu CV sin perder tiempo</h1>
					<section class="block__info">
						<div class="block__info-steps">
							<div class="step">
								<img class="img-step" src="images/designer.svg" alt="Elige tu diseño">
								<span class="span-step">Elige tu diseño</span>
							</div>
							<div class="step">
								<img class="img-step" src="images/writing.svg" alt="Introduce tus datos">
								<span class="span-step">Introduce tus datos</span>
							</div>
							<div class="step">
								<img class="img-step" src="images/download.svg" alt="Obtén tu CV personalizado">
								<span class="span-step">Obtén tu CV</span>
							</div>
						</div>
						<div class="block__info-instructions">
							<div class="container__instructions">
								<p class="container__instructions-paragraph">Generatrix CV es un generador de currículums vitae con diseños muy estudiados para conseguir trabajo o cambiar el que ya tienes por uno mejor. ¡Es muy sencillo! Elige los colores, el tipo de letra y un fondo, añade una foto si lo deseas y rellena los datos para hacer un CV de 10. Después podrás guardarlo e imprimirlo. ¡Comienza a diseñarlo!</p>
							</div>
						</div>
					</section>

					<!-- DESIGN SECTION -->
					<section class="block__cv" id="design">
						<section class="section__creation">
							<h2 class="creation__title">Configura tu currículum</h2>
							<div class="container__creation">
								<section class="creation__design">
									<ul class="creation__design__options">
										<li class="creation__design__options-font">
											<img class="img-design" src="images/text.svg" title="fuente" alt="fuentes">
											<!-- hidden -->
											<ul class="design-fonts hidden">
												<li class="font" data-font-class="cookie"><h3>Cookie</h3></li>
												<li class="font" data-font-class="annie"><h3>Annie</h3></li>
												<li class="font" data-font-class="philosopher"><h3>Philosopher</h3></li>
											</ul>
										</li>
										<li class="creation__design__options-colour">
											<img class="img-design" src="images/paint-palette.svg" title="color" alt="color">
											<!-- hidden -->
											<ul class="design-colours hidden">
												<li class="colour" data-colour-class="red-green-lime">
													<div class="red"></div>
													<div class="green"></div>
													<div class="lime"></div>
												</li>
												<li class="colour" data-colour-class="black-blue-lime">
													<div class="black"></div>
													<div class="blue"></div>
													<div class="lime"></div>
												</li>
												<li class="colour" data-colour-class="black-pink-grey">
													<div class="black"></div>
													<div class="pink"></div>
													<div class="grey"></div>
												</li>
											</ul>
										</li>
										<li class="creation__design__options-theme">
											<img class="img-design" src="images/menu.svg" title="estilo" alt="estilo">
											<!-- hidden -->
											<ul class="design-themes hidden">
												<li class="theme" data-theme-class="dots"><h3>Dots</h3></li>
												<li class="theme" data-theme-class="stripes"><h3>Stripes</h3></li>
												<li class="theme" data-theme-class="zigZag"><h3>Zig Zag</h3></li>
											</ul>
										</li>
									</ul>
								</section>
								<!-- ADD FILES -->
								<section class="creation__photo">
									<h3 class="label" for="files">Sube tu foto</h3>
									<input class="selection-image" type="file" id="files" name="files[]"/>
									<div class="trigger"></div>
								</section>
								<section class="creation__form" id="form">
									<form class="form__container" action="index.html" method="post">
										<!-- PERSONAL DATA -->
										<fieldset class="form__personal-data">
											<legend class="legend">Datos personales</legend>
											<div class="form-section-header">
												<h3 class="h3-form">Datos personales</h3>
												<!--botones colapsable-->
												<div class="form-section-button">
													<img src="images/arrow.png" id='button--open' class="button--open" alt="abrir" data-idDesplegar="container-inputs__personal-data">
												</div>
											</div>
											<!--oculto-->
											<div id="container-inputs__personal-data">
												<input class="class-input" id="input-name" type="text" name="name" placeholder="Nombre*" required>
												<input class="class-input" id="input-surname" type="text" name="surname" placeholder="Apellidos*" required>
												<input class="class-input" id="input-profession" type="text" name="profession" placeholder="Profesión*" required>
												<input class="class-input" id="input-phone" type="tel" name="telephone" placeholder="Teléfono*" required>
												<div class="container-birthdate">
													<label class="label label-birthdate" for="input-birthdate">Fecha de Nacimiento</label>
													<input class="class-input input-birthdate" id="input-birthdate" type="date" name="date" placeholder="Fecha de nacimiento">
												</div>
												<input class="class-input" id="input-email" type="email" name="email" placeholder="Email*" required>
												<label class="label" for="input-address"></label>
												<input class="class-input" id="input-address" type="text" name="address" placeholder="Dirección">
												<div class="inputs-container-rrss">
													<textarea class="textarea-aboutme" maxlength=650px name="extracto" id="text-aboutme" rows="5" cols="50" placeholder="Extracto"></textarea>
													<p>RRSS</p>
													<input class="class-input" id="input-twitter" type="text" name="Twitter" placeholder="@Twitter">
													<input class="class-input" id="input-linkedin" type="text" name="Linkedin" placeholder="linkedin.com/xxxxx">
													<input class="class-input" id="input-facebook" type="text" name="Facebook" placeholder="facebook.com/xxxxx">
												</div>
												<button type="button" name="button" class="button--save save-data-button">Guardar</button>
											</div>
											<hr class="line">
										</fieldset>

										<!-- EXPERIENCE -->
										<fieldset class="form__experience">
											<legend class="legend">Experiencia</legend>
											<div class="form-section-header">
												<h3 class="h3-form">Experiencia Profesional</h3>
												<!--botones colapsable-->
												<div class="form-section-buttons">
													<img src="images/arrow.png" id='button--open' class="button--open" data-idDesplegar="container-inputs__experience" alt="abrir">
												</div>
											</div>
											<!--oculto-->
											<div id="container-inputs__experience">
												<div class="experience-element" id="experience-element">

													<input class="class-input" id="job1" type="text" name="puesto" placeholder="Puesto">
													<div class="experience-dates">
														<div class="date-container-from">
															<label class="label from">Desde</label>
															<select id="start_month-job1" name="start_month" class="month">
															</select>
															<select id="start_year-job1" name="start_year" class="year">
															</select>
														</div>
														<div class="date-container-until">
															<label class="label until">Hasta</label>
															<select id="end_month-job1" name="end_month" class="month">
															</select>
															<select id="end_year-job1" name="end_year" class="year">
															</select>
															<div class="actualidad">
																<label for="actualidad" class="present-button-p">Actual</label>
																<input class="present-button" id="actualidad-job1" type="checkbox" name="actualidad">
															</div>
														</div>
													</div>
													<input class="class-input" id="company1" type="text" name="lugar" placeholder="Lugar">
													<textarea class="experience-text" id="description-job1" name="description" rows="8" cols="80" placeholder="Despripción del puesto"></textarea>
													<button type="button" name="button" class="button--save save-experience-button" data-id="1">Guardar</button>

												</div>
												<button type="button" name="button" class="button--new new-experience-button">Añadir experiencia</button>
											</div>
											<hr class="line">
										</fieldset>

										<!-- EDUCATION -->
										<fieldset class="form__education">
											<legend class="legend">Formación</legend>
											<div class="form-section-header">
												<h3 class="h3-form">Formación</h3>
												<!--botones colapsable-->
												<div class="form-section-buttons">
													<img src="images/arrow.png" id='button--open' class="button--open" data-idDesplegar="container-inputs__education" alt="abrir">
												</div>
											</div>
											<!--oculto-->
											<div id="container-inputs__education">
												<div class="education-element" id="education-element">
													<label class="label" for="titulo"></label>
													<input class="class-input" id="titulo1" type="text" name="titulation" placeholder="Título*" required>
													<div class="education-dates">
														<div class="date-container-from">
															<label class="label from">Desde</label>

															<select id="start_month-education1" name="start_month" class="month">
															</select>
															<select id="start_year-education1" name="start_year" class="year">
															</select>
														</div>
														<div class="date-container-until">
															<label class="label until">Hasta</label>
															<select id="end_month-education1" name="end_month" class="month">
															</select>
															<select id="end_year-education1" name="end_year" class="year">
															</select>
															<div class="actualidad">
																<label for="actualidad" class="present-button-p">Actual</label>
																<input class="present-button" id="actualidad-education1" type="checkbox" name="actualidad">
															</div>
														</div>
													</div>
													<label class="label" for="centro"></label>
													<input class="class-input" id="centro1" type="text" name="place" placeholder="Centro de estudios*" required>
													<label class="label" for="description-education1"></label>
													<textarea class="description" id="description-education1" cols="30" rows="10" name="description" placeholder="Descripción"></textarea>
													<button type="button" name="button" class="button--save save-education-button" id="save-education-button1" data-id="1">Guardar</button>
												</div>
												<button type="button" name="button" class="button--new new-education-button" data-id="1">Añadir formación</button>
											</div>
											<hr class="line">
										</fieldset>


										<!-- SKILLS -->
										<fieldset class="form__skills">
											<legend class="legend">Habilidades</legend>
											<div class="form-section-header">
												<h3 class="h3-form">Habilidades</h3>
												<!--botones colapsable-->
												<div class="form-section-buttons">
													<img src="images/arrow.png" id='button--open' class="button--open" data-idDesplegar="container-inputs__skills" alt="abrir">
												</div>
											</div>
											<!--oculto-->
											<div id="container-inputs__skills">
												<div class="skills"><!--OJO CON ESTE DIV-->
													<div class="languages">
														<p class="skills-p">Idiomas</p>
														<div class="language-element">
															<label class="label" for="language-name1"></label>
															<input class="language-name class-input" id="language-name1" type="text" name="language-name" placeholder="Idioma 1">
															<select id="language-level1" name="level" class="level">
																<option value="nivel">Nivel</option>
																<option >--</option>
																<option>Básico</option>
																<option>Intermedio</option>
																<option>Alto</option>
																<option>Nativo</option>
															</select>
															<button type="button" name="button" class="button--save save-languages-button" id="save-languages-button1"  data-id="1">Guardar</button>
														</div>
														<button type="button" name="button" class="button--new new-language-button">Añadir idioma</button>
													</div>
												</div><!--OJO CON ESTE DIV-->
												<div class="it">
													<p class="skills-p">Programas informáticos</p>
													<div class="it-element">
														<label class="label" for="it-name1"></label>
														<input class="it-name class-input" id="it-name1" type="text" name="it-name" placeholder="Tecnología 1">
														<select id="it-level1" name="level" class="level">
															<option value="nivel">Nivel</option>
															<option >--</option>
															<option>Básico</option>
															<option>Intermedio</option>
															<option>Alto</option>
														</select>
														<button type="button" name="button" class="button--save save-it-button" id="save-it-button1" data-id="1">Guardar</button>
													</div>
													<button type="button" name="button" class="button--new new-it-button">Añadir programa</button>
												</div>
												<div class="various-skills">
													<p class="skills-p">Destrezas</p>
													<div class="skills-element">
														<label class="label" for="skill-element1"></label>
														<input class="skills-element class-input" id="skill-element1" type="text" name="skill-element" placeholder="Destreza 1">
														<button type="button" name="button" class="button--save save-skills-button" data-id="1">Guardar</button>
													</div>
												</div>
												<button type="button" name="button" class="button--new new-skills-button">Añadir habilidad</button>
											</div>
											<!-- <div class="various-skills">
											<p>Destrezas</p>
											<label class="label" for="skill-element1"></label>
											<input class="skill-element class-input" id="skill-element1" type="text" name="skill-element" placeholder="Destreza 1">
											<! <button type="button" name="button" class="new-skill-button">Nueva destreza</button> -->
											<hr class="line">
										</fieldset>
									</form>
								</section>	<!--Cierra creation__form-->
							</div>	<!--Cierra container__creation-->
						</section>	<!--Cierra section__creation-->

						<section class="section__preview" id="preview">
							<h2 class="preview__title"> Previsualización </h2>
							<!-- DATOS PERSONALES + IMAGEN -->
							<div class="showpreview dots philosopher black-pink-grey">
								<div class="container__preview--intro preview-div">
									<div class="container__preview--photo">
										<div class="container__photo">
										</div>
									</div>
									<div class="container__preview--personal-data">
										<div class="container__personal-data">
											<div class="preview-text">
												<div class="preview__personal-data--name"><span id="personal-data--name"></span>
												</div>
												<div class="preview__personal-data--surname"><span id="personal-data--surname"></span>
												</div>
												<div class="preview__personal-data--job"><span id="personal-data--job"></span>
												</div>
											</div>
										</div>
										<div class="container__direction">
											<div class="preview-text">
												<div class="preview__direction--phone"><span id="preview__direction--phone"></span>
												</div>
												<div class="preview__direction--date"><span id="preview__direction--date"></span>
												</div>
												<div class="preview__direction--mail"><span id="preview__direction--mail"></span></div>
												<div class="preview__direction--adress"><span id="preview__direction--adress"></span></div>
											</div>
										</div>
									</div>
								</div>

								<!-- EXTRACTO + RRSS -->
								<div class="container__preview--summary">
									<div class="preview-title">
										<h3 class="summary__title">Extracto</h3>
									</div>
									<div class="container__summary preview-text">
										<div class="preview__summary" id="preview__summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
										</div>
										<div class="container__preview--rrsss">
											<div><span id="preview__rrss--twitter">@moniaguado</span>
											</div>
											<div><span id="preview__rrss--linkedin">linkedin.es/monicaaguadoalonso</span>
											</div>
											<div><span id="preview__rrss--facebook">facebook.com/moni.monroe.7</span>
											</div>
										</div>
									</div>
								</div>

								<!-- EXPERIENCIA -->
								<div class="container__preview--experience preview-div">
									<div class="preview-title">
										<h3 class="experience__title">Experiencia profesional</h3>
									</div>
									<div class="preview__experience preview-text">
										<div class="container__experience--main-data">
											<div class="jobAndDate">
												<div>
													<span id="job-preview-id-1">Social Media</span>
												</div>
												<div class="joinDate">
													<div>
														<span id="from-job-preview-id1" class="from-date-preview">Nov/2016</span>
													</div>
													<div>
														<span id="until-job-preview-id1">Ago/2017</span>
													</div>
												</div>
											</div>

											<div>
												<span id="place-preview-id1">Swing Swing</span>
											</div>
										</div>
										<div class="container__experience--description">
											<div><span id="description-job-preview-id1">Responsable del departamento digital de la agencia gestionando dos grandes cuentas de bebidas alcohólicas y un centro comercial.</span>
											</div>
										</div>
									</div>
									<div class="preview__experience preview-text">
										<div class="container__experience--main-data">
											<div class="jobAndDate">
												<div>
													<span id="job-preview-id-2" class="from-date-preview"></span>
												</div>
												<div class="joinDate">
													<div>
														<span id="from-job-preview-id2"></span>
													</div>
													<div>
														<span id="until-job-preview-id2"></span>
													</div>
												</div>
											</div>
											<div>
												<span id="place-preview-id2"></span>
											</div>
										</div>
										<div class="container__experience--description">
											<div>
												<span id="description-job-preview-id2"></span>
											</div>
										</div>
									</div>
								</div>
								<!-- FORMACIÓN -->
								<div class="container__preview--formation preview-div">
									<div class="preview-title">
										<h3 class="formation__title">Formación</h3>
									</div>
									<div class="preview__formation preview-text">
										<div class="container__formation--main-data">
											<div class="jobAndDate">
												<div>
													<span id="titulo-preview-id1">Front-end</span>
												</div>
												<div class="joinDate">
													<div>
														<span id="from-education-preview-id1" class="from-date-preview">Oct/2017</span>
													</div>
													<div>
														<span id="until-education-preview-id1">Actual</span>
													</div>
												</div>
											</div>
											<div>
												<span id="centro-id1">Adalab</span>
											</div>
										</div>
										<div class="container__formation--description">
											<div><span id="description-education-preview-id1">Estudios de programacion front-end en la Fundación Adalab. HTML, CSS, Javascript.</span></div>
										</div>
									</div>
									<div class="preview__formation preview-text">
										<div class="container__formation--main-data">
											<div class="jobAndDate">
												<div>
													<span id="titulo-preview-id2"></span>
												</div>
												<div class="joinDate">
													<div>
														<span id="from-education-preview-id2" class="from-date-preview"></span>
													</div>
													<div>
														<span id="until-education-preview-id2"></span>
													</div>
												</div>
											</div>
											<div>
												<span id="centro-id2"></span>
											</div>
											<div class="container__formation--description">
												<div>
													<span id="description-education-preview-id2"></span>
												</div>
											</div>
										</div>
									</div>
									<!-- HABILIDADES -->
									<div class="container__preview--skills">
										<div class="preview__skills preview-text">
											<div class="preview__skills--languages">
												<img src="images/speak.png" alt="talk-icon" class="talk-icon">
												<div class="content__skills">
													<div class="skills__language--select"><span id="language-name1-preview-id"> </span><span id="language-level1-preview-id"></span>
													</div>
													<div class="skills__language--select"><span id="language-name2-preview-id"></span><span id="language-level2-preview-id"></span>
													</div>
												</div>
											</div>
											<div class="preview__skills--it">
												<img src="images/computer-monitor-and-mouse.png" alt="it-icon" class="it-icon">
												<div class="content__skills">
													<div class="skills__it--select"><span id="it-name1-preview-id"></span><span id="it-level1-preview-id"></span>
													</div>
													<div class="skills__it--select"><span id="it-name2-preview-id"></span><span id="it-level2-preview-id"></span>
													</div>
												</div>
											</div>
											<div class="preview__skills--bonus">
												<img src="images/settings.png" alt="bonus-icon" class="bonus-icon">
												<div class="content__skills">
													<div class="skills__bonus--select"><span id="skill-element1-preview-id"></span>
													</div>
													<div class="skills__bonus--select"><span id="skill-element2-preview-id"></span>
													</div>
												</div>
											</div>
										</div>
									</div> <!--End of SKILLS-->
								</div> <!--End of show-preview-->
							</section> <!--End of section__preview-->
						</section> <!--End of block__cv-->
					</main>

					<footer class="section__footer">
						<div class="container__footer">
							<ul class="footer__list">
								<a href="avisolegal.html" class="footer__link"><li class="footer__list--element">Aviso legal</li></a>
								<a href="" class="footer__link"><li class="footer__list--element">Contacto</li></a>
								<a href="index.html" class="footer__link"> <li class="footer__list--element">Generatrix &copy; 2017</li></a>
							</ul>
							<a href="index.html">
								<img class="footer__logo" src="images/logocorto.png"  alt="logo-Generatrix"></a>
							</div>
						</footer>
						<script src="js/main.min.js"></script>

					</body>
    );
  }
}

export default App;