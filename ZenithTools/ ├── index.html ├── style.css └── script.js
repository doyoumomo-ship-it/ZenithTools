<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ArabicAI - منصة الذكاء الاصطناعي العربية</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <style>
        /* ===== RESET & VARIABLES ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        :root {
            --primary: #7C3AED;
            --primary-dark: #5B21B6;
            --primary-light: #A78BFA;
            --bg: #0F0A1E;
            --bg-card: #1A1135;
            --bg-card-hover: #241A45;
            --text: #F5F3FF;
            --text-muted: #A5A0B8;
            --border: #2D2350;
            --shadow: 0 20px 60px rgba(124, 58, 237, 0.25);
            --radius: 20px;
            --radius-sm: 12px;
            --transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        body {
            background: var(--bg);
            color: var(--text);
            min-height: 100vh;
        }

        /* ===== SCROLLBAR ===== */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: var(--bg);
        }
        ::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 10px;
        }

        /* ===== CONTAINER ===== */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* ===== HEADER ===== */
        header {
            padding: 18px 0;
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            background: rgba(15, 10, 30, 0.92);
            backdrop-filter: blur(12px);
            z-index: 100;
        }

        header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 26px;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .logo i {
            color: var(--primary);
            font-size: 30px;
        }
        .logo span {
            background: linear-gradient(135deg, var(--primary), var(--primary-light));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 30px;
        }
        .nav-links a {
            color: var(--text-muted);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
            font-size: 15px;
        }
        .nav-links a:hover {
            color: var(--text);
        }

        .btn {
            padding: 10px 28px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 14px;
            border: none;
            cursor: pointer;
            transition: var(--transition);
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
        }
        .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(124, 58, 237, 0.4);
        }

        .btn-outline {
            background: transparent;
            color: var(--text);
            border: 1.5px solid var(--border);
        }
        .btn-outline:hover {
            border-color: var(--primary);
            background: rgba(124, 58, 237, 0.08);
        }

        .btn-success {
            background: #10B981;
            color: white;
        }
        .btn-success:hover {
            background: #059669;
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(16, 185, 129, 0.4);
        }

        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: var(--text);
            font-size: 28px;
            cursor: pointer;
        }

        /* ===== HERO ===== */
        .hero {
            padding: 70px 0 50px;
            text-align: center;
        }

        .hero .badge {
            background: rgba(124, 58, 237, 0.15);
            color: var(--primary-light);
            padding: 6px 18px;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 20px;
        }

        .hero h1 {
            font-size: 52px;
            font-weight: 800;
            line-height: 1.15;
            margin-bottom: 16px;
        }
        .hero h1 span {
            background: linear-gradient(135deg, var(--primary), #F472B6, var(--primary-light));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 300% 300%;
            animation: gradientMove 4s ease infinite;
        }

        @keyframes gradientMove {
            0%,
            100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        .hero p {
            color: var(--text-muted);
            font-size: 19px;
            max-width: 600px;
            margin: 0 auto 35px;
            line-height: 1.8;
        }

        .hero .stats {
            display: flex;
            justify-content: center;
            gap: 50px;
            margin-top: 30px;
        }
        .hero .stats div {
            text-align: center;
        }
        .hero .stats .num {
            font-size: 28px;
            font-weight: 800;
            display: block;
            color: var(--text);
        }
        .hero .stats .label {
            color: var(--text-muted);
            font-size: 14px;
        }

        /* ===== TOOLS ===== */
        .tools {
            padding: 60px 0 80px;
        }

        .section-title {
            text-align: center;
            font-size: 38px;
            font-weight: 800;
            margin-bottom: 10px;
        }
        .section-title span {
            background: linear-gradient(135deg, var(--primary), var(--primary-light));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .section-subtitle {
            text-align: center;
            color: var(--text-muted);
            margin-bottom: 45px;
            font-size: 17px;
        }

        .tools-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
        }

        .tool-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            padding: 30px 24px;
            border-radius: var(--radius);
            transition: var(--transition);
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .tool-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, var(--primary), transparent);
            opacity: 0;
            transition: var(--transition);
        }
        .tool-card:hover {
            transform: translateY(-6px);
            border-color: var(--primary);
            box-shadow: var(--shadow);
        }
        .tool-card:hover::before {
            opacity: 0.05;
        }
        .tool-card>* {
            position: relative;
            z-index: 1;
        }

        .tool-card .icon {
            font-size: 38px;
            color: var(--primary);
            margin-bottom: 14px;
            display: block;
        }
        .tool-card h3 {
            font-size: 19px;
            margin-bottom: 8px;
        }
        .tool-card p {
            color: var(--text-muted);
            font-size: 14px;
            line-height: 1.7;
        }
        .tool-card .tag {
            display: inline-block;
            background: rgba(124, 58, 237, 0.12);
            color: var(--primary-light);
            font-size: 11px;
            font-weight: 700;
            padding: 3px 14px;
            border-radius: 50px;
            margin-top: 12px;
        }

        /* ===== WORKSPACE ===== */
        .workspace {
            padding: 60px 0 80px;
            background: var(--bg-card);
            border-radius: var(--radius);
            margin-bottom: 60px;
            border: 1px solid var(--border);
        }
        .workspace .container {
            max-width: 900px;
        }

        .workspace-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 15px;
        }
        .workspace-header h2 {
            font-size: 26px;
        }
        .workspace-header h2 i {
            color: var(--primary);
            margin-left: 10px;
        }

        .credit-display {
            background: rgba(16, 185, 129, 0.12);
            color: #34D399;
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 15px;
        }
        .credit-display i {
            margin-left: 8px;
        }

        .tool-selector {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 25px;
        }
        .tool-selector button {
            padding: 10px 22px;
            border-radius: 50px;
            border: 1.5px solid var(--border);
            background: transparent;
            color: var(--text-muted);
            cursor: pointer;
            transition: var(--transition);
            font-weight: 500;
            font-size: 14px;
        }
        .tool-selector button:hover {
            border-color: var(--primary);
            color: var(--text);
        }
        .tool-selector button.active {
            background: var(--primary);
            border-color: var(--primary);
            color: white;
        }

        .input-area textarea {
            width: 100%;
            min-height: 160px;
            background: var(--bg);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            padding: 18px;
            color: var(--text);
            font-size: 15px;
            resize: vertical;
            transition: var(--transition);
            line-height: 1.8;
        }
        .input-area textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);
        }
        .input-area textarea::placeholder {
            color: var(--text-muted);
        }

        .input-actions {
            display: flex;
            gap: 15px;
            margin-top: 18px;
            flex-wrap: wrap;
        }
        .input-actions .btn {
            padding: 12px 32px;
            font-size: 15px;
            flex: 1;
            min-width: 140px;
        }
        .input-actions .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none !important;
        }

        .output-area {
            margin-top: 30px;
            background: var(--bg);
            border-radius: var(--radius-sm);
            padding: 20px;
            min-height: 100px;
            border: 1px solid var(--border);
            display: none;
        }
        .output-area.show {
            display: block;
        }
        .output-area .output-content {
            color: var(--text);
            line-height: 1.9;
            white-space: pre-wrap;
            font-size: 15px;
        }
        .output-area .copy-btn {
            margin-top: 15px;
            background: transparent;
            border: 1px solid var(--border);
            color: var(--text-muted);
            padding: 6px 18px;
            border-radius: 50px;
            cursor: pointer;
            transition: var(--transition);
            font-size: 13px;
        }
        .output-area .copy-btn:hover {
            border-color: var(--primary);
            color: var(--text);
        }

        .loading {
            display: none;
            text-align: center;
            padding: 30px 0;
        }
        .loading.show {
            display: block;
        }
        .loading .spinner {
            width: 45px;
            height: 45px;
            border: 4px solid var(--border);
            border-top: 4px solid var(--primary);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin: 0 auto 12px;
        }
        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        /* ===== AUTH MODAL ===== */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(8px);
            z-index: 999;
            justify-content: center;
            align-items: center;
        }
        .modal-overlay.show {
            display: flex;
        }

        .modal {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 40px;
            max-width: 420px;
            width: 90%;
            position: relative;
        }
        .modal .close-modal {
            position: absolute;
            top: 16px;
            left: 20px;
            background: none;
            border: none;
            color: var(--text-muted);
            font-size: 24px;
            cursor: pointer;
        }
        .modal h2 {
            text-align: center;
            margin-bottom: 8px;
        }
        .modal p {
            text-align: center;
            color: var(--text-muted);
            margin-bottom: 25px;
            font-size: 14px;
        }
        .modal input {
            width: 100%;
            padding: 14px 16px;
            background: var(--bg);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            color: var(--text);
            font-size: 15px;
            margin-bottom: 14px;
            transition: var(--transition);
        }
        .modal input:focus {
            outline: none;
            border-color: var(--primary);
        }
        .modal .btn {
            width: 100%;
            padding: 14px;
            font-size: 16px;
        }
        .modal .switch-auth {
            text-align: center;
            margin-top: 16px;
            color: var(--text-muted);
            font-size: 14px;
        }
        .modal .switch-auth a {
            color: var(--primary-light);
            cursor: pointer;
            text-decoration: none;
        }
        .modal .switch-auth a:hover {
            text-decoration: underline;
        }

        /* ===== PRICING ===== */
        .pricing {
            padding: 60px 0;
        }
        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 25px;
            margin-top: 20px;
        }
        .plan {
            background: var(--bg-card);
            border: 1px solid var(--border);
            padding: 35px 28px;
            border-radius: var(--radius);
            text-align: center;
            transition: var(--transition);
        }
        .plan:hover {
            transform: translateY(-4px);
            border-color: var(--primary);
        }
        .plan.popular {
            border-color: var(--primary);
            box-shadow: var(--shadow);
            position: relative;
        }
        .plan .popular-badge {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary);
            color: white;
            padding: 4px 20px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 700;
        }
        .plan h3 {
            font-size: 22px;
            margin-bottom: 6px;
        }
        .plan .price {
            font-size: 44px;
            font-weight: 800;
            margin: 12px 0;
        }
        .plan .price small {
            font-size: 16px;
            font-weight: 400;
            color: var(--text-muted);
        }
        .plan ul {
            list-style: none;
            text-align: right;
            margin: 20px 0 28px;
        }
        .plan ul li {
            padding: 6px 0;
            color: var(--text-muted);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .plan ul li i {
            color: #10B981;
        }
        .plan .btn {
            width: 100%;
        }

        /* ===== FOOTER ===== */
        footer {
            border-top: 1px solid var(--border);
            padding: 50px 0 30px;
            margin-top: 40px;
        }
        .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 40px;
            margin-bottom: 30px;
        }
        .footer-grid .logo {
            font-size: 22px;
        }
        .footer-grid p {
            color: var(--text-muted);
            font-size: 14px;
            margin: 8px 0 16px;
            line-height: 1.7;
        }
        .social-links {
            display: flex;
            gap: 14px;
        }
        .social-links a {
            color: var(--text-muted);
            font-size: 20px;
            transition: var(--transition);
        }
        .social-links a:hover {
            color: var(--primary);
        }
        .footer-grid h4 {
            margin-bottom: 14px;
            font-size: 16px;
        }
        .footer-grid a {
            display: block;
            color: var(--text-muted);
            text-decoration: none;
            padding: 4px 0;
            font-size: 14px;
            transition: var(--transition);
        }
        .footer-grid a:hover {
            color: var(--text);
        }
        .footer-bottom {
            text-align: center;
            color: var(--text-muted);
            font-size: 13px;
            border-top: 1px solid var(--border);
            padding-top: 25px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
            .hero h1 {
                font-size: 38px;
            }
            .footer-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 75px;
                left: 0;
                right: 0;
                background: var(--bg);
                padding: 25px;
                border-bottom: 1px solid var(--border);
                gap: 16px;
            }
            .nav-links.open {
                display: flex;
            }
            .menu-toggle {
                display: block;
            }
            .hero h1 {
                font-size: 30px;
            }
            .hero .stats {
                gap: 25px;
                flex-wrap: wrap;
            }
            .hero .stats .num {
                font-size: 22px;
            }
            .section-title {
                font-size: 28px;
            }
            .workspace-header {
                flex-direction: column;
                align-items: stretch;
                text-align: center;
            }
            .credit-display {
                text-align: center;
            }
            .tool-selector {
                justify-content: center;
            }
            .footer-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }
            .modal {
                padding: 30px 20px;
            }
        }

        /* ===== TOAST ===== */
        .toast {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            padding: 16px 28px;
            border-radius: var(--radius-sm);
            color: var(--text);
            font-weight: 500;
            z-index: 9999;
            transform: translateY(100px);
            opacity: 0;
            transition: var(--transition);
            box-shadow: var(--shadow);
        }
        .toast.show {
            transform: translateY(0);
            opacity: 1;
        }
        .toast.success {
            border-color: #10B981;
        }
        .toast.error {
            border-color: #EF4444;
        }
    </style>
