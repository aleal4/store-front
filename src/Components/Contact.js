import React from 'react';
import styles from './Contact.module.css';
import photo from '../img/contato.jpg';
import Head from './Head';

const Contact = () => {
  return (
    <section className={`${styles.contact} animateLeft`}>
      <Head title="Store | Contact" description="Get in touch!" />
      <img src={photo} alt="typewriter" />
      <div>
        <h1>contact us</h1>
        <ul className={styles.info}>
          <li>contact@product.com</li>
          <li>800-999-9999</li>
          <li>Santa Monica Blvd, CA</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
