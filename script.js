// Variáveis de estado
let isPoweredOn = true;
let moduleTitle = "Módulo AL-203";

// Atualização dinâmica dos sensores
function simulateSensorUpdates() {
    if (!isPoweredOn) return;

    const sensors = [
        { element: document.querySelectorAll('.sensor-item')[0], min: 22, max: 28, unit: '°C' },
        { element: document.querySelectorAll('.sensor-item')[1], min: 5.8, max: 6.5, unit: 'pH' },
        { element: document.querySelectorAll('.sensor-item')[2], min: 2.0, max: 2.8, unit: 'mS/cm' },
        { element: document.querySelectorAll('.sensor-item')[3], min: 80, max: 95, unit: '%' }
    ];

    sensors.forEach(sensor => {
        const valueElement = sensor.element.querySelector('.value');
        const randomValue = (Math.random() * (sensor.max - sensor.min) + sensor.min).toFixed(1);
        valueElement.textContent = randomValue;
        
        // Efeito de atualização
        sensor.element.style.animation = 'none';
        setTimeout(() => {
            sensor.element.style.animation = 'highlight 0.5s';
        }, 10);
    });

    // Atualizar progresso
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-info span:last-child');
    const newProgress = Math.min(parseInt(progressFill.style.width) + (Math.random() * 5), 100);
    progressFill.style.width = `${newProgress}%`;
    progressText.textContent = `${Math.round(newProgress)}% concluído`;
}

// Controle do botão de energia
document.querySelector('.power-btn').addEventListener('click', function() {
    isPoweredOn = !isPoweredOn;
    
    const statusIcon = document.querySelector('.status-icon');
    const pulseRing = document.querySelector('.pulse-ring');
    const statusText = document.querySelector('.status-indicator span');
    const powerBtn = this;
    
    if (isPoweredOn) {
        // Ligar módulo
        statusIcon.innerHTML = '<i class="fas fa-check"></i><div class="pulse-ring"></div>';
        statusIcon.style.backgroundColor = 'var(--primary)';
        statusText.textContent = 'Operacional';
        pulseRing.style.display = 'block';
        powerBtn.innerHTML = '<i class="fas fa-power-off"></i> Desligar';
        powerBtn.classList.remove('on');
        powerBtn.style.backgroundColor = 'var(--danger)';
        
        // Reiniciar atualizações
        simulateSensorUpdates();
        sensorInterval = setInterval(simulateSensorUpdates, 5000);
    } else {
        // Desligar módulo
        statusIcon.innerHTML = '<i class="fas fa-power-off"></i>';
        statusIcon.style.backgroundColor = '#666';
        statusText.textContent = 'Desligado';
        pulseRing.style.display = 'none';
        powerBtn.innerHTML = '<i class="fas fa-power-on"></i> Ligar';
        powerBtn.classList.add('on');
        powerBtn.style.backgroundColor = 'var(--success)';
        
        // Parar atualizações
        clearInterval(sensorInterval);
    }
    
    // Efeito visual
    this.classList.add('active');
    setTimeout(() => {
        this.classList.remove('active');
    }, 300);
});

// Botão de calibrar
document.querySelector('.calibrate-btn').addEventListener('click', function() {
    if (!isPoweredOn) {
        alert('Ligue o módulo antes de calibrar!');
        return;
    }
    
    // Efeito de calibração
    const sensors = document.querySelectorAll('.sensor-item');
    sensors.forEach(sensor => {
        sensor.style.animation = 'calibrate 1.5s';
    });
    
    this.classList.add('active');
    setTimeout(() => {
        this.classList.remove('active');
        alert('Sensores calibrados com sucesso!');
    }, 1500);
});

// Botão de reiniciar
document.querySelector('.restart-btn').addEventListener('click', function() {
    if (!isPoweredOn) {
        alert('Ligue o módulo antes de reiniciar!');
        return;
    }
    
    // Efeito de reinício
    document.querySelector('.hydroponic-card').style.animation = 'reboot 1s';
    
    this.classList.add('active');
    setTimeout(() => {
        this.classList.remove('active');
        alert('Módulo reiniciado com sucesso!');
    }, 1000);
});

// Edição do título
document.getElementById('saveTitleBtn').addEventListener('click', function() {
    const titleElement = document.getElementById('moduleTitle');
    moduleTitle = titleElement.textContent;
    alert('Título salvo com sucesso!');
});

// Inicialização
let sensorInterval;
window.onload = function() {
    // Configura título editável
    document.getElementById('moduleTitle').textContent = moduleTitle;
    
    // Inicia atualizações dos sensores
    simulateSensorUpdates();
    sensorInterval = setInterval(simulateSensorUpdates, 5000);
};