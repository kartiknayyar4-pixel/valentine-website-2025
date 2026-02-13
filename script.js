// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Current stage tracking
let currentStage = 1;
let noButtonClickCount = 0;

// Validate configuration
function validateConfig() {
    const warnings = [];

    if (!config.valentineName) {
        warnings.push("Valentine's name is not set! Using default.");
        config.valentineName = "My Love";
    }

    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Invalid color for ${key}! Using default.`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Float duration too short! Setting to 5s minimum.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("Heart explosion size should be between 1 and 3! Using default.");
        config.animations.heartExplosionSize = 1.5;
    }

    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}

// Default color values
function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };
    return defaults[key];
}

// Set page title
document.title = config.pageTitle;

// Initialize the page content when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    validateConfig();

    // Set title
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;

    // Initialize Stage 1
    initializeStage1();

    // Create initial floating elements
    createFloatingElements();

    // Setup music player
    setupMusicPlayer();

    // Show first stage
    goToStage(1);
});

// Initialize Stage 1 content
function initializeStage1() {
    const stage1 = config.stages.stage1;
    if (document.getElementById('emoji1')) {
        document.getElementById('emoji1').textContent = stage1.emoji;
    }
    if (document.getElementById('mainText1')) {
        document.getElementById('mainText1').textContent = stage1.mainText;
    }
    if (document.getElementById('paragraph1')) {
        document.getElementById('paragraph1').textContent = stage1.paragraph;
    }
    if (document.getElementById('button1')) {
        document.getElementById('button1').textContent = stage1.button;
    }
}

// Initialize Stage 2 content
function initializeStage2() {
    const stage2 = config.stages.stage2;
    if (document.getElementById('mainText2')) {
        document.getElementById('mainText2').textContent = stage2.mainText;
    }
    if (document.getElementById('smallText2')) {
        document.getElementById('smallText2').textContent = stage2.smallText;
    }
    if (document.getElementById('italicText2')) {
        document.getElementById('italicText2').textContent = stage2.italicText;
    }
    if (document.getElementById('button2')) {
        document.getElementById('button2').textContent = stage2.button;
    }

    // Create memories list
    const memoriesContainer = document.getElementById('memoriesContainer');
    if (memoriesContainer) {
        memoriesContainer.innerHTML = '';
        stage2.memories.forEach(memory => {
            const memoryElement = document.createElement('p');
            memoryElement.className = 'memory-item';
            memoryElement.textContent = memory;
            memoriesContainer.appendChild(memoryElement);
        });
    }
}

// Initialize Stage 3 content
function initializeStage3() {
    const stage3 = config.stages.stage3;
    noButtonClickCount = 0;

    if (document.getElementById('emoji3')) {
        document.getElementById('emoji3').textContent = stage3.emoji;
    }
    if (document.getElementById('mainQuestion3')) {
        document.getElementById('mainQuestion3').textContent = stage3.mainQuestion;
    }
    if (document.getElementById('yesBtn3')) {
        document.getElementById('yesBtn3').textContent = stage3.yesBtn;
    }
    if (document.getElementById('noBtn3')) {
        document.getElementById('noBtn3').textContent = stage3.noBtn;
    }
}

// Initialize Stage 4 content
function initializeStage4() {
    const stage4 = config.stages.stage4;
    if (document.getElementById('mainText4')) {
        document.getElementById('mainText4').textContent = stage4.mainText;
    }
    if (document.getElementById('paragraph4')) {
        document.getElementById('paragraph4').textContent = stage4.paragraph;
    }
    if (document.getElementById('button4')) {
        document.getElementById('button4').textContent = stage4.button;
    }
}

// Initialize Stage 5 content
function initializeStage5() {
    const stage5 = config.stages.stage5;
    if (document.getElementById('firstLine5')) {
        document.getElementById('firstLine5').textContent = stage5.firstLine;
    }
    if (document.getElementById('paragraph5a')) {
        document.getElementById('paragraph5a').textContent = stage5.paragraph1;
    }
    if (document.getElementById('mainQuestion5')) {
        document.getElementById('mainQuestion5').textContent = stage5.mainQuestion;
    }
    if (document.getElementById('paragraph5b')) {
        document.getElementById('paragraph5b').textContent = stage5.paragraph2;
    }
    if (document.getElementById('button5')) {
        document.getElementById('button5').textContent = stage5.button;
    }
}

// Initialize Stage 6 content
function initializeStage6() {
    const stage6 = config.stages.stage6;
    if (document.getElementById('emoji6')) {
        document.getElementById('emoji6').textContent = stage6.emoji;
    }
    if (document.getElementById('mainText6')) {
        document.getElementById('mainText6').textContent = stage6.mainText;
    }
    if (document.getElementById('subtext6')) {
        document.getElementById('subtext6').textContent = stage6.subtext;
    }
    if (document.getElementById('footer6')) {
        document.getElementById('footer6').textContent = stage6.footer;
    }
}

// Navigate to a specific stage
function goToStage(stageNumber) {
    // Hide all stages
    document.querySelectorAll('.stage').forEach(stage => {
        stage.classList.add('hidden');
    });

    // Remove fade-in animation by resetting
    const targetStage = document.getElementById(`stage${stageNumber}`);
    if (targetStage) {
        targetStage.classList.remove('fade-in');
        void targetStage.offsetWidth; // Trigger reflow
        targetStage.classList.add('fade-in');
    }

    // Show target stage
    targetStage.classList.remove('hidden');

    // Initialize stage content
    switch (stageNumber) {
        case 1:
            initializeStage1();
            break;
        case 2:
            initializeStage2();
            break;
        case 3:
            initializeStage3();
            break;
        case 4:
            initializeStage4();
            break;
        case 5:
            initializeStage5();
            break;
        case 6:
            initializeStage6();
            createHeartExplosion();
            break;
    }

    currentStage = stageNumber;
}

// Handle No button in Stage 3
function handleNoButton() {
    const stage3 = config.stages.stage3;
    const noBtn = document.getElementById('noBtn3');

    if (noButtonClickCount < stage3.noButtonTexts.length) {
        noBtn.textContent = stage3.noButtonTexts[noButtonClickCount];
        noButtonClickCount++;
        moveButton(noBtn);
    } else {
        // Button disappears after all texts are exhausted
        noBtn.style.display = 'none';
    }
}

// Create floating hearts and bears
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');

    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

// Set random position for floating elements
function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

// Function to move the "No" button when clicked
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Celebration function
function celebrate() {
    document.querySelectorAll('.stage').forEach(stage => {
        stage.classList.add('hidden');
    });

    goToStage(6);
}

// Create heart explosion animation
function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}

// Music Player Setup
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    if (config.music.autoplay) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented by browser");
                musicToggle.textContent = config.music.startText;
            });
        }
    }

    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
}