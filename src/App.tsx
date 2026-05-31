import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import { levels, calculateBmi, Level } from "./helpers/BMI";
import leftArrowImage from "./assets/leftarrow.png";
import { GridItem } from "./components/gridItem";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateBmi(heightField, weightField));
    } else {
      alert("Type the missing information");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={100} />
          <p>powered by Manoel Victor Ferreira</p>
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
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Type your weight (in kilograms)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
            CALCULATE
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div onClick={handleBackButton} className={styles.rightArrow}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
