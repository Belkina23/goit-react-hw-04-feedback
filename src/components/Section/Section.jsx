import PropTypes from 'prop-types';
import { SectionTag, TitleSection } from './Section.styled'

function Section({ title, children }) {
    return (
      <SectionTag>
        <TitleSection>{title}</TitleSection>
        {children}
      </SectionTag>
    );
  }
  
  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

export default Section;