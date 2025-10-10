// Internationalization System
const translations = {
    pt: {
        brand_title: "🌱 FarmBot",
        nav_features: "Recursos",
        nav_how_it_works: "Como Funciona",
        nav_target: "Para Quem",
        nav_agro: "Agronegócio",
        nav_contact: "Contato",
        nav_start: "Começar Agora",
        language: "PT",
        lang_portuguese: "Português (Brasil)",
        lang_arabic: "Árabe (Jordânia)",
        lang_english: "Inglês (EUA)",
        lang_spanish: "Espanhol",
        hero_title: "Agricultura Urbana <span class=\"highlight\">Inteligente</span>",
        hero_subtitle: "Monitore e controle seu cultivo hidropônico de qualquer lugar do mundo com nossa plataforma completa de IoT.",
        hero_monitoring: "Monitoramento 24/7",
        hero_automation: "Automação Inteligente",
        hero_remote: "Controle Remoto",
        hero_try_free: "Experimente Grátis",
        hero_demo: "Ver Demonstração",
        dashboard_status_online: "Sistema Online",
        sensor_ph: "pH",
        sensor_temperature: "Temperatura",
        sensor_nutrients: "Nutrientes",
        status_normal: "Normal",
        status_low: "Baixo",
        agro_title: "O Futuro do Agronegócio Brasileiro",
        agro_description: "O Brasil é líder mundial em produção agrícola, e a tecnologia está revolucionando este setor. O FarmBot representa a próxima fronteira da agricultura digital.",
        agro_stat1: "do PIB brasileiro",
        agro_stat2: "faturamento anual",
        agro_stat3: "empregos gerados",
        agro_highlight1: "Crescimento de 40% na agricultura digital",
        agro_highlight2: "Economia de até 60% no uso da água",
        agro_highlight3: "Aumento de 30% na produtividade",
        benefits_title: "Por que escolher o FarmBot?",
        benefit_monitoring_title: "Monitoramento Completo",
        benefit_monitoring_desc: "Acompanhe pH, temperatura, condutividade elétrica, umidade e níveis de água e nutrientes em tempo real.",
        benefit_alerts_title: "Alertas Proativos",
        benefit_alerts_desc: "Receba notificações imediatas quando parâmetros saem do ideal, evitando perdas na produção.",
        benefit_history_title: "Histórico Detalhado",
        benefit_history_desc: "Analise tendências e padrões com gráficos interativos para otimizar seus cultivos.",
        benefit_automation_title: "Automação Inteligente",
        benefit_automation_desc: "Sistema automatizado de irrigação, nutrição e controle baseado em perfis de cultivo.",
        benefit_security_title: "Seguro e Confiável",
        benefit_security_desc: "Comunicação criptografada e sistema robusto com backup automático dos seus dados.",
        benefit_remote_title: "Acesso Remoto",
        benefit_remote_desc: "Controle total via web de qualquer lugar do mundo, através de qualquer dispositivo.",
        how_title: "Como Funciona",
        how_step1_title: "Conecte seu Dispositivo",
        how_step1_desc: "Escaneie o QR Code e vincule seu FarmBot à plataforma de forma simples e rápida.",
        how_step2_title: "Configure seu Cultivo",
        how_step2_desc: "Escolha entre perfis pré-definidos ou crie configurações personalizadas para suas plantas.",
        how_step3_title: "Monitore em Tempo Real",
        how_step3_desc: "Acompanhe todos os parâmetros vitais através do dashboard intuitivo e receba alertas automáticos.",
        how_step4_title: "Controle Remotamente",
        how_step4_desc: "Execute comandos, ajuste configurações e automatize processos de qualquer lugar.",
        audience_title: "Ideal Para",
        audience_urban_title: "Agricultores Urbanos",
        audience_urban_desc: "Pessoas que cultivam em pequenos espaços urbanos e buscam maximizar a produtividade com tecnologia.",
        audience_hydro_title: "Entusiastas da Hidroponia",
        audience_hydro_desc: "Hobbyistas interessados em cultivo sem solo que desejam controle preciso sobre o ambiente.",
        audience_smallfarm_title: "Pequenos Produtores",
        audience_smallfarm_desc: "Empreendedores rurais que buscam otimização tecnológica para aumentar a eficiência.",
        audience_educators_title: "Educadores",
        audience_educators_desc: "Escolas e universidades que utilizam a agricultura como ferramenta educacional prática.",
        features_title: "Recursos Principais",
        features_monitoring_title: "Monitoramento de Sensores",
        features_monitoring_item1: "Sensor de pH (0-14)",
        features_monitoring_item2: "Temperatura da água e ambiente",
        features_monitoring_item3: "Condutividade elétrica (EC)",
        features_monitoring_item4: "Umidade relativa",
        features_monitoring_item5: "Nível de água e nutrientes",
        features_monitoring_item6: "Leituras a cada 30 segundos",
        features_control_title: "Sistema de Controle",
        features_control_item1: "Bombas de irrigação",
        features_control_item2: "Bombas de nutrientes",
        features_control_item3: "Ventiladores",
        features_control_item4: "Válvulas controladoras",
        features_control_item5: "Comandos em tempo real",
        features_control_item6: "Histórico de operações",
        features_profiles_title: "Perfis de Cultivo",
        features_profiles_item1: "Configurações pré-definidas",
        features_profiles_item2: "Parâmetros ideais por planta",
        features_profiles_item3: "Ciclos de crescimento",
        features_profiles_item4: "Personalização avançada",
        features_profiles_item5: "Automação baseada em regras",
        features_profiles_item6: "Otimização contínua",
        features_alerts_title: "Alertas e Análises",
        features_alerts_item1: "Notificações em tempo real",
        features_alerts_item2: "Níveis de severidade",
        features_alerts_item3: "Gráficos interativos",
        features_alerts_item4: "Relatórios automáticos",
        features_alerts_item5: "Análise de tendências",
        features_alerts_item6: "Insights preditivos",
        tech_title: "Tecnologia de Ponta",
        tech_mqtt_title: "Comunicação MQTT",
        tech_mqtt_desc: "Protocolo leve e confiável para IoT com reconexão automática",
        tech_realtime_title: "Tempo Real",
        tech_realtime_desc: "WebSockets para atualizações instantâneas sem refresh",
        tech_security_title: "Segurança JWT",
        tech_security_desc: "Autenticação robusta com tokens criptografados",
        tech_backup_title: "Backup Automático",
        tech_backup_desc: "Seus dados sempre seguros com backups diários",
        cta_title: "Transforme sua Agricultura Hoje",
        cta_desc: "Junte-se à revolução da agricultura urbana inteligente. Comece gratuitamente e veja seus cultivos prosperarem com tecnologia de ponta.",
        cta_primary: "Começar Gratuitamente",
        cta_secondary: "Falar com Especialista",
        footer_brand: "🌱 FarmBot",
        footer_brand_desc: "Plataforma completa para monitoramento e controle de cultivos hidropônicos via IoT.",
        footer_product_title: "Produto",
        footer_link_features: "Recursos",
        footer_link_how: "Como Funciona",
        footer_link_pricing: "Preços",
        footer_link_docs: "Documentação",
        footer_support_title: "Suporte",
        footer_link_help: "Central de Ajuda",
        footer_link_tutorials: "Tutoriais",
        footer_link_contact: "Contato",
        footer_link_status: "Status do Sistema",
        footer_contact_title: "Contato",
        footer_contact_email: "📧 contato@farmbot.com.br",
        footer_contact_phone: "📞 +55 11 9999-9999",
        footer_contact_location: "📍 São Paulo, SP",
        footer_rights: "© 2025 FarmBot. Todos os direitos reservados."
    },
    en: {
        brand_title: "🌱 FarmBot",
        nav_features: "Features",
        nav_how_it_works: "How It Works",
        nav_target: "For Whom",
        nav_agro: "Agribusiness",
        nav_contact: "Contact",
        nav_start: "Get Started",
        language: "EN",
        lang_portuguese: "Portuguese (Brazil)",
        lang_arabic: "Arabic (Jordan)",
        lang_english: "English (US)",
        lang_spanish: "Spanish",
        hero_title: "Smart <span class=\"highlight\">Urban Agriculture</span>",
        hero_subtitle: "Monitor and control your hydroponic cultivation from anywhere with our complete IoT platform.",
        hero_monitoring: "24/7 Monitoring",
        hero_automation: "Smart Automation",
        hero_remote: "Remote Control",
        hero_try_free: "Try Free",
        hero_demo: "View Demo",
        dashboard_status_online: "System Online",
        sensor_ph: "pH",
        sensor_temperature: "Temperature",
        sensor_nutrients: "Nutrients",
        status_normal: "Normal",
        status_low: "Low",
        agro_title: "The Future of Brazilian Agribusiness",
        agro_description: "Brazil is a world leader in agricultural production; technology is transforming this sector. FarmBot is the next frontier of digital agriculture.",
        agro_stat1: "of Brazil's GDP",
        agro_stat2: "annual revenue",
        agro_stat3: "jobs created",
        agro_highlight1: "40% growth in digital agriculture",
        agro_highlight2: "Up to 60% water savings",
        agro_highlight3: "30% productivity increase",
        benefits_title: "Why choose FarmBot?",
        benefit_monitoring_title: "Comprehensive Monitoring",
        benefit_monitoring_desc: "Track pH, temperature, EC, humidity, and water/nutrient levels in real time.",
        benefit_alerts_title: "Proactive Alerts",
        benefit_alerts_desc: "Receive instant notifications when parameters leave optimal ranges.",
        benefit_history_title: "Detailed History",
        benefit_history_desc: "Analyze trends with interactive charts to optimize your crops.",
        benefit_automation_title: "Intelligent Automation",
        benefit_automation_desc: "Automated irrigation, nutrition and control system based on crop profiles.",
        benefit_security_title: "Secure & Reliable",
        benefit_security_desc: "Encrypted communication and robust system with automatic backups.",
        benefit_remote_title: "Remote Access",
        benefit_remote_desc: "Full web control from anywhere on any device.",
        how_title: "How It Works",
        how_step1_title: "Connect Your Device",
        how_step1_desc: "Scan the QR Code and link your FarmBot quickly and easily.",
        how_step2_title: "Configure Your Crop",
        how_step2_desc: "Choose predefined profiles or create custom configurations.",
        how_step3_title: "Monitor in Real Time",
        how_step3_desc: "Track all vital parameters and receive automatic alerts.",
        how_step4_title: "Control Remotely",
        how_step4_desc: "Execute commands, adjust settings and automate processes remotely.",
        audience_title: "Ideal For",
        audience_urban_title: "Urban Growers",
        audience_urban_desc: "People growing in small urban spaces seeking productivity via technology.",
        audience_hydro_title: "Hydroponics Enthusiasts",
        audience_hydro_desc: "Hobbyists wanting precise environmental control in soilless cultivation.",
        audience_smallfarm_title: "Small Producers",
        audience_smallfarm_desc: "Rural entrepreneurs seeking tech optimization for efficiency.",
        audience_educators_title: "Educators",
        audience_educators_desc: "Schools and universities using agriculture as a practical teaching tool.",
        features_title: "Key Features",
        features_monitoring_title: "Sensor Monitoring",
        features_monitoring_item1: "pH sensor (0-14)",
        features_monitoring_item2: "Water & ambient temperature",
        features_monitoring_item3: "Electrical conductivity (EC)",
        features_monitoring_item4: "Relative humidity",
        features_monitoring_item5: "Water & nutrient levels",
        features_monitoring_item6: "Readings every 30 seconds",
        features_control_title: "Control System",
        features_control_item1: "Irrigation pumps",
        features_control_item2: "Nutrient pumps",
        features_control_item3: "Fans",
        features_control_item4: "Control valves",
        features_control_item5: "Real-time commands",
        features_control_item6: "Operations history",
        features_profiles_title: "Crop Profiles",
        features_profiles_item1: "Preset configurations",
        features_profiles_item2: "Ideal parameters per plant",
        features_profiles_item3: "Growth cycles",
        features_profiles_item4: "Advanced customization",
        features_profiles_item5: "Rule-based automation",
        features_profiles_item6: "Continuous optimization",
        features_alerts_title: "Alerts & Analytics",
        features_alerts_item1: "Real-time notifications",
        features_alerts_item2: "Severity levels",
        features_alerts_item3: "Interactive charts",
        features_alerts_item4: "Automated reports",
        features_alerts_item5: "Trend analysis",
        features_alerts_item6: "Predictive insights",
        tech_title: "Cutting-Edge Technology",
        tech_mqtt_title: "MQTT Communication",
        tech_mqtt_desc: "Lightweight, reliable IoT protocol with auto reconnection",
        tech_realtime_title: "Real Time",
        tech_realtime_desc: "WebSockets for instant updates without refresh",
        tech_security_title: "JWT Security",
        tech_security_desc: "Robust authentication with encrypted tokens",
        tech_backup_title: "Automatic Backup",
        tech_backup_desc: "Your data always safe with daily backups",
        cta_title: "Transform Your Agriculture Today",
        cta_desc: "Join the smart urban agriculture revolution. Start free and watch your crops thrive.",
        cta_primary: "Start for Free",
        cta_secondary: "Talk to a Specialist",
        footer_brand: "🌱 FarmBot",
        footer_brand_desc: "Complete platform for monitoring & controlling hydroponic crops via IoT.",
        footer_product_title: "Product",
        footer_link_features: "Features",
        footer_link_how: "How It Works",
        footer_link_pricing: "Pricing",
        footer_link_docs: "Documentation",
        footer_support_title: "Support",
        footer_link_help: "Help Center",
        footer_link_tutorials: "Tutorials",
        footer_link_contact: "Contact",
        footer_link_status: "System Status",
        footer_contact_title: "Contact",
        footer_contact_email: "📧 contact@farmbot.com",
        footer_contact_phone: "📞 +1 (555) 000-0000",
        footer_contact_location: "📍 São Paulo, Brazil",
        footer_rights: "© 2025 FarmBot. All rights reserved."
    },
    es: {
        brand_title: "🌱 FarmBot",
        nav_features: "Características",
        nav_how_it_works: "Cómo Funciona",
        nav_target: "Para Quién",
        nav_agro: "Agronegocio",
        nav_contact: "Contacto",
        nav_start: "Comenzar Ahora",
        language: "ES",
        lang_portuguese: "Portugués (Brasil)",
        lang_arabic: "Árabe (Jordania)",
        lang_english: "Inglés (EE.UU.)",
        lang_spanish: "Español",
        hero_title: "Agricultura Urbana <span class=\"highlight\">Inteligente</span>",
        hero_subtitle: "Monitorea y controla tu cultivo hidropónico desde cualquier lugar con nuestra plataforma IoT.",
        hero_monitoring: "Monitoreo 24/7",
        hero_automation: "Automatización Inteligente",
        hero_remote: "Control Remoto",
        hero_try_free: "Prueba Gratis",
        hero_demo: "Ver Demostración",
        dashboard_status_online: "Sistema En Línea",
        sensor_ph: "pH",
        sensor_temperature: "Temperatura",
        sensor_nutrients: "Nutrientes",
        status_normal: "Normal",
        status_low: "Bajo",
        agro_title: "El Futuro del Agronegocio Brasileño",
        agro_description: "Brasil es líder mundial en producción agrícola; la tecnología transforma este sector. FarmBot es la nueva frontera digital.",
        agro_stat1: "del PIB de Brasil",
        agro_stat2: "facturación anual",
        agro_stat3: "empleos generados",
        agro_highlight1: "40% de crecimiento en agricultura digital",
        agro_highlight2: "Hasta 60% de ahorro de agua",
        agro_highlight3: "30% más productividad",
        benefits_title: "¿Por qué elegir FarmBot?",
        benefit_monitoring_title: "Monitoreo Completo",
        benefit_monitoring_desc: "Seguimiento de pH, temperatura, CE, humedad y niveles de agua/nutrientes en tiempo real.",
        benefit_alerts_title: "Alertas Proactivas",
        benefit_alerts_desc: "Recibe notificaciones instantáneas cuando los parámetros salen del rango óptimo.",
        benefit_history_title: "Historial Detallado",
        benefit_history_desc: "Analiza tendencias con gráficos interactivos para optimizar cultivos.",
        benefit_automation_title: "Automatización Inteligente",
        benefit_automation_desc: "Sistema automatizado de riego, nutrición y control basado en perfiles.",
        benefit_security_title: "Seguro y Confiable",
        benefit_security_desc: "Comunicación cifrada y sistema robusto con copias de seguridad automáticas.",
        benefit_remote_title: "Acceso Remoto",
        benefit_remote_desc: "Control total web desde cualquier lugar y dispositivo.",
        how_title: "Cómo Funciona",
        how_step1_title: "Conecta tu Dispositivo",
        how_step1_desc: "Escanea el código QR y vincula tu FarmBot fácil y rápido.",
        how_step2_title: "Configura tu Cultivo",
        how_step2_desc: "Elige perfiles predefinidos o crea configuraciones personalizadas.",
        how_step3_title: "Monitorea en Tiempo Real",
        how_step3_desc: "Sigue parámetros vitales y recibe alertas automáticas.",
        how_step4_title: "Controla de Forma Remota",
        how_step4_desc: "Ejecuta comandos, ajusta configuraciones y automatiza procesos.",
        audience_title: "Ideal Para",
        audience_urban_title: "Agricultores Urbanos",
        audience_urban_desc: "Personas que cultivan en espacios urbanos pequeños buscando productividad.",
        audience_hydro_title: "Entusiastas Hidropónicos",
        audience_hydro_desc: "Aficionados que desean control ambiental preciso.",
        audience_smallfarm_title: "Pequeños Productores",
        audience_smallfarm_desc: "Emprendedores rurales que buscan eficiencia tecnológica.",
        audience_educators_title: "Educadores",
        audience_educators_desc: "Escuelas y universidades que usan agricultura para enseñanza práctica.",
        features_title: "Características Principales",
        features_monitoring_title: "Monitoreo de Sensores",
        features_monitoring_item1: "Sensor de pH (0-14)",
        features_monitoring_item2: "Temperatura del agua y ambiente",
        features_monitoring_item3: "Conductividad eléctrica (CE)",
        features_monitoring_item4: "Humedad relativa",
        features_monitoring_item5: "Niveles de agua y nutrientes",
        features_monitoring_item6: "Lecturas cada 30 segundos",
        features_control_title: "Sistema de Control",
        features_control_item1: "Bombas de riego",
        features_control_item2: "Bombas de nutrientes",
        features_control_item3: "Ventiladores",
        features_control_item4: "Válvulas de control",
        features_control_item5: "Comandos en tiempo real",
        features_control_item6: "Historial de operaciones",
        features_profiles_title: "Perfiles de Cultivo",
        features_profiles_item1: "Configuraciones predefinidas",
        features_profiles_item2: "Parámetros ideales por planta",
        features_profiles_item3: "Ciclos de crecimiento",
        features_profiles_item4: "Personalización avanzada",
        features_profiles_item5: "Automatización basada en reglas",
        features_profiles_item6: "Optimización continua",
        features_alerts_title: "Alertas y Análisis",
        features_alerts_item1: "Notificaciones en tiempo real",
        features_alerts_item2: "Niveles de severidad",
        features_alerts_item3: "Gráficos interactivos",
        features_alerts_item4: "Informes automáticos",
        features_alerts_item5: "Análisis de tendencias",
        features_alerts_item6: "Perspectivas predictivas",
        tech_title: "Tecnología Avanzada",
        tech_mqtt_title: "Comunicación MQTT",
        tech_mqtt_desc: "Protocolo IoT ligero y confiable con reconexión automática",
        tech_realtime_title: "Tiempo Real",
        tech_realtime_desc: "WebSockets para actualizaciones instantáneas",
        tech_security_title: "Seguridad JWT",
        tech_security_desc: "Autenticación robusta con tokens cifrados",
        tech_backup_title: "Respaldo Automático",
        tech_backup_desc: "Tus datos seguros con copias diarias",
        cta_title: "Transforma tu Agricultura Hoy",
        cta_desc: "Únete a la revolución de la agricultura urbana inteligente. Empieza gratis y haz prosperar tus cultivos.",
        cta_primary: "Comenzar Gratis",
        cta_secondary: "Hablar con un Especialista",
        footer_brand: "🌱 FarmBot",
        footer_brand_desc: "Plataforma completa para monitoreo y control hidropónico.",
        footer_product_title: "Producto",
        footer_link_features: "Características",
        footer_link_how: "Cómo Funciona",
        footer_link_pricing: "Precios",
        footer_link_docs: "Documentación",
        footer_support_title: "Soporte",
        footer_link_help: "Centro de Ayuda",
        footer_link_tutorials: "Tutoriales",
        footer_link_contact: "Contacto",
        footer_link_status: "Estado del Sistema",
        footer_contact_title: "Contacto",
        footer_contact_email: "📧 contacto@farmbot.com",
        footer_contact_phone: "📞 +55 11 9999-9999",
        footer_contact_location: "📍 São Paulo, Brasil",
        footer_rights: "© 2025 FarmBot. Todos los derechos reservados."
    },
    ar: {
        brand_title: "🌱 فارم بوت",
        nav_features: "الميزات",
        nav_how_it_works: "كيف يعمل",
        nav_target: "لمن",
        nav_agro: "الزراعة",
        nav_contact: "اتصل بنا",
        nav_start: "ابدأ الآن",
        language: "ع",
        lang_portuguese: "البرتغالية (البرازيل)",
        lang_arabic: "العربية (الأردن)",
        lang_english: "الإنجليزية (أمريكا)",
        lang_spanish: "الإسبانية",
        hero_title: "الزراعة الحضرية <span class=\"highlight\">الذكية</span>",
        hero_subtitle: "راقب وتحكم في الزراعة المائية من أي مكان عبر منصتنا المتكاملة لإنترنت الأشياء.",
        hero_monitoring: "مراقبة 24/7",
        hero_automation: "أتمتة ذكية",
        hero_remote: "تحكم عن بعد",
        hero_try_free: "جرب مجاناً",
        hero_demo: "شاهد العرض",
        dashboard_status_online: "النظام متصل",
        sensor_ph: "الرقم الهيدروجيني",
        sensor_temperature: "الحرارة",
        sensor_nutrients: "المغذيات",
        status_normal: "طبيعي",
        status_low: "منخفض",
        agro_title: "مستقبل الزراعة البرازيلية",
        agro_description: "البرازيل رائدة عالمياً في الإنتاج الزراعي والتقنية تحدث ثورة في هذا المجال. فارم بوت هو الحدود الرقمية القادمة.",
        agro_stat1: "من الناتج المحلي",
        agro_stat2: "إيرادات سنوية",
        agro_stat3: "وظائف مضافة",
        agro_highlight1: "نمو 40٪ في الزراعة الرقمية",
        agro_highlight2: "توفير حتى 60٪ من استهلاك المياه",
        agro_highlight3: "زيادة 30٪ في الإنتاجية",
        benefits_title: "لماذا تختار فارم بوت؟",
        benefit_monitoring_title: "مراقبة شاملة",
        benefit_monitoring_desc: "تتبع الرقم الهيدروجيني والحرارة والتوصيل والرطوبة ومستويات المياه والمغذيات لحظياً.",
        benefit_alerts_title: "تنبيهات استباقية",
        benefit_alerts_desc: "استقبل إشعارات فورية عند خروج القيم عن النطاق المثالي.",
        benefit_history_title: "سجل تفصيلي",
        benefit_history_desc: "حلل الاتجاهات عبر مخططات تفاعلية لتحسين المحاصيل.",
        benefit_automation_title: "أتمتة ذكية",
        benefit_automation_desc: "نظام ري وتغذية وتحكم آلي يعتمد على ملفات المحاصيل.",
        benefit_security_title: "آمن وموثوق",
        benefit_security_desc: "اتصال مشفر ونظام قوي مع نسخ احتياطي تلقائي.",
        benefit_remote_title: "وصول عن بعد",
        benefit_remote_desc: "تحكم كامل عبر الويب من أي مكان وعلى أي جهاز.",
        how_title: "كيف يعمل",
        how_step1_title: "صل جهازك",
        how_step1_desc: "امسح رمز الاستجابة السريعة واربط جهازك بسهولة.",
        how_step2_title: "اضبط المحصول",
        how_step2_desc: "اختر ملفات جاهزة أو أنشئ إعدادات مخصصة.",
        how_step3_title: "راقب لحظياً",
        how_step3_desc: "تابع كل المؤشرات الحيوية وتلق التنبيهات تلقائياً.",
        how_step4_title: "تحكم عن بعد",
        how_step4_desc: "نفّذ أوامر وعدل الإعدادات وأتمت العمليات.",
        audience_title: "مثالي لـ",
        audience_urban_title: "مزارعو المدن",
        audience_urban_desc: "أفراد يزرعون في مساحات حضرية صغيرة ويبحثون عن إنتاجية أعلى.",
        audience_hydro_title: "هواة الزراعة المائية",
        audience_hydro_desc: "هواة يريدون تحكماً دقيقاً بالبيئة دون تربة.",
        audience_smallfarm_title: "المنتجون الصغار",
        audience_smallfarm_desc: "رواد ريفيون يسعون لكفاءة تقنية أعلى.",
        audience_educators_title: "المعلمون",
        audience_educators_desc: "مدارس وجامعات تستخدم الزراعة كأداة تعليمية.",
        features_title: "الميزات الرئيسية",
        features_monitoring_title: "مراقبة الحساسات",
        features_monitoring_item1: "حساس pH (0-14)",
        features_monitoring_item2: "حرارة الماء والبيئة",
        features_monitoring_item3: "التوصيل الكهربائي",
        features_monitoring_item4: "الرطوبة النسبية",
        features_monitoring_item5: "مستويات الماء والمغذيات",
        features_monitoring_item6: "قراءات كل 30 ثانية",
        features_control_title: "نظام التحكم",
        features_control_item1: "مضخات ري",
        features_control_item2: "مضخات مغذيات",
        features_control_item3: "مراوح",
        features_control_item4: "صمامات تحكم",
        features_control_item5: "أوامر فورية",
        features_control_item6: "سجل العمليات",
        features_profiles_title: "ملفات المحاصيل",
        features_profiles_item1: "إعدادات جاهزة",
        features_profiles_item2: "قيم مثالية لكل نبات",
        features_profiles_item3: "دورات نمو",
        features_profiles_item4: "تخصيص متقدم",
        features_profiles_item5: "أتمتة قائمة على القواعد",
        features_profiles_item6: "تحسين مستمر",
        features_alerts_title: "التنبيهات والتحليلات",
        features_alerts_item1: "إشعارات فورية",
        features_alerts_item2: "مستويات شدة",
        features_alerts_item3: "مخططات تفاعلية",
        features_alerts_item4: "تقارير تلقائية",
        features_alerts_item5: "تحليل الاتجاهات",
        features_alerts_item6: "تحليلات تنبؤية",
        tech_title: "تقنية متقدمة",
        tech_mqtt_title: "اتصال MQTT",
        tech_mqtt_desc: "بروتوكول خفيف وموثوق مع إعادة اتصال تلقائي",
        tech_realtime_title: "زمن حقيقي",
        tech_realtime_desc: "WebSockets لتحديثات فورية",
        tech_security_title: "أمان JWT",
        tech_security_desc: "مصادقة قوية برموز مشفرة",
        tech_backup_title: "نسخ احتياطي تلقائي",
        tech_backup_desc: "بياناتك آمنة بنسخ يومية",
        cta_title: "حوّل زراعتك اليوم",
        cta_desc: "انضم لثورة الزراعة الحضرية الذكية. ابدأ مجاناً وشاهد محاصيلك تزدهر.",
        cta_primary: "ابدأ مجاناً",
        cta_secondary: "تحدث مع خبير",
        footer_brand: "🌱 فارم بوت",
        footer_brand_desc: "منصة متكاملة لمراقبة وإدارة المحاصيل المائية.",
        footer_product_title: "المنتج",
        footer_link_features: "الميزات",
        footer_link_how: "كيف يعمل",
        footer_link_pricing: "الأسعار",
        footer_link_docs: "التوثيق",
        footer_support_title: "الدعم",
        footer_link_help: "مركز المساعدة",
        footer_link_tutorials: "دروس تعليمية",
        footer_link_contact: "اتصل بنا",
        footer_link_status: "حالة النظام",
        footer_contact_title: "اتصال",
        footer_contact_email: "📧 contact@farmbot.com",
        footer_contact_phone: "📞 +55 11 9999-9999",
        footer_contact_location: "📍 ساو باولو، البرازيل",
        footer_rights: "© 2025 فارم بوت. كل الحقوق محفوظة."
    }
};

