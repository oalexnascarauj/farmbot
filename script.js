// Variáveis de estado
let isPoweredOn = true;
let isPaused = false;
let moduleTitle = "Alface Crespa";
let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let countdownInterval = null;
let pauseTimeRemaining = 15 * 60; // 15 minutos em segundos
let currentProgress = 35; // Progresso atual do ciclo de vida da planta

// Alternar tema claro/escuro
function toggleTheme() {
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        darkMode = false;
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        darkMode = true;
    }
    
    // Animação de transição para o card
    const card = document.querySelector('.hydroponic-card');
    card.classList.add('theme-transition');
    setTimeout(() => {
        card.classList.remove('theme-transition');
    }, 500);
    
    // Salvar preferência no localStorage
    localStorage.setItem('darkMode', darkMode);
}

// Configurar tema inicial baseado na preferência salva ou sistema
function setInitialTheme() {
    const savedDarkMode = localStorage.getItem('darkMode');
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    if (savedDarkMode !== null) {
        darkMode = savedDarkMode === 'true';
    }
    
    if (darkMode) {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Atualização dinâmica dos sensores
function simulateSensorUpdates() {
    if (!isPoweredOn || isPaused) return;

    const sensors = [
        { element: document.querySelectorAll('.sensor-item')[0], min: 22, max: 28, unit: '°C' },
        { element: document.querySelectorAll('.sensor-item')[1], min: 5.8, max: 6.5, unit: 'pH' },
        { element: document.querySelectorAll('.sensor-item')[2], min: 2.0, max: 2.8, unit: 'mS/cm' },
        { element: document.querySelectorAll('.sensor-item')[3], min: 80, max: 95, unit: '%' }
    ];

    // Atualizar valores com animação sequencial
    const updateWithDelay = (index) => {
        if (index >= sensors.length) return;
        
        const sensor = sensors[index];
        const valueElement = sensor.element.querySelector('.value');
        const currentValue = parseFloat(valueElement.textContent);
        const targetValue = parseFloat((Math.random() * (sensor.max - sensor.min) + sensor.min).toFixed(1));
        
        // Animação suave do valor
        animateValue(valueElement, currentValue, targetValue, 500);
        
        // Efeito visual
        sensor.element.classList.add('updating');
        setTimeout(() => {
            sensor.element.classList.remove('updating');
            updateWithDelay(index + 1);
        }, 300);
    };
    
    updateWithDelay(0);

    // Atualizar progresso
    const progressBar = document.querySelector('.timeline-progress');
    const progressText = document.querySelector('.details-progress');
    
    // Simular um pequeno avanço no progresso a cada atualização se estiver operacional
    if (isPoweredOn && !isPaused) {
        currentProgress = Math.min(currentProgress + (Math.random() * 0.5), 100);
        
        // Atualizar barra de progresso na timeline
        progressBar.style.width = `${currentProgress}%`;
        progressText.textContent = `${Math.round(currentProgress)}% concluído`;
        
        // Atualizar estados dos nós da timeline
        updateTimeline(currentProgress);
    }
}

// Animação suave para valores numéricos
function animateValue(element, start, end, duration) {
    const range = end - start;
    const minFrame = 30;
    const increment = Math.abs(range) < 1 ? 0.1 : 1;
    let startTime = null;
    
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = start + (progress * range);
        element.textContent = value.toFixed(1);
        
        if (progress < 1) {
            window.requestAnimationFrame(animate);
        }
    }
    
    window.requestAnimationFrame(animate);
}

// Configuração da timeline futurística
function setupFuturisticTimeline() {
    const progressBar = document.querySelector('.timeline-progress');
    const timelineNodes = document.querySelectorAll('.timeline-node');
    
    // Inicializar a barra de progresso com o valor atual
    progressBar.style.width = `${currentProgress}%`;
    
    // Detalhes das fases
    const phaseDetails = {
        'plantio': {
            icon: 'fa-seedling',
            title: 'Fase Atual: Plantio',
            description: 'Germinação das sementes e início do desenvolvimento'
        },
        'crescimento': {
            icon: 'fa-leaf',
            title: 'Fase Atual: Crescimento',
            description: 'Desenvolvimento vegetativo e expansão foliar'
        },
        'floracao': {
            icon: 'fa-spa',
            title: 'Fase Atual: Floração',
            description: 'Formação de flores e início da produção de frutos'
        },
        'colheita': {
            icon: 'fa-apple-alt',
            title: 'Fase Atual: Colheita',
            description: 'Maturação e ponto ideal para colheita'
        }
    };
    
    // Atualizar estados dos nós com base no progresso
    timelineNodes.forEach(node => {
        const position = parseInt(node.getAttribute('data-position'));
        const phase = node.getAttribute('data-phase');
        
        // Marcar nós completados e ativos
        if (position < currentProgress) {
            node.classList.add('completed');
        } else if (position >= currentProgress && position <= currentProgress + 33) {
            node.classList.add('current');
            node.classList.add('active');
            
            // Atualizar detalhes da fase atual
            updatePhaseDetails(phase);
        }
        
        // Adicionar eventos de clique
        node.addEventListener('click', () => {
            // Mostrar detalhes da fase
            updatePhaseDetails(phase);
            
            // Efeito visual de seleção
            timelineNodes.forEach(n => n.classList.remove('selected'));
            node.classList.add('selected');
        });
    });
    
    // Adicionar efeito de pulsação aos nós ativos
    animateActiveNodes();
}

// Atualizar a informação de detalhes da fase
function updatePhaseDetails(phase) {
    const detailsContainer = document.querySelector('.timeline-details');
    const detailsIcon = detailsContainer.querySelector('.timeline-details-icon i');
    const detailsTitle = detailsContainer.querySelector('.details-title');
    const detailsDescription = detailsContainer.querySelector('.details-description');
    
    const phaseDetails = {
        'plantio': {
            icon: 'fa-seedling',
            title: 'Fase Atual: Plantio',
            description: 'Germinação das sementes e início do desenvolvimento'
        },
        'crescimento': {
            icon: 'fa-leaf',
            title: 'Fase Atual: Crescimento',
            description: 'Desenvolvimento vegetativo e expansão foliar'
        },
        'floracao': {
            icon: 'fa-spa',
            title: 'Fase Atual: Floração',
            description: 'Formação de flores e início da produção de frutos'
        },
        'colheita': {
            icon: 'fa-apple-alt',
            title: 'Fase Atual: Colheita',
            description: 'Maturação e ponto ideal para colheita'
        }
    };
    
    // Aplicar efeito de fade-out/fade-in durante a troca
    detailsContainer.style.opacity = '0';
    
    setTimeout(() => {
        // Atualizar conteúdo
        detailsIcon.className = `fas ${phaseDetails[phase].icon}`;
        detailsTitle.textContent = phaseDetails[phase].title;
        detailsDescription.textContent = phaseDetails[phase].description;
        
        // Fade in
        detailsContainer.style.opacity = '1';
    }, 300);
}

// Animar nós ativos
function animateActiveNodes() {
    const activeNodes = document.querySelectorAll('.timeline-node.active');
    activeNodes.forEach(node => {
        const pulseElement = node.querySelector('.node-pulse');
        if (pulseElement) {
            pulseElement.style.animation = 'node-pulse 2s infinite';
        }
    });
}

// Atualizar timeline quando o progresso mudar
function updateTimeline(progress) {
    const progressBar = document.querySelector('.timeline-progress');
    const timelineNodes = document.querySelectorAll('.timeline-node');
    
    // Animar a barra de progresso
    progressBar.style.width = `${progress}%`;
    
    // Atualizar estados dos nós
    timelineNodes.forEach(node => {
        const position = parseInt(node.getAttribute('data-position'));
        
        // Reset de classes
        node.classList.remove('completed', 'current', 'active');
        
        // Marcar nós completados e atual
        if (position < progress) {
            node.classList.add('completed');
        } else if (position >= progress && position <= progress + 33) {
            node.classList.add('current');
            node.classList.add('active');
            
            // Atualizar detalhes da fase atual
            const phase = node.getAttribute('data-phase');
            updatePhaseDetails(phase);
        }
    });
    
    // Reanimar nós ativos
    animateActiveNodes();
}

// Gerenciar os estados do botão de energia (3 estados: ligado -> pausado -> desligado)
function togglePowerState() {
    const powerBtn = document.querySelector('.power-btn');
    const statusIcon = document.querySelector('.status-icon');
    const statusText = document.querySelector('.status-indicator span');
    const pauseCountdown = document.getElementById('pauseCountdown');
    const card = document.querySelector('.hydroponic-card');
    
    // Ciclo entre os 3 estados: Ligado -> Pausado -> Desligado -> Ligado
    if (isPoweredOn && !isPaused) {
        // Mudar para estado Pausado
        isPaused = true;
        
        // Atualizar UI para pausado
        statusIcon.innerHTML = '<i class="fas fa-pause"></i>';
        statusIcon.style.backgroundColor = '#FF9800';
        statusText.textContent = 'Pausado';
        powerBtn.innerHTML = '<i class="fas fa-power-off"></i> Desligar';
        powerBtn.classList.add('paused');
        powerBtn.classList.remove('off');
        
        // Mostrar contador como overlay e aplicar blur ao card
        pauseCountdown.classList.add('active');
        card.classList.add('blurred');
        startPauseCountdown();
        
        // Efeito visual
        document.querySelectorAll('.sensor-item').forEach(sensor => {
            sensor.classList.add('deactivated');
        });
        
    } else if (isPaused) {
        // Perguntar se deseja desligar completamente
        showEndCycleConfirmation();
        
    } else {
        // Mudar para estado Ligado
        isPoweredOn = true;
        
        // Atualizar UI para ligado
        statusIcon.innerHTML = '<div class="pulse-ring"></div><i class="fas fa-check"></i>';
        statusIcon.style.backgroundColor = 'var(--primary)';
        statusText.textContent = 'Operacional';
        powerBtn.innerHTML = '<i class="fas fa-pause"></i> Pausar';
        powerBtn.classList.remove('paused', 'off');
        
        // Ocultar countdown e remover blur se estiver visível
        pauseCountdown.classList.remove('active');
        card.classList.remove('blurred');
        stopPauseCountdown();
        
        // Animação de ativação
        document.querySelectorAll('.sensor-item').forEach(sensor => {
            sensor.style.opacity = '0.5';
            setTimeout(() => {
                sensor.style.opacity = '1';
                sensor.classList.add('activated');
                sensor.classList.remove('deactivated');
                setTimeout(() => sensor.classList.remove('activated'), 500);
            }, 300);
        });
        
        // Reiniciar atualizações
        simulateSensorUpdates();
        sensorInterval = setInterval(simulateSensorUpdates, 5000);
    }
    
    // Efeito visual no botão
    powerBtn.classList.add('active');
    setTimeout(() => {
        powerBtn.classList.remove('active');
    }, 300);
}

// Mostrar o modal de confirmação para encerrar o ciclo
function showEndCycleConfirmation() {
    const modal = document.getElementById('endCycleModal');
    modal.classList.add('active');
}

// Encerrar o ciclo completamente
function endCycle() {
    const powerBtn = document.querySelector('.power-btn');
    const statusIcon = document.querySelector('.status-icon');
    const statusText = document.querySelector('.status-indicator span');
    const pauseCountdown = document.getElementById('pauseCountdown');
    const card = document.querySelector('.hydroponic-card');
    const modal = document.getElementById('endCycleModal');
    
    // Fechar o modal
    modal.classList.remove('active');
    
    // Mudar para estado Desligado
    isPoweredOn = false;
    isPaused = false;
    
    // Atualizar UI para desligado
    statusIcon.innerHTML = '<i class="fas fa-power-off"></i>';
    statusIcon.style.backgroundColor = '#666';
    statusText.textContent = 'Desligado';
    powerBtn.innerHTML = '<i class="fas fa-power-on"></i> Ligar';
    powerBtn.classList.remove('paused');
    powerBtn.classList.add('off');
    
    // Ocultar countdown e remover blur
    pauseCountdown.classList.remove('active');
    card.classList.remove('blurred');
    stopPauseCountdown();
    
    // Parar atualizações
    clearInterval(sensorInterval);
    
    // Mostrar notificação de dados enviados
    showNotification('Ciclo encerrado. Dados enviados para série histórica.', 'success');
}

// Iniciar o countdown de pausa
function startPauseCountdown() {
    const minutesElement = document.querySelector('.countdown-minutes');
    const secondsElement = document.querySelector('.countdown-seconds');
    
    // Reiniciar o tempo para 15 minutos
    pauseTimeRemaining = 15 * 60;
    updateCountdownDisplay();
    
    // Limpar intervalo anterior se existir
    if (countdownInterval) clearInterval(countdownInterval);
    
    // Iniciar novo intervalo
    countdownInterval = setInterval(() => {
        pauseTimeRemaining--;
        updateCountdownDisplay();
        
        // Se o tempo acabar, religar automaticamente
        if (pauseTimeRemaining <= 0) {
            isPaused = false;
            togglePowerState(); // Religar o sistema
        }
    }, 1000);
}

// Parar o countdown de pausa
function stopPauseCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

// Atualizar o display do countdown
function updateCountdownDisplay() {
    const minutes = Math.floor(pauseTimeRemaining / 60);
    const seconds = pauseTimeRemaining % 60;
    
    document.querySelector('.countdown-minutes').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('.countdown-seconds').textContent = seconds.toString().padStart(2, '0');
}

// Função para atualizar manualmente os sensores
function updateSensors() {
    if (!isPoweredOn) {
        showNotification('Ligue o módulo antes de atualizar!', 'warning');
        return;
    }
    
    if (isPaused) {
        showNotification('Retome a operação antes de atualizar!', 'warning');
        return;
    }
    
    // Efeito visual no botão
    const updateBtn = document.querySelector('.update-btn');
    updateBtn.classList.add('active');
    
    // Efeito de atualização nos sensores
    document.querySelectorAll('.sensor-item').forEach((sensor, index) => {
        setTimeout(() => {
            sensor.classList.add('updating');
            setTimeout(() => sensor.classList.remove('updating'), 700);
        }, index * 100);
    });
    
    // Forçar atualização dos sensores
    simulateSensorUpdates();
    
    // Restaurar botão
    setTimeout(() => {
        updateBtn.classList.remove('active');
        showNotification('Sensores atualizados com sucesso!', 'success');
    }, 800);
}

// Salvar o título automaticamente ao perder foco
function setupTitleEditing() {
    const titleElement = document.getElementById('moduleTitle');
    
    // Salvar ao perder foco
    titleElement.addEventListener('blur', function() {
        const newTitle = this.textContent.trim();
        if (newTitle && newTitle !== moduleTitle) {
            moduleTitle = newTitle;
            
            // Garantir que o ícone permaneça
            if (!titleElement.querySelector('i')) {
                titleElement.innerHTML = `<i class="fas fa-seedling"></i> ${moduleTitle}`;
            }
            
            // Salvar no localStorage
            localStorage.setItem('moduleTitle', moduleTitle);
            
            // Feedback visual discreto
            showNotification('Nome salvo com sucesso!', 'success');
        }
    });
    
    // Preservar o ícone ao editar
    titleElement.addEventListener('focus', function() {
        // Armazenar a posição do cursor
        const selection = window.getSelection();
        const range = document.createRange();
        
        // Verificar se há um nó de texto após o ícone
        const textNode = Array.from(this.childNodes).find(node => 
            node.nodeType === Node.TEXT_NODE && node.textContent.trim()
        );
        
        if (textNode) {
            // Colocar o cursor no início do texto
            range.setStart(textNode, 1);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    });
    
    // Impedir que se apague o ícone
    titleElement.addEventListener('keydown', function(e) {
        const icon = this.querySelector('i');
        if (icon) {
            const selection = window.getSelection();
            if (selection.anchorOffset === 0 && selection.isCollapsed && e.key === 'Backspace') {
                e.preventDefault();
            }
        }
    });
}

// Exibir notificações estilizadas em vez de alerts
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        </div>
        <div class="notification-message">${message}</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Adicionar estilos de notificação dinamicamente
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: var(--card-bg);
            color: var(--text-primary);
            border-left: 4px solid var(--primary);
            border-radius: 8px;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 5px 15px var(--shadow-color);
            z-index: 1000;
            opacity: 0;
            transition: all 0.3s ease;
            max-width: 90%;
        }
        
        .notification.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        
        .notification.success { border-left-color: var(--success); }
        .notification.warning { border-left-color: var(--warning); }
        
        .notification-icon {
            font-size: 1.2rem;
        }
        
        .notification.success .notification-icon { color: var(--success); }
        .notification.warning .notification-icon { color: var(--warning); }
        
        .notification-message {
            font-size: 0.9rem;
        }
        
        @keyframes calibrating {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(5deg); }
            75% { transform: rotate(-5deg); }
            100% { transform: rotate(0deg); }
        }
        
        .sensor-item.calibrating {
            animation: calibrating 0.5s infinite;
        }
        
        .sensor-item.updating {
            background-color: var(--card-bg-secondary);
            box-shadow: 0 0 0 2px var(--primary-light);
        }
        
        .sensor-item.activated {
            animation: fadeIn 0.5s;
        }
        
        .sensor-item.deactivated {
            opacity: 0.5;
            filter: grayscale(0.8);
            transition: all 0.5s;
        }
        
        .hydroponic-card.rebooting {
            animation: reboot 2s;
        }
        
        .hydroponic-card.theme-transition {
            transition: transform 0.5s, box-shadow 0.5s;
            transform: scale(0.98);
        }
        
        .hydroponic-card.blurred {
            filter: blur(5px);
        }
        
        @keyframes reboot {
            0% { opacity: 1; filter: blur(0); }
            50% { opacity: 0.5; filter: blur(4px); }
            100% { opacity: 1; filter: blur(0); }
        }
    `;
    
    document.head.appendChild(style);
}

// Abrir modal de configurações
function openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    modal.classList.add('active');
}

// Gerenciar tabs do modal de configurações
function setupSettingsTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover classe ativa de todos os botões e panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Adicionar classe ativa ao botão clicado
            button.classList.add('active');
            
            // Ativar a tab correspondente
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Fechar modais
function setupModalClosers() {
    const closeButtons = document.querySelectorAll('.close-modal');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encontrar o modal pai e fechá-lo
            const modal = button.closest('.modal');
            modal.classList.remove('active');
        });
    });
    
    // Fechar modais ao clicar fora
    window.addEventListener('click', (event) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Botão de cancelar do modal de encerramento
    document.getElementById('cancelEndCycle').addEventListener('click', () => {
        document.getElementById('endCycleModal').classList.remove('active');
    });
    
    // Botão de confirmar do modal de encerramento
    document.getElementById('confirmEndCycle').addEventListener('click', endCycle);
    
    // Botão salvar configurações
    document.getElementById('saveSettings').addEventListener('click', () => {
        document.getElementById('settingsModal').classList.remove('active');
        showNotification('Configurações salvas com sucesso', 'success');
    });
}

// Inicialização
let sensorInterval;
window.onload = function() {
    // Adicionar estilos de notificação
    addNotificationStyles();
    
    // Configurar tema inicial
    setInitialTheme();
    
    // Carregar título salvo ou usar padrão
    const savedTitle = localStorage.getItem('moduleTitle');
    if (savedTitle) {
        moduleTitle = savedTitle;
    }
    
    // Configura título editável
    document.getElementById('moduleTitle').innerHTML = `<i class="fas fa-seedling"></i> ${moduleTitle}`;
    setupTitleEditing();
    
    // Configurar eventos de botões
    document.querySelector('.power-btn').addEventListener('click', togglePowerState);
    document.querySelector('.update-btn').addEventListener('click', updateSensors);
    document.querySelector('.countdown-resume-btn').addEventListener('click', function() {
        isPaused = false;
        const pauseCountdown = document.getElementById('pauseCountdown');
        const card = document.querySelector('.hydroponic-card');
        
        // Ocultar overlay e remover blur
        pauseCountdown.classList.remove('active');
        card.classList.remove('blurred');
        stopPauseCountdown();
        
        // Religar o sistema
        togglePowerState();
    });
    
    document.querySelector('.countdown-stop-btn').addEventListener('click', function() {
        showEndCycleConfirmation();
    });
    
    // Configurar clique no ícone de engrenagem
    document.querySelector('.options-btn').addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        openSettingsModal();
    });
    
    // Configurar tabs do modal de configurações
    setupSettingsTabs();
    
    // Configurar fechamento de modais
    setupModalClosers();
    
    // Atualizar UI inicial do botão de energia
    document.querySelector('.power-btn').innerHTML = '<i class="fas fa-pause"></i> Pausar';
    
    // Iniciar com animação de entrada
    const card = document.querySelector('.hydroponic-card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
    
    // Configurar a timeline futurística
    setupFuturisticTimeline();
    
    // Inicia atualizações dos sensores
    simulateSensorUpdates();
    sensorInterval = setInterval(simulateSensorUpdates, 5000);
};