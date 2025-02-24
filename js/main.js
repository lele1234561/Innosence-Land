// 添加在现有代码前面
function setScaleRatio() {
    const baseWidth = 1920;
    const currentWidth = window.innerWidth;
    const ratio = currentWidth / baseWidth;
    document.documentElement.style.setProperty('--scale-ratio', ratio);
}

// 初始设置
setScaleRatio();

// 监听窗口大小变化
window.addEventListener('resize', setScaleRatio);

// 添加图标点击动画
document.querySelector('.main-icon-container').addEventListener('click', function() {
    this.classList.add('split-animation');
});

// 保留视口高度设置代码
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 初始设置
setVH();

// 监听设备方向变化
window.addEventListener('orientationchange', () => {
    setVH();
});

// 保留登录按钮点击事件
document.querySelector('.login-button').addEventListener('click', () => {
    const button = document.querySelector('.login-button');
    button.style.transform = 'scale(0.9) rotate(0deg)';
    
    setTimeout(() => {
        window.location.href = 'pages/login.html?from=home';
    }, 200);
});

// 修改点击事件
document.querySelector('.main-icon-full').addEventListener('click', function() {
    const container = document.querySelector('.main-icon-container');
    container.classList.add('split-animation');
    
    // 添加点击事件到中间的图标（可选）
    setTimeout(() => {
        document.querySelectorAll('.middle-icon').forEach(icon => {
            icon.style.cursor = 'pointer';
            icon.addEventListener('click', function() {
                // 这里可以添加点击每个图标后的效果
                console.log('Icon clicked:', this.alt);
            });
        });
    }, 1000); // 等待动画完成后添加交互
});

// 修改点击事件处理
document.querySelectorAll('.icon-wrapper').forEach(wrapper => {
    const backIcon = wrapper.querySelector('.back');
    
    backIcon.addEventListener('click', function(e) {
        e.stopPropagation();  // 阻止事件冒泡
        
        // 移除其他图标的选中状态
        document.querySelectorAll('.icon-wrapper').forEach(w => {
            if (w !== wrapper) {
                w.classList.remove('selected');
            }
        });
        
        // 切换当前图标的选中状态
        wrapper.classList.add('selected');
        
        // 添加类以显示菜单按钮
        document.body.classList.add('has-selected');
    });
});

// 修改点击其他区域的处理
document.addEventListener('click', function(e) {
    if (!e.target.closest('.icon-wrapper')) {
        document.querySelectorAll('.icon-wrapper').forEach(wrapper => {
            wrapper.classList.remove('selected');
        });
        // 移除类以隐藏菜单按钮
        document.body.classList.remove('has-selected');
    }
});

// 添加菜单按钮点击事件
document.querySelector('.menu-button').addEventListener('click', function() {
    window.location.href = 'pages/menu.html';
}); 