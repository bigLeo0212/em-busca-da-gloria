var vida = 0
var inventario = []
var i = 0 // variavel para o while na linha 36
var j = 0 // variavel para o while na linha 77


alert("Em busca da gloria")
alert("você acorda em uma vila no Sudão, seu nome é Jamal Abdelmaji, uma criança de 10 anos")
let pergunta = Number(prompt("você olha em volta e vê seu pai e sua mãe discutindo algo no quarto, o que você quer fazer?\n1-ir no quarto vê a conversa\n2-ignorar e ir comer alguma coisa"))

if (pergunta == 1) {
    alert("você acaba ouvindo só um “os Janjaweed estão estranhos, acho que vou...”, só que quando eles percebem sua presença, eles disfarçam e mudam de assunto")
} else {
    alert("você vai pega algo na cozinha, mas quando você olha pela janela vê um homem estranho de branco e encapuzado, você estranha um pouco, porem ignora.")
}

if (pergunta != 1) {
    let pergunta2 = Number(prompt("mais tarde você seu pai saindo de casa de noite e você vai lá ver onde ele vai, o que você pergunta?\n1-você vai demorar?\n2-posso ir junto”"))

    respostaDoPai(pergunta2)
} else {
    let question = Number(prompt("mais tarde você seu pai saindo de casa de noite e você vai lá ver onde ele vai, o que você pergunta?\n1-você vai demorar?\n2-posso ir junto\n3-[Janjaweed] é sobre aquelas pessoas que tu e mãe estavam falando? ”"))

    respostaDoPai(question)
}

    alert("No dia seguinte tu acorda e vê seu pai e sua mãe em mais uma discussão, mais agora parece ser mais seria e percebe que ambos estão preocupados com alguma coisa")
    alert("mas quando você menos espera, começa um tiroteio, na hora tu só olha para sua família e eles te pegam e se escondem")
    alert("porem depois de um tempo você escuta a porta de casa abrindo, e a sua mãe coloca a mão dela na sua boca")
    alert("você vê seu pai saindo do lugar onde vocês estavam escondidos e tenta conversar com a pessoa, mas antes que algo possa ter acontecido, você só escuta um tiro")
    alert("você ouve o homem gritando alguma coisa e indo embora")
    alert("você só vê seu pai no chão em uma poça de sangue, seu ouvido começa a zumbir e um caos está reolando no seu redor")
    alert("sua vida está em 20%")
    vida = 20

    while(i < 1){    
        let recrutar = Number(prompt("Alguns anos se passam, e seu país está em uma guerra civil, e eles tentam te recrutar, o que você faz?\n1-Tentar fugir do país\n2-Aceitar o recrutamento"))

            recrutamento(recrutar)
        if(recrutar == 1){// esse if é para ver o  que o protagonista vai fazer após decidir fugir, e tbm para fazer o checkpoint
            let fugir = Number(prompt("a noite chega e você vê uma saida da sua vila, mas nela tem um guarda, o que você quer fazer?\n1-tentar fugir sem ser percebido\n2-sair conrrendo e dar um golpe na cabeça dele com um pedaço de madeira"))
               fugindo(fugir)
            if(fugir == 2){
                alert("você pula um muro e finalmente está livre, você sai correndo para longe e começa a pensar sobre ter abandonado a sua familia, mas agora não importra mais.")
                alert("sua vida está em 40%")
                vida = 40
                i++
            }
        }
    }

    alert("No dia seguinte tu acorda em meio a um deserto, a sua volta não tem nada, você não tem comida nem água, a única coisa que você tem a certeza de que não pode voltar pra casa")
    alert("você começa e refletir um pouco e lembra que sua mãe dizia que Israel era um lugar muito bom para se viver e que era o sonho dela ir para lá")
    let agua = Number(prompt("então você decidi ir, depois de começar a sua caminha você acha um lago, e você está com muita sede, o que você quer fazer?\n1-Tomar a água do lago\n2-Só seguir o lago sem tomar água"))

    if(agua == 1){
        alert("você se hidratar e a água tinha até um bom sabor") 
    }else{
        alert("você não toma a água e fica com sede em volta do rio")
    }

    alert("Você anda mais e mais até a noite, você decide dormir no lado do lago, porque amanhã você terá que sair da direção dele")

    if(agua == 1){
        alert("como você reparou que a água era boa, então  você aproveita e se refresca um pouco")
    }

    alert("Você anda por mais dois dias seguintes caminhando ao meio ao um deserto com um calor escaldante, mas mesmo assim você consegue chegar em Israel")
    alert("você é ajudado pelos guardas locais, a última coisa que você ver antes de apagar e uns policias indo até você")
    alert("sua vida está em 70%")
    vida = 70

    checarMedoNoIventario()

    while(j < 1){
        let testeDoClube = Number(prompt("Depois você vai dar uma volta na cidade para conhecer e acaba vendo um clube de atletismo, você quer ir lá ver?\n1-sim\n2-Não"))
    
            if(testeDoClube == 1){
                alert("você vai lá e vê que vai ter um teste para entrar para o clube")
                j++
            }else{
                alert("tu é burro? Essa é literalmente a história do cara, aff, de novo")
            }
}

    alert("Você vê o teste e decidi participar, só para ver o que acontece")
    alert("tu consegue ficar em segundo")
    alert("depois da corrida o pessoal do clube te chama e fala que você tem um grande potencial, e te perguntam se você quer entrar no clube")
    alert("Você acaba entrando no time e começa a treinar e também a se destacar nas competições")
    alert("em uma competição você está correndo os 10.000 metros e consegue ganhar")

    let testeDeHumildade = Number(prompt("você vê que o segundo colocado está meio desapontado por não ter conseguido ganha, o que você faz?\n1-Cumprimentar ele e falar que foi uma boa corrida\n2-Apenas comemorar a vitória"))
    
    if(testeDeHumildade == 1){
        alert("humildade está no seu inventario")
        inventario.push("humildade")
    }

    alert("alguns dias depois da corrida, você recebe uma mensagem do comitê olímpico, te convidando para participar na equipe deles nas olimpíadas")
    alert("após ler a messange você mostra para o seu clube e vocês comemoram a noite toda")
    alert("sua vida está em 90%")
    vida = 90

    alert("Você está animado com as olimpíadas e não para de treinar, mas daí o pior acontece")
    alert("a pandemia do covid-19 começa")
    alert("e por conta dela, as olimpíadas foram adiadas por 1 ano")
    alert("porem você sabe se realmente vai ser em 2021 ou mais, ou se vai acontecer algum dia")
    alert("você tenta falar com uma empresa para tentar treinar no campos dela, já que seu clube está fechado temporariamente")

    tentarPatrocinio()

    alert("Depois de um ano de espera, o dia finalmente chega e agora você está nas olimpíadas")
    alert("você começa pensar sobre tudo que passou e as pessoas que te ajudaram a chegar aí e começa a se emocionar")
    alert("mas antes que você começa a tirar conclusões, você escuta um som de um tiro e começa a correr.")
    alert("sua vida está em 100%")
    alert("fim de jogo!\n parabéns")
    vida = 100

    

