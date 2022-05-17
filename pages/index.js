
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
export default function Home() {
  return (
    <div>
      <Head>
      <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <title>NBT Cash</title>
  {/*favicon*/}
  <link rel="shortcut icon" type="image/png" href="assets/images/favicon.png" />
  {/*bootstrap css*/}
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
  {/*owl carousel css*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="assets/css/owl.carousel.min.css"
  />
  {/*magnific popup css*/}
  <link rel="stylesheet" type="text/css" href="assets/css/magnific-popup.css" />
  {/*font awesome css*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="assets/css/fontawesome-all.min.css"
  />
  {/*icomoon icon css*/}
  <link rel="stylesheet" type="text/css" href="assets/css/icomoon.css" />
  {/*icofont css*/}
  <link rel="stylesheet" type="text/css" href="assets/css/icofont.min.css" />
  {/*animate css*/}
  <link rel="stylesheet" type="text/css" href="assets/css/animate.css" />
  {/*main css*/}
  <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
  {/*responsive css*/}
  <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
</>

      </Head>

      <>
    <div class="preloader">
        <div class="d-table">
            <div class="d-table-cell align-middle">
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>
        </div>
    </div>
  {/*start header*/}
  <header id="header">
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo */}
          <a className="logo" href="#">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="icofont-navigation-menu" />
            </span>
          </button>
          {/* navbar links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#" data-scroll-nav={0}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav={1}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav={2}>
                  ScreenShots
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav={3}>
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav={4}>
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item download-btn">
                <a className="nav-link" href="#" data-scroll-nav={5}>
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  {/*end header*/}
  {/*start home area*/}
  <section id="home-area" className="bg-1" data-scroll-index={0}>
    <div className="container">
      <div className="row">
        {/*start caption*/}
        <div className="col-lg-8">
          <div className="caption d-table">
            <div className="d-table-cell align-middle">
              <h1 className="text-white">
                Arribo is the best way to present your app to the world!
              </h1>
              <h4 className="text-light font-open-sans">
                Arribo is the most unique mobile app, designed for managing
                startups, small business projects, and supporting modern
                companies.
              </h4>
              <div className="caption-btns">
                <a className="bg" href="#">
                  Download Now
                </a>
                <a
                  className="popup-video"
                  href="https://www.youtube.com/watch?v=iaj8ktgL3BY&t=5s"
                >
                  <i className="icofont-ui-play" /> Play video
                </a>
              </div>
              <div className="caption-download-btns">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icofont-brand-android-robot" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-brand-apple" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-brand-windows" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*end caption*/}
      </div>
    </div>
  </section>
  {/*start home area*/}
  {/*start core feature area*/}
  <section id="core-feature-area" className="bg-1">
    <div className="container">
      <div className="row">
        {/*start section heading*/}
        <div className="col-md-10 offset-md-1">
          <div className="section-heading text-center">
            <h5>About our App</h5>
            <h2>Wonderful features to satisfy you to use our mobile app</h2>
            <p>
              Here you are welcome to present number of the most characteristic
              features of your app you are proud of.It was designed to promote
              your mobile App, services or business projects{" "}
            </p>
          </div>
        </div>
        {/*end section heading*/}
      </div>
      <div className="row">
        {/*start core feature single*/}
        <div className="col-lg-3 col-md-6">
          <div className="core-feature-single text-center">
            <div className="icon">
              <i className="icon-gear" />
            </div>
            <h3>Quick Setup</h3>
            <p>
              The app is really easy to install, the complete setup process will
              take less than 1 minute of your time.
            </p>
          </div>
        </div>
        {/*end core feature single*/}
        {/*start core feature single*/}
        <div className="col-lg-3 col-md-6">
          <div className="core-feature-single two text-center">
            <div className="icon">
              <i className="icon-web-design" />
            </div>
            <h3>Lovely Design</h3>
            <p>
              With carefully thought-out design, Arribo looks great on any
              device and Easy to Use, Easy way to customize.
            </p>
          </div>
        </div>
        {/*end core feature single*/}
        {/*start core feature single*/}
        <div className="col-lg-3 col-md-6">
          <div className="core-feature-single three text-center">
            <div className="icon three">
              <i className="icon-report" />
            </div>
            <h3>Optimized Data</h3>
            <p>
              Speed is very important when you work with loading data,
              especially if you have a large number of users.
            </p>
          </div>
        </div>
        {/*end core feature single*/}
        {/*start core feature single*/}
        <div className="col-lg-3 col-md-6">
          <div className="core-feature-single four text-center">
            <div className="icon four">
              <i className="icon-list" />
            </div>
            <h3>Secure Data</h3>
            <p>
              Transfer all information with the help of SSL - a solution
              allowing you to save any data from the public eye.
            </p>
          </div>
        </div>
        {/*end core feature single*/}
      </div>
      <div className="row">
        {/*start read more button*/}
        <div className="col-lg-12">
          <div className="load-more-btn text-center">
            <a href="#">Learn More</a>
          </div>
        </div>
        {/*end read more button*/}
      </div>
    </div>
  </section>
  {/*end core feature area*/}
  {/*start about area*/}
  <section id="about-area" className="bg-1">
    <div className="container">
      <div className="row">
        {/*start about content*/}
        <div className="col-md-6">
          <div className="about-cont">
            <h5>About Arribo</h5>
            <h2>Delivering exceptional user experiences.</h2>
            <p>
              Arribo is designed for those who love to user interface. You will
              love the seamless way we display the user inter face on your
              devices.As businesses rely on software or app to engage customers,
              innovation and velocity becomes core to delivering value.
            </p>
            <p>
              But you’re held back by antiquated technology and legacy
              development processes. Our customers use our app, to adopt
              next-generation development practices, deliver new applications,
              and modernize existing applications.
            </p>
          </div>
          <div className="about-info row">
            <div className="col-md-6 col-6">
              <div className="about-info-single">
                <div className="icon">
                  <i className="icon-employee" />
                </div>
                <div className="content">
                  <h3>17,501</h3>
                  <p>Premium User</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="about-info-single two">
                <div className="icon">
                  <i className="icon-eye-tracking" />
                </div>
                <div className="content">
                  <h3>1,987</h3>
                  <p>Daily Visitors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end about content*/}
      </div>
    </div>
    {/*start app mocup*/}
    <div className="about-app-mocup">
      <img src="assets/images/app-mocup-1.png" className="img-fluid" alt="" />
    </div>
    {/*end app mocup*/}
  </section>
  {/*end about area*/}
  {/*start video area*/}
  <section id="video-area" className="bg-1">
    <div className="video-cont d-table text-center">
      <div className="d-table-cell align-middle">
        <div className="video-overlay" />
        <a
          className="popup-video"
          href="https://www.youtube.com/watch?v=om4qTKMuPPs"
        >
          <i className="icofont-ui-play" />
        </a>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="video title">
            <h5>Explore Amazing features</h5>
            <h2>That will boost your productivity</h2>
            <p>
              With our wide range of features, you can create a custom app no
              matter what your niche: restaurant, Realtor, small business,rock
              band, and all the rest!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-8">
          <div className="counter title">
            <h5>Take a Look at our</h5>
            <h2 className="text-white">Some Facts</h2>
            <p>
              Arribo enables all its users with constant support and wide set of
              tools to develop and grow their businesses and projects.some of
              our favorite facts that you might not have known.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {/*start counter single*/}
        <div className="col-md-3 col-6">
          <div className="counter-single">
            <div className="icon">
              <img
                src="assets/images/icon-like.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <h2>5,289</h2>
            <p>5 star Rating</p>
          </div>
        </div>
        {/*end counter single*/}
        {/*start counter single*/}
        <div className="col-md-3 col-6">
          <div className="counter-single">
            <div className="icon">
              <img
                src="assets/images/icon-user.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <h2>4,188</h2>
            <p>Happy Users</p>
          </div>
        </div>
        {/*end counter single*/}
        {/*start counter single*/}
        <div className="col-md-3 col-6">
          <div className="counter-single">
            <div className="icon">
              <img
                src="assets/images/icon-cloud.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <h2>9,087</h2>
            <p>app download</p>
          </div>
        </div>
        {/*end counter single*/}
        {/*start counter single*/}
        <div className="col-md-3 col-6">
          <div className="counter-single">
            <div className="icon">
              <img
                src="assets/images/icon-trophy.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <h2>26</h2>
            <p>Best Awards</p>
          </div>
        </div>
        {/*end counter single*/}
      </div>
    </div>
  </section>
  {/*end video area*/}
  {/*start awesome feature area*/}
  <section id="awesome-feat-area" className="bg-1" data-scroll-index={1}>
    <div className="container">
      <div className="row">
        {/*start section heading*/}
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="section-heading text-center">
            <h5>an exhaustive thriving list of</h5>
            <h2>Awesome Features</h2>
            <p>
              We've gone over everything you could possibly want to know about
              Arribo, from how exactly the app works.Three Simple Steps to
              journey.
            </p>
          </div>
        </div>
        {/*end section heading*/}
      </div>
    </div>
    <div className="row">
      {/*start feature images*/}
      <div className="col-md-5">
        <div className="awesome-feat-img text-center">
          <a data-owl-item={1} className="feature-link active">
            <div className="feat-screen-single">
              <img
                src="assets/images/app-mocup-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </a>
          <a data-owl-item={2} className="feature-link">
            <div className="feat-screen-single">
              <img
                src="assets/images/app-mocup-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </a>
          <a data-owl-item={3} className="feature-link">
            <div className="feat-screen-single">
              <img
                src="assets/images/app-mocup-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </a>
          <a data-owl-item={4} className="feature-link">
            <div className="feat-screen-single">
              <img
                src="assets/images/app-mocup-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
      {/*end feature images*/}
      <div className="col-md-7">
        <div className="feat-carousel-wrap">
          <div className="awesome-feat-carousel owl-carousel">
            {/*start awesome-feat-single*/}
            <div className="awesome-feat-single text-center">
              <div className="icon">
                <img
                  src="assets/images/icon-setting.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3>Easy to Manage Your All Data</h3>
              <p>
                Arribo is Best app to help you take control of your device
                data.Apps that have the power to transform workflows, improve
                client relationships,boost your productivity and organize your
                life.{" "}
              </p>
            </div>
            {/*end awesome-feat-single*/}
            {/*start awesome-feat-single*/}
            <div className="awesome-feat-single text-center">
              <div className="icon two">
                <img
                  src="assets/images/icon-responsive.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3>Responsive Design For All Devices</h3>
              <p>
                Arribo is Best app to help you take control of your device
                data.Apps that have the power to transform workflows, improve
                client relationships,boost your productivity and organize your
                life.{" "}
              </p>
            </div>
            {/*end awesome-feat-single*/}
            {/*start awesome-feat-single*/}
            <div className="awesome-feat-single text-center">
              <div className="icon three">
                <img
                  src="assets/images/icon-setting.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3>Easy to Manage Your All Data</h3>
              <p>
                Arribo is Best app to help you take control of your device
                data.Apps that have the power to transform workflows, improve
                client relationships,boost your productivity and organize your
                life.{" "}
              </p>
            </div>
            {/*end awesome-feat-single*/}
            {/*start awesome-feat-single*/}
            <div className="awesome-feat-single text-center">
              <div className="icon two">
                <img
                  src="assets/images/icon-responsive.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3>Responsive Design For All Devices</h3>
              <p>
                Arribo is Best app to help you take control of your device
                data.Apps that have the power to transform workflows, improve
                client relationships,boost your productivity and organize your
                life.{" "}
              </p>
            </div>
            {/*end awesome-feat-single*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*end awesome feature area*/}
  {/*start how work area*/}
  <section id="how-work-area">
    <div className="container">
      <div className="row">
        {/*start section heading*/}
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="section-heading text-center">
            <h5>Describe your App</h5>
            <h2>Let’s See How It Work</h2>
            <p>
              We've gone over everything you could possibly want to know about
              Arribo, from how exactly the app works.Three Simple Steps to
              journey.
            </p>
          </div>
        </div>
        {/*end section heading*/}
      </div>
      <div className="row how-work-wrap">
        <div className="how-work-bg" />
        {/*start how work single*/}
        <div className="col-lg-offset-1 col-lg-3 col-md-4">
          <div className="how-work-single">
            <div className="icon">
              <i className="icofont-cloud-download" />
              <div className="number">01</div>
            </div>
            <h3>Download</h3>
            <p>
              The first step to getting on your Arribo is to download the
              Arribo. Open the <a href="#">Google Play</a>, or{" "}
              <a href="#">iTunes App Store</a> App on your smartphone.
            </p>
          </div>
        </div>
        {/*end how work single*/}
        {/*start how work single*/}
        <div className="col-lg-3 col-md-4">
          <div className="how-work-single two">
            <div className="icon">
              <i className="icofont-settings" />
              <div className="number">02</div>
            </div>
            <h3>Configure It</h3>
            <p>
              Select your mobile app's Settings tab that appear on your mobile
              screen, each of these customizations are unique to your Activity.
            </p>
          </div>
        </div>
        {/*end how work single*/}
        {/*start how work single*/}
        <div className="col-lg-3 col-md-4">
          <div className="how-work-single three">
            <div className="icon">
              <i className="icofont-trophy" />
              <div className="number">03</div>
            </div>
            <h3>Yay! Done</h3>
            <p>
              Explore and share Arribo.Check out our FAQ for more information on
              the system, memberships, 24-Hour Passes, safety tips, and more.
            </p>
          </div>
        </div>
        {/*end how work single*/}
      </div>
    </div>
  </section>
  {/*end how work area*/}
  {/*start newsletter area*/}
  <section id="newsletter-area" className="bg-1">
    <div className="container">
      <div className="row">
        {/*start section heading*/}
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="section-heading text-center">
            <h5>Be the first to know</h5>
            <h2 className="text-white">About New Features</h2>
            <p className="text-light">
              If you want to receive monthly updates from us just pop your email
              in the box. We think that spam is for jerks. And jerks we are not.
            </p>
          </div>
        </div>
        {/*end section heading*/}
      </div>
      <div className="row">
        {/*start newsletter form*/}
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div className="newsletter-form">
            <form
              id="mc-newsletter"
              action="http://pixner.net/arribo/demo/newsletter/config.php"
              method="post"
            >
              <div className="newsletter-input-bx">
                <input
                  type="email"
                  className="form-control"
                  id="mc-email"
                  name="mc-email"
                  placeholder="Enter Your Email"
                  required=""
                />
                <button type="submit">SUBSCRIBE</button>
              </div>
            </form>
            <div id="response" />
          </div>
        </div>
        {/*end newsletter form*/}
      </div>
    </div>
  </section>
  {/*end newsletter area*/}
  {/*screenshot area*/}
  <section id="screenshot-area" className="bg-1" data-scroll-index={2}>
    <div className="container">
      <div className="row">
        {/*start section heading*/}
        <div className="col-md-8 offset-md-2">
          <div className="section-heading text-center">
            <h5>Showcase your app</h5>
            <h2>The Screenshot Gallery</h2>
            <p>
              This is easy way showcase your app screen . If you want to show
              your app just pop in the screenshots and the magic happens.
            </p>
          </div>
        </div>
        {/*end section heading*/}
      </div>
      <div className="screen-wrap">
        <div className="screenshot-frame" />
        <div className="screen-carousel owl-carousel">
          <img src="assets/images/screen-1.jpg" className="img-fluid" alt="" />
          <img src="assets/images/screen-2.jpg" className="img-fluid" alt="" />
          <img src="assets/images/screen-3.jpg" className="img-fluid" alt="" />
          <img src="assets/images/screen-4.jpg" className="img-fluid" alt="" />
          <img src="assets/images/screen-2.jpg" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
  {/*end area*/}
  {/*start pricing area*/}
  <section id="pricing-area" data-scroll-index={3}>
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="section-heading">
            <h5>pricing Plan</h5>
            <h2>Choose The Right Plan</h2>
            <p>
              Build trust with prospective clients, delight existing customers,
              and increase the efficiency and collaboration within your team. We
              have experience with plethora of technologies.
            </p>
            <p>
              Arribo has plans, from free to paid, that scale with your needs.
              Subscribe to a plan that fits the size of your business.Arribo
              monthly pricing is based on how many functions you need to start
              your work. If you ready to use Arribo for a long time you can
              choose yearly plan and save some money.
            </p>
          </div>
          <div className="toggle-container">
            <div className="switch-toggles">
              <div className="monthly active">Monthly</div>
              <div className="yearly">Yearly</div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div id="pricing-wrap">
            {/*start monthly pricing table*/}
            <div className="monthly active">
              <div className="price-tbl-single highlighted">
                <div className="table-inner text-center">
                  <h4>start</h4>
                  <div className="price">
                    <div className="price-bg" />
                    <h2>
                      <sup>$</sup>15/<span>MON</span>
                    </h2>
                  </div>
                  <ul>
                    <li>5 GB Space</li>
                    <li>5 Subdomain Unlimited</li>
                    <li>Easy to Customize</li>
                    <li>Unlimited Users</li>
                    <li>Highest Speed</li>
                    <li>Easy to Customize</li>
                    <li>Support Unlimited User</li>
                  </ul>
                  <a href="#">get started</a>
                </div>
              </div>
            </div>
            {/*end monthly pricing table*/}
            {/*start monthly pricing table*/}
            <div className="yearly">
              <div className="price-tbl-single highlighted">
                <div className="table-inner text-center">
                  <h4>Standard</h4>
                  <div className="price">
                    <div className="price-bg" />
                    <h2>
                      <sup>$</sup>20/<span>MON</span>
                    </h2>
                  </div>
                  <ul>
                    <li>5 GB Space</li>
                    <li>5 Subdomain Unlimited</li>
                    <li>Easy to Customize</li>
                    <li>Unlimited Users</li>
                    <li>Highest Speed</li>
                    <li>Easy to Customize</li>
                    <li>Support Unlimited User</li>
                  </ul>
                  <a href="#">get started</a>
                </div>
              </div>
            </div>
            {/*end monthly pricing table*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*end pricing area*/}
  {/*start custom plan area*/}
  <section id="custom-plan-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="custom-plan-wrap bg-1 row">
            <div className="col-md-8 offset-md-2">
              <div className="section-heading text-center">
                <h5>Arribo Cost Calculator</h5>
                <h2 className="text-white">Need a Custom Plan?</h2>
                <p className="text-white">
                  We’ve created this handy plan cost calculator just for you.
                  Find out how much your custom plan will cost in under a
                  minute!{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="plan-btn text-center">
                <a href="#">Use Cost Calculator</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*end custom plan area*/}
  {/*start team area*/}
  <section id="team-area" data-scroll-index={4}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="section-heading text-center">
            <h5>Our creative team</h5>
            <h2>Meet The Team</h2>
            <p>
              Meet the people behind Arribo We are the team of professional
              analysts, publishing dozens of application. Join us!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {/*start team single*/}
        <div className="col-lg-3 col-md-6">
          <div className="team-single text-center">
            <div className="team-img">
              <img
                src="assets/images/team-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="team-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icofont-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-info">
              <h3>Penny Tool</h3>
              <p>Visual Designer</p>
            </div>
          </div>
        </div>
        {/*end team single*/}
        {/*start team single*/}
        <div className="col-lg-3 col-md-6">
          <div className="team-single text-center">
            <div className="team-img">
              <img
                src="assets/images/team-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="team-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icofont-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-info">
              <h3>Pat Hines</h3>
              <p>Android Developer</p>
            </div>
          </div>
        </div>
        {/*end team single*/}
        {/*start team single*/}
        <div className="col-lg-3 col-md-6">
          <div className="team-single text-center">
            <div className="team-img">
              <img
                src="assets/images/team-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="team-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icofont-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-info">
              <h3>Donald Huff</h3>
              <p>iOS Developer</p>
            </div>
          </div>
        </div>
        {/*end team single*/}
        {/*start team single*/}
        <div className="col-lg-3 col-md-6">
          <div className="team-single text-center">
            <div className="team-img">
              <img
                src="assets/images/team-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="team-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icofont-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-info">
              <h3>Angela Moore</h3>
              <p>Product Strategist</p>
            </div>
          </div>
        </div>
        {/*end team single*/}
      </div>
    </div>
  </section>
  {/*end team area*/}
  {/*start testimonial area*/}
  <section id="testimonial-area">
    <div className="container">
      <div className="row">
        {/*start section heading*/}
        <div className="col-md-8 offset-md-2">
          <div className="section-heading text-center">
            <h5>Trusted by 50,000+ User</h5>
            <h2>A Word From Our Customers</h2>
            <p>
              Our passion drives us to work hard and deliver outstanding results
              so we can be the best app development company. Hear what our
              clients have to say about Arribo.
            </p>
          </div>
        </div>
        {/*end section heading*/}
      </div>
      <div className="testi-wrap">
        {/*start testimonial single*/}
        <div
          className="client-single active position-1"
          data-position="position-1"
        >
          <div className="client-img">
            <img src="assets/images/client-1.jpg" alt="" />
          </div>
          <div className="client-comment">
            <h3>
              Installation was pretty easy.We have been Arribo customers for
              years, and we have had nothing but amazing experiences with the
              Arribo and well-designed mobile app. Arribo provided that for us
              with easy-to-use software and personalized support. I like this
              app. Thank you
            </h3>
            <span>
              <i className="icofont-quote-left" />
            </span>
          </div>
          <div className="client-info">
            <h3>Fatih Senel</h3>
            <p>Digilite Web Solutions</p>
          </div>
        </div>
        {/*end testimonial single*/}
        {/*start testimonial single*/}
        <div
          className="client-single inactive position-2"
          data-position="position-2"
        >
          <div className="client-img">
            <img src="assets/images/client-7.jpg" alt="" />
          </div>
          <div className="client-comment">
            <h3>
              Installation was pretty easy.We have been Arribo customers for
              years, and we have had nothing but amazing experiences with the
              Arribo and well-designed mobile app. Arribo provided that for us
              with easy-to-use software and personalized support. I like this
              app. Thank you
            </h3>
            <span>
              <i className="icofont-quote-left" />
            </span>
          </div>
          <div className="client-info">
            <h3>Fatih Senel</h3>
            <p>Digilite Web Solutions</p>
          </div>
        </div>
        {/*end testimonial single*/}
        {/*start testimonial single*/}
        <div
          className="client-single inactive position-3"
          data-position="position-3"
        >
          <div className="client-img">
            <img src="assets/images/client-3.jpg" alt="" />
          </div>
          <div className="client-comment">
            <h3>
              Installation was pretty easy.We have been Arribo customers for
              years, and we have had nothing but amazing experiences with the
              Arribo and well-designed mobile app. Arribo provided that for us
              with easy-to-use software and personalized support. I like this
              app. Thank you
            </h3>
            <span>
              <i className="icofont-quote-left" />
            </span>
          </div>
          <div className="client-info">
            <h3>Fatih Senel</h3>
            <p>Digilite Web Solutions</p>
          </div>
        </div>
        {/*end testimonial single*/}
        {/*start testimonial single*/}
        <div
          className="client-single inactive position-4"
          data-position="position-4"
        >
          <div className="client-img">
            <img src="assets/images/client-6.jpg" alt="" />
          </div>
          <div className="client-comment">
            <h3>
              Installation was pretty easy.We have been Arribo customers for
              years, and we have had nothing but amazing experiences with the
              Arribo and well-designed mobile app. Arribo provided that for us
              with easy-to-use software and personalized support. I like this
              app. Thank you
            </h3>
            <span>
              <i className="icofont-quote-left" />
            </span>
          </div>
          <div className="client-info">
            <h3>Fatih Senel</h3>
            <p>Digilite Web Solutions</p>
          </div>
        </div>
        {/*end testimonial single*/}
        {/*start testimonial single*/}
        <div
          className="client-single inactive position-5"
          data-position="position-5"
        >
          <div className="client-img">
            <img src="assets/images/client-4.jpg" alt="" />
          </div>
          <div className="client-comment">
            <h3>
              Installation was pretty easy.We have been Arribo customers for
              years, and we have had nothing but amazing experiences with the
              Arribo and well-designed mobile app. Arribo provided that for us
              with easy-to-use software and personalized support. I like this
              app. Thank you
            </h3>
            <span>
              <i className="icofont-quote-left" />
            </span>
          </div>
          <div className="client-info">
            <h3>Fatih Senel</h3>
            <p>Digilite Web Solutions</p>
          </div>
        </div>
        {/*end testimonial single*/}
        {/*start testimonial single*/}
        <div
          className="client-single inactive position-6"
          data-position="position-6"
        >
          <div className="client-img">
            <img src="assets/images/client-5.jpg" alt="" />
          </div>
          <div className="client-comment">
            <h3>
              Installation was pretty easy.We have been Arribo customers for
              years, and we have had nothing but amazing experiences with the
              Arribo and well-designed mobile app. Arribo provided that for us
              with easy-to-use software and personalized support. I like this
              app. Thank you
            </h3>
            <span>
              <i className="icofont-quote-left" />
            </span>
          </div>
          <div className="client-info">
            <h3>Fatih Senel</h3>
            <p>Digilite Web Solutions</p>
          </div>
        </div>
        {/*end testimonial single*/}
        {/*start testimonial single*/}
        <div
          className="client-single inactive position-7"
          data-position="position-7"
        >
          <div className="client-img">
            <img src="assets/images/client-2.jpg" alt="" />
          </div>
          <div className="client-comment">
            <h3>
              Installation was pretty easy.We have been Arribo customers for
              years, and we have had nothing but amazing experiences with the
              Arribo and well-designed mobile app. Arribo provided that for us
              with easy-to-use software and personalized support. I like this
              app. Thank you
            </h3>
            <span>
              <i className="icofont-quote-left" />
            </span>
          </div>
          <div className="client-info">
            <h3>Fatih Senel</h3>
            <p>Digilite Web Solutions</p>
          </div>
        </div>
        {/*end testimonial single*/}
      </div>
    </div>
  </section>
  {/*end testimonial area*/}
  {/*start app download area*/}
  <section id="app-download-area" data-scroll-index={5}>
    <div className="app-download-bg bg-1" />
    <div className="container">
      <div className="row">
        {/*start section heading*/}
        <div className="col-lg-6 col-md-8">
          <div className="section-heading">
            <h5>Choose Your Device Platform</h5>
            <h2>Get The App on</h2>
            <p>
              Get the latest resources for downloading, installing, and updating
              Arribo. Select your device platform and Use Our app and Enjoy Your
              Life.
            </p>
          </div>
        </div>
        {/*end section heading*/}
      </div>
    </div>
    <div className="app-downlod-review">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <div className="download-btns">
              <a href="#">
                <img
                  src="assets/images/playstore-icon.png"
                  className="img-fluid"
                  alt=""
                />{" "}
                Play Store
              </a>
              <a className="bg" href="#">
                <i className="icofont-brand-apple" /> App Store
              </a>
            </div>
            <div className="row">
              <div className="col-md-6 col-6">
                <div className="app-reviews">
                  <h6>Reviews</h6>
                  <div className="rating-number float-left">
                    <h2>4.5</h2>
                  </div>
                  <div className="rating-details float-left">
                    <p className="m-0">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half" />
                    </p>
                    <p className="font-light">125,064 ratings</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div className="app-reviews">
                  <h6>Reviews</h6>
                  <div className="rating-number float-left">
                    <h2>4.7</h2>
                  </div>
                  <div className="rating-details float-left">
                    <p className="m-0">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half" />
                    </p>
                    <p className="font-light">125,064 ratings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="app-download-mockup">
      <img src="assets/images/imac-mocup.png" className="img-fluid" alt="" />
    </div>
  </section>
  {/*end app download area*/}
  {/*start faq area*/}
  <section id="faq-area" className="bg-1">
    <div className="container">
      <div className="row">
        {/*start section heading*/}
        <div className="col-md-8 offset-md-2">
          <div className="section-heading text-center">
            <h5>Take A look</h5>
            <h2>Frequently Asked Questions</h2>
            <p>
              Our Mobile App can be downloaded and installed on your compatible
              mobile device easily. If you have any questions - please look
              through the most frequently asked questions or contact us for more
              details.
            </p>
          </div>
        </div>
        {/*end section heading*/}
      </div>
      <div className="row">
        <div className="col-md-7">
          <div id="accordion" role="tablist">
            {/*start faq single*/}
            <div className="card">
              <div className="card-header active" role="tab" id="faq1">
                <h5 className="mb-0">
                  <a
                    data-toggle="collapse"
                    href="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    Is the Mobile App Secure?
                  </a>
                </h5>
              </div>
              <div
                id="collapse1"
                className="collapse show"
                role="tabpanel"
                aria-labelledby="faq1"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    Both the Mobile Apps and the Mobile Web App give you the
                    ability to you to access your account information, view news
                    releases, report an outage, and contact us via email or
                    phone. Once you've installed a Mobile App on your phone,
                    you'll also have the ability to view a map of our offices
                    and payment locations.
                  </p>
                </div>
              </div>
            </div>
            {/*end faq single*/}
            {/*start faq single*/}
            <div className="card">
              <div className="card-header" role="tab" id="faq2">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    What features does the Mobile App have?
                  </a>
                </h5>
              </div>
              <div
                id="collapse2"
                className="collapse"
                role="tabpanel"
                aria-labelledby="faq2"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    Both the Mobile Apps and the Mobile Web App give you the
                    ability to you to access your account information, view news
                    releases, report an outage, and contact us via email or
                    phone. Once you've installed a Mobile App on your phone,
                    you'll also have the ability to view a map of our offices
                    and payment locations.
                  </p>
                </div>
              </div>
            </div>
            {/*end faq single*/}
            {/*start faq single*/}
            <div className="card">
              <div className="card-header" role="tab" id="faq3">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    How do I get the Mobile App for my phone?
                  </a>
                </h5>
              </div>
              <div
                id="collapse3"
                className="collapse"
                role="tabpanel"
                aria-labelledby="faq3"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    Both the Mobile Apps and the Mobile Web App give you the
                    ability to you to access your account information, view news
                    releases, report an outage, and contact us via email or
                    phone. Once you've installed a Mobile App on your phone,
                    you'll also have the ability to view a map of our offices
                    and payment locations.
                  </p>
                </div>
              </div>
            </div>
            {/*end faq single*/}
            {/*start faq single*/}
            <div className="card">
              <div className="card-header" role="tab" id="faq4">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    How does Arribo differ from usual apps?{" "}
                  </a>
                </h5>
              </div>
              <div
                id="collapse4"
                className="collapse"
                role="tabpanel"
                aria-labelledby="faq4"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    Both the Mobile Apps and the Mobile Web App give you the
                    ability to you to access your account information, view news
                    releases, report an outage, and contact us via email or
                    phone. Once you've installed a Mobile App on your phone,
                    you'll also have the ability to view a map of our offices
                    and payment locations.
                  </p>
                </div>
              </div>
            </div>
            {/*end faq single*/}
          </div>
        </div>
        <div className="col-md-5">
          <div className="faq-img">
            <img
              src="assets/images/faq-img-1.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*end faq area*/}
  {/*start contact area*/}
  <section id="contact-area" className="bg-1">
    <div className="container">
      <div className="row">
        {/*start section heading*/}
        <div className="col-lg-5 col-md-8">
          <div className="section-heading">
            <h5>Contact us</h5>
            <h2>Get In Touch</h2>
            <p>
              If you have any questions, just fill in the contact form, and we
              will answer you shortly.
            </p>
          </div>
        </div>
        {/*end section heading*/}
      </div>
      <div className="row">
        {/*start contact form*/}
        <div className="col-lg-5 col-md-7">
          <div className="contact-form">
            <form
              id="ajax-contact"
              action="http://pixner.net/arribo/demo/contact.php"
              method="post"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  required="required"
                  data-error="name is required."
                />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required="required"
                  data-error="valid email is required."
                />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={10}
                  placeholder="Message*"
                  required="required"
                  data-error="Please, leave us a message."
                  defaultValue={""}
                />
                <div className="help-block with-errors" />
              </div>
              <button type="submit">SUBMIT NOW</button>
              <div className="messages" />
            </form>
          </div>
        </div>
        {/*end contact form*/}
      </div>
    </div>
  </section>
  {/*end contact area*/}
  {/*start footer*/}
  <footer id="footer" className="bg-1">
    <div className="container">
      <div className="get-started">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <h2>Ready To Get Started?</h2>
            <p className="text-light">
              Don't waste another minute.Create an account now and start saving
              more time.Do even more with the NBTCash.
            </p>
          </div>
          <div className="col-lg-6 col-md-4">
            <a href="#">Create an Account</a>
          </div>
        </div>
      </div>
      <div className="footer-cont">
        <div className="row">
          {/*start footer widget single*/}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h3>NBTCash</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Features
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Download
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Pricing Plan
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Free Version
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    What our users say
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Request a feature
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Update Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*end footer widget single*/}
          {/*start footer widget single*/}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    About us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Meet the team
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Aunthenticity Guarantee
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*end footer widget single*/}
          {/*start footer widget single*/}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Documentations
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Community Forums
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Accounts and Billing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Update Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*end footer widget single*/}
          {/*start footer widget single*/}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h3>Work With Us</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Become Affiliates
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Become Partner
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Press Centre
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right" />
                    Advertise With Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*end footer widget single*/}
        </div>
      </div>
      <div className="footer-copyright">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <p>© 2022 NBTCash | All right reserved.</p>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="footer-social text-right">
              <ul>
                <li>
                  <a href="#">
                    <i className="icofont-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*end footer*/}
</>

<Script src="assets/js/jquery-3.3.1.min.js"></Script>
<Script src="assets/js/popper.min.js"></Script>
<Script src="assets/js/bootstrap.min.js"></Script>
<Script src="assets/js/waypoints.js"></Script>
<Script src="assets/js/counterup.min.js"></Script>
<Script src="assets/js/magnific-popup.min.js"></Script>
<Script src="assets/js/owl.carousel.min.js"></Script>
<Script src="assets/js/scrollIt.min.js"></Script>
<Script src="assets/js/validator.min.js"></Script>
<Script src="assets/js/contact.js"></Script>
<Script src="newsletter/ajax-newsletter-form.js"></Script>
<Script src="assets/js/custom.js"></Script>

    </div>
  )
}
