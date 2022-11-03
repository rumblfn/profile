import styles from "../../styles/index.module.scss";

export const IndexPageBottomHoc = ({tablet, children}) => {
  console.log(tablet)
  if (tablet) return children
  return <div className={styles.botWrapper}>
    {children}
  </div>
}
