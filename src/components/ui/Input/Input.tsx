import styles from './Input.module.scss';
import { InputProps } from './Input.props';

export const Input = ({ className, error, ...props }: InputProps): JSX.Element => (
  <div className={styles.inputWrapper}>
    <input className={`${styles.input} ${className} ${error && styles.error}`} {...props}></input>
    {error && (
      <span role="alert" className={styles.errorMessage}>
        {error.message}
      </span>
    )}
  </div>
);

Input.displayName = 'Input';
