import "./Contact.css"
import LinkButtons from "./LinkButtons"

const Contact = () => {
  return (
    <div className="Contact">
        <form id="contact-form" action="mailto:kinmingleeangus@gmail.com?subject=Message to Angus" method="post" encType="text/plain">
            <h1>Welcome to leave a message to me :))</h1>
            <label>User Name: </label>
            <input type="text" name="userName" placeholder="Please enter your full name"></input>           
            <label>Email Address: </label>
            <input type="text" name="email" placeholder="Please enter your email address"></input>
            <label>Message To Me: </label>
            <input type="text" name="message" placeholder="Please leave a message..."></input>
            <input type="submit" value="Send the message" />
        </form>
        <div className="LinkButton">
            <h1>More information about Me :))</h1>
            <LinkButtons 
                    type = "LinkedIn"
                    url = "https://www.linkedin.com/in/leekinming"/>
            <LinkButtons
                type = "GitHub"
                url = "https://github.com/leekinming1008" />
            <LinkButtons
                type = "Resume"
                url = "https://anguslee.netlify.app/assets/Angus_CV-cYGodnIY.pdf" />
        </div>
    </div>
  )
}

export default Contact