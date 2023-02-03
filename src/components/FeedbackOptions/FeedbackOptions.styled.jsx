import styled from '@emotion/styled';

const Button = styled.button`
    display: inline-block;
    width: 100px;
    padding: 15px;
    font-size: 20px;
    border-radius: 5%;
    border: none;
    background-color: #89e61f;
    color: white;
    font-weight: 600;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: inset 0 0 3px 1px rgba(65, 68, 65, 0.8),
    inset rgba(90, 86, 86, 0.3) -5px -5px 8px 5px,
    inset rgba(255, 255, 255, 0.5) 5px 5px 8px 5px,
    1px 1px 1px rgba(255, 255, 255, 0.1), -2px -2px 5px rgba(0, 0, 0, 0.5);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
  background-color: rgb(26, 153, 26);
}

    :not(:last-child) {
  margin-right: 15px;


}
`

export { Button };