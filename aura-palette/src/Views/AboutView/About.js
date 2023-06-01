import * as S from "../AboutView/style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const About = ({ DarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();


  return (
      <S.AppBackground className = {DarkMode}>
      <NavBar DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>
      <S.Title className={DarkMode}>Give feedback or learn more about Aura.</S.Title>
      <S.Content className = {DarkMode}>
        <S.Feedback className = {DarkMode}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfrrO3gpWsqkGCAAutELIS9OHyKI8_sT9lM84KRmbJueOL6Dw/viewform?embedded=true" width="640" height="2010" frameborder="0" marginheight="0" marginwidth="0">Yükleniyor…</iframe>
        </S.Feedback>
        <S.About className = {DarkMode}>
          <h1>The Aura Palette</h1>
          <p className="aboutText">Where words radiate with colors!<br/><br/>
          You are invited to a world at the intersection of language and art, where The Aura Palette reigns supreme! Experience the marvels of this groundbreaking project that reshapes the way we perceive and engage with text. We introduce a revolutionary tool that breathes life into words, transforming them into vibrant and captivating colors. Powered by cutting-edge artificial intelligence and natural language processing, The Aura Palette invites creative professionals, writers, designers, and artists of all kinds to effortlessly translate their literary masterpieces, brand identities, or even abstract thoughts into stunning color palettes.<br/><br/>
          But it doesn't stop there. The Aura Palette goes beyond conventional tools by offering a selection of mediums to suit your creative projects while also recognizing the importance of accessibility and inclusivity. With its innovative features, you can simulate different types of color blindness, ensuring your creations are visually impactful for all audiences. By experiencing your work through the eyes of those with color vision deficiencies, you gain invaluable insights that elevate the design and amplify the message of your art. The Aura Palette empowers you to create with a sense of responsibility, embracing diversity and fostering a deeper connection with every viewer.<br/><br/>
          Embark on a transformative journey where words and colors unite to shape extraordinary narratives and join us in this dynamic fusion of art and technology.<br/><br/>
          Unleash your creativity, unleash the power of The Aura Palette.</p>

          <h1 id="secondTitle">Works Cited</h1>
          <p className="aboutText">Bahng, Hyojin, Seungjoo Yoo, Wonwoong Cho, David Keetae Park, Ziming Wu, Xiaojuan Ma, and Jaegul Choo. "Coloring with Words: Guiding Image Colorization Through Text-Based Palette Generation." In Proceedings of the European Conference on Computer Vision (ECCV), pp. 431-447. 2018.</p>

        </S.About>
      </S.Content>

    </S.AppBackground>
  );
};

export default About;
