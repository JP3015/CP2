import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{   
      padding: 0px;
      margin: 0px;
      outline: 0px;
      box-sizing: border-box;
       font-family:'Robot',sans-serif;  
    
  }
  
  html,body, #root{
      height: 100%;
      /* overflow: hidden; */
      ::-webkit-scrollbar-width{
           width: 10px;
      }
      ::-webkit-scrollbar-thumb {
          background: "#cccc"; 
          border-radius: 10px;
      }
 
  } 
   
  *,button,input{
       border: none;
       background-color: "transparent";
               
  }  
`;
