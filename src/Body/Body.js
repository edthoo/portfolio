import React from 'react';
import TicTacToeModal from './TicTacToeModal';
import TicTacToeImgModal from './TicTacToeImgModal';
import FindrModal from './FindrModal';
import FindrImgModal from './FindrImgModal';
import MusifyModal from './MusifyModal';
import MusifyImgModal from './MusifyImgModal';
import BeesKneesModal from './BeesKneesModal';
import BeesKneesImgModal from './BeesKneesImgModal';
import { SiJavascript, SiPostgresql } from 'react-icons/si'
import { FaNodeJs, FaReact, FaGithub, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'
import { MdAlternateEmail } from 'react-icons/md'


function Body(props) {
  const { aboutRef, stackRef, projectsRef, contactRef } = props.data

  return (
    <div className="col-span-2 flex flex-col justify-center items-center mx-3 text-white lg:col-span-5">
      <section id="about" ref={aboutRef} className="h-screen flex items-center">
        <div>
          <div>
            <img src={require("../images/profile-2.png")} alt="profile iamge" className="hidden w-40 h-40 object-cover lg:w-60 lg:h-60" />
          </div>
          <p className="lg:text-xl">Hi there! I'm</p>
          <h1 className="text-2xl font-bold mt-4 lg:text-3xl lg:mt-16">Edmund Thoo</h1>
          <p className="lg:text-xl">I am a certified fullstack web developer with a passion in the web and emerging technologies.</p>
        </div>
      </section>
      <section id="tech-stack" ref={stackRef} className="h-screen flex items-center">
        <div>
          <h1 className="text-xl text-right lg:text-3xl">Tech Stack</h1>
          <div className="flex mt-4">
            <SiJavascript className="text-4xl mx-2 lg:text-8xl lg:mr-12" />
            <FaNodeJs className="text-4xl mx-2 lg:text-8xl lg:mx-12" />
            <FaReact className="text-4xl mx-2 lg:text-8xl lg:mx-12" />
            <SiPostgresql className="text-4xl mx-2 lg:text-8xl lg:ml-12" />
          </div>
        </div>
      </section>
      <section id="projects" ref={projectsRef} className="h-screen flex items-center">
        <div>
          <h1 className="text-xl lg:text-3xl">Projects</h1>
          <div className="lg:grid lg:grid-cols-2 gap-x-20 pr-4 lg:pr-20">
            <div className="my-6">
              <div className="flex items-center">
                <h2 className="font-semibold lg:text-2xl">TicTacRoe</h2>
                <TicTacToeModal />
                <a className="text-sm" href="https://github.com/edthoo/tictacroe">
                  <FaGithub className="ml-2 text-lg lg:text-xl" />
                </a>
                <a className="text-sm" href="https://edthoo.github.io/tictacroe/">
                  <HiExternalLink className="ml-2 text-xl lg:text-2xl lg:ml-3" />
                </a>
              </div>
              <TicTacToeImgModal />
              <p className="text-xs text-justify lg:text-lg">A staticly designed tic-tac-toe web game with a Sushi theme made with JavaScript, HTML and CSS. The game requires two players so that you can play with your friend. Play multiple rounds and keep track of the score or click the new game button to refresh to a new round.</p>
            </div>
            <div className="my-6">
              <div className="flex items-center">
                <h2 className="font-semibold lg:text-2xl">Findr</h2>
                <FindrModal />
                <a className="text-sm" href="https://github.com/edthoo/findr">
                  <FaGithub className="ml-2 text-lg lg:text-xl" />
                </a>
              </div>
              <FindrImgModal />
              <p className="text-xs text-justify lg:text-lg">A single page web based application to find the nearest petrol stations in Australia. The application is built with Node.js, Express, PostgreSQL, HTML and CSS. It also uses the Google Maps API to draw the map, mark locations, to get addresses from coordinates among others.</p>
            </div>
            <div className="my-6">
              <div className="flex items-center">
                <h2 className="font-semibold lg:text-2xl">Musify</h2>
                <MusifyModal />
                <a className="text-sm" href="https://github.com/edthoo/musify">
                  <FaGithub className="ml-2 text-lg lg:text-xl" />
                </a>
              </div>
              <MusifyImgModal />
              <p className="text-xs text-justify lg:text-lg">A single page web based application using Spotify's API to generate and save playlists based on user search parameters. The application is built with React.Js and styled with Material UI.</p>
            </div>
            <div className="mt-4 lg:my-6">
              <div className="flex items-center">
                <h2 className="font-semibold lg:text-2xl">Bee's Knees</h2>
                <BeesKneesModal />
                <a className="text-sm" href="https://github.com/edthoo/bees-knees">
                  <FaGithub className="ml-2 text-lg lg:text-xl" />
                </a>
                <a className="text-sm" href="https://edthoo.github.io/bees-knees/">
                  <HiExternalLink className="ml-2 text-xl lg:text-2xl lg:ml-3" />
                </a>
              </div>
              <BeesKneesImgModal />
              <p className="text-xs text-justify lg:text-lg">A mobile focused web application to search for cocktail recipes based on ingredient input. The application is built with React.js and styled with Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" ref={contactRef} className="h-screen flex items-center">
        <div>
          <h1 className="text-xl text-right lg:text-3xl lg:my-8">Contact</h1>
          <a href="https://www.linkedin.com/in/edmund-thoo-95b80b139/" className="flex items-center">
            <FaLinkedinIn className="mr-2 lg:text-xl" />
            <span className="text-right lg:text-xl">Edmund Thoo</span>
          </a>
          <div className="flex items-center lg:my-2">
            <MdAlternateEmail className="mr-2 lg:text-xl" />
            <span className="text-right lg:text-xl">tfthoo@gmail.com</span>
          </div>
          <a href="https://wa.me/0142360491" className="flex items-center">
            <FaWhatsapp className="mr-2 lg:text-xl" />
            <span className="text-right lg:text-xl">+60 14 236 0491</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Body 