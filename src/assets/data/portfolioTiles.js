import bloodstoneLooter from 'assets/images/projects/discord.webp';
import willaAnna from 'assets/images/projects/willa_anna.webp';
import deftoapartments from 'assets/images/projects/deftoapartments.webp';
import bloodstoneWiki from 'assets/images/projects/bloodstone_wiki.webp';
import bloodstoneCalculator from 'assets/images/projects/bloodstone_calculator.webp';
import piotrChmura from 'assets/images/projects/piotr_chmura.webp';

export default [
   {
      "title": "Bloodstone Looter",
      "description": "Bot na platformie Discord do gry \"Bloodstone: The Ancient Curse\". Pozwala on na analizowanie danych z gry dostarczonych przez graczy z możliwością ich wglądu. Całość oparta jest na Node.js, Discord.js oraz bazie danych MySQL. Dla całodobowego działania aplikacja została postawiona na Google Cloud Platform.",
      "preview": "",
      "sourceCode": "https://github.com/Agonys/dc_bloodstone_bot",
      "icons": ["Node.js", "MySQL"],
      "backgroundImage": `${bloodstoneLooter}`,
   },
   {
      "title": "Leśniczówka Willa Anna",
      "description": "Oficjalna strona \"Leśniczówka Willa Anna\" z lokalizacją w Szklarskiej porębie. Strona zaprojektowana w celu przedstawienia oferty apartamentów wraz z możliwością ich rezerwacji. Responsywna strona oparta o Zend Framework i silnik rezerwacji online HOTRES przygotowana na stażu w firmie LEMONPIXEL.",
      "sourceCode": "",
      "preview": "https://www.willaanna.pl/",
      "icons": ["PHP", "JavaScript"],
      "backgroundImage": `${willaAnna}`,
   },
   {
      "title": "Deftoapartments",
      "description": "Oficjalna strona apartamentów Defto z lokalizacją w Katowicach i Tychach. Responsywna strona oparta o Zend Framework i silnik rezerwacji online HOTRES ma na celu przedstawić ofertę apartamentów, ich szczegółowe informację, opis firmy oraz możliwość zarezerwowania terminu w wybranym apartamencie. Strona przygotowana na stażu w firmie LEMONPIXEL.",
      "sourceCode": "",
      "preview": "https://www.deftoapartments.com/",
      "icons": ["PHP", "JavaScript"],
      "backgroundImage": `${deftoapartments}`,
   },
   {
      "title": "Bloodstone Polska Wiki",
      "description": "Polska, ogólnodostępna Wikipedia do gry \"Bloodstone: The Ancient Curse\". Strona oparta na silniku Mediawiki i PHP, lecz bez responsywności z powodu funkcjonowania silnika. Funkcjonuje od kwietnia 2019 roku. Stworzona przez graczy dla graczy w celu gromadzenia danych o grze oraz ułatwienia rozgrywki graczom. Witryna z prawie 1 milionem wyświetleń, aktualnie rozwój został zawieszony.",
      "sourceCode": "",
      "preview": "https://bloodstone.com.pl/",
      "icons": ["PHP", "JavaScript", "Sass"],
      "backgroundImage": `${bloodstoneWiki}`,
   },
   {
      "title": "Bloodstone Skill calculator",
      "description": "Aplikacja do gry \"Bloodstone: The Ancient Curse\" pozwalająca na wybór własnych zestawów umiejętności. Zbudowana na prostym gridzie, dostosowana do różnych rozdzielczości, jednakże jeszcze bez wsparcia mobilnego (trwają prace nad wersją w React.js). Planowane jest dodanie zapisu zestawów do linku w celu udostępniania ich między graczami.",
      "sourceCode": "https://github.com/Agonys/spell_calc",
      "preview": "https://bloodstone.com.pl/calculator/",
      "icons": ["jQuery", "Sass", "Figma"],
      "backgroundImage": `${bloodstoneCalculator}`,
   },
   {
      "title": "Piotr Chmura portfolio",
      "description": "Strona wykonana za pomocą React.js i Figma w celach edukacyjnych i rozwojowych oraz jako wizytówka w internecie. Zostało na niej zastosowane podejście \"Mobile first\" przez co strona jest resposywna i dostosowana do urządzeń mobilnych.",
      "sourceCode": "https://github.com/Agonys/piotr-chmura-website",
      "preview": "https://piotr-chmura.pl/",
      "icons": ["React.js", "Figma"],
      "backgroundImage": `${piotrChmura}`,
   },
]
