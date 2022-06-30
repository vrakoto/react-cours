import LogoIpssi from "../img/logoIpssi.png";
import LogoTurgot from "../img/logoTurgot.jpg";
import LogoThales from "../img/logoThales.png";
import LogoStartup from "../img/logoStartup.png";
import LogoCode from "../img/logoCode.png";
import LogoCyclisme from "../img/logoCyclisme.jpg";
import LogoJV from "../img/logoJV.png";
import LogoAnssi from "../img/logoAnssi.png";
import LogoHTMLCSS from "../img/logoHTMLCSS.png";
import LogoJavascript from "../img/logoJavascript.png";
import LogoJava from "../img/logoJava.png";

import Section from "../components/cv/container/section";

import Propos from "../components/cv/propos";
import Formations from "../components/cv/formations";
import Experiences from "../components/cv/experiences";
import Competences from "../components/cv/competences";
import DC from "../components/cv/diplomeCertification";
import Hobbies from "../components/cv/hobbies";

function CV() {
  return (
    <div className="container">
      <Propos
        titre="A propos"
        nomPrenom="RAKOTOARISOA Carellien"
        lieu="Paris"
        age="20 ans"
        propos="Passionné du développement, je me suis inscript dans un bachelor informatique chez Ipssi où j'effectue une alternance en parallèle en tant que développeur dans une grande boite."
        photo="https://picsum.photos/150"
      ></Propos>

      <div className="contentSplit">
        <div className="left">
          <Section titre="FORMATIONS">
            <Formations
              logoEcole={LogoIpssi}
              domaine="Bachelor Développement fullStack & DevOps"
              ecole="IPSSI Paris"
              annee="2022 2023"
              resultat="En cours"
              description="Formation développement web et mobile"
            ></Formations>

            <Formations
              logoEcole={LogoTurgot}
              domaine="BTS SIO Option SLAM"
              ecole="Lycée Turgot"
              annee="2019 2021"
              resultat="14.5"
              description="Enseignement des bases de l'informatique"
            ></Formations>
          </Section>

          <Section titre="EXPERIENCES">
            <Experiences
              logoEntreprise={LogoThales}
              intitulation="Ingénieur Developpement"
              typeEmploi="Contrat d'apprentissage CDD"
              nomEntreprise="Thales"
              lieu="Elancourt"
              periode="Mars 2022 Avril 2023"
              secteur="Informatique"
              description="Développement d'application"
            ></Experiences>

            <Experiences
              logoEntreprise={LogoStartup}
              intitulation="Intégrateur WordPress"
              typeEmploi="Stage"
              nomEntreprise="Generation"
              lieu="Paris 16ème"
              periode="Novembre - Décembre 2020"
              secteur="Informatique"
              description="Evolution site web avec un CMS"
            ></Experiences>
          </Section>

          <Section titre="HOBBIES">
            <Hobbies
              logoActivite={LogoCode}
              typeActivite="Coder"
              niveau="Intermédiaire"
              frequence="Tous les soirs"
            ></Hobbies>

            <Hobbies
              logoActivite={LogoCyclisme}
              typeActivite="Cyclisme"
              niveau="Endurant"
              frequence="Tous les dimanches"
            ></Hobbies>

            <Hobbies
              logoActivite={LogoJV}
              typeActivite="Jeux-vidéo"
              niveau="??"
              frequence="Tous les vendredi et samedi soir"
            ></Hobbies>
          </Section>
        </div>

        <div className="right">
          <Section titre="COMPETENCES">
            <Section titre="FRONT">
              <Competences nom="HTML5 / CSS3" niveau="Bon niveau"></Competences>
              <Competences nom="JQuery" niveau="Bon niveau"></Competences>
              <Competences nom="ReactJS" niveau="Apprenti"></Competences>
              <Competences nom="Flutter" niveau="Novice"></Competences>
            </Section>

            <Section titre="BACK">
              <Competences nom="PHP 8" niveau="Bon niveau"></Competences>
              <Competences nom="Python" niveau="Apprenti"></Competences>
              <Competences nom="NodeJS" niveau="Apprenti"></Competences>
              <Competences nom="Java" niveau="Novice"></Competences>
              <Competences nom="Dart" niveau="Novice"></Competences>
            </Section>
          </Section>

          <Section titre="Diplome & Certifications">
            <Section titre="Diplomes">
              <DC
                logo=""
                intitule="BTS SIO Option SLAM"
                lieu="Lycée Turgot"
                date="2021"
                resultat="16/20"
              ></DC>
              <DC
                logo=""
                intitule="Baccalauréat Professionnel"
                lieu="Lycée Gustave Ferrié"
                date="2019"
                resultat="15/20"
              ></DC>
              <DC
                logo=""
                intitule="Brevet d’études professionnelles"
                lieu="Lycée Pro Gustave Ferrié"
                date="2018"
                resultat="15/20"
              ></DC>
              <DC
                logo=""
                intitule="Brevet des collèges"
                lieu="Collège Henri Matisse"
                date="2016"
                resultat="13/20"
              ></DC>
            </Section>

            <Section titre="Certifications">
              <DC
                logo={LogoAnssi}
                intitule="MOOC Cybersécurité de l'ANSSI"
                lieu="Lycée LeRebours"
                date="2021"
                resultat="19.5/20"
              ></DC>
              <DC
                logo={LogoHTMLCSS}
                intitule="Microsoft MTA 98-383 (HTML/CSS)"
                lieu="Lycée Turgot"
                date="2021"
                resultat="70%"
              ></DC>
              <DC
                logo={LogoJavascript}
                intitule="Microsoft MTA 98-382 (JavaScript)"
                lieu="Lycée Turgot"
                date="2021"
                resultat="80%"
              ></DC>
              <DC
                logo={LogoJava}
                intitule="Microsoft MTA 98-388 (Java)"
                lieu="Lycée Turgot"
                date="2021"
                resultat="75%"
              ></DC>
            </Section>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default CV;
