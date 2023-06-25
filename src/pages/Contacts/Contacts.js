import React from "react";

export const Contacts = () => {
  return (
    <main className="page">
      <div className="contacts page__container _container">
        <h1 className="contacts__title title">Contacts</h1>
        <section className="contacts__email">
          <h2 className="contacts__email-title contacts-title">Email</h2>
          <p className="contacts__email-text contacts-text">
            Feel free to drop me an email at{" "}
            <a href="mailto:contact@myemail.com">contact@myemail.com</a>.
          </p>
        </section>
        <section className="contacts__map">
          <h2 className="contacts__map-title contacts-title">Map</h2>
          <p className="contacts__map-text contacts-text">
            You can find me at: 123 Main Street New York, NY 10001 USA
          </p>
          <iframe
            className="contacts__map-element"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.416765973983!2d-73.99489234935395!3d40.75142346758136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259565d6bccd1%3A0x7b0de88207ce2e29!2sEmpire%20State%20Building!5e0!3m2!1sen!2suk!4v1597802619965!5m2!1sen!2suk"
            frameBorder={0}
            allowFullScreen={true}
            aria-hidden="false"
            title="contacts-map"
          ></iframe>
        </section>
        <h2 className="contacts__social contacts-title">Social Media</h2>
        <p className="contacts__social-text contacts-text">You can reach me on social media using the links below:</p>
      </div>
    </main>
  );
};
