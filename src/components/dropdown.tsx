import { ReactNode, useState } from "react";
import styles from "@./styles/Dropdown.module.scss";

interface Option {
  label: string;
  value: string;
}
interface Props {
  options: Option[];
  name?: string;
  children: ReactNode;
  selectedOption: Option;
  setSelectedOption: (option: Option) => void;
}

export default function Dropdown(props: Props) {
  const { options, selectedOption, setSelectedOption } = props;
  const [isOpen, setIsOpen] = useState(false);

  function handleOptionClick(option: Option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdownContainer__select}
        onClick={toggleDropdown}
      >
        {props.name && <p className={styles.name}>{props.name}</p>}
        <p className={styles.dropdownContainer__label}>{selectedOption.label}</p>
      {isOpen && (
        <div className={styles.dropdownContainer__optionContainer}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.dropdownContainer__option} ${
                option.value === selectedOption.value &&
                styles.dropdownContainer__optionSelected
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <p>{option.label}</p>
            </div>
          ))}
        </div>
      )}
      <span
        className={
          isOpen
            ? styles.dropdownContainer__arrowUp
            : styles.dropdownContainer__arrowDown
        }
      ></span>
      </div>
      {props.children}
    </div>
  );
}
