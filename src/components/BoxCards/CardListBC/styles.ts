import styled, { keyframes } from 'styled-components';

interface ITagProps {
  color: string;
}


const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
width: 100%;
`;

export const ContentListagemClientes = styled.div<ITagProps>`
// CT = Categoria
// RV = Revisão
// DT = Data
// RP = Revisado Por
// TT = Title
// AC = Ações

  display: grid;
  grid-template-columns: 14rem 8.8rem 8.8rem 18rem 1fr 25rem;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "CT RV DT RP TT AC";

  margin: 0px auto;
  height: 40px;
  width: 100%;
  margin-bottom: 5px;

  animation: ${animate} .5s ease;
  transition: all .3s;
  
  background-color: ${props => props.theme.colors.primary};

    &:hover {
        opacity: .9;
        transform: translateX(5px);
    }

    .Categoria { 
      grid-area: CT; 
      display:flex;
      align-items: center;
      text-align: center;
      justify-content: flex-start;
      padding: 5px;
      
      .Tag{
      width: 8px;
      height: 100%;

      background-color: ${props => props.color};
      margin-right: 5px;
      }

      >img{
        width: 28px;
        height:28px;
        margin-right: 5px;
      }
      >h2{
        color: ${props => props.theme.colors.textoPrimary};
        font-size: 1.5rem;
        font-weight: 300; 
        }
 
    }

    .Revisao { 
      grid-area: RV;

      display:flex;
      justify-content: center;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 5px;

      

      >h2{
        color: ${props => props.theme.colors.textoPrimary};
        font-size: 1.5rem;
        font-weight: 300; 
        }
    }

    .Data { 
      grid-area: DT;

      display:flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      justify-content: center;
      padding: 5px;

      
      >h2{
        color: ${props => props.theme.colors.textoPrimary};
        font-size: 1.5rem;
        font-weight: 300; 
        }
        
    }

    .RevisadoPor { 
      grid-area: RP; 

      display:flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      justify-content: center;
      padding: 5px;

      >h2{
        color: ${props => props.theme.colors.textoPrimary};
        font-size: 1.5rem;
        font-weight: 300; 
        }

    }
    
    .Title { 
      grid-area: TT; 
        display:flex;
        align-items: center;
        text-align: center;
        height: 100%;
        gap: .5rem;
        

        >h2{
          color: ${props => props.theme.colors.blueSecondary};
          font-size: 1.5rem;
          font-weight:normal; 

          
        }

        >img :nth-child(1){
          width: 20px;
          height:20px;
          cursor: pointer;
        }

    }

    .Acoes { 
      grid-area: AC; 

      display:flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 5px;
    
        >a{
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          margin-right: 10px;
       
            >img{
              width: 20px;
              height:20px;
              cursor: pointer;
               &:hover {
                 opacity: .5;
               }
           }
           >span{
            padding: .5rem;
            font-size: 1.4rem;
            color: #8A92A6;

           }
        }
    }

`
