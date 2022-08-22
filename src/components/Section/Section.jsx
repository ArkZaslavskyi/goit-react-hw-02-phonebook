import { SectionTitle } from "./Section.styled";

const Section = ({ title, children }) => (
    <>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
    </>
);

export default Section;