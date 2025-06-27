// Boton.jsx
import styled from 'styled-components';

const Boton = styled.button`
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
  color: white;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default Boton;
