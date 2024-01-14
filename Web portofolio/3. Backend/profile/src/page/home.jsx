import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';


import profile from "../images/Profil1.jpg"
import dude from "../images/true-agency.jpg"
import baseball from "../images/hobby/baseball.jpg"
import basketball from "../images/hobby/basketball.jpg"
import football from "../images/hobby/football.jpg"
import volly from "../images/hobby/volly.jpg"

import Contact from './contact';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1400,
    });
  }, []);

  return (
    <>
      {/* MENU BAR */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            Portofolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#intro" className="nav-link smoothScroll">
                  Introduction
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link smoothScroll">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a href="#hobbies" className="nav-link smoothScroll">
                  Hobbies
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link smoothScroll">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link smoothScroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero d-flex flex-column justify-content-center align-items-center" id="intro" data-aos="zoom-in-down">
        <div className="container">
          <div className="row">
            <div className="mx-auto col-lg-5 col-md-5 col-10">
              <img src={profile} className="rounded-circle img-fluid" alt="Foto Profil" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
              <div className="hero-text">
                <h1 className="hero-title">👋 Halo semua, Saya Rere</h1>
                <a href="#" className="email-link">
                  eurekadiaandisy8@webmail.umm.ac.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-padding" id="about" data-aos="zoom-in-down">
      <div className="container">
            <div class="row" >

                <div class="col-lg-6 col-md-6 col-12">
                    <h3 class="mb-4">Biodata Eureka</h3>

                    <p>Saya pemuda berumur 19 tahun asal Gresik yang sedang menjalani pendidikan di Universitas Muhammadiyah Malang (UMM). Saya merupakan mahasiswa tahun 2021, mengambil S1 di prodi Informatika.</p>

                    <p>Saya berharap untuk lulus tepat waktu, kurang lebih di tahun 2025. Dan menyelesaikan kuliah dengan IPK yang memuaskan :)</p>

                    <ul class="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                        <li><strong>Full Name :</strong> Eureka Diaandisy </li>

                        <li><strong>Date of Birth:</strong> 06 Oktober 2003</li>

                        <li><strong>Website :</strong> Belum ada</li>

                        <li><strong>Email :</strong> eurekadiaandiwsy8@webmail.umm.ac.id</li>
                    </ul>
                </div>

                <div class="col-lg-5 mx-auto col-md-6 col-12">
                    <img src={dude} class="about-image img-fluid" alt="Ben's Resume HTML Template"/>
                </div>

            </div>
            <div class="row about-third">
                <div class="col-lg-4 col-md-4 col-12">
                <h3>SD Negeri Petrokimia Gresik</h3>
                <p>Jl. Asam Sulfat 5-3, Ngipik, Karangpoh, Kec. Gresik, Kab. Gresik, Jawa Timur.</p>
                </div>
            	<div class="col-lg-4 col-md-4 col-12">
                <h3>SMP Muhammadiyah 4 Gresik</h3>
                <p>Jl. Sunan Prapen I/17, Giri, Kec. Kebomas, Kab. Gresik, Jawa Timur.</p>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                <h3>SMA Muhammadiyah 10 Gresik</h3>
                <p>Jl. Raya Mutiara No 95 Pondok Permata Suci, Tebalo, Suci, Kec. Manyar, Kab. Gresik, Jawa Timur.</p>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                <h3>Universitas Muhammadiyah Malang</h3>
                <p>Jl. Raya Tlogo Mas No. 246, Babatan, Tegalgondo, Kec. Lowokwaru, Kota Malang, Jawa Timur</p>
                </div>
            </div>
        </div>
      </section>

      {/* HOBBIES */} 
      <section className="hobbies section-padding" id="hobbies">
      <div className="container">
          <div class="row">
            <div class="col-12">
                <h3 class="mb-5 text-center" data-aos="zoom-in-down">Hobbies</h3>

                <div class="owl-carousel owl-theme" id="testimonials-carousel">
                    <div class="item">
                        <div class="testimonials-thumb d-flex">
                            <div class="hobbies-image" data-aos="zoom-in-down">
                                <img src={baseball} class="img-fluid" alt="testimonials image"/>
                            </div>

                            <div class="hobbies-info" data-aos="zoom-in-down">
                                <p>Memukul bola.</p>

                                <h6 class="mb-0">Baseball</h6>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="testimonials-thumb d-flex">
                            <div class="hobbies-image" data-aos="zoom-in-down">
                                <img src={basketball} class="img-fluid" alt="testimonials image"/>
                            </div>

                            <div class="hobbies-info" data-aos="zoom-in-down">
                                <p>Melempar bola.</p>

                                <h6 class="mb-0">Basketball</h6>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="testimonials-thumb d-flex">
                            <div class="hobbies-image" data-aos="zoom-in-down">
                                <img src={football} class="img-fluid" alt="testimonials image"/>
                            </div>

                            <div class="hobbies-info" data-aos="zoom-in-down">
                                <p>Menendang bola.</p>

                                <h6 class="mb-0">Football</h6>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="testimonials-thumb d-flex">
                            <div class="hobbies-image" data-aos="zoom-in-down">
                                <img src={volly} class="img-fluid" alt="testimonials image"/>
                            </div>

                            <div class="hobbies-info" data-aos="zoom-in-down">
                                <p>Menampar bola.</p>

                                <h6 class="mb-0">Volly</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
      </div>
      </section>

      {/* SKILLS */}
      <section className="skills section-padding" id="skills">
      <div className="container">
          <div class="row">
              <div class="col-12">
                  <h3 class="mb-5 text-center"  data-aos="zoom-in-down">Skills</h3>
                  <div class="row">
                      {/*<!-- You can add your skill items here as needed -->*/}
                      <div class="col-md-4">
                          <div class="skill-item">
                              <h4>CSS</h4>
                              <div class="progress">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right">
                                      <span class="sr-only">40% Complete</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="skill-item">
                              <h4>HTML</h4>
                              <div class="progress">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right">
                                      <span class="sr-only">40% Complete</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="skill-item">
                              <h4>JavaScript</h4>
                              <div class="progress">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right">
                                      <span class="sr-only">40% Complete</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/*< Add more skill items as needed >*/}
                  </div>
              </div>
          </div>
      </div>
      </section>

      {/* CONTACT */}
      <Contact />
    </>
  );
};

export default HomePage;
