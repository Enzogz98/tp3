/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {FaGoogle , FaFacebook,FaTwitter,FaYoutube,FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import "../css/Footer.css"
const Footer = (props) => {
  return (
    <div className="footer-container">
        <Link to={props.contact.email} target="blank" className="icon-link"><FaGoogle className="icon-g"/></Link>
        <Link to={props.contact.facebook} target="blank" className="icon-link"><FaFacebook className="icon-fc"/></Link>
        <Link to={props.contact.instagram} target="blank" className="icon-link"><FaInstagram className="icon-ig"/></Link>
        <Link to={props.contact.youtube} target="blank" className="icon-link"><FaYoutube className="icon-yt"/></Link>
        <Link to={props.contact.github} target="blank" className="icon-link"><FaGithub className="icon-gh"/></Link>
        <Link to={props.contact.twitter} target="blank" className="icon-link"><FaTwitter className="icon-tw"/></Link>
        <Link to={props.contact.telefono} target="blank" className="icon-link"><FaWhatsapp className="icon-wp"/></Link>
    </div>
  )
}

export default Footer