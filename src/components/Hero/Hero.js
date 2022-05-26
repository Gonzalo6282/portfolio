import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Front-end Developer <br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
        I strive to create software with the user in mind using cutting-edge technologies, innovating, and crafting elegant user experiences.
        </SectionText>
        <Button onClick={() => window.location = 'https://gabipena.s3.amazonaws.com/Gonzalo-CV+2022.doc'}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;