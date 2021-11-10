import './contactUs.scss';
import { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");

  const sentMessage = () => {
    axios.post("http://ec2-54-165-199-42.compute-1.amazonaws.com/api/mail",{
      username: username,
      email: email,
      object: object,
      content: message,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className="container_content_footer">
      <h1 className="title_footer">Contact us</h1>

      <div className="container">
        <div className="row">
            <h4>We'd love to hear from you!</h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input 
                type="text"
                onChange = {(e) => {
                  setUsername(e.target.value);
                  console.log(`Le username est : ${e.target.value}`);
                }} 
                required 
              />
              <label>Username</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input 
                type="text"
                onChange = {(e) => {
                setEmail(e.target.value);
                console.log(`L'email est : ${e.target.value}`);
                }}  
                required 
              />
              <label>Email</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input 
                type="text"
                onChange = {(e) => {
                setObject(e.target.value);
                console.log(`L'objet est : ${e.target.value}`);
                }}  
                required 
              />
              <label>Object</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea
                onChange = {(e) => {
                setMessage(e.target.value);
                console.log(`Le message est : ${e.target.value}`);
                }}  
                required
              />
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-lrg submit-btn" onClick={sentMessage}>Send Message</div>
          </div>
        </div>
      </div>
  </div>
  );
};
export default ContactUs;
