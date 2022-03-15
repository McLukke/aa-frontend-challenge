import styles from "./Section.module.scss";

const Section = ({ showPadding, smoothRadius, ...restProps }) => (
  <div
    className={`${styles.base} ${showPadding ? styles.padding : ""} ${
      smoothRadius ? styles.radius : ""
    }`}
    {...restProps}
  />
);

export default Section;
