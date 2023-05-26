import { Link } from "react-router-dom"
import {FaGoogle , FaFacebook,FaTwitter,FaYoutube,FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = (props) => {
  return (
    <div>
        <Link to={props.contact.email} target="blank"><FaGoogle/></Link>
        <Link to={props.contact.facebook} target="blank"><FaFacebook/></Link>
        <Link to={props.contact.instagram} target="blank"><FaInstagram/></Link>
        <Link to={props.contact.youtube} target="blank"><FaYoutube/></Link>
        <Link to={props.contact.github} target="blank"><FaGithub/></Link>
        <Link to={props.contact.twitter} target="blank"><FaTwitter/></Link>
        <Link to={props.contact.telefono} target="blank"><FaWhatsapp/></Link>
    </div>
  )
}

export default Footer