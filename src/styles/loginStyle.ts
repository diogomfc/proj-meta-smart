import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items:center;
justify-content: center;
text-align: center;
height:100vh;



aside{
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: rgba(17, 17, 26, 0.15)6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  height:100vh;
  

  background-image: linear-gradient(rgba(129, 218, 255, 1), rgba(98, 178, 122, 0.3));

  .Illustration{
    padding-top: 7rem;
  }
}


main{
  flex: 8;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;

  header img{
      height:7.8rem;
      width:19rem;
  }

  form{
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;

   >input{
      height: 5rem;
      width: 39rem;
      background: #EDF0EF;
      border-radius: 1.6rem;
      margin: 0.5rem;
      padding: 1rem;
    }
  };
}

.btnLogin{
    display: flex;
    align-items:center;
    justify-content: center;
    height: 5rem;
    width: 39rem;
    border-radius: 1.6rem;
    margin: 2rem;
    background-color: #49E295;
    //color: #FFF;
    border: 0.1rem solid rgba(168,168,179,0.5);
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    //color:#1F2D27;

    transition: filter 0.2s;

    >img{
      padding: 1rem;
    };

    &:hover {
      filter: brightness(0.9);
    }
  }

  .btnCriar{
    display: flex;
    align-items:center;
    justify-content: center;
    height: 5rem;
    width: 39rem;
    border-radius: 1.6rem;
    margin: 2rem;
    background-color: #c7e3d7;
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    color:#1F2D27;
    >img{
      padding: 1rem;
    };
  }

  .separator{
    display:flex;
    align-items:center;
    justify-content:center;
    text-align: center;
    padding-bottom: 1.5rem;
    
    width: 37rem;

  }

  .separator div:nth-child(2){
    padding:0 0.3rem;
    font-size: 1.4rem;
    color: #A8A8B3;
    line-height: 0;
  }

  .separator div:nth-child(1), 
  .separator div:nth-child(3){
    background:#EDF0EF;
    width: 25%;
    height: 0.1rem;
  }

`