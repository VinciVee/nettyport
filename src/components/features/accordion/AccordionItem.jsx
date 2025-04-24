import { IoIosArrowDown } from "react-icons/io";

import styles from './AccordionItem.module.scss';
import AbpButton from '../../common/AbpButton';

function AccordionItem({ title, children, isActive, onShow }) {
  return (
    <section className={isActive ? styles.activeBox : styles.accordionBox}>
      <h3>{title}</h3>
      { isActive ? (
        <p>{children}</p>
      ) : (
        <AbpButton onClick={onShow}>
          <IoIosArrowDown />
        </AbpButton>
      )}
    </section>
  )
}

export default AccordionItem