// Global state
let currentLanguage = localStorage.getItem('farmbot-language') || 'pt';
let currentTheme = localStorage.getItem('farmbot-theme') || 'light';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeTheme(); 
    initializeTouchpadSupport();
    initializeMobileMenu();
    initializeNavigation();
    animateSensorValues();
    setupButtonInteractions();
    setupDashboardInteractions();
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {threshold: 0.1, rootMargin: '0px 0px -50px 0px'});
    
    document.querySelectorAll('.benefit-card, .audience-card, .feature-category, .tech-item, .step').forEach(el => {
        observer.observe(el);
    });
});

// Language System
function initializeLanguage() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    updateLanguage(currentLanguage);
    
    if (languageBtn) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
            languageBtn.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.dataset.lang;
            const selectedFlag = this.dataset.flag;
            
            currentLanguage = selectedLang;
            localStorage.setItem('farmbot-language', selectedLang);
            
            updateLanguage(selectedLang);
            updateLanguageButton(selectedFlag, translations[selectedLang].language);
            
            languageDropdown.classList.remove('active');
            languageBtn.classList.remove('active');
        });
    });
    
    document.addEventListener('click', function() {
        if (languageDropdown) {
            languageDropdown.classList.remove('active');
            languageBtn.classList.remove('active');
        }
    });
}

