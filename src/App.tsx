import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import { levels, calculateBmi } from "./helpers/BMI";
import { GridItem } from './components/gridItem';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
    } else {
      alert("Type the missing information");
    }
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>BMI Calculator</h1>
          <p>
            Body Mass Index is a screening tool that uses a person's height and
            weight to estimate their body fat and screen for potential health
            risks.
          </p>

          <input
            type="number"
            placeholder="Type your height (in meters)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Type your weight (in kilograms)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>CALCULATE</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
