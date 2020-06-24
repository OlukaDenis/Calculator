import React from 'react';
import Button from './Button';
import styles from '../styles/ButtonPanel.scss';

export default function ButtonPanel() {
  return (
    <div className="buttonPanel">
      <div className="groupOne">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button color={styles.lightOrange} name="÷" />
      </div>
      <div className="groupTwo">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button color={styles.lightOrange} name="X" />
      </div>
      <div className="groupThree">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button color={styles.lightOrange} name="-" />
      </div>
      <div className="groupFour">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button color={styles.lightOrange} name="+" />
      </div>
      <div className="groupFive">
        <Button wide={true} name="0" />
        <Button name="." />
        <Button color={styles.lightOrange} name="=" />
      </div>
    </div>
  );
}
