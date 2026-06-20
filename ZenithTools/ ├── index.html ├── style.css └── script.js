<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ذكاءAI - منصة الخدمات الذكية</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: #0a0a1a;
            color: #ffffff;
            min-height: 100vh;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* ===== HEADER ===== */
        header {
            background: rgba(10, 10, 26, 0.95);
            backdrop-filter: blur(10px);
            padding: 15px 0;
            border-bottom: 1px solid #1e1e3a;
            position: sticky;
            top: 0;
            z-index: 999;
        }

        header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 24px;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo i {
            color: #8b5cf6;
            font-size: 28px;
        }

        .logo span {
            background: linear-gradient(135deg, #8b5cf6, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        nav a {
            color: #a0a0c0;
            text-decoration: none;
            margin-left: 25px;
            font-weight: 500;
            transition: 0.3s;
            font-size: 15px;
        }

        nav a:hover {
            color: #ffffff;
        }

        .btn-nav {
            background: #8b5cf6;
            color: #fff !important;
            padding: 10px 24px;
            border-radius: 50px;
            font-weight: 600;
            transition: 0.3s;
        }

        .btn-nav:hover {
            background: #7c3aed;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
        }

        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: #fff;
            font-size: 26px;
            cursor: pointer;
        }

        /* ===== HERO ===== */
        .hero {
            padding: 70px 0 50px;
            text-align: center;
        }

        .hero .badge {
            background: rgba(139, 92, 246, 0.15);
            color: #a78bfa;
            padding: 6px 18px;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 18px;
        }

        .hero h1 {
            font-size: 48px;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 12px;
        }

        .hero h1 span {
            background: linear-gradient(135deg, #8b5cf6, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            color: #a0a0c0;
            font-size: 18px;
            max-width: 550px;
            margin: 0 auto 30px;
            line-height: 1.8;
        }

        .hero .stats {
            display: flex;
            justify-content: center;
            gap: 45px;
            margin-top: 25px;
            flex-wrap: wrap;
        }

        .hero .stats .num {
            font-size: 26px;
            font-weight: 800;
            display: block;
            color: #fff;
        }

        .hero .stats .label {
            color: #a0a0c0;
            font-size: 13px;
        }

        /* ===== SERVICES ===== */
        .services {
            padding: 50px 0 70px;
        }

        .section-title {
            text-align: center;
            font-size: 34px;
            font-weight: 800;
            margin-bottom: 8px;
        }

        .section-title span {
            background: linear-gradient(135deg, #8b5cf6, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .section-sub {
            text-align: center;
            color: #a0a0c0;
            margin-bottom: 40px;
            font-size: 16px;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 22px;
        }

        .service-card {
            background: #12122a;
            border: 1px solid #1e1e3a;
            border-radius: 16px;
            padding: 28px 22px;
            text-align: center;
            transition: 0.4s;
            cursor: pointer;
        }

        .service-card:hover {
            transform: translateY(-6px);
            border-color: #8b5cf6;
            box-shadow: 0 15px 40px rgba(139, 92, 246, 0.15);
        }

        .service-card .icon {
            font-size: 38px;
            color: #8b5cf6;
            margin-bottom: 12px;
            display: block;
        }

        .service-card h3 {
            font-size: 18px;
            margin-bottom: 6px;
        }

        .service-card p {
            color: #a0a0c0;
            font-size: 14px;
            line-height: 1.7;
        }

        .service-card .price-tag {
            display: inline-block;
            background: rgba(139, 92, 246, 0.12);
            color: #a78bfa;
            padding: 4px 16px;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 700;
            margin-top: 12px;
        }

        /* ===== WORKSPACE ===== */
        .workspace {
            background: #12122a;
            border: 1px solid #1e1e3a;
            border-radius: 20px;
            padding: 35px 30px;
            margin: 30px 0 60px;
        }

        .workspace-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 22px;
        }

        .workspace-header h2 {
            font-size: 22px;
        }

        .workspace-header h2 i {
            color: #8b5cf6;
            margin-left: 10px;
        }

        .credit-box {
            background: rgba(16, 185, 129, 0.12);
            color: #34d399;
            padding: 8px 22px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 14px;
        }

        .credit-box i {
            margin-left: 8px;
        }

        .service-selector {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }

        .service-selector button {
            padding: 9px 20px;
            border-radius: 50px;
            border: 1.5px solid #1e1e3a;
            background: transparent;
            color: #a0a0c0;
            cursor: pointer;
            transition: 0.3s;
            font-weight: 500;
            font-size: 13px;
        }

        .service-selector button:hover {
            border-color: #8b5cf6;
            color: #fff;
        }

        .service-selector button.active {
            background: #8b5cf6;
            border-color: #8b5cf6;
            color: #fff;
        }

        .input-area textarea {
            width: 100%;
            min-height: 140px;
            background: #0a0a1a;
            border: 1px solid #1e1e3a;
            border-radius: 12px;
            padding: 16px;
            color: #fff;
            font-size: 15px;
            resize: vertical;
            transition: 0.3s;
            line-height: 1.8;
        }

        .input-area textarea:focus {
            outline: none;
            border-color: #8b5cf6;
            box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
        }

        .input-area textarea::placeholder {
            color: #606080;
        }

        .input-actions {
            display: flex;
            gap: 14px;
            margin-top: 16px;
            flex-wrap: wrap;
        }

        .btn {
            padding: 12px 32px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 15px;
            border: none;
            cursor: pointer;
            transition: 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn-primary {
            background: #8b5cf6;
            color: #fff;
        }

        .btn-primary:hover {
            background: #7c3aed;
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
        }

        .btn-primary:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none !important;
        }

        .btn-outline {
            background: transparent;
            color: #fff;
            border: 1.5px solid #1e1e3a;
        }

        .btn-outline:hover {
            border-color: #8b5cf6;
        }

        .btn-success {
            background: #10b981;
            color: #fff;
        }

        .btn-success:hover {
            background: #059669;
        }

        .loading {
            display: none;
            text-align: center;
            padding: 25px 0;
        }

        .loading.show {
            display: block;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #1e1e3a;
            border-top: 4px solid #8b5cf6;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin: 0 auto 10px;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        .output-area {
            margin-top: 25px;
            background: #0a0a1a;
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #1e1e3a;
            display: none;
        }

        .output-area.show {
            display: block;
        }

        .output-content {
            color: #e0e0f0;
            line-height: 1.9;
            white-space: pre-wrap;
            font-size: 15px;
        }

        .output-actions {
            margin-top: 14px;
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        /* ===== PRICING ===== */
        .pricing {
            padding: 40px 0 60px;
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .plan {
            background: #12122a;
            border: 1px solid #1e1e3a;
            border-radius: 16px;
            padding: 30px 24px;
            text-align: center;
            transition: 0.4s;
        }

        .plan:hover {
            transform: translateY(-4px);
            border-color: #8b5cf6;
        }

        .plan.popular {
            border-color: #8b5cf6;
            position: relative;
            box-shadow: 0 10px 40px rgba(139, 92, 246, 0.15);
        }

        .plan .pop-badge {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: #8b5cf6;
            color: #fff;
            padding: 3px 20px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 700;
        }

        .plan h3 {
            font-size: 20px;
            margin-bottom: 4px;
        }

        .plan .price {
            font-size: 38px;
            font-weight: 800;
            margin: 10px 0;
        }

        .plan .price small {
            font-size: 15px;
            font-weight: 400;
            color: #a0a0c0;
        }

        .plan ul {
            list-style: none;
            text-align: right;
            margin: 16px 0 24px;
        }

        .plan ul li {
            padding: 5px 0;
            color: #a0a0c0;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .plan ul li i {
            color: #10b981;
        }

        .plan .btn {
            width: 100%;
            justify-content: center;
        }

        /* ===== TOAST ===== */
        .toast {
            position: fixed;
            bottom: 25px;
            right: 25px;
            background: #12122a;
            border: 1px solid #1e1e3a;
            padding: 14px 28px;
            border-radius: 12px;
            color: #fff;
            font-weight: 500;
            z-index: 9999;
            transform: translateY(80px);
            opacity: 0;
            transition: 0.5s;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
            max-width: 90%;
        }

        .toast.show {
            transform: translateY(0);
            opacity: 1;
        }

        .toast.success {
            border-color: #10b981;
        }

        .toast.error {
            border-color: #ef4444;
        }

        /* ===== FOOTER ===== */
        footer {
            border-top: 1px solid #1e1e3a;
            padding: 35px 0 20px;
            margin-top: 30px;
            text-align: center;
            color: #a0a0c0;
            font-size: 14px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
            nav {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 70px;
                left: 0;
                right: 0;
                background: #0a0a1a;
                padding: 25px;
                border-bottom: 1px solid #1e1e3a;
                gap: 14px;
            }

            nav.open {
                display: flex;
            }

            nav a {
                margin-left: 0;
            }

            .menu-toggle {
                display: block;
            }

            .hero h1 {
                font-size: 30px;
            }

            .section-title {
                font-size: 26px;
            }

            .workspace {
                padding: 20px 16px;
            }

            .workspace-header {
                flex-direction: column;
                align-items: stretch;
                text-align: center;
            }

            .service-selector {
                justify-content: center;
            }

            .hero .stats {
                gap: 20px;
            }

            .pricing-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 24px;
            }

            .services-grid {
                grid-template-columns: 1fr;
            }

            .input-actions .btn {
                flex: 1;
                justify-content: center;
            }
        }
    </style>
</head>
<body>

    <!-- ===== TOAST ===== -->
    <div class="toast" id="toast"></div>

    <!-- ===== HEADER ===== -->
    <header>
        <div class="container">
            <div class="logo">
                <i class="fas fa-brain"></i>
                <span>ذكاءAI</span>
            </div>
            <nav id="navMenu">
                <a href="#services">الخدمات</a>
                <a href="#workspace">مساحة العمل</a>
                <a href="#pricing">الباقات</a>
                <a href="#" class="btn-nav" id="authBtn">ابدأ مجانًا</a>
            </nav>
            <button class="menu-toggle" id="menuToggle">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- ===== HERO ===== -->
    <section class="hero">
        <div class="container">
            <div class="badge">🚀 أكثر من 5,000 مستخدم وثقوا بنا</div>
            <h1>خدمات <span>الذكاء الاصطناعي</span><br />بأسعار تنافسية</h1>
            <p>اكتب، لخص، ترجم، حلل، وصمم باستخدام أحدث تقنيات الذكاء الاصطناعي. ابدأ مجانًا الآن!</p>
            <a href="#" class="btn btn-primary" id="heroCta" style="padding:14px 40px;font-size:16px;">
                <i class="fas fa-rocket"></i> جرب الخدمات مجانًا
            </a>
            <div class="stats">
                <div><span class="num">4.9</span><span class="label">⭐ تقييم</span></div>
                <div><span class="num">97%</span><span class="label">رضا</span></div>
                <div><span class="num">+5K</span><span class="label">مستخدم</span></div>
                <div><span class="num">10K+</span><span class="label">طلب منفذ</span></div>
            </div>
        </div>
    </section>

    <!-- ===== SERVICES ===== -->
    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">خدماتنا <span>الذكية</span></h2>
            <p class="section-sub">اختر الخدمة التي تحتاجها واحصل على نتيجة احترافية</p>
            <div class="services-grid">
                <div class="service-card" data-service="write">
                    <span class="icon"><i class="fas fa-pen-fancy"></i></span>
                    <h3>كتابة محتوى</h3>
                    <p>مقالات، منشورات، نصوص تسويقية بجودة احترافية</p>
                    <span class="price-tag">5 نقاط</span>
                </div>
                <div class="service-card" data-service="summarize">
                    <span class="icon"><i class="fas fa-compress"></i></span>
                    <h3>تلخيص نصوص</h3>
                    <p>لخص الكتب، التقارير، والمقالات الطويلة بسرعة</p>
                    <span class="price-tag">3 نقاط</span>
                </div>
                <div class="service-card" data-service="translate">
                    <span class="icon"><i class="fas fa-language"></i></span>
                    <h3>ترجمة فورية</h3>
                    <p>ترجمة دقيقة بين العربية والإنجليزية</p>
                    <span class="price-tag">3 نقاط</span>
                </div>
                <div class="service-card" data-service="analyze">
                    <span class="icon"><i class="fas fa-heart"></i></span>
                    <h3>تحليل مشاعر</h3>
                    <p>حلل مشاعر العملاء من التعليقات والآراء</p>
                    <span class="price-tag">4 نقاط</span>
                </div>
                <div class="service-card" data-service="code">
                    <span class="icon"><i class="fas fa-code"></i></span>
                    <h3>مساعد برمجي</h3>
                    <p>اكتب كود برمجي بلغة عربية مفهومة</p>
                    <span class="price-tag">6 نقاط</span>
                </div>
                <div class="service-card" data-service="ideas">
                    <span class="icon"><i class="fas fa-lightbulb"></i></span>
                    <h3>توليد أفكار</h3>
                    <p>احصل على أفكار إبداعية لمشاريعك</p>
                    <span class="price-tag">2 نقاط</span>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== WORKSPACE ===== -->
    <section class="workspace" id="workspace">
        <div class="container">
            <div class="workspace-header">
                <h2><i class="fas fa-terminal"></i> مساحة العمل</h2>
                <div class="credit-box">
                    <i class="fas fa-coins"></i> الرصيد: <span id="creditDisplay">100</span> نقطة
                </div>
            </div>

            <div class="service-selector" id="serviceSelector">
                <button class="active" data-service="write">✍️ كتابة</button>
                <button data-service="summarize">📝 تلخيص</button>
                <button data-service="translate">🌐 ترجمة</button>
                <button data-service="analyze">❤️ تحليل</button>
                <button data-service="code">💻 برمجة</button>
                <button data-service="ideas">💡 أفكار</button>
            </div>

            <div class="input-area">
                <textarea id="inputText" placeholder="اكتب موضوعك هنا... مثال: اكتب مقالة عن مستقبل الذكاء الاصطناعي في العالم العربي"></textarea>
                <div class="input-actions">
                    <button class="btn btn-primary" id="generateBtn"><i class="fas fa-wand-magic-sparkles"></i> توليد</button>
                    <button class="btn btn-outline" id="clearBtn"><i class="fas fa-eraser"></i> مسح</button>
                </div>
            </div>

            <div class="loading" id="loading">
                <div class="spinner"></div>
                <p style="color:#a0a0c0;">جاري التوليد... الذكاء الاصطناعي يعمل</p>
            </div>

            <div class="output-area" id="outputArea">
                <div class="output-content" id="outputContent"></div>
                <div class="output-actions">
                    <button class="btn btn-outline" id="copyBtn"><i class="fas fa-copy"></i> نسخ</button>
                    <button class="btn btn-outline" id="exportBtn"><i class="fas fa-download"></i> تحميل</button>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== PRICING ===== -->
    <section class="pricing" id="pricing">
        <div class="container">
            <h2 class="section-title">باقات <span>تناسب احتياجاتك</span></h2>
            <p class="section-sub">ابدأ مجانًا وارتقِ عندما تحتاج للمزيد</p>
            <div class="pricing-grid">
                <div class="plan">
                    <h3>مجاني</h3>
                    <div class="price">0 <small>$</small></div>
                    <ul>
                        <li><i class="fas fa-check"></i> 100 نقطة مجانية</li>
                        <li><i class="fas fa-check"></i> 6 خدمات أساسية</li>
                        <li><i class="fas fa-check"></i> دعم أساسي</li>
                    </ul>
                    <button class="btn btn-outline" onclick="showToast('✅ تم اختيار الباقة المجانية!')">اختر المجاني</button>
                </div>
                <div class="plan popular">
                    <span class="pop-badge">🌟 الأكثر مبيعًا</span>
                    <h3>احترافي</h3>
                    <div class="price">9.99 <small>$</small></div>
                    <ul>
                        <li><i class="fas fa-check"></i> 5,000 نقطة شهريًا</li>
                        <li><i class="fas fa-check"></i> أولوية المعالجة</li>
                        <li><i class="fas fa-check"></i> دعم VIP 24/7</li>
                        <li><i class="fas fa-check"></i> تصدير متقدم</li>
                    </ul>
                    <button class="btn btn-primary" onclick="showToast('💳 جاري التوجيه لبوابة الدفع...')">اشترك الآن</button>
                </div>
                <div class="plan">
                    <h3>مؤسسات</h3>
                    <div class="price">29.99 <small>$</small></div>
                    <ul>
                        <li><i class="fas fa-check"></i> 50,000 نقطة شهريًا</li>
                        <li><i class="fas fa-check"></i> API مخصص</li>
                        <li><i class="fas fa-check"></i> فريق عمل (5+)</li>
                        <li><i class="fas fa-check"></i> دعم مخصص</li>
                    </ul>
                    <button class="btn btn-outline" onclick="showToast('📧 سيتم التواصل معك قريبًا')">تواصل معنا</button>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer>
        <div class="container">
            <p>© 2026 ذكاءAI - جميع الحقوق محفوظة 🤖</p>
            <p style="margin-top:6px;font-size:13px;color:#606080;">
                <i class="fas fa-code"></i> صنع بالذكاء الاصطناعي
            </p>
        </div>
    </footer>

    <!-- ============================================ -->
    <!-- ===== JAVASCRIPT (كامل بدون أخطاء) ===== -->
    <!-- ============================================ -->
    <script>
        // ==============================
        //  الحالة العامة
        // ==============================
        const state = {
            credits: 100,
            selectedService: 'write',
            isGenerating: false,
            isLoggedIn: true, // محاكاة تسجيل الدخول
        };

        // ==============================
        //  عناصر DOM
        // ==============================
        const $ = (s) => document.querySelector(s);
        const $$ = (s) => document.querySelectorAll(s);

        const toast = $('#toast');
        const menuToggle = $('#menuToggle');
        const navMenu = $('#navMenu');
        const authBtn = $('#authBtn');
        const heroCta = $('#heroCta');
        const serviceSelector = $('#serviceSelector');
        const inputText = $('#inputText');
        const generateBtn = $('#generateBtn');
        const clearBtn = $('#clearBtn');
        const loading = $('#loading');
        const outputArea = $('#outputArea');
        const outputContent = $('#outputContent');
        const copyBtn = $('#copyBtn');
        const exportBtn = $('#exportBtn');
        const creditDisplay = $('#creditDisplay');

        // ==============================
        //  التوست (إشعارات)
        // ==============================
        function showToast(msg, type = 'success') {
            toast.textContent = msg;
            toast.className = 'toast show ' + type;
            clearTimeout(toast._timer);
            toast._timer = setTimeout(() => {
                toast.classList.remove('show');
            }, 3500);
        }

        // ==============================
        //  تحديث الرصيد
        // ==============================
        function updateCredits() {
            creditDisplay.textContent = state.credits;
        }

        // ==============================
        //  تبديل القائمة (الجوال)
        // ==============================
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        // ==============================
        //  أزرار تسجيل الدخول
        // ==============================
        authBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (state.isLoggedIn) {
                state.isLoggedIn = false;
                state.credits = 0;
                authBtn.textContent = 'ابدأ مجانًا';
                authBtn.classList.remove('btn-nav');
                authBtn.style.background = '#8b5cf6';
                authBtn.style.color = '#fff';
                updateCredits();
                showToast('👋 تم تسجيل الخروج', 'error');
            } else {
                state.isLoggedIn = true;
                state.credits = 100;
                authBtn.textContent = '👤 حسابي';
                authBtn.classList.add('btn-nav');
                updateCredits();
                showToast('🎉 مرحبًا بك مجددًا!');
            }
        });

        heroCta.addEventListener('click', (e) => {
            e.preventDefault();
            if (!state.isLoggedIn) {
                state.isLoggedIn = true;
                state.credits = 100;
                authBtn.textContent = '👤 حسابي';
                authBtn.classList.add('btn-nav');
                updateCredits();
                showToast('🎉 تم إنشاء حسابك المجاني!');
            }
            document.getElementById('workspace').scrollIntoView({ behavior: 'smooth' });
        });

        // ==============================
        //  اختيار الخدمة
        // ==============================
        serviceSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;

            $$('#serviceSelector button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.selectedService = btn.dataset.service;

            const placeholders = {
                write: 'اكتب موضوع المقال... مثال: "الذكاء الاصطناعي في التعليم"',
                summarize: 'الصق النص الطويل الذي تريد تلخيصه...',
                translate: 'اكتب النص للترجمة... مثال: "مرحباً، كيف حالك؟"',
                analyze: 'اكتب النص لتحليل المشاعر... مثال: "المنتج رائع جداً!"',
                code: 'صف المشكلة البرمجية... مثال: "اكتب دالة لجمع رقمين"',
                ideas: 'اكتب المجال الذي تريد أفكاراً فيه...',
            };
            inputText.placeholder = placeholders[state.selectedService] || 'اكتب نصك هنا...';
            inputText.focus();
        });

        // ==============================
        //  بطاقات الخدمات (نفس التأثير)
        // ==============================
        $$('.service-card').forEach(card => {
            card.addEventListener('click', () => {
                const service = card.dataset.service;
                const btn = $$('#serviceSelector button');
                btn.forEach(b => {
                    b.classList.toggle('active', b.dataset.service === service);
                });
                state.selectedService = service;
                document.getElementById('workspace').scrollIntoView({ behavior: 'smooth' });

                const placeholders = {
                    write: 'اكتب موضوع المقال... مثال: "الذكاء الاصطناعي في التعليم"',
                    summarize: 'الصق النص الطويل الذي تريد تلخيصه...',
                    translate: 'اكتب النص للترجمة... مثال: "مرحباً، كيف حالك؟"',
                    analyze: 'اكتب النص لتحليل المشاعر... مثال: "المنتج رائع جداً!"',
                    code: 'صف المشكلة البرمجية... مثال: "اكتب دالة لجمع رقمين"',
                    ideas: 'اكتب المجال الذي تريد أفكاراً فيه...',
                };
                inputText.placeholder = placeholders[service] || 'اكتب نصك هنا...';
                inputText.focus();
            });
        });

        // ==============================
        //  توليد المحتوى (محاكاة ذكاء اصطناعي)
        // ==============================
        function getResponse(service, input) {
            const responses = {
                write: `📝 **المقال:**\n\n"${input || 'الذكاء الاصطناعي'}"

الذكاء الاصطناعي يغير العالم بسرعة، وفي العالم العربي نرى تبنيًا متزايدًا لهذه التقنية. تشير الدراسات إلى أن سوق الذكاء الاصطناعي في الشرق الأوسط سينمو بنسبة 30% سنويًا.

**فوائد الذكاء الاصطناعي:**
• تحسين خدمة العملاء
• تحليل البيانات الضخمة
• أتمتة العمليات
• توفير الوقت والجهد

**التحديات:**
• نقص الكوادر المؤهلة
• التكلفة العالية للبنية التحتية
• مخاوف الخصوصية والأمان

المستقبل مشرق، والتحدي الأكبر هو تطوير الكوادر البشرية القادرة على قيادة هذا التحول.`,

                summarize: `📌 **ملخص النص:**\n\n"${input || 'نص طويل حول موضوع ما'}"

✅ **النقاط الرئيسية:**
1. النقطة الأولى المستخلصة من النص
2. النقطة الثانية المهمة جدًا
3. النقطة الثالثة التي يجب الانتباه لها
4. النقطة الرابعة كخلاصة نهائية

📊 **نسبة الأهمية:** 87%
⏱️ **وقت القراءة المقدر:** 3 دقائق`,

                translate: `🌐 **الترجمة:**\n\n"${input || 'Hello, how are you?'}"

⬇️ **الترجمة إلى العربية:**
"مرحباً، كيف حالك؟"

⬇️ **الترجمة إلى الإنجليزية:**
"${input || 'مرحباً، كيف حالك؟'}"

📌 ملاحظة: الترجمة تمت مع مراعاة السياق اللغوي.`,

                analyze: `❤️ **تحليل المشاعر:**\n\nالنص: "${input || 'هذا المنتج رائع جداً!'}"

📊 **النتائج:**
• إيجابي: 78% 😊
• سلبي: 12% 😞
• محايد: 10% 😐

💡 **التوصية:**
النص يحمل مشاعر إيجابية قوية، يمكن استخدامه في الحملات التسويقية.

📈 **درجة الثقة:** 92%`,

                code: `💻 **الكود المطلوب:**\n\n// بناءً على طلبك: "${input || 'جمع رقمين'}"

\`\`\`python
def solve_problem(a, b):
    """دالة لحل المشكلة المطلوبة"""
    result = a + b
    return result

# مثال على الاستخدام
num1 = 5
num2 = 10
print(f"النتيجة: {solve_problem(num1, num2)}")  # النتيجة: 15
\`\`\`

📌 **شرح الكود:**
- الدالة تأخذ معلمتين وتقوم بجمعهما
- يمكن تعديلها حسب احتياجاتك

🛠️ **اقتراحات للتطوير:**
• إضافة معالجة للأخطاء
• دعم عمليات رياضية أخرى`,

                ideas: `💡 **أفكار لمجال: ${input || 'المشاريع الرقمية'}**

1. **منصة تعليمية ذكية** - تستخدم AI لتخصيص المحتوى لكل طالب
2. **تطبيق مساعد شخصي** - يدير المهام والمواعيد باستخدام الصوت
3. **روبوت محادثة تجاري** - يخدم العملاء على مدار الساعة
4. **أداة تحليل سوق** - تتنبأ باتجاهات السوق بدقة
5. **منصة محتوى تفاعلية** - تولد محتوى بناءً على اهتمامات المستخدم

🚀 **نصائح للتنفيذ:**
• ابدأ بفكرة واحدة فقط
• اختبر الفكرة مع 100 مستخدم
• طوّر بناءً على الملاحظات

💪 **حظاً موفقاً!**`
            };

            return responses[service] || responses.write;
        }

        async function generate() {
            if (state.isGenerating) return;

            const input = inputText.value.trim();
            if (!input) {
                showToast('✍️ يرجى كتابة النص أولاً', 'error');
                return;
            }

            if (!state.isLoggedIn) {
                showToast('🔐 يرجى تسجيل الدخول أولاً', 'error');
                return;
            }

            // تكلفة الخدمة
            const costs = { write: 5, summarize: 3, translate: 3, analyze: 4, code: 6, ideas: 2 };
            const cost = costs[state.selectedService] || 5;

            if (state.credits < cost) {
                showToast('💰 رصيدك غير كافٍ! اختر باقة مدفوعة', 'error');
                return;
            }

            // خصم النقاط
            state.credits -= cost;
            updateCredits();

            state.isGenerating = true;
            generateBtn.disabled = true;
            generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التوليد...';

            loading.classList.add('show');
            outputArea.classList.remove('show');

            // محاكاة زمن المعالجة
            await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1200));

            const response = getResponse(state.selectedService, input);
            outputContent.textContent = response;
            outputArea.classList.add('show');
            loading.classList.remove('show');

            state.isGenerating = false;
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> توليد';

            showToast('✅ تم التوليد بنجاح!');
        }

        // ==============================
        //  نسخ النص
        // ==============================
        copyBtn.addEventListener('click', async () => {
            const text = outputContent.textContent;
            if (!text) {
                showToast('📭 لا يوجد نص للنسخ', 'error');
                return;
            }

            try {
                await navigator.clipboard.writeText(text);
                showToast('📋 تم نسخ النص!');
            } catch {
                // طريقة احتياطية
                const range = document.createRange();
                range.selectNode(outputContent);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                showToast('📋 تم نسخ النص!');
            }
        });

        // ==============================
        //  تحميل النص (تصدير)
        // ==============================
        exportBtn.addEventListener('click', () => {
            const text = outputContent.textContent;
            if (!text) {
                showToast('📭 لا يوجد نص للتحميل', 'error');
                return;
            }

            const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `ذكاءAI_${state.selectedService}_${Date.now()}.txt`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
            showToast('📥 تم تحميل الملف!');
        });

        // ==============================
        //  مسح
        // ==============================
        clearBtn.addEventListener('click', () => {
            inputText.value = '';
            outputArea.classList.remove('show');
            outputContent.textContent = '';
            showToast('🗑️ تم المسح');
        });

        // ==============================
        //  أزرار التوليد
        // ==============================
        generateBtn.addEventListener('click', generate);

        // اختصار Ctrl+Enter
        inputText.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                generate();
            }
        });

        // ==============================
        //  تهيئة
        // ==============================
        updateCredits();
        inputText.placeholder = 'اكتب موضوع المقال... مثال: "الذكاء الاصطناعي في التعليم"';

        console.log('🚀 ذكاءAI - منصة الخدمات الذكية');
        console.log('💡 اختصار: Ctrl+Enter للتوليد السريع');
        console.log('📊 رصيدك الحالي:', state.credits, 'نقطة');
    </script>

</body>
</html>
