import styles from "@/styles/Footer.module.scss";

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div className={styles.footer} >
      &copy; Copyright {currYear}, designed & developed by{" "}
      <a href="https://github.com/Sakshii15" target="_blank" rel="noreferrer">
        Sakshi Sahu
      </a>
    </div>
  );
}

export default Footer;
