import styled from 'styled-components';

export const Container = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 
  #modal-commits{
    //width: 800px;
    //max-width: 800px;
    max-height: 800px;
    margin: 0 auto;
    
    background:${props => props.theme.colors.primary};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 1rem;

    padding-bottom: 1rem;


  header {
    padding: 16px 24px;
    border-bottom: 1px solid #e2e2e2;

    .content {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > h1 {
        font-size: 1.6rem;
        font-weight:100;
      }

      > div {
        display: flex;
        gap: 16px;
        
        > a {
          height: 20px;
          cursor: pointer;
        }
      }
    }
  }

    main {
      padding: 4rem 5.5rem;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
      border-radius: 2rem;
      margin: 0.8rem 4rem 0 4rem;
      
    .modal-title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      
      .qtd-commits{
        display: flex;
        justify-content:center;
        text-align: center;
        align-items: center;
        padding: .5rem;
        gap: .5rem;

        >span {
        display: flex;
        align-items: center;
        justify-content:center;

        background: #3284FF;
        border-radius: 50%;
        height: 2.1rem;
        width: 2.1rem;

        color: #FFF;
        font-weight: 500;
        font-size: 12px;
      }
      >h2{
        font-size:1.2rem;
        font-weight:lighter;
      }
      }

      .header-Title { 
        height: 100%;
        gap: .5rem;
        padding-right: 3rem;
        
        .title {
         display: flex;
         align-items: center;
         
         text-align: center;
         padding-bottom: .5rem;
       

         >h1{
          color: ${props => props.theme.colors.blueSecondary};
          font-size: 2rem;
          font-weight:normal; 
          padding-left: .5rem;
          text-decoration: underline;
          cursor: pointer;

          }
         >img{
          width: 20px;
          height:20px;
          cursor: pointer;
          }

        }
        .tags{
          display: flex;
          justify-content:flex-start;
          align-items: center;
          text-align: center;

          padding-bottom: 2rem;
          padding-top: .3rem;
          gap: 0.2rem;
         
          width:50rem;

          .tag-categoria{ 
            background: #3284FF;
            border-radius: 9999px;
            padding: 3px 8px;
            color: #FFF;
            font-weight: 500;
            font-size: 12px;
          }
          .tag-versionamento{ 
            background: #00897B;
            border-radius: 9999px;
            padding: 3px 8px;
            color: #FFF;
            font-weight: 500;
            font-size: 12px;
          }
          .tag-data{ 
            background: #7CB342;
            border-radius: 9999px;
            padding: 3px 8px;
            color: #FFF;
            font-weight: 500;
            font-size: 12px;
          }
          .tag-revisoPor{ 
            background: #667DF0;
            border-radius: 9999px;
            padding: 3px 8px;
            color: #FFF;
            font-weight: 500;
            font-size: 12px;
          }
      

        }
        
    }

    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        border: 1px solid #719ECE;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 80px;
        outline-color: #719ECE;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

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
            color: #29292e;
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: #737380;
          font-weight: 500;
        }
        > button {
          font-size:1.4rem;
          font-weight:lighter;
          height:5rem;
          width:13rem;
          border-radius: 1.6rem;
          background:${props => props.theme.colors.cardBordaPositivo};
          }
      }
    }

    .question-list {
      margin-top: 32px;
    }
  }
   
  }

`;
