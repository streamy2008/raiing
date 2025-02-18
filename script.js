// 简单的表单提交处理
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('感谢您的留言，我们会尽快与您联系！');
});

// 添加语言切换功能
const translations = {
    zh: {
        home: "首页",
        products: "产品",
        solutions: "解决方案",
        partners: "合作伙伴",
        news: "新闻资讯",
        about: "关于我们",
        more: "更多",
        contact: "联系我们",
        heroTitle: "MONITORING INTERVENTION MANAGING",
        heroSubtitle: "Connect Health For Tomorrow",
        learnMore: "了解更多",
        productTitle: "可穿戴监护 低体温干预 围术期管理",
        product1: "无线体温传感器",
        product1Desc: "精准实时体温监测，适用于多种医疗场景",
        product2: "无线体温监测系统",
        product2Desc: "多设备协同工作，实现全院级体温管理",
        product3: "无线可穿戴多参数监护仪",
        product3Desc: "实时监测多项生命体征，提升医疗效率",
        product4: "无线可穿戴多参数监护系统",
        product4Desc: "模块化集成化监护解决方案，支持远程医疗",
        product5: "产品解决方案",
        product5Desc: "便捷家用体温监测，守护家庭健康",
        aboutTitle: "关于我们",
        aboutText: "睿仁医疗科技，旗下拥有北京睿仁医疗科技有限公司和湖南万木千帆科技有限公司两个科技运营实体，拥有包括万木千帆®、CareClever®、iThermonitor®、发烧总监®、iFertracker®、孕律®在内的多个健康医疗品牌。我们设计打造穿戴式生命监测、物联网解决方案、数据及人工智能服务，帮助医生更好地诊断、管理、预防和干预，帮助人们更好地管理自己的健康。",
        copyright: "&copy; 2025 万木千帆. 保留所有权利。"
    },
    en: {
        home: "Home",
        products: "Products",
        solutions: "Solutions",
        partners: "Partners",
        news: "News",
        about: "About Us",
        more: "More",
        contact: "Contact Us",
        heroTitle: "MONITORING INTERVENTION MANAGING",
        heroSubtitle: "Connect Health For Tomorrow",
        learnMore: "Learn More",
        productTitle: "Wearable Monitoring Hypothermia Intervention Perioperative Management",
        product1: "Wireless Temperature Sensor",
        product1Desc: "Accurate real-time temperature monitoring for various medical scenarios",
        product2: "Wireless Temperature Monitoring System",
        product2Desc: "Multi-device collaboration for hospital-wide temperature management",
        product3: "Wireless Wearable Multi-Parameter Monitor",
        product3Desc: "Real-time monitoring of multiple vital signs to improve medical efficiency",
        product4: "Wireless Wearable Multi-Parameter Monitoring System",
        product4Desc: "Modular and integrated monitoring solutions supporting telemedicine",
        product5: "Product Solutions",
        product5Desc: "Convenient home temperature monitoring to protect family health",
        aboutTitle: "About Us",
        aboutText: "Ruirui Medical Technology, with two technology operating entities, Beijing Ruiren Medical Technology Co., Ltd. and Hunan Wanmu Qianfan Technology Co., Ltd., owns multiple health and medical brands including Wanmu Qianfan®, CareClever®, iThermonitor®, Fever Director®, iFertracker®, and Pregnancy Rhythm®. We design and build wearable life monitoring, IoT solutions, data, and AI services to help doctors better diagnose, manage, prevent, and intervene, and help people better manage their health.",
        copyright: "&copy; 2025 Wanmu Qianfan. All rights reserved."
    }
};

document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
        // 移除所有按钮的active类
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 为当前点击的按钮添加active类
        this.classList.add('active');
        
        // 获取选择的语言
        const lang = this.getAttribute('data-lang');
        
        // 根据选择的语言更新页面内容
        updateLanguage(lang);
    });
});

function updateLanguage(lang) {
    const t = translations[lang];
    
    // 更新导航栏
    document.querySelector('nav a[href="#home"]').textContent = t.home;
    document.querySelector('nav a[href="#products"]').textContent = t.products;
    document.querySelector('nav a[href="#solutions"]').textContent = t.solutions;
    document.querySelector('nav a[href="#partners"]').textContent = t.partners;
    document.querySelector('nav a[href="#news"]').textContent = t.news;
    document.querySelector('nav a[href="#about"]').textContent = t.about;
    document.querySelector('nav a[href="#"]').textContent = t.more;
    document.querySelector('.submenu a[href="#contact"]').textContent = t.contact;

    // 更新首页内容
    document.querySelector('.hero h2').textContent = t.heroTitle;
    document.querySelector('.hero p').textContent = t.heroSubtitle;
    document.querySelector('.hero .btn').textContent = t.learnMore;

    // 更新产品部分
    document.querySelector('.products h2').textContent = t.productTitle;
    document.querySelectorAll('.product-item h3')[0].textContent = t.product1;
    document.querySelectorAll('.product-item p')[0].textContent = t.product1Desc;
    document.querySelectorAll('.product-item h3')[1].textContent = t.product2;
    document.querySelectorAll('.product-item p')[1].textContent = t.product2Desc;
    document.querySelectorAll('.product-item h3')[2].textContent = t.product3;
    document.querySelectorAll('.product-item p')[2].textContent = t.product3Desc;
    document.querySelectorAll('.product-item h3')[3].textContent = t.product4;
    document.querySelectorAll('.product-item p')[3].textContent = t.product4Desc;
    document.querySelectorAll('.product-item h3')[4].textContent = t.product5;
    document.querySelectorAll('.product-item p')[4].textContent = t.product5Desc;

    // 更新关于我们部分
    document.querySelector('.about h2').textContent = t.aboutTitle;
    document.querySelector('.about p').textContent = t.aboutText;

    // 更新页脚
    document.querySelector('footer p').innerHTML = t.copyright;

    // 更新页面语言属性
    document.documentElement.lang = lang;
}

// 添加打字机效果
// document.addEventListener('DOMContentLoaded', function() {
//     const text = "Connect Health For Tomorrow";
//     const typewriter = document.getElementById('typewriter');
//     let i = 0;
//     
//     function type() {
//         if (i < text.length) {
//             typewriter.textContent += text.charAt(i);
//             i++;
//             setTimeout(type, 100);
//         }
//     }
//     
//     // 开始打字效果
//     type();
// });

// 添加下拉菜单交互
// document.querySelectorAll('.dropdown-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const dropdownContent = this.nextElementSibling;
//         dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
//     });
// });

// 点击其他地方关闭下拉菜单
// document.addEventListener('click', function(event) {
//     if (!event.target.matches('.dropdown-btn')) {
//         document.querySelectorAll('.dropdown-content').forEach(dropdown => {
//             dropdown.style.display = 'none';
//         });
//     }
// }); 