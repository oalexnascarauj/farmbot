// Simple FarmBot Website Script - No internationalization, focused on parallax and basic functionality

document.addEventListener('DOMContentLoaded', function() {
    // Typing Animation for AI Roles
    function initTypingAnimation() {
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        const roles = ['Hidroponista', 'Agricultora', 'Aquaponista'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeRole() {
            const currentRole = roles[roleIndex];
            
            if (!isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentRole.length) {
                    isDeleting = true;
                    typingSpeed = 50;
                    setTimeout(typeRole, 2000); // Pause before deleting
                    return;
                }
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    typingSpeed = 100;
                }
            }
            
            setTimeout(typeRole, typingSpeed);
        }
        
        typeRole();
    }

    // AI Chat Simulation
    function initChatSimulation() {
        const chatMessages = document.querySelector('.chat-messages');
        const chatInput = document.querySelector('.chat-input');
        const currentCrop = document.getElementById('current-crop');
        
        if (!chatMessages || !chatInput || !currentCrop) return;

        const scenarios = [
            {
                crop: 'Alface Hidropônica',
                userMessage: 'Iara, como está minha alface?',
                aiAnalysis: 'Analisando seus dados... Detectei que os nutrientes estão em 45% - abaixo do ideal. Recomendo aumentar a solução nutritiva em 30% e ajustar o pH para 6.0. Posso aplicar esses ajustes agora?',
                userResponse: 'Sim, pode aplicar!'
            },
            {
                crop: 'Tomate Cereja',
                userMessage: 'Preciso ajustar alguma coisa?',
                aiAnalysis: 'Acabei de detectar que a temperatura está 2°C acima do ideal. Vou ativar a ventilação e reduzir a intensidade da iluminação em 15%. Também sugiro aumentar a irrigação. Aplicar mudanças?',
                userResponse: 'Perfeito, aplique!'
            },
            {
                crop: 'Manjericão',
                userMessage: 'Como otimizar o crescimento?',
                aiAnalysis: 'Seus dados mostram ótimo potencial! Recomendo aumentar o período de luz em 2h/dia e elevar os nutrientes de potássio em 20%. Isso pode acelerar o crescimento em 25%. Posso implementar?',
                userResponse: 'Sim, implementar agora!'
            }
        ];

        let currentScenario = 0;
        let conversationStep = 0;

        function typeInInput(text, callback) {
            chatInput.value = '';
            chatInput.classList.add('typing-input');
            let currentChar = 0;
            
            const typeChar = () => {
                if (currentChar < text.length) {
                    chatInput.value += text[currentChar];
                    currentChar++;
                    setTimeout(typeChar, 50 + Math.random() * 50);
                } else {
                    chatInput.classList.remove('typing-input');
                    setTimeout(() => {
                        chatInput.value = '';
                        callback();
                    }, 800);
                }
            };
            
            typeChar();
        }

        function addMessage(content, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
            messageDiv.textContent = content;
            
            chatMessages.appendChild(messageDiv);
            
            // Smooth scroll to bottom
            setTimeout(() => {
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 100);
        }

        function addTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message ai-message typing-message';
            typingDiv.innerHTML = `
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `;
            
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            return typingDiv;
        }

        function simulateConversation() {
            const scenario = scenarios[currentScenario];
            
            // Update cultivation info
            currentCrop.textContent = scenario.crop;
            
            if (conversationStep === 0) {
                // User types first message
                typeInInput(scenario.userMessage, () => {
                    addMessage(scenario.userMessage, true);
                    conversationStep = 1;
                    setTimeout(simulateConversation, 1000);
                });
            } else if (conversationStep === 1) {
                // AI responds with analysis
                const typingDiv = addTypingIndicator();
                setTimeout(() => {
                    chatMessages.removeChild(typingDiv);
                    addMessage(scenario.aiAnalysis, false);
                    conversationStep = 2;
                    setTimeout(simulateConversation, 2000);
                }, 2500);
            } else if (conversationStep === 2) {
                // User responds to AI recommendation
                typeInInput(scenario.userResponse, () => {
                    addMessage(scenario.userResponse, true);
                    conversationStep = 0;
                    currentScenario = (currentScenario + 1) % scenarios.length;
                    
                    // Clear messages after conversation to prevent overflow
                    setTimeout(() => {
                        if (chatMessages.children.length > 6) {
                            while (chatMessages.children.length > 2) {
                                chatMessages.removeChild(chatMessages.firstChild);
                            }
                        }
                        setTimeout(simulateConversation, 3000);
                    }, 1500);
                });
            }
        }
        
        // Start simulation after 2 seconds
        setTimeout(simulateConversation, 2000);
    }

    // Parallax Effect
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        function updateParallax() {
            parallaxElements.forEach(element => {
                const rect = element.parentElement.getBoundingClientRect();
                const speed = 0.5;
                const yPos = -(rect.top * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }

        // Only enable parallax on desktop devices
        if (window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            window.addEventListener('scroll', updateParallax);
            updateParallax(); // Initial call
        }
    }

    // Mobile Menu Toggle
    function initMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', function() {
                navLinks.classList.toggle('mobile-open');
                mobileToggle.classList.toggle('active');
            });
        }
    }

    // Smooth scrolling for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Navbar background on scroll
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Button interactions and form handling
    function initButtonHandlers() {
        // Primary CTA buttons
        document.querySelectorAll('.btn-primary').forEach(button => {
            button.addEventListener('click', function(e) {
                const buttonText = this.textContent.trim();
                
                // Handle different button actions
                switch(buttonText) {
                    case 'Começar Agora':
                    case 'Experimente Grátis':
                    case 'Começar Gratuitamente':
                        handleStartNow();
                        break;
                    case 'Consultoria Gratuita':
                    case 'Solicitar Proposta':
                        handleConsultation();
                        break;
                    default:
                        console.log('Button clicked:', buttonText);
                }
            });
        });

        // Secondary buttons
        document.querySelectorAll('.btn-secondary, .btn-outline').forEach(button => {
            button.addEventListener('click', function(e) {
                const buttonText = this.textContent.trim();
                
                switch(buttonText) {
                    case 'Ver Demonstração':
                    case 'Agendar Apresentação':
                        handleDemo();
                        break;
                    case 'Falar com Especialista':
                        handleExpert();
                        break;
                    default:
                        console.log('Secondary button clicked:', buttonText);
                }
            });
        });
    }

    // Button action handlers
    function handleStartNow() {
        alert('Funcionalidade em desenvolvimento! Em breve você poderá criar sua conta e começar a usar o FarmBot.');
    }

    function handleDemo() {
        alert('Demonstração em desenvolvimento! Em breve você poderá agendar uma demonstração ao vivo do FarmBot.');
    }

    function handleConsultation() {
        alert('Entre em contato conosco em contato@farmbot.com.br para agendar uma consultoria gratuita!');
    }

    function handleExpert() {
        alert('Para falar com um especialista, envie um email para contato@farmbot.com.br ou ligue (11) 9999-9999.');
    }

    // Animate elements on scroll
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe cards and sections
        document.querySelectorAll('.benefit-card, .audience-card, .tech-item, .value-card, .educational-card, .story-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Sensor data simulation (for dashboard preview)
    function initSensorSimulation() {
        const sensorValues = document.querySelectorAll('.sensor-value');
        const sensorStatuses = document.querySelectorAll('.sensor-status');
        
        if (sensorValues.length === 0) return;

        const sensorData = {
            ph: { min: 5.5, max: 7.0, unit: '', current: 6.2 },
            temperature: { min: 20, max: 28, unit: '°C', current: 24 },
            nutrients: { min: 70, max: 100, unit: '%', current: 85 }
        };

        function updateSensorValues() {
            sensorValues.forEach((element, index) => {
                const sensors = Object.keys(sensorData);
                const sensorKey = sensors[index];
                const sensor = sensorData[sensorKey];
                
                if (sensor) {
                    // Simulate small variations
                    const variation = (Math.random() - 0.5) * 0.2;
                    sensor.current = Math.max(sensor.min, Math.min(sensor.max, sensor.current + variation));
                    
                    const displayValue = sensor.unit === '%' ? 
                        Math.round(sensor.current) + sensor.unit :
                        sensor.current.toFixed(1) + sensor.unit;
                    
                    element.textContent = displayValue;
                    
                    // Update status
                    const statusElement = sensorStatuses[index];
                    if (statusElement) {
                        const isOptimal = sensor.current >= sensor.min + (sensor.max - sensor.min) * 0.3;
                        statusElement.className = `sensor-status ${isOptimal ? 'ok' : 'warning'}`;
                        statusElement.textContent = isOptimal ? 'Normal' : 'Atenção';
                    }
                }
            });
        }

        // Update every 3 seconds
        setInterval(updateSensorValues, 3000);
    }

    // Add loading states to buttons
    function addButtonLoadingStates() {
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                if (!this.classList.contains('loading')) {
                    const originalText = this.textContent;
                    this.classList.add('loading');
                    this.textContent = 'Carregando...';
                    
                    setTimeout(() => {
                        this.classList.remove('loading');
                        this.textContent = originalText;
                    }, 2000);
                }
            });
        });
    }

    // Initialize all functions
    initTypingAnimation();
    initChatSimulation();
    initParallax();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initButtonHandlers();
    initScrollAnimations();
    initSensorSimulation();
    addButtonLoadingStates();

    // Performance optimization - debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Re-initialize parallax on window resize
    window.addEventListener('resize', debounce(function() {
        if (window.innerWidth <= 768) {
            // Disable parallax on mobile
            document.querySelectorAll('.parallax-bg').forEach(element => {
                element.style.transform = 'none';
            });
        } else {
            initParallax();
        }
    }, 250));

    console.log('FarmBot website loaded successfully! 🌱');
});

// Add some CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s ease;
    }
    
    .benefit-card,
    .audience-card,
    .tech-item,
    .value-card,
    .educational-card,
    .story-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    }
    
    @media (max-width: 768px) {
        .nav-links.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 1rem;
            gap: 1rem;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
    
    button.loading {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);

// Navbar Hide/Show Animation
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let scrollTimeout;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Aplicar comportamento transparente em TODAS as páginas com classe index-page
    if (document.body.classList.contains('index-page')) {
        // Add scrolled class for glass effect
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide navbar
            navbar.classList.add('hidden');
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove('hidden');
        }
    } else {
        // Comportamento padrão para páginas sem index-page
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
    }
    
    lastScrollTop = scrollTop;
    
    // Clear any existing timeout
    clearTimeout(scrollTimeout);
    
    // Show navbar after scroll stops
    scrollTimeout = setTimeout(() => {
        navbar.classList.remove('hidden');
    }, 150);
});
