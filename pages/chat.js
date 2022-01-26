import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import { useState } from "react";
import appConfig from "../config.json";


function ChatPage() {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    //Usuário
    /**
     * Usuário digita no campo textarea
     * Aperta enter para enviar
     * Tem que adicionar o texto na listagem
     */

    //Dev
    /**
     * [X] Campo criado
     * [X] Vamos usar o onChange usa o useState (ter if para verificar caso seja um enter para limpar a variavel)
     * [] Lista de mensagens
     */

    function handleNewMessage(newMessage) {
        const message = {
            id: messageList.length + 1,
            from: "Yan",
            body: newMessage,
        };
        setMessageList([message, ...messageList]);
        setMessage("");
    }

    return (
        <Box
            styleSheet={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: appConfig.theme.colors.primary[200],
                backgroundImage: `url(https://images7.alphacoders.com/567/thumb-1920-567918.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                color: appConfig.theme.colors.neutrals["000"],
            }}
        >
            <Box
                styleSheet={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    boxShadow: "0 8px 15px 0 rgb(0 0 0 / 60%)",
                    borderRadius: "5px",
                    backgroundColor: appConfig.theme.colors.neutrals[0],
                    height: "100%",
                    maxWidth: "95%",
                    maxHeight: "95vh",
                    padding: "32px",
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: "relative",
                        display: "flex",
                        flex: 1,
                        height: "80%",
                        flexDirection: "column",
                        padding: "16px",
                        background: 'rgba( 181, 213, 181, 0.05 )',
                        boxZshadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                        backdropFilter: 'blur( 2.5px )',
                        webkitBackdropFilter: 'blur( 2.5px )',
                        borderRSadius: '10px',
                        border: '1px solid black',
                    }}
                >
                    <MessageList messages={messageList} />

                    <Box
                        as="form"
                        styleSheet={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    handleNewMessage(message);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: "80%",
                                border: "0",
                                resize: "none",
                                borderRadius: "5px",
                                padding: "6px 8px",
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: "12px",
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <Button
                            type="submit"
                            label="Enviar"
                            onClick={(event) => {
                                event.preventDefault();
                                handleNewMessage(message);
                            }}
                            styleSheet={{
                                width: "20%",
                                height: "80%",
                                marginRight: "12px",
                            }}
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[600],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[500],
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

function Header() {
    return (
        <>
            <Box
                styleSheet={{
                    width: "100%",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    
                }}
            >
                <Text 
                styleSheet={{
                    fontSize: "30px",
                }}
                variant="heading5">Chat</Text>
                <Button
                styleSheet={{
                    backgroundColor:"darkgreen",
                    color:"#fff",
                    width:"100px",
                    
                }}
                    variant="tertiary"
                    colorVariant="neutral"
                    label="Logout"
                    href="/"
                />
            </Box>
        </>
    );
}

function MessageList(props) {
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column-reverse",
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: "16px",
            }}
        >
            {props.messages.map((message) => {
                return (
                    <Text
                        key={message.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: "5px",
                            padding: "6px",
                            marginBottom: "12px",
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            },
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: "8px",
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    display: "inline-block",
                                    marginRight: "8px",
                                }}
                                src={`https://github.com/Kzagrande.png`}
                            />
                            <Text tag="strong">{message.from}</Text>
                            <Text
                                styleSheet={{
                                    fontSize: "10px",
                                    marginLeft: "8px",
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {new Date().toLocaleDateString()}
                            </Text>
                        </Box>
                        {message.body}
                    </Text>
                );
            })}
        </Box>
    );
}

export default ChatPage;