import styled, { css } from 'styled-components';

const h3 = css`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.textoPrimary};
`;

const p = css`
  color: ${props => props.theme.colors.textoPrimary};
  font-weight: normal;
  text-transform: lowercase;
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
 padding-right: 35px;
 padding-left: 35px;
 padding-top: 35px;

 white-space: nowrap;
  
 height: calc(100vh - 123px); 
 overflow-y: scroll;

  ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #D8E6F3;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: #FFFFFF;
    }

  .primary {
    >li {
      ${hover}
      display: flex;
      align-items: center;
      opacity: 0.8;

      div {
        margin-left: 10px;

        h3 {
          ${h3}
        }
        p {
          white-space:normal;
          ${p}
          margin-top: 5px;
          width: 380px;
        }
        div{
          display: flex;
          align-items: center;
          text-align: center;
          margin: 0;
          h3{
            padding-right: 10px;
            
          }
          
        }
      }

      & + li {
        margin-top: 25px;
      }

  

      .new-tag {
          text-transform: uppercase;
          font-size: 9px;
          background: #14AA4B;
          border-radius: 6px;
          padding: 2px 3px;
          color: #fff;
        }

      .pending-tag {
          text-transform: uppercase;
          font-size: 9px;
          background: #F84F6B;
          border-radius: 6px;
          padding: 2px 3px;
          color: #fff;
        }
    }
  }

  .secondary {
    display: flex;
    justify-content: center;
    padding-top: 28px;
    padding-bottom : 18px;
    
    li {
      ${hover}
      opacity: 0.7;
      display: flex;
      align-items: center;

      & + li {
        margin-top: 28px;
      }

      h3 {
        ${h3}
        margin-left: 16px;
      }
     
      .container-feedback{
        display: flex;
        align-items: center;

        width: 90%;
        height: 80px;

        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        border-radius: 6px;
        
        margin-bottom: 25px;
        
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          margin-left: 5px;
        }

        p {
        white-space:normal;
        ${p}
        font-size: 12px;
        margin-left: 14px;
      }
      }
    }

  }
`;

//Link Metricas
export const MetricasContainer = styled.div`
 padding-right: 35px;
 padding-left: 35px;
 padding-top: 35px;

 white-space: nowrap;

  .primary {
    
    li {
      ${hover}
      display: flex;
      align-items: center;
      opacity: 0.8;
    
      div {
        margin-left: 10px;

        h3 {
          ${h3}
        }
        p {
          white-space:normal;
          ${p}
          margin-top: 5px;
          width: 380px;
        }
        div{
          display: flex;
          align-items: center;
          text-align: center;
          margin: 0;
          h3{
            padding-right: 10px;
            
          }
          
        }
      }

      & + li {
        margin-top: 25px;
      }

  

      .new-tag {
          text-transform: uppercase;
          font-size: 9px;
          background: #14AA4B;
          border-radius: 6px;
          padding: 2px 3px;
          color: #fff;
        }

      .pending-tag {
          text-transform: uppercase;
          font-size: 9px;
          background: #F84F6B;
          border-radius: 6px;
          padding: 2px 3px;
          color: #fff;
        }
    }
  }

  .secondary {
    display: flex;
    justify-content: center;
    padding-top: 28px;
    padding-bottom : 18px;
    
    li {
      ${hover}
      opacity: 0.7;
      display: flex;
      align-items: center;

      & + li {
        margin-top: 28px;
      }

      h3 {
        ${h3}
        margin-left: 16px;
      }
     
      .container-feedback{
        display: flex;
        align-items: center;

        width: 90%;
        height: 80px;

        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        border-radius: 6px;
        
        margin-bottom: 25px;
        
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          margin-left: 5px;
        }

        p {
        white-space:normal;
        ${p}
        font-size: 12px;
        margin-left: 14px;
      }
      }

    }


  }
`;


//Link Relatórios
export const RelatoriosContainer = styled.div`
padding-right: 35px;
 padding-left: 35px;
 padding-top: 35px;

 white-space: nowrap;

  .primary {
    
    li {
      ${hover}
      display: flex;
      align-items: center;
      opacity: 0.8;
    
      div {
        margin-left: 10px;

        h3 {
          ${h3}
        }
        p {
          white-space:normal;
          ${p}
          margin-top: 5px;
          width: 380px;
        }
        div{
          display: flex;
          align-items: center;
          text-align: center;
          margin: 0;
          h3{
            padding-right: 10px;
            
          }
          
        }
      }

      & + li {
        margin-top: 25px;
      }

  

      .new-tag {
          text-transform: uppercase;
          font-size: 9px;
          background: #14AA4B;
          border-radius: 6px;
          padding: 2px 3px;
          color: #fff;
        }

      .pending-tag {
          text-transform: uppercase;
          font-size: 9px;
          background: #F84F6B;
          border-radius: 6px;
          padding: 2px 3px;
          color: #fff;
        }
    }
  }

  .secondary {
    display: flex;
    justify-content: center;
    padding-top: 28px;
    padding-bottom : 18px;
    
    li {
      ${hover}
      opacity: 0.7;
      display: flex;
      align-items: center;

      & + li {
        margin-top: 28px;
      }

      h3 {
        ${h3}
        margin-left: 16px;
      }
     
      .container-feedback{
        display: flex;
        align-items: center;

        width: 90%;
        height: 80px;

        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        border-radius: 6px;
        
        margin-bottom: 25px;
        
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          margin-left: 5px;
        }

        p {
        white-space:normal;
        ${p}
        font-size: 12px;
        margin-left: 14px;
      }
      }

    }

  }
`;

//Link Estrategias
export const EstrategiasContainer = styled.div`
 padding-right: 35px;
 padding-left: 35px;
 padding-top: 35px;

 white-space: nowrap;

  .primary {
    
    li {
      ${hover}
      display: flex;
      align-items: center;
      opacity: 0.8;
    
      div {
        margin-left: 10px;

        h3 {
          ${h3}
        }
        p {
          white-space:normal;
          ${p}
          margin-top: 5px;
          width: 380px;
        }
        div{
          display: flex;
          align-items: center;
          text-align: center;
          margin: 0;
          h3{
            padding-right: 10px;
            
          }
          
        }
      }

      & + li {
        margin-top: 25px;
      }

  

      .new-tag {
          text-transform: uppercase;
          font-size: 9px;
          background: #14AA4B;
          border-radius: 6px;
          padding: 2px 3px;
          color: #fff;
        }

      .pending-tag {
          text-transform: uppercase;
          font-size: 9px;
          background: #F84F6B;
          border-radius: 6px;
          padding: 2px 3px;
          color: #fff;
        }
    }
  }

  .secondary {
    display: flex;
    justify-content: center;
    padding-top: 28px;
    padding-bottom : 18px;
    
    li {
      ${hover}
      opacity: 0.7;
      display: flex;
      align-items: center;

      & + li {
        margin-top: 28px;
      }

      h3 {
        ${h3}
        margin-left: 16px;
      }
     
      .container-feedback{
        display: flex;
        align-items: center;

        width: 90%;
        height: 80px;

        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        border-radius: 6px;
        
        margin-bottom: 25px;
        
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          margin-left: 5px;
        }

        p {
        white-space:normal;
        ${p}
        font-size: 12px;
        margin-left: 14px;
      }
      }

    }

  }
`;