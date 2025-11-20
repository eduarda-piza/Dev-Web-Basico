document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnEnviar').addEventListener('click', checkAnswers);
    document.getElementById('btnReiniciar').addEventListener('click', resetQuiz);
});

function checkAnswers() {
    console.log('Função checkAnswers foi chamada');
    
    var pontos = 0;
    var feedback = '';
    
    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1) {
        if (q1.value === 'b') {
            pontos = pontos + 1;
            feedback = feedback + '<div class="alert alert-success"><strong>Questão 1:</strong> Correto! Um adulto possui 206 ossos.</div>';
        } else {
            feedback = feedback + '<div class="alert alert-danger"><strong>Questão 1:</strong> Ops! A resposta correta é 206 ossos.</div>';
        }
    } else {
        feedback = feedback + '<div class="alert alert-warning"><strong>Questão 1:</strong> Você não respondeu esta questão.</div>';
    }

    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2) {
        if (q2.value === 'b') {
            pontos = pontos + 1;
            feedback = feedback + '<div class="alert alert-success"><strong>Questão 2:</strong> Excelente! A pele é o maior órgão.</div>';
        } else {
            feedback = feedback + '<div class="alert alert-danger"><strong>Questão 2:</strong> Não foi dessa vez! A pele é o maior órgão.</div>';
        }
    } else {
        feedback = feedback + '<div class="alert alert-warning"><strong>Questão 2:</strong> Você não respondeu esta questão.</div>';
    }

    var q3 = document.querySelector('input[name="q3"]:checked');
    if (q3) {
        if (q3.value === 'b') {
            pontos = pontos + 1;
            feedback = feedback + '<div class="alert alert-success"><strong>Questão 3:</strong> Perfeito! O coração bate aproximadamente 100.000 vezes por dia.</div>';
        } else {
            feedback = feedback + '<div class="alert alert-danger"><strong>Questão 3:</strong> Quase! O coração bate aproximadamente 100.000 vezes por dia.</div>';
        }
    } else {
        feedback = feedback + '<div class="alert alert-warning"><strong>Questão 3:</strong> Você não respondeu esta questão.</div>';
    }

    var q4 = document.querySelector('input[name="q4"]:checked');
    if (q4) {
        if (q4.value === 'c') {
            pontos = pontos + 1;
            feedback = feedback + '<div class="alert alert-success"><strong>Questão 4:</strong> Mandou bem! O masseter é o músculo mais forte!</div>';
        } else {
            feedback = feedback + '<div class="alert alert-danger"><strong>Questão 4:</strong> Errou! O masseter (músculo da mandíbula) é o mais forte!</div>';
        }
    } else {
        feedback = feedback + '<div class="alert alert-warning"><strong>Questão 4:</strong> Você não respondeu esta questão.</div>';
    }

    var q5a = document.getElementById('q5a').checked;
    var q5b = document.getElementById('q5b').checked;
    var q5c = document.getElementById('q5c').checked;
    var q5d = document.getElementById('q5d').checked;
    
    if (q5a === true && q5b === true && q5c === false && q5d === true) {
        pontos = pontos + 1;
        feedback = feedback + '<div class="alert alert-success"><strong>Questão 5:</strong> Fantástico! Todas as funções corretas do sistema linfático!</div>';
    } else {
        feedback = feedback + '<div class="alert alert-danger"><strong>Questão 5:</strong> Revise! As funções corretas são: defender contra infecções, drenar líquidos e absorver gorduras.</div>';
    }

    var q6 = document.querySelector('input[name="q6"]:checked');
    if (q6) {
        if (q6.value === 'b') {
            pontos = pontos + 1;
            feedback = feedback + '<div class="alert alert-success"><strong>Questão 6:</strong> Isso mesmo! O cérebro é composto por aproximadamente 73% de água.</div>';
        } else {
            feedback = feedback + '<div class="alert alert-danger"><strong>Questão 6:</strong> Ops! O cérebro é composto por aproximadamente 73% de água.</div>';
        }
    } else {
        feedback = feedback + '<div class="alert alert-warning"><strong>Questão 6:</strong> Você não respondeu esta questão.</div>';
    }

    var q7 = document.querySelector('input[name="q7"]:checked');
    if (q7) {
        if (q7.value === 'b') {
            pontos = pontos + 1;
            feedback = feedback + '<div class="alert alert-success"><strong>Questão 7:</strong> Acertou! Um adulto possui cerca de 5 litros de sangue.</div>';
        } else {
            feedback = feedback + '<div class="alert alert-danger"><strong>Questão 7:</strong> Não foi! Um adulto possui cerca de 5 litros de sangue.</div>';
        }
    } else {
        feedback = feedback + '<div class="alert alert-warning"><strong>Questão 7:</strong> Você não respondeu esta questão.</div>';
    }

    var q8 = document.querySelector('input[name="q8"]:checked');
    if (q8) {
        if (q8.value === 'b') {
            pontos = pontos + 1;
            feedback = feedback + '<div class="alert alert-success"><strong>Questão 8:</strong> Correto! A pele se renova completamente a cada 28 dias.</div>';
        } else {
            feedback = feedback + '<div class="alert alert-danger"><strong>Questão 8:</strong> Errou! A pele se renova completamente a cada 28 dias.</div>';
        }
    } else {
        feedback = feedback + '<div class="alert alert-warning"><strong>Questão 8:</strong> Você não respondeu esta questão.</div>';
    }

    var porcentagem = (pontos / 8) * 100;
    
    var mensagemFinal = '';
    var corFundo = '';
    
    if (porcentagem === 100) {
        mensagemFinal = 'Perfeito! Você é um expert no corpo humano!';
        corFundo = 'bg-success';
    } else if (porcentagem >= 75) {
        mensagemFinal = 'Muito bem! Você tem ótimos conhecimentos!';
        corFundo = 'bg-primary';
    } else if (porcentagem >= 50) {
        mensagemFinal = 'Bom trabalho! Continue estudando!';
        corFundo = 'bg-info';
    } else {
        mensagemFinal = 'Não desista! Tente novamente e aprenda mais!';
        corFundo = 'bg-warning';
    }

    document.getElementById('scoreDisplay').innerHTML = 
        '<h3 class="display-4 ' + corFundo + ' text-white p-3 rounded">' + 
        pontos + ' de 8 corretas (' + porcentagem + '%)</h3>';

    document.getElementById('feedbackMessage').innerHTML = mensagemFinal;
    document.getElementById('detailedFeedback').innerHTML = feedback;

    document.getElementById('SecaoQ').style.display = 'none';
    document.getElementById('Result').style.display = 'block';

    window.scrollTo(0, 0);
}

function resetQuiz() {
    console.log('Função resetQuiz foi chamada');
    
    document.getElementById('Quiz').reset();
    document.getElementById('SecaoQ').style.display = 'block';
    document.getElementById('Result').style.display = 'none';
    window.scrollTo(0, 0);
}