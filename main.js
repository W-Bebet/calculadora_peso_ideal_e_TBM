function calcularPeso() {
    //cria referencia aos eementos manipulados pela function
    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");
    var inPeso = document.getElementById("inPeso");
    var inIdade =  document.getElementById("inIdade");
    var outMetabolismo = document.getElementById("outMetabolismo");

    //obtém o conteúdo dos campos digitados
    var idade = Number(inIdade.value);
    var pesoAtual = Number(inPeso.value);
    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);
    var img = document.querySelector("#imgmix");

    altura = altura / 100;
    basal = "";

    //verifica se nome foi preenchido e sexo selecionado
    if(nome == "") {
        alert("Por favor, informe o seu nome...");
        inNome.focus(); //joga o focu para input nome
        return;
    } if (masculino == false && feminino == false) {
        alert("Informe o Sexo, esse dado é importante para o seu calculo...");
        return;
    }

    //se altura estiver vazia ou não for um numero
    if(altura == "" || isNaN(altura)) {
        img.setAttribute('src', 'imc_img_balanca.jpg');
        outResposta.textContent = "Infome a altura!";
        outResposta.style.color = "red";
        var body = document.body;
        body.style.background = "aliceblue";
        inAltura.focus();
        return;
    }
    //calcula tbm
    if (pesoAtual == "" || isNaN(pesoAtual)) {
        alert("O seu peso é fundamental para calcularmos seu metabolismo basal!");
        inPeso.focus();
        return;
    }
    if(idade==""||isNaN(idade)) {
        alert("Informe também sua idade para calcularmos sua TBM...")
        inIdade.focus();
        return;
    }

    //se masculino == true
    if (masculino) {
        var peso = Number(22 * Math.pow(altura, 2)); //altura ao quadrado
        img.setAttribute('src', "imc_img_man.jpg");
        outResposta.style.color = "black";
        //basal de Harris-Benedict
        basal = 88.362 + (13.397*pesoAtual)+(4.799*altura*100)-(5.677*idade);
        //basal de mifflin-St Jeor
        //basal = (10*pesoAtual)+(6.25*altura*100)-(5*idade)+5;
    } else {
        var peso = Number(21 * Math.pow(altura, 2));
        img.setAttribute('src', 'imc_img_girl.jpg');
        outResposta.style.color = "black";
        //basal de Harris-Benedict
        basal = 447.593+(9.247*pesoAtual)+(3.098*altura*100)-(4.330*idade);
        //basal de mifflin-St Jeor

        //HTML('corpo').style.backgroundColor = "pink" ;
    }

    //apresenta resposta e altera o conteúdo da linha outResposta
    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " KG";
    outMetabolismo.textContent = "Seu metabolismo basal é: " + basal;

}
//cria referência ao elemento bt eCalcular e registra evento associado a a calcular peso
var btCalcular = document.getElementById("btCalcular");
btCalcular.onclick = calcularPeso;

function limparCampos() {
    //recarrega a página
    location.reload();
    //posiciona o foco no elemento inNome
    document.getElementById("inNome").focus();
}
var btLimparCampos = document.getElementById("btLimparCampos");
btLimparCampos.onclick = limparCampos;
