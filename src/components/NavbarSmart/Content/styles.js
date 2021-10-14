import styled, { css } from 'styled-components';

const h3 = css`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => props.theme.colors.textoPrimary};
`;

const p = css`
  color: ${props => props.theme.colors.textoPrimary};
  font-weight: normal;
  text-transform: lowercase;
  font-size: 1.6rem;
`;

const hover = css`
  cursor: pointer;
  //transition: opacity 0.1s ease-in;
  transition: opacity 0.2s;
    &:hover,
    &:focus {
      opacity: 1;
    }
`;

//SmartApps
export const SmartAppsContainer = styled.div`
 padding-right: 3.5rem;
 padding-left: 3.5rem;
 padding-top: 1.5rem;
 width: 45rem;

 white-space: nowrap;
  
 height: calc(100vh - 15.3rem); 
 overflow-y: scroll;

  ::-webkit-scrollbar {
        width: 1rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #D8E6F3;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: #FFFFFF;
    }

    .primary {
    
    li {
      ${hover}
      display: flex;
      align-items: center;
      opacity: 0.8;
      margin-top: 2.5rem;

      a{
        display: flex;
        align-items: center;
        text-decoration:none;
        margin: 0;
      }
    
      div {
        margin-left: 1rem;

        h3 {
          ${h3}
          padding-right: 1rem;
        }
        p {
          ${p}
          white-space:normal;
          margin-top: 0.5rem;
          width: 100%;
        }
        div{
          display: flex;
          align-items: center;
          text-align: center;
          margin: 0;
        }
      }

    
  

      .new-tag {
          text-transform: uppercase;
          font-size: 0.9rem;
          background: #14AA4B;
          border-radius: 0.6rem;
          padding: 0.2rem 0.3rem;
          color: #fff;
        }

      .pending-tag {
          text-transform: uppercase;
          font-size: 0.9rem;
          background: #F84F6B;
          border-radius: 0.6rem;
          padding: 0.2rem 0.3rem;
          color: #fff;
        }
    }
  }

  .secondary {
    display: flex;
    justify-content: center;
    padding-top: 2.8rem;
    padding-bottom : 1.8rem;
    
    li {
      ${hover}
      opacity: 0.7;
      display: flex;
      align-items: center;

      & + li {
        margin-top: 2.8rem;
      }

      h3 {
        ${h3}
        margin-left: 1.6rem;
      }
     
      .container-feedback{
        display: flex;
        align-items: center;

        width: 100%;
        height: 8rem;

        background-color: #fff;
        box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.3);
        border-radius: 0.6rem;
        
        margin-bottom: 2.5rem;
        
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 3.5rem;
          height: 3.5rem;
          margin-left: 0.5rem;
        }

        p {
        white-space:normal;
        ${p}
        font-size: 1.2rem;
        margin-left: 1.4rem;
      }
      }

    }


  }

`;

//Link Metricas
export const MetricasContainer = styled.div`
 padding-right: 3.5rem;
 padding-left: 3.5rem;
 padding-top: 1.5rem;
 width: 45rem;

 white-space: nowrap;

  .primary {
    
    li {
      ${hover}
      display: flex;
      align-items: center;
      opacity: 0.8;
      margin-top: 2.5rem;

      a{
        display: flex;
        align-items: center;
        text-decoration:none;
        margin: 0;
      }
    
      div {
        margin-left: 1rem;

        h3 {
          ${h3}
          padding-right: 1rem;
        }
        p {
          ${p}
          white-space:normal;
          margin-top: 0.5rem;
          width: 100%;
        }
        div{
          display: flex;
          align-items: center;
          text-align: center;
          margin: 0;
        }
      }

    
  

      .new-tag {
          text-transform: uppercase;
          font-size: 0.9rem;
          background: #14AA4B;
          border-radius: 0.6rem;
          padding: 0.2rem 0.3rem;
          color: #fff;
        }

      .pending-tag {
          text-transform: uppercase;
          font-size: 0.9rem;
          background: #F84F6B;
          border-radius: 0.6rem;
          padding: 0.2rem 0.3rem;
          color: #fff;
        }
    }
  }

  .secondary {
    display: flex;
    justify-content: center;
    padding-top: 2.8rem;
    padding-bottom : 1.8rem;
    
    li {
      ${hover}
      opacity: 0.7;
      display: flex;
      align-items: center;

      & + li {
        margin-top: 2.8rem;
      }

      h3 {
        ${h3}
        margin-left: 1.6rem;
      }
     
      .container-feedback{
        display: flex;
        align-items: center;

        width: 100%;
        height: 8rem;

        background-color: #fff;
        box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.3);
        border-radius: 0.6rem;
        
        margin-bottom: 2.5rem;
        
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 3.5rem;
          height: 3.5rem;
          margin-left: 0.5rem;
        }

        p {
        white-space:normal;
        ${p}
        font-size: 1.2rem;
        margin-left: 1.4rem;
      }
      }

    }


  }
`;


