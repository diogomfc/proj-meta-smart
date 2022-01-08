import styled from 'styled-components';

export const ContainerCommits = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  padding-top: 0.5rem;

  .question {
  //background: #F0F6FF;
  //border-radius: 8px;
  border-radius: 10px;
  width:68rem;
  
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  padding: 15px;

  &:hover {
      background-color:rgba(52, 133, 255, 0.1);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, #719ECE 0px 0px 0px 1px inset;
      }
 

  p {
    color: #29292E;
    font-size: 16px;
    //font-weight:100;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
      }
    }
    
    > footer div {
      display: flex;
      gap: 16px;
     
    }
   

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;

        &.liked {
          color: #3485FF;

          svg path {
            stroke: #3485FF;
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }


}
`;