function updateLanguage(lang) {
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
    
    const dict = translations[lang] || translations['pt'];
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (dict[key]) {
            element.innerHTML = dict[key];
        } else {
            // fallback chain: chosen lang -> pt -> first available
            const fallback = translations['pt'][key] || Object.values(translations).find(t => t[key])?.[key];
            if (fallback) element.innerHTML = fallback;
        }
    });
}

function updateLanguageButton(flag, langCode) {
    const flagIcon = document.querySelector('.flag-icon');
    const languageText = document.querySelector('.language-text');
    
    if (flagIcon) flagIcon.textContent = flag;
    if (languageText) languageText.textContent = langCode;
}

// Theme System
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    
    updateTheme(currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('farmbot-theme', currentTheme);
            updateTheme(currentTheme);
            
            this.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }
}

function updateTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// Enhanced Touchpad Support
function initializeTouchpadSupport() {
    let isScrolling = false;
    
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                updateNavbarOnScroll();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllOverlays();
        }
    });
}

function updateNavbarOnScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'var(--bg-primary)';
            navbar.style.boxShadow = '0 2px 20px var(--shadow)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
}

function closeAllOverlays() {
    const languageDropdown = document.getElementById('languageDropdown');
    const languageBtn = document.getElementById('languageBtn');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const modal = document.getElementById('custom-modal');
    
    if (languageDropdown) {
        languageDropdown.classList.remove('active');
        languageBtn.classList.remove('active');
    }
    if (navLinks && mobileMenuToggle) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
    if (modal) {
        modal.remove();
    }
}

