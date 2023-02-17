import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./contact.scss";
import Swal from "sweetalert2";
const Conact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const serice_ID = `service_c8h46ii`;
    const email_template_id = "template_5ovga34";
    const public_key = "jZODT5OGndbt49AO1";
    emailjs.sendForm(serice_ID, email_template_id, form.current, public_key).then(
      (result) => {
        console.log(result.text);
        Swal.fire("Well Done!!!", "You Massage was Sent!", "success");
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <motion.div className="cotact" initial={{ translateX: "-100%" }} whileInView={{ translateX: "0%" }}>
      <form ref={form} onSubmit={sendEmail}>
        <label className="label-input">Name</label>
        <input type="text" name="user_name" className="input" />
        <label className="label-input">Email</label>
        <input type="email" name="user_email" className="input" />
        <label className="label-input">Message</label>
        <textarea name="message" className="text-box" />
        <input type="submit" value="Send" className="btn" />
      </form>
    </motion.div>
  );
};

export default Conact;
