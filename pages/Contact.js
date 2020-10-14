import React from "react";
import * as emailjs from "emailjs-com";
import "../styling/Contact/Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquare,
  faEnvelope,
  faMapMarked,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const title = "Xander Business | Contact Us";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validForm = (errors) => {
  for (var key in errors) {
    if (errors[key] !== "" && errors[key] !== null) return false;
  }
  return true;
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      name: "",
      email: "",
      phone: "",
      subject: "",
      submitClass: "spin",
      errors: {
        content: "",
        name: "",
        email: "",
        phone: "",
        subject: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitBtnAnimation = this.submitBtnAnimation.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [event.target.name]: value,
    });
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name =
          value.length < 4 ? "Name Must Be Longer Than 4 Characters" : "";
        break;

      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is invalid";
        break;

      case "subject":
        errors.subject = value.length < 5 ? "Please Enter A Subject Line" : "";
        break;

      case "content":
        errors.content = value.length < 10 ? "Please Enter Some Content" : "";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (validForm(this.state.errors)) {
      this.submitBtnAnimation();
      const templateId = "template_SFfj7gWo";
      const variables = {
        message_html: this.state.content,
        from_name: this.state.name,
        reply_to: this.state.email,
        phone_number: this.state.phone,
        subject_category: this.state.subject,
      };
      this.sendFeedback(templateId, variables);
    } else {
      console.error("Invalid form");
    }
  };

  sendFeedback(templateId, variables) {
    emailjs.send("gmail", templateId, variables, "user_HRaJIcDp1a9rQTY7qQF7u");
  }

  submitBtnAnimation() {
    this.setState({
      submitClass: "spin processing",
    });
    setTimeout(() => this.setState({ submitClass: "spin done" }), 2200);
    setTimeout(() => this.setState({ submitClass: "spin" }), 4000);
  }

  render() {
    const { errors } = this.state;
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content="Get in touch with us for our toddler and preschooler programs, and more! Xander Business, Brantford"
          />
          <meta name="robots" content="index, follow" />
        </Head>
        <Header />
        <section className="documentation-container">
          <article className="notice-container">
            <a href="/XanderDrinnanResume.pdf">
              <img src="/ResumePlaceholder.svg" />
            </a>
            <a href="/XanderDrinnanResume.pdf">
              <img src="/ResumePlaceholder.svg" />
            </a>
            <a href="/XanderDrinnanResume.pdf">
              <img src="/ResumePlaceholder.svg" />
            </a>
            <a href="/XanderDrinnanResume.pdf">
              <img src="/ResumePlaceholder.svg" />
            </a>
            <a href="/XanderDrinnanResume.pdf">
              <img src="/ResumePlaceholder.svg" />
            </a>
          </article>
          <article className="files-container"></article>
        </section>
        <main className="contact-body-container">
          <section className="inquiries-container">
            <article className="inquiries-content">
              <h1>General Inquiries</h1>
              <div className="information-container">
                <div className="phone-number-container">
                  <p>
                    <FontAwesomeIcon
                      className="inquiry-icon"
                      id="phone-icon"
                      icon={faPhoneSquare}
                    />
                    +1 519 761 3069
                  </p>
                </div>
                <div className="email-contact-container">
                  <p>
                    <FontAwesomeIcon
                      className="inquiry-icon"
                      id="email-icon"
                      icon={faEnvelope}
                    />
                    xanderdrinnan1998@gmail.com
                  </p>
                </div>
                <div className="address-inquiry-container">
                  <p>
                    <FontAwesomeIcon
                      className="inquiry-icon"
                      id="map-icon"
                      icon={faMapMarked}
                    />
                    Waterloo, Ontario
                  </p>
                </div>
                <div className="himama-container">
                  <p>
                    <img src="/HiMamaLogo.svg" />
                    Connect with us on the HiMama app!
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="form-container">
            <h1>Get in Touch!</h1>
            <p>
              Fill out the form below and we will get back to you as soon as
              possible!
            </p>
            <form className="creative-minds-contact">
              <div className="name-container">
                <div className="name-label">
                  <label htmlFor="firstName">Your Name</label>
                </div>
                <div className="name-input">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.handleChange}
                    placeholder="Your Name"
                    required
                    value={this.state.name}
                  />
                </div>
                {errors.name.length > 0 && (
                  <span className="error-msg">{errors.name}</span>
                )}
              </div>

              <div className="email-phone-container">
                <div className="email-container">
                  <div className="email-label">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="email-input">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      onChange={this.handleChange}
                      placeholder="Your Email"
                      required
                      value={this.state.email}
                    />
                  </div>
                  {errors.email.length > 0 && (
                    <span className="error-msg">{errors.email}</span>
                  )}
                </div>
                <div className="phone-container">
                  <div className="phone-label">
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="phone-input">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      onChange={this.handleChange}
                      placeholder="Your Phone Number"
                      value={this.state.phone}
                    />
                  </div>
                </div>
              </div>

              <div className="subject-container">
                <div className="subject-label">
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="subject-input">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={this.handleChange}
                    placeholder="Subject"
                    required
                    value={this.state.subject}
                  />
                </div>
                {errors.subject.length > 0 && (
                  <span className="error-msg">{errors.subject}</span>
                )}
              </div>
              <div className="content-container">
                <div className="message-label">
                  <label htmlFor="message">Message</label>
                </div>
                <div className="content-input">
                  <textarea
                    id="content"
                    name="content"
                    onChange={this.handleChange}
                    placeholder="Message"
                    required
                    value={this.state.content}
                    style={{ width: "100%", height: "150px" }}
                  />
                  {errors.content.length > 0 && (
                    <span className="error-msg">{errors.content}</span>
                  )}
                </div>
              </div>
            </form>
            <button
              className={this.state.submitClass}
              id="spin"
              onClick={this.handleSubmit}
            >
              <span>Submit</span>
              <span>
                <svg viewBox="0 0 24 24">
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
              </span>
            </button>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
