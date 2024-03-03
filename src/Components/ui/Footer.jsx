import { FaFacebook, FaGlobe, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="location d-flex flex-column align-items-center">
            <h3>LOCATION</h3>
            <address>
              2215 John Daniel Drive <br />
              Clark, MO 65243
            </address>
          </div>
          <div className="socials d-flex flex-column align-items-center">
            <h3>AROUND THE WEB</h3>
            <ul className="gap-2">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaGlobe />
              </li>
            </ul>
          </div>
          <div className="about d-flex flex-column align-items-center">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <p>Copyright &copy; Your Website 2024</p>
    </footer>
  );
}

export default Footer;