function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
}

function initializeNavigation() {
    const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinksAll.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeAllOverlays();
            }
        });
    });
}

// Animate sensor values
function animateSensorValues() {
    const sensorValues = [
        { element: '.sensor-card:nth-child(1) .sensor-value', values: ['6.2', '6.1', '6.3', '6.2'], unit: '' },
        { element: '.sensor-card:nth-child(2) .sensor-value', values: ['24°C', '23°C', '25°C', '24°C'], unit: '' },
        { element: '.sensor-card:nth-child(3) .sensor-value', values: ['85%', '83%', '87%', '85%'], unit: '' }
    ];

    sensorValues.forEach(sensor => {
        const element = document.querySelector(sensor.element);
        if (element) {
            let index = 0;
            setInterval(() => {
                element.textContent = sensor.values[index];
                index = (index + 1) % sensor.values.length;
            }, 3000);
        }
    });
}

// Setup button interactions
function setupButtonInteractions() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);

            // Handle button actions
            const buttonText = this.textContent.toLowerCase();
            if (buttonText.includes('começar') || buttonText.includes('experimente')) {
                showModal('Cadastro', 'Funcionalidade em desenvolvimento. Em breve você poderá se cadastrar e começar a usar o FarmBot!');
            } else if (buttonText.includes('demonstração') || buttonText.includes('demo')) {
                showModal('Demonstração', 'Nossa demonstração interativa está sendo preparada. Em breve você poderá testar todas as funcionalidades!');
            } else if (buttonText.includes('especialista') || buttonText.includes('contato')) {
                showModal('Contato', 'Entre em contato conosco:<br><br>📧 contato@farmbot.com.br<br>📞 +55 11 9999-9999<br><br>Nossos especialistas estão prontos para ajudar!');
            }
        });
    });
    
    // Add ripple animation CSS
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Setup dashboard interactions
function setupDashboardInteractions() {
    const dashboardPreview = document.querySelector('.dashboard-preview');
    if (dashboardPreview) {
        dashboardPreview.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        dashboardPreview.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        // Add click interaction to sensor cards
        const sensorCards = document.querySelectorAll('.sensor-card');
        sensorCards.forEach((card, index) => {
            card.addEventListener('click', function() {
                const sensorNames = ['pH', 'Temperatura', 'Nutrientes'];
                const sensorDetails = [
                    'O pH indica a acidez/alcalinidade da solução nutritiva. Valor ideal entre 5.5 e 6.5.',
                    'A temperatura da água afeta a absorção de nutrientes. Ideal entre 18°C e 22°C.',
                    'Nível de nutrientes na solução. Monitore para evitar deficiências nutritivas.'
                ];
                showModal(sensorNames[index], sensorDetails[index]);
            });
        });
    }
}

