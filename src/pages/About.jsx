import Footer from "../components/Footer"
import Header from "../components/Header"
import MainAbout from "../components/MainAbout"


const About = () => {
    const contacto={email:"mailto:enzo.114998@gmail.com_enlazado.com", telefono:"https://wa.me/5493814563507", facebook:"https://www.facebook.com/enzo.gonzalez.5891/", github: "https://github.com/Enzogz98", youtube:"https://www.youtube.com/channel/UCol7nkrJUilQ1T9UGuEQ11A", twitter:"https://twitter.com/EnzoJaviGonz",instagram:"https://www.instagram.com/enzoogonzalez98/" }
  return (
  <>
  <Header/>
  <MainAbout/>
  <Footer contact={contacto}/>
  </>
  )
}

export default About