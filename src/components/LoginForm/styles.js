import styled from "styled-components";

export const Login = styled.div`

label {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 5px;
  color: white;
  margin: 10px auto;
}
input {
  width: 100%;
  color: white;
  font-size: 16px;
  margin-left: 10px;
  &::placeholder {
    color: #aaa;
  }
}

button.close {
  &:hover {
    background-color: rgba(255, 124,124, 0.5);
    
  }
}
button.login {
  text-align: center;
  &:hover {
    background-color: var(--green);
  }
}
hr {
  border-color: rgb(9, 39, 179);
}
a {
  display: block;
}

&:hover {
  display: block;
}
`;

export const Message = styled.p`
margin-top: 10px;
    font-size: 14px;
    padding: 15px 10px;
    border-radius: 5px;
    color: white;
    background-color: crimson;
`;