function respostaDoPai(n1) {// n1 é só uma variavel com nome randow para a variavel pergunta
    if (n1 == 1) {
        alert("não se preocupe, eu volto um pouco depois que você dormir.")
    } else if (n1 == 2) {
        alert("não filho, fique aqui cuidando da sua mãe.")
    } else {
        alert("olha filho, esqueça aquele assunto, só saiba que nada de ruim vai acontecer.")
    }
}

function recrutamento (n2){// mesma coisa do n1, é só uma variavel para receber a pergunta
    if(n2 == 1){
        alert("você espera até a noite para tentar fugir")
    }else{
        alert("você luta na gurra e depois de um mês você morre")
    }
}

function fugindo (n3){ // função para receber a variavel "fugir"
    if(n3 == 1){
        alert("quando você tenta ir em silencio, o guarda te percebe e te prende")
    }else if(n3 == 2){
       let arma = Number(prompt("você consegue apagar o homem, e vê a arma dele no chão, você quer pegar?\n1-sim\n2-não"))
       if(arma == 1){
        alert("você pegou a arma")
        alert("medo está no seu inventario")
        inventario.push("medo")
       }else if(arma == 2){
        alert("você não pega a arma e segue o caminho")
       }
    }

}

function checarMedoNoIventario (){ // checar se tem medo no seu inventario/pegou a arma e dependo disso muda o dialogo
    if(inventario.includes("medo") == true){
        alert("Você acorda e vê que está em uma sala e tem uma pessoa estranha na porta, quando ela vê que você acordou")
        alert("ela entra na sala e começa a fazer uma série de perguntas, sobre dá onde tu vem")
        alert("porque estava com uma arma e quem você é, tu responde as perguntas, ela acha estranho, mas ela confia em você e te deixa ir embora.")
        }else{
            alert("Você acorda num pequeno quarto com um copo d´água e um pouco de comida, tu come e sai do quarto para ver o que aconteceu")
            let confiança = Number(prompt("eles começam a te explicar que tu está em lugar onde hospedam necessitados, eles te perguntam o que aconteceu com você, o que você fala?\n1-falar a verdade\n2-omitir a verdade"))
        
            if(confiança == 1){
                alert("o pessoal confia na sua resposta e te deixam em paz")
            }else{
                alert("eles desconfiam um pouco de ti, mas te deixam ir embora")
            }
        }   
}

function tentarPatrocinio (){ // ver se tu vai conseguir um patrocinio
    let k = 0
    while(k == 0){
    if(inventario.includes("humildade") == true){
        let patrocinio = Number(prompt("tu tenta conversar com eles, aí eles te perguntam o porque eles deviam te aceitar, o que você fala?\n1-	Eu acho que ajudaria vocês colocando um nome nas olimpíadas\n2-	Acho que eu ajudaria bastante, incentivando pessoas nos seus campos\n3-[humilde] para conseguir realizar meu sonho, e de muitas pessoas como eu, também motivando pessoas a um mundo melhor"))
        if(patrocinio == 2 || patrocinio == 3){
            alert("a empresa te aceita como novo membro temporario")
            k++
        }else{
            alert("a empresa te rejeitou")
        }
        }else{
            let patrocinio2 = Number(prompt("tu tenta conversar com eles, aí eles te perguntam o porque eles deviam te aceitar, o que você fala?\n1-Eu acho que ajudaria vocês colocando um nome nas olimpíadas\n2-	Acho que eu ajudaria bastante, incentivando pessoas nos seus campos"))
            if(patrocinio2 == 2){
                alert("a empresa te aceita como novo membro temporario")
                k++
            }else{
                alert("a empresa te rejeitou")
            }
        }
    }
}