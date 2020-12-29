//Calcular Idade

$(document).ready(function() {
    $("#bacana").submit(function(eventocaralho) {
        eventocaralho.preventDefault();
        var nome = document.getElementById("idnome").value;
        var data = document.getElementById("iddata").value.split("/");
        var hoje = new Date();
        var mees = hoje.getMonth() + 1;
        var idade = hoje.getFullYear() - data[2];
        if (data[1] > mees | ((data[1] == mees) & (data[0] > hoje.getDate()))) {
            idade = idade - 1;
        }
        $("#mostra").text(nome + ", você tem " + idade + " anos! =)");
    });
});

//Trocar mensagem, parte do innerHTML

var tinhaClicado = false;
var primeiraVez = true;

$(document).ready(function() {
    $("#alvo").click(function() {
        if (!tinhaClicado) {
            document.getElementById("alvo").innerHTML = "Você segue as ordens mesmo, hein?";
            tinhaClicado = !tinhaClicado;
        } else if (tinhaClicado & primeiraVez) {
            document.getElementById("alvo").innerHTML = "Calma, uai! Vai ficar clicando?";
            primeiraVez = !primeiraVez;
        } else {
            document.getElementById("alvo").innerHTML = "<strong>Aff ¬¬'</strong>";
        }
    });
});

//Trocar a Cor do Site

var tranca = true;

$(document).ready(function() {
    $("#idcor").click(function() {
        if (tranca == true) {
            tranca = false;
        } else if (tranca == false) {
            tranca = true;
        }
    });
});

$(document).ready(function() {
    $("#alvo").mouseover(function() {
        var sequenciaHexadecimal = "#";
        if (tranca == true) {
            for (var i = 1; i <= 6; i++) {
                var decimalAleatorio = Math.random() * 16;
                var inteiroAleatorio = Math.floor(decimalAleatorio);
                var valorHexadecimal = inteiroAleatorio.toString(16);
                sequenciaHexadecimal = sequenciaHexadecimal + valorHexadecimal;
            }
            document.getElementsByTagName("html")[0].style.background = sequenciaHexadecimal;
        }
    });
});