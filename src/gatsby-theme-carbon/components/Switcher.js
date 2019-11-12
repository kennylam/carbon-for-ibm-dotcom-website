import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import { SwitcherLink, SwitcherDivider } from 'gatsby-theme-carbon/src/components/Switcher/Switcher';

const CustomSwitcher = props => (
  <Switcher {...props}>
    <SwitcherLink href="https://ibm.com/design">IBM Design</SwitcherLink>
    <SwitcherLink href="https://ibm.com/design/language">IBM Design Language</SwitcherLink>
    <SwitcherLink href="https://ibm.com/brand">IBM Brand Center</SwitcherLink>

    <SwitcherDivider>Design disciplines</SwitcherDivider>
    <SwitcherLink href="https://www.carbondesignsystem.com/">IBM Product Design</SwitcherLink>
    <SwitcherLink href="https://carbon-for-ibm.netlify.com/">Carbon for IBM.com</SwitcherLink>

    <SwitcherDivider>Design practices</SwitcherDivider>
    <SwitcherLink href="https://www.ibm.com/design/research/">IBM Design Research</SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/design/thinking/">IBM Design Thinking</SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/services/ibmix/">IBM iX</SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/design/ai">IBM Journey System</SwitcherLink>
  </Switcher>
);

export default CustomSwitcher;
