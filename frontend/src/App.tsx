import { useState } from "react";
import AOS from "aos";

import SplashSection from "./components/SplashSection";
import AboutSection from "./components/AboutSection";
import FloatingColorMenu from "./components/FloatingColorMenu";
import colorSchemeStyles from "./styles/color-schemes.module.scss";
import { ColorMenuOption } from "./common/interfaces";

const colorMenuOptions: ColorMenuOption[] = [
  {
    colorSchemeStyle: colorSchemeStyles.default,
    label: "Default"
  },
  {
    colorSchemeStyle: colorSchemeStyles.brightBlue,
    label: "Bright Blue"
  },
  {
    colorSchemeStyle: colorSchemeStyles.darkBlue,
    label: "Dark Blue"
  },
  {
    colorSchemeStyle: colorSchemeStyles.bloodRed,
    label: "Blood Red"
  },
  {
    colorSchemeStyle: colorSchemeStyles.turquoise,
    label: "Turquoise"
  },
  {
    colorSchemeStyle: colorSchemeStyles.cartoonSea,
    label: "Cartoon Sea"
  },
  {
    colorSchemeStyle: colorSchemeStyles.tetris,
    label: "Tetris"
  },
  {
    colorSchemeStyle: colorSchemeStyles.lime,
    label: "Lime"
  }
];

function App() {
  const [currentCScheme, setCurrentCScheme] = useState<string>(
    colorMenuOptions[0].colorSchemeStyle
  );

  const handleColorSchemeClick = (colorScheme: ColorMenuOption) => {
    setCurrentCScheme(colorScheme.colorSchemeStyle);
  };

  AOS.init({ useClassNames: true });

  return (
    <div className={currentCScheme}>
      <FloatingColorMenu
        colorMenuOptions={colorMenuOptions}
        onColorClick={handleColorSchemeClick}
      />
      <SplashSection />
      <AboutSection />
    </div>
  );
}

export default App;
