import Heading from "../ui/Heading";

function About() {
  return (
    <main id="about">
      <div className="container">
        <Heading heading="ABOUT COMPONENT" />
        <div className="container">
        <div className="row">
          <div className="col-md-6">
          <p>
            Freelancer is a free bootstrap theme created by Route. The <br /> 
            download includes the complete source files
            including HTML, <br />
            CSS, and JavaScript as well as optional SASS stylesheets for easy <br />
            customization.
          </p>
          </div>
        <div className="col-md-6">
        <p>
        Freelancer is a free bootstrap theme created by Route. The <br />
         download includes the complete source files including HTML,<br />
          CSS, and JavaScript as well as optional SASS stylesheets for easy <br />customization.
          </p>
        </div>
         
        </div>
        </div>
       
      </div>
    </main>
  );
}

export default About;
