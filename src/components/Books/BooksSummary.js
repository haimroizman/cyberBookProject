import React from "react";
import classes from "./BooksSummary.module.css";

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2 className="font-bold text-xl">Experience the future of literature with CyberBooks</h2>
      <p className="font-bold">A React-powered site for cyberpunk and tech thrillers</p>
      <p className="font-bold">
        Just choose a book and dive into captivating tales where technology
        meets imagination.
      </p>
    </section>
  );
};

export default BooksSummary;