// Show modal function
function showModal(title, content) {
    // Remove existing modal
    const existingModal = document.getElementById('custom-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'custom-modal';
    modal.className = 'modal-backdrop';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = title;

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.className = 'modal-close-btn';

    const modalBody = document.createElement('div');
    modalBody.innerHTML = content;
    modalBody.className = 'modal-body';

    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes modalSlideIn {
            from { transform: translateY(-50px) scale(0.9); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Event listeners
    closeButton.addEventListener('click', closeModal);
    closeButton.addEventListener('mouseenter', function() {
        this.style.background = 'var(--bg-accent-soft)';
        this.style.color = 'var(--color-accent)';
    });
    closeButton.addEventListener('mouseleave', function() {
        this.style.background = 'none';
        this.style.color = 'var(--text-secondary)';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.animation = 'modalFadeIn 0.3s ease reverse';
        setTimeout(() => {
            modal.remove();
            style.remove();
        }, 300);
    }

    // Assemble modal
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    modal.addEventListener('remove', function() {
        document.body.style.overflow = '';
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Counter animation for stats (if needed in future)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(function() {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Loading animation for better UX
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading styles if not present
    if (!document.getElementById('loading-styles')) {
        const style = document.createElement('style');
        style.id = 'loading-styles';
        style.textContent = `
            body:not(.loaded) {
                overflow: hidden;
            }
            body:not(.loaded) .hero-content {
                opacity: 0;
                transform: translateY(50px);
            }
            body.loaded .hero-content {
                opacity: 1;
                transform: translateY(0);
                transition: all 0.8s ease;
            }
        `;
        document.head.appendChild(style);
    }
});

// Add CSS for mobile menu toggle animation
const mobileMenuStyles = document.createElement('style');
mobileMenuStyles.textContent = `
    @media (max-width: 768px) {
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            animation: slideDown 0.3s ease;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }
`;
document.head.appendChild(mobileMenuStyles);

// Animate sensor values
function animateSensorValues() {
    const sensorValues = [
        { element: '.sensor-card:nth-child(1) .sensor-value', values: ['6.2', '6.1', '6.3', '6.2'] },
        { element: '.sensor-card:nth-child(2) .sensor-value', values: ['24°C', '23°C', '25°C', '24°C'] },
        { element: '.sensor-card:nth-child(3) .sensor-value', values: ['85%', '83%', '87%', '85%'] }
    ];

    sensorValues.forEach(sensor => {
        const element = document.querySelector(sensor.element);
        if (element) {
            let index = 0;
            setInterval(() => {
                element.textContent = sensor.values[index];
                index = (index + 1) % sensor.values.length;
            }, 3000);
        }
    });
}

// Setup button interactions
function setupButtonInteractions() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);

            // Handle button actions
            const buttonText = this.textContent.toLowerCase();
            if (buttonText.includes('começar') || buttonText.includes('experimente') || buttonText.includes('gratis') || buttonText.includes('free')) {
                showModal('Cadastro', 'Funcionalidade em desenvolvimento. Em breve você poderá se cadastrar e começar a usar o FarmBot!');
            } else if (buttonText.includes('demonstração') || buttonText.includes('demo')) {
                showModal('Demonstração', 'Nossa demonstração interativa está sendo preparada. Em breve você poderá testar todas as funcionalidades!');
            }
        });
    });
}

// Setup dashboard interactions
function setupDashboardInteractions() {
    const dashboardPreview = document.querySelector('.dashboard-preview');
    if (dashboardPreview) {
        dashboardPreview.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        dashboardPreview.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

// Consolidated console log
console.log('🌱 FarmBot Landing Page ready.');