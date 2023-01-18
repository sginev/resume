import { faArchive, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function TheMain() {
  return (
    <div className='main-wrapper'>
      <section className='section summary-section'>
        <h2 className='section-title'>
          <span className='icon-holder'>
            <FontAwesomeIcon icon={faUser} />
          </span>
          Career Profile
        </h2>
        <div className='summary'>
          <p>
            I started with UI design mockups and over the last decade went deeper and deeper into
            work, which involved more complex code structure, good patterns, and project planning -
            from one project to the next, often requiring skills in new languages, frameworks or
            third-party services, which depending on the product, can be immensely exciting.
          </p>
          <p>
            I have a deep interest in my industry, but I am most passionate about innovative,
            interesting game or app ideas. Although I haven't done official work as such, I also
            have professional interest in, and study as much as I can about game-design.
          </p>
        </div>
      </section>

      <section className='section projects-section'>
        <h2 className='section-title'>
          <span className='icon-holder'>
            <FontAwesomeIcon icon={faArchive} />
          </span>
          Projects
        </h2>
        <div className='intro'>
          <p>
            I have worked on a number of projects both at the office, and at home. These include
            games and apps, realized via different technologies for web, android and flash (when it
            was cool). I handle mostly front-end business and visual logic; my back-end work
            consists predominantly of multiplayer server logic, and simple rest api and websites.
          </p>
        </div>
        {/*//intro*/}
        <div className='item'>
          <div className='upper-row'>
            <h3 className='job-title'>Virtual Collectible Card Game</h3>
          </div>
          <div className='project-tagline'>
            <p>
              This is an entirely personal project. As it is a multiplayer game, it's being built as
              a single-page web app for the client-side - written in Typescript with React for
              rendering and GSAP handling most of the animations; the server is a node.js app,
              utilizing the beautiful and open-source Colyseus framework for room management and
              communication protocols. Currently, for database and authentication I am using
              Google's Firebase SDK.
            </p>
            <p>
              Most interesting things here are the business logic - special effects of played cards
              need to be able to both respond to a large number of possible situations (a custom
              event system), including other cards' activation, as well change the current gameplay
              and rules of the game as effect.
            </p>
            <p>
              I created in addition a custom card editor as another React app, which uses simple
              forms, the ACE Editor plugin for writing the card effects with syntax hight-lighting
              and custom autocomplete, and the Github API for load-saving the data (I chose this
              approach for the commit history).
            </p>
          </div>
        </div>
        <div className='item'>
          <div className='upper-row'>
            <h3 className='job-title'>Mobile 8-Ball Pool Game</h3>
          </div>
          <div className='project-tagline'>
            <p>
              On this billiard game, I was responsible mainly for the game-rules module,
              implementing the Box2D physics SDK (with some custom modifications and prediction
              work), as well as the entirety of the central multiplayer server. For the last, we
              opted to use PlayerIO - an online multiplayer service, where we upload our room logic,
              written in C#.
            </p>
            <p>
              Other than that server, perhaps the most challenging aspects were optimizing the
              physics engine for mobile, as well as the very low-level custom shader I had to write,
              for rendering the balls without having to use 3D objects.
            </p>
          </div>
        </div>
        <div className='item'>
          <div className='upper-row'>
            <h3 className='job-title'>Procedural Interactive Book</h3>
          </div>
          <div className='project-tagline'>
            <p>
              This is an ongoing personal passion project. The idea is to present a novel gameplay
              experience without relying on visuals altogether, while keeping as much as possible
              the openness of a traditional computer game.
            </p>
            <p>Angular is used for both the game and a cusom editor tool.</p>
          </div>
        </div>
        <div className='item'>
          <div className='upper-row'>
            <h3 className='job-title'>Jelly Brain</h3>
          </div>
          <div className='project-tagline'>
            <p>
              Perhaps one of the least technically complex, but most creative and best looking
              projects I worked on at the office.
            </p>
            <p>
              Apart from some trigonometry and mock-physics, most of the code I wrote for this game
              relates to tweens and visual effects - glows, pops, simple particles, movement trails,
              etc.
            </p>
          </div>
        </div>
        <div className='item'>
          <div className='upper-row'>
            <h3 className='job-title'>Sumo Battle</h3>
          </div>
          <div className='project-tagline'>
            <p>
              Although I've gotten much more intimate with Unity on small projects and prototypes
              aftewards, this project was my introduction to that tool and subsequently C#/.NET. I
              learned here basic coding practices specific to games, asset-management, shader-work,
              etc.
            </p>
          </div>
        </div>
      </section>

      <section className='section experiences-section'>
        <h2 className='section-title'>
          <span className='icon-holder'>
            <FontAwesomeIcon icon={faBriefcase} />
          </span>
          Experiences
        </h2>
        <div className='item'>
          <div className='meta'>
            <div className='upper-row'>
              <h3 className='job-title'>Blockchain Solutions, Varna</h3>
              <div className='time'>2018 - 2020</div>
            </div>
            <div className='company'>Programmer</div>
          </div>
          <div className='details'>
            <p>
              Here I learned to write data scrapers on python, communicate with more types of
              databases, use message queues and to properly dockerize my projects and environments.
            </p>
            <p>
              I also worked with a few javascript mini-games as part of one of our projects, though
              more in terms of encrypting, obfuscating and faking the communication between them and
              the backend.
            </p>
          </div>
        </div>
        <div className='item'>
          <div className='meta'>
            <div className='upper-row'>
              <h3 className='job-title'>Bigmage Studio, Varna</h3>
              <div className='time'>2012 - 2018</div>
            </div>
            <div className='company'>Programmer</div>
          </div>
          <div className='details'>
            <p>
              Other than some of the projects mentioned above, I worked a on various browser games,
              including a 3D casual fight-game, where I wrote the client and multiplayer server
              logic (in actionscript and JAVA respectively). We also did a few cross-platform games
              for mobile, such as a physics based casual game with map editor, skill and reaction
              games and a smaller projects. Most of these titles were designed technically and
              game-wise by our own team, with few pointers or requirements from clients.
            </p>
          </div>
        </div>
      </section>
      <section className='section experiences-section'>
        <h2 className='section-title'>
          <span className='icon-holder'>
            <FontAwesomeIcon icon={faBriefcase} />
          </span>
          Miscellaneous
        </h2>
        <div className='item'>
          <div className='details'>
            <p>
              Whether as personal projects or to assist my workflow at the office, I've also
              familiarized myself over the years with several online and self hosted cloud IDEs,
              such as Gitpod, CodeServer (vscode in the browser) and Cloud9 (when that was cool) and
              I've learned the basics of CI (vsonline/azure, Cirrus, Bitbucket's own, etc)
            </p>
            <p>
              Ocassionally I work on some home-automation/IOT projects, utilizing a box of pies at
              home and the best and cheapest Aliexpress has to offer in terms of gadgets, switches,
              etc.
            </p>
          </div>
        </div>
      </section>
      {/*//section*/}
    </div>
  );
}
