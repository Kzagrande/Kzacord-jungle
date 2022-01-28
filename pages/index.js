
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from '../config.json';




function Title(props) {
  /* console.log(props); */
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag}{
        color: ${appConfig.theme.colors.neutrals['100']};
        font-weight: 700;
        margin: 10px;
      }
    `}</style>
    </>
  );
}

export default function PaginaInicial() {
  /* const username = 'Kzagrande'; */

  
  const [username,setUsername]= React.useState('');
  const roteamento =  useRouter();
  const image =  "https://user-images.githubusercontent.com/91704291/151054446-bb0a0ed1-800a-4001-a98a-24a517cb5171.png";
  
  

  return (
    <>
      
    

      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://images4.alphacoders.com/607/thumb-1920-607866.png)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[0],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function(event){
              event.preventDefault();
              /* console.log("Submete"); */
              roteamento.push(`/chat?username=${username}`);
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px', 
            }}
          >
            <Title tag="h1">Bem vindo a Paradis!</Title>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[100] }}>
              {appConfig.name}
            </Text>

        {/*   <input 
          type="text"
           value={username}
           onChange={function(event){
             console.log(event.target.value);
             // Onde está o valor ?
             const valor = event.target.value;
             // Trocar o valor 
             setUsername(valor);
           }}
            />  */}
             

            {/* Formulário */}
            <TextField
            required
            placeholder="Informe seu usuário do Github"
             value={username}
             onChange={function(event){
              console.log(event.target.value);
              // Onde está o valor ?
              const valor = event.target.value;
              // Trocar o valor 
              setUsername(valor);
            }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            /> 
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[700],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[500],
              }}
            />
          </Box>
          


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[0],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[650],
              borderRadius: '20px',
              flex: 1,
              minHeight: '240px',
            }}
          >
           <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={
                username.length > 2
                  ? `https://github.com/${username}.png`
                  : image
              }
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
          
            >
                {username.length>2? username: ""}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}





//React Component
/* function HomePage() {
    //JSX
  return(
   <div>
     <GlobalStyle/>  
      <Title tag ="h1">Welcome to the jungle! </Title>

  <p> Discord - Kza jungle</p>
  
  </div>
  )
}

export default HomePage */