</head>
<body>

    <!-- ===== TOAST ===== -->
    <div class="toast" id="toast"></div>

    <!-- ===== AUTH MODAL ===== -->
    <div class="modal-overlay" id="authModal">
        <div class="modal">
            <button class="close-modal" id="closeModal">&times;</button>
            <h2 id="authTitle">إنشاء حساب</h2>
            <p id="authSub">انضم إلى آلاف المستخدمين الذين يستخدمون الذكاء الاصطناعي</p>
            <input type="text" id="authName" placeholder="الاسم الكامل" />
            <input type="email" id="authEmail" placeholder="البريد الإلكتروني" />
            <input type="password" id="authPassword" placeholder="كلمة المرور (6 أحرف على الأقل)" />
            <button class="btn btn-primary" id="authSubmit">تسجيل</button>
            <div class="switch-auth">
                <span id="authSwitchText">لديك حساب؟</span>
                <a id="authSwitchLink">تسجيل الدخول</a>
            </div>
        </div>
    </div>

    <!-- ===== HEADER ===== -->
    <header>
        <div class="container">
            <div class="logo">
                <i class="fas fa-brain"></i>
                <span>ArabicAI</span>
            </div>
            <div class="nav-links" id="navLinks">
                <a href="#tools">الأدوات</a>
                <a href="#workspace">مساحة العمل</a>
                <a href="#pricing">الأسعار</a>
                <a href="#" id="authBtn" class="btn btn-primary">ابدأ مجانًا</a>
            </div>
            <button class="menu-toggle" id="menuToggle">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- ===== HERO ===== -->
    <section class="hero">
        <div class="container">
            <div class="badge">🚀 أكثر من 12,000 مستخدم نشط</div>
            <h1>ذكاء اصطناعي <span>للمحتوى العربي</span></h1>
            <p>اكتب، لخص، ترجم، وحلل نصوصك باللغة العربية باستخدام أحدث تقنيات الذكاء الاصطناعي. مجانًا للبدء!</p>
            <a href="#" class="btn btn-primary" id="heroCta" style="padding:16px 48px;font-size:17px;">
                <i class="fas fa-rocket"></i> ابدأ الآن مجانًا
            </a>
            <div class="stats">
                <div><span class="num">4.9</span><span class="label">⭐ تقييم</span></div>
                <div><span class="num">98%</span><span class="label">رضا</span></div>
                <div><span class="num">+12K</span><span class="label">مستخدم</span></div>
                <div><span class="num">50K+</span><span class="label">مقال مولد</span></div>
            </div>
        </div>
    </section>

    <!-- ===== TOOLS ===== -->
    <section class="tools" id="tools">
        <div class="container">
            <h2 class="section-title">أدوات <span>الذكاء الاصطناعي</span></h2>
            <p class="section-subtitle">اختر الأداة التي تناسبك واستفد من قوة الذكاء الاصطناعي</p>
            <div class="tools-grid">
                <div class="tool-card" data-tool="write">
                    <span class="icon"><i class="fas fa-pen-fancy"></i></span>
                    <h3>كاتب المقالات</h3>
                    <p>أنشئ مقالات احترافية، منشورات مدونة، ومحتوى تسويقي بالعربية بجودة عالية</p>
                    <span class="tag"><i class="fas fa-star"></i> الأكثر استخدامًا</span>
                </div>
                <div class="tool-card" data-tool="summarize">
                    <span class="icon"><i class="fas fa-compress"></i></span>
                    <h3>ملخص النصوص</h3>
                    <p>لخّص الكتب، التقارير، والمقالات الطويلة في نقاط مختصرة وواضحة</p>
                    <span class="tag"><i class="fas fa-bolt"></i> سريع</span>
                </div>
                <div class="tool-card" data-tool="translate">
                    <span class="icon"><i class="fas fa-language"></i></span>
                    <h3>ترجمة احترافية</h3>
                    <p>ترجمة دقيقة بين العربية والإنجليزية مع مراعاة السياق والمصطلحات</p>
                    <span class="tag"><i class="fas fa-globe"></i> ثنائي</span>
                </div>
                <div class="tool-card" data-tool="analyze">
                    <span class="icon"><i class="fas fa-heart"></i></span>
                    <h3>تحليل المشاعر</h3>
                    <p>حلل مشاعر العملاء من التعليقات، التويتر، وآراء المنتجات</p>
                    <span class="tag"><i class="fas fa-chart-line"></i> تحليلات</span>
                </div>
                <div class="tool-card" data-tool="code">
                    <span class="icon"><i class="fas fa-code"></i></span>
                    <h3>مساعد برمجي</h3>
                    <p>اكتب كود برمجي بلغة عربية مفهومة، واحصل على حلول برمجية فورية</p>
                    <span class="tag"><i class="fas fa-robot"></i> للمبرمجين</span>
                </div>
                <div class="tool-card" data-tool="ideas">
                    <span class="icon"><i class="fas fa-lightbulb"></i></span>
                    <h3>مولد الأفكار</h3>
                    <p>احصل على أفكار إبداعية لمشاريع، محتوى، وحلول مبتكرة</p>
                    <span class="tag"><i class="fas fa-sparkles"></i> إبداعي</span>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== WORKSPACE ===== -->
    <section class="workspace" id="workspace">
        <div class="container">
            <div class="workspace-header">
                <h2><i class="fas fa-terminal"></i> مساحة العمل</h2>
                <div class="credit-display">
                    <i class="fas fa-coins"></i> الرصيد: <span id="creditDisplay">100</span> نقطة
                </div>
            </div>

            <div class="tool-selector" id="toolSelector">
                <button class="active" data-tool="write">✍️ كاتب</button>
                <button data-tool="summarize">📝 ملخص</button>
                <button data-tool="translate">🌐 ترجمة</button>
                <button data-tool="analyze">❤️ تحليل</button>
                <button data-tool="code">💻 برمجة</button>
                <button data-tool="ideas">💡 أفكار</button>
            </div>

            <div class="input-area">
                <textarea id="inputText" placeholder="اكتب هنا... مثال: اكتب مقالة عن مستقبل الذكاء الاصطناعي في العالم العربي"></textarea>
                <div class="input-actions">
                    <button class="btn btn-primary" id="generateBtn"><i class="fas fa-wand-magic-sparkles"></i> توليد</button>
                    <button class="btn btn-outline" id="clearBtn"><i class="fas fa-eraser"></i> مسح</button>
                </div>
            </div>

            <div class="loading" id="loading">
                <div class="spinner"></div>
                <p style="color:var(--text-muted);">جاري التوليد... الذكاء الاصطناعي يعمل</p>
            </div>

            <div class="output-area" id="outputArea">
                <div class="output-content" id="outputContent"></div>
                <button class="copy-btn" id="copyBtn"><i class="fas fa-copy"></i> نسخ النص</button>
            </div>
        </div>
    </section>

    <!-- ===== PRICING ===== -->
    <section class="pricing" id="pricing">
        <div class="container">
            <h2 class="section-title">خطط <span>تناسب احتياجاتك</span></h2>
            <p class="section-subtitle">ابدأ مجانًا، وارتقِ عندما تحتاج للمزيد من الإمكانيات</p>
            <div class="pricing-grid">
                <div class="plan">
                    <h3>مجاني</h3>
                    <div class="price">0 <small>$</small></div>
                    <ul>
                        <li><i class="fas fa-check"></i> 100 نقطة شهريًا</li>
                        <li><i class="fas fa-check"></i> 3 أدوات أساسية</li>
                        <li><i class="fas fa-check"></i> دعم أساسي</li>
                    </ul>
                    <button class="btn btn-outline">اختر المجاني</button>
                </div>
                <div class="plan popular">
                    <span class="popular-badge">🌟 الأكثر مبيعًا</span>
                    <h3>احترافي</h3>
                    <div class="price">9.99 <small>$</small></div>
                    <ul>
                        <li><i class="fas fa-check"></i> 5,000 نقطة شهريًا</li>
                        <li><i class="fas fa-check"></i> جميع الأدوات</li>
                        <li><i class="fas fa-check"></i> أولوية في المعالجة</li>
                        <li><i class="fas fa-check"></i> دعم VIP 24/7</li>
                    </ul>
                    <button class="btn btn-primary">اشترك الآن</button>
                </div>
                <div class="plan">
                    <h3>مؤسسات</h3>
                    <div class="price">29.99 <small>$</small></div>
                    <ul>
                        <li><i class="fas fa-check"></i> 50,000 نقطة شهريًا</li>
                        <li><i class="fas fa-check"></i> API مخصص</li>
                        <li><i class="fas fa-check"></i> فريق عمل (5+ أعضاء)</li>
                        <li><i class="fas fa-check"></i> دعم مخصص</li>
                    </ul>
                    <button class="btn btn-outline">تواصل معنا</button>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div>
                    <div class="logo"><i class="fas fa-brain"></i> <span>ArabicAI</span></div>
                    <p>منصة ذكاء اصطناعي متخصصة في اللغة العربية، نقدم أدوات ذكية لتحسين إنتاجيتك وإبداعك.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div>
                    <h4>الأدوات</h4>
                    <a href="#">كاتب المقالات</a>
                    <a href="#">ملخص النصوص</a>
                    <a href="#">ترجمة</a>
                    <a href="#">تحليل المشاعر</a>
                </div>
                <div>
                    <h4>الشركة</h4>
                    <a href="#">من نحن</a>
                    <a href="#">المدونة</a>
                    <a href="#">وظائف</a>
                    <a href="#">شراكات</a>
                </div>
                <div>
                    <h4>الدعم</h4>
                    <a href="#">الأسئلة الشائعة</a>
                    <a href="#">تواصل معنا</a>
                    <a href="#">سياسة الخصوصية</a>
                    <a href="#">شروط الاستخدام</a>
                </div>
            </div>
            <div class="footer-bottom">© 2026 ArabicAI. جميع الحقوق محفوظة. 🤖 صنع بالذكاء الاصطناعي</div>
        </div>
    </footer>

    <!-- ===== JAVASCRIPT ===== -->
    <script>
        // ==============================
        //  STATE
        // ==============================
        const state = {
            isLoggedIn: false,
            user: null,
            credits: 100,
            selectedTool: 'write',
            isGenerating: false,
        };

        // ==============================
        //  DOM REFS
        // ==============================
        const $ = (sel) => document.querySelector(sel);
        const $$ = (sel) => document.querySelectorAll(sel);

        const authModal = $('#authModal');
        const authBtn = $('#authBtn');
        const heroCta = $('#heroCta');
        const closeModal = $('#closeModal');
        const authTitle = $('#authTitle');
        const authSub = $('#authSub');
        const authName = $('#authName');
        const authEmail = $('#authEmail');
        const authPassword = $('#authPassword');
        const authSubmit = $('#authSubmit');
        const authSwitchText = $('#authSwitchText');
        const authSwitchLink = $('#authSwitchLink');
        const menuToggle = $('#menuToggle');
        const navLinks = $('#navLinks');
        const toolSelector = $('#toolSelector');
        const inputText = $('#inputText');
        const generateBtn = $('#generateBtn');
        const clearBtn = $('#clearBtn');
        const loading = $('#loading');
        const outputArea = $('#outputArea');
        const outputContent = $('#outputContent');
        const copyBtn = $('#copyBtn');
        const creditDisplay = $('#creditDisplay');
        const toast = $('#toast');

        let isLoginMode = false;

        // ==============================
        //  TOAST
        // ==============================
        function showToast(msg, type = 'success') {
            toast.textContent = msg;
            toast.className = 'toast show ' + type;
            clearTimeout(toast._timer);
            toast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
        }

        // ==============================
        //  AUTH
        // ==============================
        function toggleAuth(mode) {
            isLoginMode = mode === 'login';
            if (isLoginMode) {
                authTitle.textContent = 'تسجيل الدخول';
                authSub.textContent = 'مرحبًا بعودتك! سجل الدخول للمتابعة';
                authSubmit.textContent = 'تسجيل الدخول';
                authSwitchText.textContent = 'ليس لديك حساب؟';
                authSwitchLink.textContent = 'إنشاء حساب';
                authName.style.display = 'none';
            } else {
                authTitle.textContent = 'إنشاء حساب';
                authSub.textContent = 'انضم إلى آلاف المستخدمين الذين يستخدمون الذكاء الاصطناعي';
                authSubmit.textContent = 'إنشاء حساب';
                authSwitchText.textContent = 'لديك حساب؟';
                authSwitchLink.textContent = 'تسجيل الدخول';
                authName.style.display = 'block';
            }
            authModal.classList.add('show');
        }

        function closeAuthModal() {
            authModal.classList.remove('show');
        }

        function handleAuth() {
            const email = authEmail.value.trim();
            const password = authPassword.value.trim();

            if (!email || !password) {
                showToast('يرجى ملء جميع الحقول', 'error');
                return;
            }
            if (password.length < 6) {
                showToast('كلمة المرور يجب أن تكون 6 أحرف على الأقل', 'error');
                return;
            }
            if (!isLoginMode) {
                const name = authName.value.trim();
                if (!name) {
                    showToast('يرجى إدخال الاسم الكامل', 'error');
                    return;
                }
            }

            // محاكاة تسجيل/دخول
            const username = email.split('@')[0];
            state.isLoggedIn = true;
            state.user = { email, username, name: authName.value.trim() || username };
            state.credits = isLoginMode ? state.credits : 100;

            updateUI();
            closeAuthModal();
            showToast(isLoginMode ? `مرحبًا بعودتك ${state.user.name}! 👋` : `أهلاً بك ${state.user.name}! 🎉`);
        }

        // ==============================
        //  UI UPDATE
        // ==============================
        function updateUI() {
            if (state.isLoggedIn) {
                authBtn.textContent = `👤 ${state.user.name}`;
                authBtn.classList.remove('btn-primary');
                authBtn.classList.add('btn-outline');
                creditDisplay.textContent = state.credits;
            } else {
                authBtn.textContent = 'ابدأ مجانًا';
                authBtn.classList.remove('btn-outline');
                authBtn.classList.add('btn-primary');
                creditDisplay.textContent = '0';
            }
        }

        // ==============================
        //  TOOL SELECTOR
        // ==============================
        toolSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;
            $$('#toolSelector button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.selectedTool = btn.dataset.tool;
            // تحديث placeholder
            const placeholders = {
                write: 'اكتب موضوع المقال... مثال: "الذكاء الاصطناعي في التعليم"',
                summarize: 'الصق النص الطويل الذي تريد تلخيصه...',
                translate: 'اكتب النص للترجمة... مثال: "مرحباً، كيف حالك؟"',
                analyze: 'اكتب النص لتحليل المشاعر... مثال: "المنتج رائع جداً!"',
                code: 'صف المشكلة البرمجية... مثال: "اكتب دالة لجمع رقمين في بايثون"',
                ideas: 'اكتب المجال الذي تريد أفكاراً فيه... مثال: "أفكار لمشاريع رقمية"',
            };
            inputText.placeholder = placeholders[state.selectedTool] || 'اكتب نصك هنا...';
        });

        // ==============================
        //  GENERATE (محاكاة الذكاء الاصطناعي)
        // ==============================
        const toolResponses = {
            write: (text) =>
                `📝 **مقال عن: ${text}**\n\nالذكاء الاصطناعي يغير العالم بسرعة، وفي العالم العربي، نرى تبنيًا متزايدًا لهذه التقنية. تشير الدراسات إلى أن سوق الذكاء الاصطناعي في الشرق الأوسط سينمو بنسبة 30% سنويًا. \n\nيمكن للشركات العربية الاستفادة من الذكاء الاصطناعي في:\n• تحسين خدمة العملاء\n• تحليل البيانات الضخمة\n• أتمتة العمليات\n\nالمستقبل مشرق، والتحدي الأكبر هو تطوير الكوادر البشرية القادرة على قيادة هذا التحول.`,

            summarize: (text) =>
                `📌 **ملخص النص:**\n\n${text.slice(0, 200)}...\n\n✅ النقاط الرئيسية:\n• النقطة الأولى المستخلصة من النص\n• النقطة الثانية المهمة\n• النقطة الثالثة التي يجب الانتباه لها\n\n📊 نسبة الأهمية: 87%`,

            translate: (text) =>
                `🌐 **الترجمة:**\n\n"${text}"\n\n⬇️ الترجمة إلى العربية:\n"${text.split(' ').reverse().join(' ')}" (ترجمة تقريبية)\n\n📌 ملاحظة: الترجمة الدقيقة تتطلب سياقًا إضافيًا.`,

            analyze: (text) =>
                `❤️ **تحليل المشاعر:**\n\nالنص: "${text}"\n\n📊 النتائج:\n• إيجابي: 78%\n• سلبي: 12%\n• محايد: 10%\n\n💡 التوصية: النص يحمل مشاعر إيجابية قوية، يمكن استخدامه في التسويق.`,

            code: (text) =>
                `💻 **الكود المطلوب:**\n\n// بناءً على طلبك: "${text}"\n\n\`\`\`python\ndef solve_problem(data):\n    result = []\n    for item in data:\n        if item > 0:\n            result.append(item * 2)\n    return result\n\n# مثال على الاستخدام\nmy_data = [1, 2, 3, 4]\nprint(solve_problem(my_data))  # [2, 4, 6, 8]\n\`\`\`\n\n📌 هذا حل مبدئي، يمكن تعديله حسب احتياجاتك.`,

            ideas: (text) =>
                `💡 **أفكار لمجال: ${text}**\n\n1. **منصة تعليمية ذكية** - تستخدم AI لتخصيص المحتوى لكل طالب\n2. **تطبيق مساعد شخصي** - يدير المهام والمواعيد باستخدام الصوت\n3. **روبوت محادثة تجاري** - يخدم العملاء على مدار الساعة\n4. **أداة تحليل سوق** - تتنبأ باتجاهات السوق بدقة\n5. **منصة محتوى تفاعلية** - تولد محتوى بناءً على اهتمامات المستخدم\n\n🚀 اختر فكرة وابدأ في تنفيذها اليوم!`
        };

        function getResponse(tool, input) {
            const responses = {
                write: `📝 **مقال عن: ${input || 'الذكاء الاصطناعي'}**\n\nالذكاء الاصطناعي يغير العالم بسرعة، وفي العالم العربي، نرى تبنيًا متزايدًا لهذه التقنية. تشير الدراسات إلى أن سوق الذكاء الاصطناعي في الشرق الأوسط سينمو بنسبة 30% سنويًا. \n\nيمكن للشركات العربية الاستفادة من الذكاء الاصطناعي في:\n• تحسين خدمة العملاء\n• تحليل البيانات الضخمة\n• أتمتة العمليات\n\nالمستقبل مشرق، والتحدي الأكبر هو تطوير الكوادر البشرية القادرة على قيادة هذا التحول.`,

                summarize: `📌 **ملخص النص:**\n\n"${input || 'نص طويل حول موضوع ما'}"\n\n✅ **النقاط الرئيسية:**\n• النقطة الأولى المستخلصة من النص\n• النقطة الثانية المهمة\n• النقطة الثالثة التي يجب الانتباه لها\n\n📊 نسبة الأهمية: 87%`,

                translate: `🌐 **الترجمة:**\n\n"${input || 'Hello, how are you?'}"\n\n⬇️ **الترجمة إلى العربية:**\n"مرحباً، كيف حالك؟"\n\n📌 ملاحظة: الترجمة الدقيقة تتطلب سياقًا إضافيًا.`,

                analyze: `❤️ **تحليل المشاعر:**\n\nالنص: "${input || 'هذا المنتج رائع جداً!'}"\n\n📊 **النتائج:**\n• إيجابي: 78%\n• سلبي: 12%\n• محايد: 10%\n\n💡 التوصية: النص يحمل مشاعر إيجابية قوية.`,

                code: `💻 **الكود المطلوب:**\n\n// بناءً على طلبك: "${input || 'اكتب دالة لجمع رقمين'}"\n\n\`\`\`python\ndef solve_problem(data):\n    result = []\n    for item in data:\n        if item > 0:\n            result.append(item * 2)\n    return result\n\n# مثال على الاستخدام\nmy_data = [1, 2, 3, 4]\nprint(solve_problem(my_data))  # [2, 4, 6, 8]\n\`\`\`\n\n📌 هذا حل مبدئي، يمكن تعديله حسب احتياجاتك.`,

                ideas: `💡 **أفكار لمجال: ${input || 'المشاريع الرقمية'}**\n\n1. **منصة تعليمية ذكية** - تستخدم AI لتخصيص المحتوى لكل طالب\n2. **تطبيق مساعد شخصي** - يدير المهام والمواعيد باستخدام الصوت\n3. **روبوت محادثة تجاري** - يخدم العملاء على مدار الساعة\n4. **أداة تحليل سوق** - تتنبأ باتجاهات السوق بدقة\n5. **منصة محتوى تفاعلية** - تولد محتوى بناءً على اهتمامات المستخدم\n\n🚀 اختر فكرة وابدأ في تنفيذها اليوم!`
            };
            return responses[tool] || responses.write;
        }

        async function generate() {
            if (state.isGenerating) return;

            const input = inputText.value.trim();
            if (!input) {
                showToast('يرجى كتابة النص أولاً ✍️', 'error');
                return;
            }

            if (!state.isLoggedIn) {
                showToast('يرجى تسجيل الدخول أولاً 🔐', 'error');
                toggleAuth('login');
                return;
            }

            if (state.credits < 5) {
                showToast('رصيدك غير كافٍ! اشحن حسابك 💰', 'error');
                return;
            }

            // خصم النقاط
            state.credits -= 5;
            creditDisplay.textContent = state.credits;
            state.isGenerating = true;
            generateBtn.disabled = true;
            generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري...';

            loading.classList.add('show');
            outputArea.classList.remove('show');

            // محاكاة زمن المعالجة
            await new Promise(resolve => setTimeout(resolve, 1800 + Math.random() * 1200));

            const response = getResponse(state.selectedTool, input);
            outputContent.textContent = response;
            outputArea.classList.add('show');
            loading.classList.remove('show');

            state.isGenerating = false;
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> توليد';

            showToast('✅ تم التوليد بنجاح!');
        }

        // ==============================
        //  COPY
        // ==============================
        copyBtn.addEventListener('click', () => {
            const text = outputContent.textContent;
            if (!text) return;
            navigator.clipboard.writeText(text).then(() => {
                showToast('📋 تم نسخ النص!');
            }).catch(() => {
                // Fallback
                const range = document.createRange();
                range.selectNode(outputContent);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                showToast('📋 تم نسخ النص!');
            });
        });

        // ==============================
        //  CLEAR
        // ==============================
        clearBtn.addEventListener('click', () => {
            inputText.value = '';
            outputArea.classList.remove('show');
            outputContent.textContent = '';
        });

        // ==============================
        //  EVENTS
        // ==============================
        authBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (state.isLoggedIn) {
                // تسجيل الخروج
                state.isLoggedIn = false;
                state.user = null;
                state.credits = 0;
                updateUI();
                showToast('👋 تم تسجيل الخروج');
                return;
            }
            toggleAuth('signup');
        });

        heroCta.addEventListener('click', (e) => {
            e.preventDefault();
            if (state.isLoggedIn) {
                document.getElementById('workspace').scrollIntoView({ behavior: 'smooth' });
            } else {
                toggleAuth('signup');
            }
        });

        closeModal.addEventListener('click', closeAuthModal);
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) closeAuthModal();
        });

        authSwitchLink.addEventListener('click', () => {
            toggleAuth(isLoginMode ? 'signup' : 'login');
        });

        authSubmit.addEventListener('click', handleAuth);
        authPassword.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleAuth();
        });

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        generateBtn.addEventListener('click', generate);

        // Ctrl+Enter لتوليد
        inputText.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                generate();
            }
        });

        // ==============================
        //  TOOL CARDS CLICK
        // ==============================
        $$('.tool-card').forEach(card => {
            card.addEventListener('click', () => {
                const tool = card.dataset.tool;
                const btn = $$('#toolSelector button');
                btn.forEach(b => {
                    b.classList.toggle('active', b.dataset.tool === tool);
                });
                state.selectedTool = tool;
                document.getElementById('workspace').scrollIntoView({ behavior: 'smooth' });
                // تحديث placeholder
                const placeholders = {
                    write: 'اكتب موضوع المقال... مثال: "الذكاء الاصطناعي في التعليم"',
                    summarize: 'الصق النص الطويل الذي تريد تلخيصه...',
                    translate: 'اكتب النص للترجمة... مثال: "مرحباً، كيف حالك؟"',
                    analyze: 'اكتب النص لتحليل المشاعر... مثال: "المنتج رائع جداً!"',
                    code: 'صف المشكلة البرمجية... مثال: "اكتب دالة لجمع رقمين في بايثون"',
                    ideas: 'اكتب المجال الذي تريد أفكاراً فيه... مثال: "أفكار لمشاريع رقمية"',
                };
                inputText.placeholder = placeholders[tool] || 'اكتب نصك هنا...';
                inputText.focus();
            });
        });

        // ==============================
        //  INIT
        // ==============================
        updateUI();
        inputText.placeholder = 'اكتب موضوع المقال... مثال: "الذكاء الاصطناعي في التعليم"';

        console.log('🚀 ArabicAI منصة الذكاء الاصطناعي العربية');
        console.log('💡 اضغط Ctrl+Enter للتوليد السريع');
    </script>

</body>
</html>
