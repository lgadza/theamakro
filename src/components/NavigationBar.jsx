// import { Container, Nav, Navbar, Row } from "react-bootstrap";
// import "font-awesome/css/font-awesome.min.css";
// import { Link } from "react-router-dom";
// import {
//   faHouse,
//   faSearch,
//   faUser,
//   faEnvelope,
//   faCirclePlus,
// } from "@fortawesome/free-solid-svg-icons";
// import "../style/Navigation.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const NavigationBar = () => {
//   return (
//     <Navbar>
//       <Container className="nav-container text-center mx-0 d-flex align-items-center justify-content-center px-0">
//         <Row className="w-100">
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Nav className="p-0">
//             <ul className="d-flex w-100 align-items-center my-0 py-2 justify-content-between px-4">
//               <li className="d-flex align-items-center justify-content-center flex-column">
//                 <Link
//                   to="/"
//                   className="d-flex align-items-center justify-content-center flex-column"
//                 >
//                   <FontAwesomeIcon
//                     icon={faHouse}
//                     style={{ color: "white", fontSize: "20px" }}
//                   />
//                   <small>Home</small>
//                 </Link>
//               </li>
//               <li className="d-flex align-items-center justify-content-center flex-column">
//                 <Link
//                   to="category"
//                   className="d-flex align-items-center justify-content-center flex-column"
//                 >
//                   <FontAwesomeIcon
//                     icon={faSearch}
//                     style={{ color: "white", fontSize: "20px" }}
//                   />
//                   <small>Search</small>
//                 </Link>
//               </li>
//               <li className="d-flex align-items-center justify-content-center flex-column">
//                 <Link className="d-flex align-items-center justify-content-center flex-column">
//                   <FontAwesomeIcon
//                     icon={faEnvelope}
//                     style={{ color: "white", fontSize: "20px" }}
//                   />
//                   <small>Messages</small>
//                 </Link>
//               </li>
//               <li className="d-flex align-items-center justify-content-center flex-column">
//                 <Link
//                   to="/sell"
//                   className="d-flex align-items-center justify-content-center flex-column"
//                 >
//                   <FontAwesomeIcon
//                     icon={faCirclePlus}
//                     style={{ color: "white", fontSize: "20px" }}
//                   />
//                   <small>Sell</small>
//                 </Link>
//               </li>
//               <li className="d-flex align-items-center justify-content-center flex-column">
//                 <Link
//                   to={"profile"}
//                   className="d-flex align-items-center justify-content-center flex-column"
//                 >
//                   <FontAwesomeIcon
//                     icon={faUser}
//                     style={{ color: "white", fontSize: "20px" }}
//                   />
//                   <small>Profile</small>
//                 </Link>
//               </li>
//             </ul>
//           </Nav>
//         </Row>
//       </Container>
//     </Navbar>
//   );
// };
// export default NavigationBar;
import React from "react";
import "../style/Navigation.css";
import logo from "../../src/img/TM logo.png"


const Menu = (props) => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenu}>
              My work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              Contact Me
            </a>
          </li>
        </ul>
        {/* <SocialLinks /> */}
      </div>
    </div>
  );
};

/***********************
  Nav Component
 ***********************/

const Nav = (props) => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <img className="brand"  src={logo} alt="logo" />
          <a
            onClick={props.toggleMenu}
            className={
              props.showMenu === "active" ? "menu-button active" : "menu-button"
            }
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

class NavigationBar extends React.Component {
  state = {
    menuState: false,
  };

  toggleMenu = () => {
    this.setState((state) => ({
      menuState: !state.menuState
        ? "active"
        : state.menuState === "deactive"
        ? "active"
        : "deactive",
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        {/* <Header />
        <About />
        <Projects />
        <Contact /> */}
      </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    // const forest = document.querySelector(".forest");
    // const silhouette = document.querySelector(".silhouette");
    // let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      // if (scrollPos <= window.innerHeight) {
      //   silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
      //   forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      // }

      // if (scrollPos - 100 <= window.innerHeight)
      //   header.style.visibility =
      //     header.style.visibility === "hidden" && "visible";
      // else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}
export default NavigationBar;