//Link Relatórios
export const RelatoriosContainer = styled.div`
 padding-right: 3.5rem;
 padding-left: 3.5rem;
 padding-top: 1.5rem;
 width: 45rem;

 white-space: nowrap;

  .primary {
    
    li {
      ${hover}
      display: flex;
      align-items: center;
      opacity: 0.8;
      margin-top: 2.5rem;

      a{
        display: flex;
        align-items: center;
        text-decoration:none;
        margin: 0;
      }
    
      div {
        margin-left: 1rem;

        h3 {
          ${h3}
          padding-right: 1rem;
        }
        p {
          ${p}
          white-space:normal;
          margin-top: 0.5rem;
          width: 100%;
        }
        div{
          display: flex;
          align-items: center;
          text-align: center;
          margin: 0;
        }
      }

    
  

      .new-tag {
          text-transform: uppercase;
          font-size: 0.9rem;
          background: #14AA4B;
          border-radius: 0.6rem;
          padding: 0.2rem 0.3rem;
          color: #fff;
        }

      .pending-tag {
          text-transform: uppercase;
          font-size: 0.9rem;
          background: #F84F6B;
          border-radius: 0.6rem;
          padding: 0.2rem 0.3rem;
          color: #fff;
        }
    }
  }

  .secondary {
    display: flex;
    justify-content: center;
    padding-top: 2.8rem;
    padding-bottom : 1.8rem;
    
    li {
      ${hover}
      opacity: 0.7;
      display: flex;
      align-items: center;

      & + li {
        margin-top: 2.8rem;
      }

      h3 {
        ${h3}
        margin-left: 1.6rem;
      }
     
      .container-feedback{
        display: flex;
        align-items: center;

        width: 100%;
        height: 8rem;

        background-color: #fff;
        box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.3);
        border-radius: 0.6rem;
        
        margin-bottom: 2.5rem;
        
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 3.5rem;
          height: 3.5rem;
          margin-left: 0.5rem;
        }

        p {
        white-space:normal;
        ${p}
        font-size: 1.2rem;
        margin-left: 1.4rem;
      }
      }

    }

  }

`;

//Link Estrategias
export const EstrategiasContainer = styled.div`
  padding-right: 3.5rem;
  padding-left: 3.5rem;
  padding-top: 1.5rem;
  width: 45rem;

  white-space: nowrap;

  .primary {
    
    li {
      ${hover}
      display: flex;
      align-items: center;
      opacity: 0.8;
      margin-top: 2.5rem;

      a{
        display: flex;
        align-items: center;
        text-decoration:none;
        margin: 0;
      }
    
      div {
        margin-left: 1rem;

        h3 {
          ${h3}
          padding-right: 1rem;
        }
        p {
          ${p}
          white-space:normal;
          margin-top: 0.5rem;
          width: 100%;
        }
        div{
          display: flex;
          align-items: center;
          text-align: center;
          margin: 0;
        }
      }

    
  

      .new-tag {
          text-transform: uppercase;
          font-size: 0.9rem;
          background: #14AA4B;
          border-radius: 0.6rem;
          padding: 0.2rem 0.3rem;
          color: #fff;
        }

      .pending-tag {
          text-transform: uppercase;
          font-size: 0.9rem;
          background: #F84F6B;
          border-radius: 0.6rem;
          padding: 0.2rem 0.3rem;
          color: #fff;
        }
    }
  }

  .secondary {
    display: flex;
    justify-content: center;
    padding-top: 2.8rem;
    padding-bottom : 1.8rem;
    
    li {
      ${hover}
      opacity: 0.7;
      display: flex;
      align-items: center;

      & + li {
        margin-top: 2.8rem;
      }

      h3 {
        ${h3}
        margin-left: 1.6rem;
      }
     
      .container-feedback{
        display: flex;
        align-items: center;

        width: 100%;
        height: 8rem;

        background-color: #fff;
        box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.3);
        border-radius: 0.6rem;
        
        margin-bottom: 2.5rem;
        
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 3.5rem;
          height: 3.5rem;
          margin-left: 0.5rem;
        }

        p {
        white-space:normal;
        ${p}
        font-size: 1.2rem;
        margin-left: 1.4rem;
      }
      }

    }

  }
`;