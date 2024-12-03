
^[A-Z0-9]{3}-[0-9A-Z]{4}$

^[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7} 

//Placa do cavalo 





^([0-9]{12}|[0-9]{16})$



//Validação de cartão, condição (Não pode ser -12 digitos nem +12, não pode ser -16 nem +16)



#
^
//12 digitos CNH Validação 


^[0-9]{4}[0-9]{5,8}[0-9]{9,12}[0-9]{13,16}[0-9]{17,20}[0-9]{21,24}[0-9]{25,28}[0-9]{29,32}[0-9]{33,36}[0-9]{37,40}[0-9]{41,44}$ #Primeira tentativa 



^(?:[0-9]{44})$ #MELHOR OPÇÃO 

//Validação de Chave de Acesso 
//ex: 99999999999999999999999999999999999999999999



^[0-9]{2}9{3}[0-9]{4,11}$ ##ERRADO SE VER SUBSTITUA PELO DE BAIXO 

^[0-9]{2}9[0-9]{4,11}$    #CORRETO BACANA

//DDD Variavél + Digito inicial sempre ser 9 (Nove) + Resto do número.



^[0-9]{3}9[0-9]{4,11}$ //Caso isolado de variavél númerica no contato 

//Porém entretanto todavia pode variar o DDD pos tem 0 e + em alguns casos (Raros) 




^\d{2}/\d{2}/\d{4}$


//MDFe CTe > Informe o Número do CT-e> VAR MDFeCTe . apenas CTE 8Digitos ***



^[0-9]{3,4}[0-9]{3}|[0-9]{7}


//CORREÇÃO PLACA MERCOSUL/PLACA CINZA

^[A-Z]{3}[0-9]{1}|[A-Z]{1}[0-9]{2}|[A-Z0-9]{7} //Antigo que estava, não respeitava os 7 digitos da placa 


^[A-Z]{3}[0-9]{1}[A-Z][0-9]{1}[0-9]{2}$ //Primeira tentativa de correção 

^[A-Z]{3}[0-9]{3,4}[A-Z]{4,5}[0-9]{5,7}|[A-Z0-9]{7}$ //SIMPLESMNTE NÃO TA RESPEITANDO A LIMITAÇÃO





^(?:[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}|[A-Z0-9]{7})$ 


//PLACA DA ABA SUPORTE, VAR MDFePlaca

//Codigo antigo 
^[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}


//Abaixo tentativa de correção com o novo codigo 
 
^(?:[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}|[A-Z0-9]{7})$



//Validação do e-mail 


^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$

//Primeira tentativa deu certo porém da pra melhorar

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.([a-zA-Z]+)?$


^.\d?[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.([a-zA-Z]+)?$
//segue segunda Regex aperfeiçoada

//se quiser ir mais longe por conta do .br e quiser não deixar passar dos digitos apos @domain.com.br


^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$




//Regex para validar o e-mail, levando em consideração que não vai validar todos os tipos de e-mail porém deve validar a <i>grande maioria</i>



//Se quiser ir mais longe ainda da pra botar duas formas de validação do e-mail em uma só, segue regex 



^.\d?[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.([a-zA-Z]+)?|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$


//Validação de Data limitando usuario para cumprir uma data válida 

^[0-2]{1}[1-9]{1}|3[0-1]{1}/0[1-9]{1}|1[0-2]/20[0-9]{2}$/

//Talvez tenha sido por causa do operador "|" 

^([0-2]{1}[1-9]{1}|3[0-1]{1})/(0[1-9]{1}|1[0-2])/(20[0-9]{2})$


// | = por causa de Fevereiro que só tem 28 dias 


//Este final complementa o script que faz a requisição de nome que se encontra no repositorio "gestorName" 

Status: <b>{{Final}}</b> pelo Gestor <b>{{user.identity}}</b>

<b>Ticket</b>: #{{deskSurveyTicketSequentialId}})

Ticket #{{input.Content@sequentialId}} foi {{Final}}

Ticket #{{input.Content@sequentialId}} foi {{Final}} pelo Gestor {{input.Content@gestorFullName}}


//Definir scrip em JS para puxar nome do gestor 
