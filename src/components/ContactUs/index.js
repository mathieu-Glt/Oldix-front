import './contactUs.scss';

const ContactUs = () => (

  <div className="container_content_footer">
    <h1 className="title_footer">Contact us</h1>

    <div className="container">
      <div className="row">
          <h4>We'd love to hear from you!</h4>
      </div>
      <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input type="text" required />
            <label>Name</label> 
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input type="text" required />
            <label>Email</label> 
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input type="text" required />
            <label>Object</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="btn-lrg submit-btn">Send Message</div>
        </div>
      </div>
    </div>
</div>
);

export default ContactUs;
