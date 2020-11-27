<?php

if(isset($_POST['email']) && !empty($_POST['email']))

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['mensagem']);


$to = "andersonpessoa415@gmail.com";
$subject ="Contato - Project_Vaga";
$body = "nome:  ".$nome."\r\n".
        "email: ".$email. "\r\n".
        "mensagem:  ".$mensagem;

$header = "from:andersonpessoa415@gmail.com"."\r\n".
    "Replay-To:".$email."\r\n".
    "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){
    echo("Seu email foi enviado!");
}else{
    echo("Algo de errado não está certo");
}
}

?>