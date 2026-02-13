// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Kartik",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Multi-stage content
    stages: {
        stage1: {
            emoji: "👋",
            mainText: "Hi",
            paragraph: "I've been thinking… and I decided to stop overthinking.",
            button: "Okay, tell me"
        },
        stage2: {
            mainText: "We've only met a few times.",
            memories: [
                "That walk in Nehru park 🌳",
                "Coffee at Diggin ☕",
                "You in that black dress 🖤",
                "And that smile… 😊"
            ],
            smallText: "Every time, I've smiled a little more than usual.",
            italicText: "So I built this instead of sending a boring text.",
            button: "What is this about?"
        },
        stage3: {
            mainQuestion: "Will you be my Valentine?",
            emoji: "💌",
            yesBtn: "Yes 💖",
            noBtn: "No",
            noButtonTexts: [
                "Are you sure?",
                "Hmm… think again",
                "Okay wow rude",
                "This button is getting tired",
                "I'm gonna disappear"
            ]
        },
        stage4: {
            mainText: "Wait… that was too easy.",
            paragraph: "If you really mean yes, do one thing.",
            button: "Press No (trust me) 😏"
        },
        stage5: {
            firstLine: "Haha.",
            paragraph1: "That was just to prove you're a good sport.",
            mainQuestion: "Happy Valentine's Day 🌹",
            paragraph2: "No tricks now. Just me asking you properly.",
            button: "Yes, I'll be your Valentine 💕"
        },
        stage6: {
            emoji: "🎉",
            mainText: "I'm really glad I asked you.",
            subtext: "Coffee / dessert is on me ❤️",
            footer: "Built with nerves, hope, and a lot of overthinking."
        }
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
