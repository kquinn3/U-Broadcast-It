import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="jumbotron text-center">
        <h4 className="text-danger">
          This isn't done yet. I know it looks like crap
        </h4>
        <h4 className="text-danger">I was just writing down my thoughts.</h4>
        <br />
        <h1 className="d-md-none d-sm-block">U Broadcast It</h1>
        <h1 className="d-none d-sm-block d-lg-none display-4">
          U Broadcast It
        </h1>
        <h1 className="d-none d d-lg-block display-3">U Broadcast It</h1>
        <div className="container">
          <p className="lead">
            <i className="fas fa-check"></i>Schedule and create live text
            broadcasts of sporting events
          </p>
          <p className="lead">
            <i className="fas fa-check"></i>Track your favorite sports team.
          </p>
          <p className="lead">
            <i className="fas fa-check"></i>Send real time messages with game
            updates.
          </p>
          <h1>Memberships</h1>
          <h2>Broadcaster</h2>
          <p>
            <i className="fas fa-check"></i>Schedule a broadcast
          </p>
          <p>
            <i className="fas fa-check"></i>Control the scoreboard
          </p>
          <p>
            <i className="fas fa-check"></i>Send game updates
          </p>
          <p>
            <i className="fas fa-check"></i>Send and view messages
          </p>
          <p>
            <i className="fas fa-check"></i>Create favorites and additional
            options
          </p>
          <p>
            <i className="fas fa-check"></i>View all games
          </p>
          <h2>User</h2>
          <p>
            <i className="fas fa-check"></i>Send and view messages
          </p>
          <p>
            <i className="fas fa-check"></i>Create favorites and additional
            options
          </p>
          <p>
            <i className="fas fa-check"></i>View all games
          </p>
          <h2>Guest (no membership)</h2>
          <p>
            <i className="fas fa-check"></i>View messages
          </p>
          <p>
            <i className="fas fa-check"></i>View all games
          </p>
          <p>
            I am currently building up a portfolio to show my skills. This is
            not intended to be sold but feel free to use it and give me your
            feedback and suggestions for improvements. If you like it, I can
            support it and add more features. I would also appreciate it if you
            forward this to any potential hiring manager or job recruiter. You
            can find me on{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kevinquinn1918/"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
          <h1>More About Me</h1>
          <h2>My name is Kevin Quinn</h2>
          <p>
            I've had a long career as a Test Engineer in the semiconductor
            field. I've held various positions developing code to test DRAMs and
            to develop tools to help improve yield and to facilitate in reducing
            the amount of time and the number of bugs in development.
          </p>
          <p>
            Throughout the years, I've become more interested in developing and
            testing software as opposed to semiconductor chips. Software is a
            broad field and I've developed a little bit of code in almost every
            programming language.
          </p>
          <p>
            I discovered my passion while learning Javascript. I took an online
            class and the day I discovered Restful APIs and I pulled data from
            the internet, I became hooked.
          </p>
          <h2>Why U-Broadcast It?</h2>
          <p>
            I am a big fan of my Alma Mater, Clarkson University. Their female
            hockey team has won 3 out of the last 5 Division 1 Championships. On
            a typical Friday or Saturday night, I would scour the internet to
            see how they were doing. Most of the time, I had to wait until a few
            hours after the game ended to find out how they did. I thought to
            myself, why is their no real time online tracker? Since, I'm
            learning web development and plan on looking for a Web Developer
            position, this would be a perfect project to work on.
          </p>

          <p className="my-1">Kevin Quinn</p>
          <div className="p">
            <strong>Version:</strong> 1.0.0 released on 01/31/2010
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
