let proximoId = 1

function adicionarLinha() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const adimissão = document.getAnimations("adimissão").value;
    const demissão = document.getAnimations("demissão").value;

 if(nome === '' || adimissão === '' )
    {alert("preencha os valores os valores do formulário")
        
    }

    
 const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];
    
 //criar nova linha
const novaLinha = tabela.insertRow;

//valores da linha
const celId = novaLinha.insertCell (0);
const celNome = novaLinha.insertCell (1);;
const celIdade = novaLinha.insertCell (2);
const celAdimissão = novaLinha.insertCell (3);
const celDemissão = novaLinha.insertCell (4);

//incerindo valores dentro das celulas
celId.innerHTML = proximoId
celNome.innerHTML = nome;
celIdade.innerHTML = idade;
celAdimissão.innerHTML = adimissão;
celDemissão.innerHTML = demissão;

proximoId++;

//limpar formulario
document.getElementById(Linhaform).reset();
  }