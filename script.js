const teamLogos = {
    "Team Spirit": "https://liquipedia.net/commons/images/5/5e/Team_Spirit_2021_allmode.png",
    "Team Falcons": "https://liquipedia.net/commons/images/c/c9/Team_Falcons_allmode.png",
    "BetBoom Team": "https://liquipedia.net/commons/images/3/36/BetBoom_Team_allmode.png",
    "Gaimin Gladiators": "https://liquipedia.net/commons/images/d/df/Gaimin_Gladiators_allmode.png",
    "Team Liquid": "https://liquipedia.net/commons/images/4/46/Team_Liquid_2021_allmode.png",
    "Tundra Esports": "https://liquipedia.net/commons/images/a/a2/Tundra_Esports_allmode.png",
    "PARIVISION": "https://liquipedia.net/commons/images/5/52/PARIVISION_allmode.png",
    "Xtreme Gaming": "https://liquipedia.net/commons/images/3/3b/Xtreme_Gaming_allmode.png",
    "Aurora": "https://liquipedia.net/commons/images/b/bc/Aurora_allmode.png",
    "Heroic": "https://liquipedia.net/commons/images/3/37/Heroic_2023_allmode.png",
    "G2.IG": "https://liquipedia.net/commons/images/5/5e/G2.iG_allmode.png",
    "OG": "https://liquipedia.net/commons/images/d/d7/OG_allmode.png",
    "Natus Vincere": "https://liquipedia.net/commons/images/b/b5/Natus_Vincere_allmode.png",
    "LGD Gaming": "https://liquipedia.net/commons/images/e/ec/LGD_Gaming_allmode.png",
    "Team Aster": "https://liquipedia.net/commons/images/7/77/Team_Aster_allmode.png",
    "nouns": "https://liquipedia.net/commons/images/3/3c/Nouns_Esports_allmode.png",
    "Apex": "https://liquipedia.net/commons/images/b/b5/Natus_Vincere_allmode.png",
    "Virtus.pro": "https://liquipedia.net/commons/images/0/09/Virtus.pro_2021_allmode.png"
};

const dbData = {
    news: [
        {
            title: "Плей-офф главного турнира года в самом разгаре: расписание актуализировано",
            author: "Cybersport.ru",
            time: "19.08.2026, 09:00",
            comment: "Аналитики отмечают высочайший уровень подготовки команд верхней сетки.",
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60"
        },
        {
            title: "Team Falcons и Team Spirit диктуют мету патча на профессиональной сцене",
            author: "Dotabuff Meta",
            time: "18.08.2026, 21:30",
            comment: "Гибкость драфтов позволяет фаворитам уверенно забирать карты.",
            img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=60"
        }
    ],
    analytics: [
        { match: "Team Falcons vs Team Spirit", date: "19 Августа 2026, 13:00 МСК", winrate1: "52%", winrate2: "48%", dotabuffId: "Match #89241011", draft: "Falcons берут темповых коров (Luna, SF), Spirit отвечают через Collapse на Mars и Yatoro на Morphling.", prediction: "Прогноз: победа Team Falcons со счетом 2:1.", details: "OpenDota API: борьба за ранний обзор ключевая для обеих команд." },
        { match: "BetBoom Team vs Gaimin Gladiators", date: "19 Августа 2026, 16:30 МСК", winrate1: "50%", winrate2: "50%", dotabuffId: "Match #89241012", draft: "Nightfall на сильном лейне против агрессивного мида от Quinn.", prediction: "Прогноз: тотал карт больше 2.5.", details: "Dotabuff Pro Tracker: команды имеют идентичный винрейт за последние 10 игр." },
        { match: "Team Liquid vs Tundra Esports", date: "20 Августа 2026, 13:00 МСК", winrate1: "55%", winrate2: "45%", dotabuffId: "Match #89241013", draft: "33 берет нестандартных героев офлейна, Nisha контролирует темп на миду.", prediction: "Прогноз: победа Team Liquid (2:0).", details: "OpenDota API: Liquid эффективнее конвертируют преимущество в Roshan." },
        { match: "Xtreme Gaming vs PARIVISION", date: "20 Августа 2026, 16:30 МСК", winrate1: "48%", winrate2: "52%", dotabuffId: "Match #89241014", draft: "Ame на комфортном керри против жесткой дисциплины PARIVISION.", prediction: "Прогноз: победа PARIVISION со счетом 2:1.", details: "Статистика вардинга и фарма на 15 минуте в пользу PARIVISION." }
    ],
    rating: [
        { rank: 1, team: "Team Falcons", points: "18,400 очков", wr: "74%" },
        { rank: 2, team: "Team Spirit", points: "15,200 очков", wr: "69%" },
        { rank: 3, team: "BetBoom Team", points: "12,800 очков", wr: "64%" },
        { rank: 4, team: "Gaimin Gladiators", points: "11,500 очков", wr: "61%" },
        { rank: 5, team: "Team Liquid", points: "10,900 очков", wr: "60%" },
        { rank: 6, team: "Tundra Esports", points: "9,800 очков", wr: "58%" },
        { rank: 7, team: "PARIVISION", points: "8,900 очков", wr: "57%" },
        { rank: 8, team: "Xtreme Gaming", points: "8,400 очков", wr: "56%" },
        { rank: 9, team: "Aurora", points: "7,600 очков", wr: "55%" },
        { rank: 10, team: "Heroic", points: "7,100 очков", wr: "54%" },
        { rank: 11, team: "G2.IG", points: "6,500 очков", wr: "53%" },
        { rank: 12, team: "OG", points: "6,000 очков", wr: "52%" }
    ],
    teams: [
        { name: "Team Spirit", region: "EEU", wr: "68%", roster: "Yatoro, Larl, Collapse, Rue, Miposhka" },
        { name: "Team Falcons", region: "MENA", wr: "73%", roster: "Skiter, Malr1ne, ATF, Cr1t, Sneyking" },
        { name: "BetBoom Team", region: "EEU", wr: "65%", roster: "Nightfall, gpk, MieRo, Save-, TORONTOTOKYO" },
        { name: "Gaimin Gladiators", region: "WEU", wr: "62%", roster: "Dyrachyo, Quinn, Ace, tOfu, Seleri" },
        { name: "Team Liquid", region: "WEU", wr: "60%", roster: "miCKe, Nisha, 33, Boxi, Insania" },
        { name: "Tundra Esports", region: "WEU", wr: "59%", roster: "Pure, Topson, 33, Saksa, Whitemon" },
        { name: "PARIVISION", region: "EEU", wr: "58%", roster: "Crystallis, DM, 9pasha, Dukalis" },
        { name: "Xtreme Gaming", region: "CN", wr: "57%", roster: "Ame, Xm, Xxs, XinQ, Dy" },
        { name: "Aurora", region: "SEA", wr: "56%", roster: "Jabz, 23savage, Armel, Mira, Oli" },
        { name: "Heroic", region: "SA", wr: "55%", roster: "K1, 4nalog, Scofield, KJ, Stinger" },
        { name: "G2.IG", region: "CN", wr: "54%", roster: "Monet, NothingToSay, JT-, Bob, xNova" },
        { name: "OG", region: "WEU", wr: "53%", roster: "Timado, BZM, Wisper, Ari, Ceb" }
    ],
    meta: [],
    archive: [
        { year: "TI 2026", winner: "Определяется в Шанхае", prize: "$3,133,717+" },
        { year: "TI 2025", winner: "Team Liquid", prize: "$2,400,000" },
        { year: "TI 2024", winner: "Team Spirit", prize: "$2,600,000" },
        { year: "TI 2023", winner: "Team Spirit", prize: "$3,140,000" },
        { year: "TI 2022", winner: "Tundra Esports", prize: "$8,500,000" },
        { year: "TI 2021", winner: "Team Spirit", prize: "$18,200,000" },
        { year: "TI 2019", winner: "OG", prize: "$15,620,181" },
        { year: "TI 2018", winner: "OG", prize: "$11,234,158" },
        { year: "TI 2017", winner: "Team Liquid", prize: "$10,862,683" },
        { year: "TI 2016", winner: "Wings Gaming", prize: "$9,139,002" },
        { year: "TI 2015", winner: "Evil Geniuses", prize: "$6,634,661" },
        { year: "TI 2014", winner: "Newbee", prize: "$5,025,429" },
        { year: "TI 2013", winner: "Alliance", prize: "$1,439,526" },
        { year: "TI 2012", winner: "Natus Vincere", prize: "$1,000,000" },
        { year: "TI 2011", winner: "Natus Vincere", prize: "$1,000,000" }
    ]
};

const heroAttributes = {
    "Abaddon": "all", "Alchemist": "str", "Ancient Apparition": "int", "Anti-Mage": "agi", "Arc Warden": "agi",
    "Axe": "str", "Bane": "int", "Batrider": "int", "Beastmaster": "str", "Bloodseeker": "agi",
    "Bounty Hunter": "agi", "Brewmaster": "str", "Bristleback": "str", "Broodmother": "agi", "Centaur Warrunner": "str",
    "Chaos Knight": "str", "Chen": "all", "Clinkz": "agi", "Clockwerk": "str", "Crystal Maiden": "int",
    "Dark Seer": "int", "Dark Willow": "int", "Dawnbreaker": "str", "Death Prophet": "int", "Disruptor": "int",
    "Doom": "str", "Dragon Knight": "str", "Drow Ranger": "agi", "Earth Spirit": "str", "Earthshaker": "str",
    "Elder Titan": "str", "Ember Spirit": "agi", "Enchantress": "int", "Enigma": "int", "Faceless Void": "agi",
    "Primal Beast": "str", "Grimstroke": "int", "Gyrocopter": "agi", "Hoodwink": "agi", "Huskar": "str",
    "Invoker": "int", "Io": "all", "Jakiro": "int", "Juggernaut": "agi", "Keeper of the Light": "int",
    "Kunkka": "str", "Legion Commander": "str", "Leshrac": "int", "Lich": "int", "Lifestealer": "str",
    "Lina": "int", "Lion": "int", "Lone Druid": "agi", "Luna": "agi", "Lycan": "str",
    "Magnus": "str", "Marci": "all", "Mars": "str", "Medusa": "agi", "Meepo": "agi",
    "Mirana": "all", "Monkey King": "agi", "Morphling": "agi", "Muerta": "int", "Naga Siren": "agi",
    "Natures Prophet": "int", "Necrophos": "int", "Night Stalker": "str", "Nyx Assassin": "all", "Ogre Magi": "str",
    "Omniknight": "str", "Oracle": "int", "Outworld Destroyer": "int", "Pangolier": "agi", "Phantom Assassin": "agi",
    "Phantom Lancer": "agi", "Phoenix": "str", "Puck": "int", "Pudge": "str", "Pugna": "int",
    "Queen of Pain": "int", "Riki": "agi", "Rubick": "int", "Sand King": "str", "Shadow Demon": "int",
    "Shadow Fiend": "agi", "Shadow Shaman": "int", "Silencer": "int", "Skywrath Mage": "int", "Slardar": "str",
    "Slark": "agi", "Snapfire": "all", "Sniper": "agi", "Spectre": "agi", "Spirit Breaker": "str",
    "Storm Spirit": "int", "Sven": "str", "Techies": "all", "Templar Assassin": "agi", "Terrorblade": "agi"
};

const heroRolesData = {
    "Abaddon": ["offlane", "support", "carry"],
    "Alchemist": ["carry", "mid", "support"],
    "Ancient Apparition": ["support", "mid", "offlane"],
    "Anti-Mage": ["carry", "mid", "offlane"],
    "Arc Warden": ["mid", "carry", "support"],
    "Axe": ["offlane", "carry", "support"],
    "Bane": ["support", "mid", "offlane"],
    "Batrider": ["mid", "offlane", "support"],
    "Beastmaster": ["offlane", "mid", "support"],
    "Bloodseeker": ["carry", "mid", "offlane"],
    "Bounty Hunter": ["support", "offlane", "carry"],
    "Brewmaster": ["offlane", "mid", "carry"],
    "Bristleback": ["offlane", "carry", "support"],
    "Broodmother": ["mid", "offlane", "carry"],
    "Centaur Warrunner": ["offlane", "support", "carry"],
    "Chaos Knight": ["carry", "offlane", "support"],
    "Chen": ["support", "mid", "offlane"],
    "Clinkz": ["carry", "mid", "offlane"],
    "Clockwerk": ["offlane", "support", "mid"],
    "Crystal Maiden": ["support", "mid", "offlane"],
    "Dark Seer": ["offlane", "support", "mid"],
    "Dark Willow": ["support", "mid", "offlane"],
    "Dawnbreaker": ["offlane", "support", "carry"],
    "Death Prophet": ["mid", "offlane", "carry"],
    "Disruptor": ["support", "mid", "offlane"],
    "Doom": ["offlane", "carry", "mid"],
    "Dragon Knight": ["mid", "offlane", "carry"],
    "Drow Ranger": ["carry", "mid", "offlane"],
    "Earth Spirit": ["support", "offlane", "mid"],
    "Earthshaker": ["support", "offlane", "mid"],
    "Elder Titan": ["support", "offlane", "carry"],
    "Ember Spirit": ["mid", "carry", "offlane"],
    "Enchantress": ["support", "offlane", "carry"],
    "Enigma": ["offlane", "support", "mid"],
    "Faceless Void": ["carry", "offlane", "support"],
    "Primal Beast": ["offlane", "mid", "support"],
    "Grimstroke": ["support", "mid", "offlane"],
    "Gyrocopter": ["carry", "support", "mid"],
    "Hoodwink": ["support", "carry", "offlane"],
    "Huskar": ["mid", "carry", "offlane"],
    "Invoker": ["mid", "support", "carry"],
    "Io": ["support", "carry", "mid"],
    "Jakiro": ["support", "mid", "offlane"],
    "Juggernaut": ["carry", "offlane", "support"],
    "Keeper of the Light": ["support", "mid", "offlane"],
    "Kunkka": ["mid", "offlane", "carry"],
    "Legion Commander": ["offlane", "carry", "mid"],
    "Leshrac": ["mid", "support", "carry"],
    "Lich": ["support", "mid", "offlane"],
    "Lifestealer": ["carry", "offlane", "support"],
    "Lina": ["mid", "carry", "support"],
    "Lion": ["support", "mid", "offlane"],
    "Lone Druid": ["carry", "mid", "offlane"],
    "Luna": ["carry", "support", "mid"],
    "Lycan": ["carry", "offlane", "support"],
    "Magnus": ["offlane", "mid", "carry"],
    "Marci": ["support", "carry", "offlane"],
    "Mars": ["offlane", "support", "carry"],
    "Medusa": ["carry", "mid", "offlane"],
    "Meepo": ["mid", "carry", "offlane"],
    "Mirana": ["support", "mid", "carry"],
    "Monkey King": ["carry", "mid", "offlane"],
    "Morphling": ["carry", "mid", "support"],
    "Muerta": ["carry", "mid", "support"],
    "Naga Siren": ["carry", "support", "offlane"],
    "Natures Prophet": ["offlane", "mid", "carry"],
    "Necrophos": ["offlane", "mid", "support"],
    "Night Stalker": ["offlane", "carry", "support"],
    "Nyx Assassin": ["support", "offlane", "mid"],
    "Ogre Magi": ["support", "offlane", "carry"],
    "Omniknight": ["support", "offlane", "carry"],
    "Oracle": ["support", "mid", "offlane"],
    "Outworld Destroyer": ["mid", "carry", "offlane"],
    "Pangolier": ["offlane", "mid", "carry"],
    "Phantom Assassin": ["carry", "mid", "offlane"],
    "Phantom Lancer": ["carry", "offlane", "support"],
    "Phoenix": ["support", "offlane", "mid"],
    "Puck": ["mid", "offlane", "support"],
    "Pudge": ["support", "offlane", "mid"],
    "Pugna": ["mid", "support", "offlane"],
    "Queen of Pain": ["mid", "carry", "offlane"],
    "Riki": ["carry", "support", "offlane"],
    "Rubick": ["support", "mid", "offlane"],
    "Sand King": ["offlane", "support", "mid"],
    "Shadow Demon": ["support", "mid", "offlane"],
    "Shadow Fiend": ["mid", "carry", "offlane"],
    "Shadow Shaman": ["support", "mid", "offlane"],
    "Silencer": ["support", "mid", "carry"],
    "Skywrath Mage": ["support", "mid", "offlane"],
    "Slardar": ["offlane", "carry", "support"],
    "Slark": ["carry", "offlane", "support"],
    "Snapfire": ["support", "mid", "carry"],
    "Sniper": ["carry", "mid", "support"],
    "Spectre": ["carry", "offlane", "support"],
    "Spirit Breaker": ["offlane", "support", "carry"],
    "Storm Spirit": ["mid", "carry", "offlane"],
    "Sven": ["carry", "offlane", "support"],
    "Techies": ["support", "mid", "offlane"],
    "Templar Assassin": ["mid", "carry", "offlane"],
    "Terrorblade": ["carry", "mid", "offlane"]
};

const diffsPool = ["easy", "medium", "hard"];

const itemIcons = {
    "Power Treads": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png",
    "Phase Boots": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png",
    "Arcane Boots": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png",
    "Blink Dagger": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png",
    "Maelstrom": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/maelstrom.png",
    "Black King Bar (BKB)": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
    "Satanic": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png",
    "Shiva's Guard": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png",
    "Aghanim's Scepter": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png",
    "Refresher Orb": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png",
    "Abyssal Blade": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png",
    "Scythe of Vyse": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png",
    "Moon Shard": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png"
};

const heroNamesList = Object.keys(heroAttributes);

heroNamesList.forEach((name, index) => {
    const attr = heroAttributes[name];
    const roles = heroRolesData[name] || ["carry", "mid", "support"];
    
    dbData.meta.push({
        hero: name,
        attr: attr,
        roles: roles,
        role: roles[0],
        diff: diffsPool[index % diffsPool.length],
        icon: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name.toLowerCase().replace(/ /g, '_').replace(/-/g, '_')}.png`,
        winrate: (48 + (index * 17) % 11) + "." + ((index * 3) % 10) + "%",
        matches: 500 + (index * 37) % 1200,
        topPlayer: index % 2 === 0 ? "Yatoro / Skiter" : "Topson / Quinn",
        builds: {
            "carry": [
                { item: "Power Treads", timing: "06:10 мин" },
                { item: "Maelstrom", timing: "13:20 мин" },
                { item: "Black King Bar (BKB)", timing: "21:00 мин" },
                { item: "Satanic", timing: "29:30 мин" },
                { item: "Abyssal Blade", timing: "40:00 мин" }
            ],
            "mid": [
                { item: "Phase Boots", timing: "05:40 мин" },
                { item: "Blink Dagger", timing: "12:00 мин" },
                { item: "Black King Bar (BKB)", timing: "19:30 мин" },
                { item: "Shiva's Guard", timing: "28:00 мин" },
                { item: "Scythe of Vyse", timing: "37:00 мин" }
            ],
            "support": [
                { item: "Arcane Boots", timing: "07:15 мин" },
                { item: "Aghanim's Scepter", timing: "22:00 мин" },
                { item: "Refresher Orb", timing: "36:00 мин" },
                { item: "Moon Shard", timing: "45:00 мин" }
            ]
        }
    });
});

function initApp() {
    renderStreamWidget();

    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        newsContainer.innerHTML = '';
        dbData.news.forEach(item => {
            newsContainer.innerHTML += `
                <div class="card">
                    <img src="${item.img}" class="post-img" alt="news" style="width:100%; border-radius:4px;">
                    <h3>${item.title}</h3>
                    <div class="author-box" style="display:flex; justify-content:space-between; font-size:0.85rem;">
                        <span>✍️ ${item.author}</span>
                        <span style="color: #f1c40f;">⏳ ${item.time}</span>
                    </div>
                    <div class="streamer-comment" style="margin-top:8px; color:#94a3b8;">${item.comment}</div>
                </div>`;
        });
    }

    const analyticsContainer = document.getElementById('analytics-container');
    if (analyticsContainer) {
        analyticsContainer.innerHTML = '';
        dbData.analytics.forEach((item, index) => {
            analyticsContainer.innerHTML += `
                <div class="card" style="cursor: pointer;" onclick="openAnalyticsModal(${index})">
                    <h3>⚔️ ${item.match}</h3>
                    <p style="color: #f1c40f; font-size: 0.9rem;">📅 Начало матча: <b>${item.date}</b></p>
                    <p>Винрейт: <b>${item.winrate1}</b> vs <b>${item.winrate2}</b></p>
                    <p style="font-size: 0.85rem; color: #38bdf8;">🎯 <b>Прогноз:</b> ${item.prediction}</p>
                </div>`;
        });
    }

    const ratingContainer = document.getElementById('rating-container');
    if (ratingContainer) {
        ratingContainer.innerHTML = '';
        dbData.rating.forEach(item => {
            const logoUrl = teamLogos[item.team] || "";
            ratingContainer.innerHTML += `
                <div class="card">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        ${logoUrl ? `<img src="${logoUrl}" style="width: 28px; height: 28px; object-fit: contain;" alt="">` : ''}
                        <h3 style="margin:0;">#${item.rank} ${item.team}</h3>
                    </div>
                    <p style="margin-top: 10px;">Очки EPT: <b>${item.points}</b></p>
                    <p>Общий Винрейт: <b>${item.wr}</b></p>
                </div>`;
        });
    }

    const teamsContainer = document.getElementById('teams-container');
    if (teamsContainer) {
        teamsContainer.innerHTML = '';
        dbData.teams.forEach(item => {
            const logoUrl = teamLogos[item.name] || "";
            teamsContainer.innerHTML += `
                <div class="card">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        ${logoUrl ? `<img src="${logoUrl}" style="width: 32px; height: 32px; object-fit: contain;" alt="">` : ''}
                        <h3 style="margin:0;">${item.name} <span style="font-size:0.8rem; color:#f1c40f;">(${item.region})</span></h3>
                    </div>
                    <p style="margin-top: 10px;">Винрейт матчей: <b>${item.wr}</b></p>
                    <p style="font-size: 0.85rem; color: #94a3b8;">Состав: ${item.roster}</p>
                </div>`;
        });
    }

    renderMetaHeroes(dbData.meta);

    const archiveContainer = document.getElementById('archive-container');
    if (archiveContainer) {
        archiveContainer.innerHTML = '';
        dbData.archive.forEach(item => {
            archiveContainer.innerHTML += `
                <div class="card">
                    <h3>🏆 ${item.year}</h3>
                    <p>Победитель: <b>${item.winner}</b></p>
                    <p>Призовой фонд: <span style="color: #22c55e;">${item.prize}</span></p>
                </div>`;
        });
    }

    renderCleanBracket();
}

function renderMetaHeroes(heroesArray) {
    const metaTab = document.getElementById('meta');
    if (!metaTab) return;

    let filterBar = document.getElementById('hero-filters');
    if (!filterBar) {
        filterBar = document.createElement('div');
        filterBar.id = 'hero-filters';
        filterBar.style.cssText = "display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; background: #1f2937; padding: 15px; border-radius: 8px;";
        filterBar.innerHTML = `
            <select id="filter-role" onchange="filterHeroes()" style="background:#111827; color:#fff; padding:8px; border-radius:4px; border:1px solid #374151;">
                <option value="all">Все роли</option>
                <option value="carry">Керри</option>
                <option value="mid">Мид</option>
                <option value="offlane">Оффлейн</option>
                <option value="support">Саппорт</option>
            </select>
            <select id="filter-attr" onchange="filterHeroes()" style="background:#111827; color:#fff; padding:8px; border-radius:4px; border:1px solid #374151;">
                <option value="all">Все атрибуты</option>
                <option value="str">Сила</option>
                <option value="agi">Ловкость</option>
                <option value="int">Интеллект</option>
                <option value="all_univ">Универсалы</option>
            </select>
            <select id="filter-diff" onchange="filterHeroes()" style="background:#111827; color:#fff; padding:8px; border-radius:4px; border:1px solid #374151;">
                <option value="all">Любая сложность</option>
                <option value="easy">Простой</option>
                <option value="medium">Средний</option>
                <option value="hard">Сложный</option>
            </select>
        `;
        metaTab.prepend(filterBar);
    }

    let container = document.getElementById('meta-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'meta-container';
        container.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px;";
        metaTab.appendChild(container);
    }

    container.innerHTML = '';
    heroesArray.forEach(item => {
        const mainRole = item.roles[0];
        const primaryBuild = item.builds[mainRole] || item.builds["carry"];
        
        let itemsHtml = '<div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px;">';
        primaryBuild.slice(0, 3).forEach(b => {
            const iconUrl = itemIcons[b.item] || "";
            itemsHtml += `
                <div style="background: #1f2937; padding: 4px 6px; border-radius: 4px; display: flex; align-items: center; gap: 4px;" title="${b.item} (${b.timing})">
                    ${iconUrl ? `<img src="${iconUrl}" style="width: 20px; height: 20px; object-fit: contain;" alt="">` : ''}
                    <span style="font-size: 0.65rem; color: #f1c40f;">${b.timing}</span>
                </div>`;
        });
        itemsHtml += '</div>';

        const attrNames = { "str": "Сила", "agi": "Ловкость", "int": "Интеллект", "all": "Универсал" };

        container.innerHTML += `
            <div class="card" style="background: #111827; cursor: pointer;" onclick="openHeroModal('${item.hero}')">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <img src="${item.icon}" style="width: 50px; height: 50px; border-radius: 6px;" alt="">
                    <div>
                        <h3 style="margin:0; font-size:1rem;">${item.hero}</h3>
                        <span style="font-size:0.8rem; color:#22c55e;">Винрейт: <b>${item.winrate}</b></span>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 0.8rem; color: #94a3b8;">
                    <span>Атрибут: <b style="color:#fff;">${attrNames[item.attr]}</b></span>
                    <span>Роли: <b style="color:#fff;">${item.roles.join(', ').toUpperCase()}</b></span>
                </div>
                ${itemsHtml}
            </div>`;
    });
}

function filterHeroes() {
    const role = document.getElementById('filter-role').value;
    const attr = document.getElementById('filter-attr').value;
    const diff = document.getElementById('filter-diff').value;

    const filtered = dbData.meta.filter(h => {
        let matchRole = (role === 'all' || h.roles.includes(role));
        let matchAttr = (attr === 'all' || (attr === 'all_univ' ? h.attr === 'all' : h.attr === attr));
        let matchDiff = (diff === 'all' || h.diff === diff);
        return matchRole && matchAttr && matchDiff;
    });

    renderMetaHeroes(filtered);
}

function openHeroModal(heroName) {
    const item = dbData.meta.find(h => h.hero === heroName);
    if (!item) return;

    const modalBody = document.getElementById('modal-body');
    if (!modalBody) return;

    let buildsHtml = '';
    for (let roleKey in item.builds) {
        const buildList = item.builds[roleKey];
        buildsHtml += `<h4 style="color: #f1c40f; margin: 12px 0 6px 0; text-transform: uppercase;">Роль: ${roleKey}</h4>`;
        buildsHtml += `<div style="display: flex; flex-direction: column; gap: 6px;">`;
        buildList.forEach(b => {
            const iconUrl = itemIcons[b.item] || "";
            buildsHtml += `
                <div style="display: flex; align-items: center; justify-content: space-between; background: #1f2937; padding: 6px 10px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        ${iconUrl ? `<img src="${iconUrl}" style="width: 24px; height: 24px; object-fit: contain;" alt="">` : ''}
                        <span style="font-size: 0.9rem; color: #fff;">${b.item}</span>
                    </div>
                    <span style="font-size: 0.85rem; color: #22c55e; font-weight: bold;">⏳ ${b.timing}</span>
                </div>`;
        });
        buildsHtml += `</div>`;
    }

    modalBody.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
            <img src="${item.icon}" style="width: 64px; height: 64px; border-radius: 8px;" alt="">
            <div>
                <h2 style="margin: 0;">${item.hero}</h2>
                <p style="margin: 4px 0 0 0; color: #22c55e;">Винрейт по Dotabuff: <b>${item.winrate}</b> (Матчей: ${item.matches})</p>
            </div>
        </div>
        <hr style="border-color: #374151; margin: 15px 0;">
        <p><b>Топ игроки патча:</b> ${item.topPlayer}</p>
        <h3 style="margin-top: 15px; color: #38bdf8;">Сборки по ролям (Dotabuff Meta API):</h3>
        ${buildsHtml}
    `;

    const modal = document.getElementById('modal');
    if (modal) modal.style.display = 'block';
}

function renderStreamWidget() {
    const newsTab = document.getElementById('news');
    if (!newsTab) return;

    if (!document.getElementById('live-stream-widget')) {
        const streamContainer = document.createElement('div');
        streamContainer.id = 'live-stream-widget';
        streamContainer.className = 'card';
        streamContainer.style.cssText = "background: #111827; border: 2px solid #9146FF; margin-bottom: 25px;";
        
        const parentHost = window.location.hostname || "localhost";

        streamContainer.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <h3 style="margin: 0; color: #9146FF;">🔴 Прямая трансляция (EN)</h3>
                <a href="https://www.twitch.tv/pgl_dota2" target="_blank" style="background: #9146FF; color: #fff; padding: 6px 14px; border-radius: 4px; text-decoration: none; font-size: 0.85rem; font-weight: bold;">Открыть на Twitch ↗</a>
            </div>
            <div style="position: relative; width: 100%; height: 350px; background: #000; border-radius: 6px; overflow: hidden;">
                <iframe src="https://player.twitch.tv/?channel=pgl_dota2&parent=${parentHost}" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe>
            </div>
        `;
        newsTab.prepend(streamContainer);
    }
}

function renderCleanBracket() {
    const bracket = document.getElementById('bracket-container');
    if (!bracket) return;
    
    bracket.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 30px;">
            <div>
                <div style="font-size: 1.1rem; color: #f1c40f; font-weight: bold; margin-bottom: 15px;">🏆 ВЕРХНЯЯ СЕТКА (ПЛЕЙ-ОФФ ШАНХАЙ)</div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;">
                    <div class="card" style="background: #111827;">
                        <div style="font-size:0.8rem; color:#94a3b8; margin-bottom:8px;">ПОЛУФИНАЛ ВЕРХНИХ #1 | 19 Августа, 13:00 МСК</div>
                        <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #374151;"><span>Team Falcons</span> <b style="color:#22c55e;">2</b></div>
                        <div style="display: flex; justify-content: space-between; padding: 6px 0;"><span>Team Spirit</span> <span style="color:#94a3b8;">1</span></div>
                    </div>
                    <div class="card" style="background: #111827;">
                        <div style="font-size:0.8rem; color:#94a3b8; margin-bottom:8px;">ПОЛУФИНАЛ ВЕРХНИХ #2 | 19 Августа, 16:30 МСК</div>
                        <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #374151;"><span>BetBoom Team</span> <b style="color:#22c55e;">2</b></div>
                        <div style="display: flex; justify-content: space-between; padding: 6px 0;"><span>Gaimin Gladiators</span> <span style="color:#94a3b8;">1</span></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function switchTab(tabId) {
    // Скрываем все вкладки
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active-content');
    });

    // Убираем активный класс со всех кнопок
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Показываем нужную вкладку
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active-content');
    }

    // Подсвечиваем нажатую кнопку
    event.target.classList.add('active');
}
// Делаем функцию доступной глобально для CodePen
// Делаем функцию переключения вкладок доступной глобально для CodePen
window.switchTab = function(tabId) {
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active-content');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active-content');
    }

    if (event && event.target) {
        event.target.classList.add('active');
    }
};

window.renderCleanBracket = function() {
    const bracket = document.getElementById('bracket-container');
    // Если мы не на вкладке "Сетка", просто выходим, чтобы не трогать другие
    if (!bracket) return;
    
    // Проверяем, пуст ли контейнер, чтобы не перерисовывать его каждый раз
    if (bracket.innerHTML.trim() !== "") return;

    bracket.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 30px; overflow-x: auto; padding-bottom: 15px;">
            <!-- ВЕРХНЯЯ СЕТКА -->
            <div>
                <div style="font-size: 1.1rem; color: #f1c40f; font-weight: bold; margin-bottom: 15px;">🏆 ВЕРХНЯЯ СЕТКА</div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px;">
                    <div class="card" style="background: #111827; padding: 10px; border-radius: 8px;">
                        <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:6px;">19 Авг, 11:00 МСК</div>
                        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #374151;"><span>Iron Wing</span> <span>—</span></div>
                        <div style="display: flex; justify-content: space-between;"><span>Team Spirit</span> <span>—</span></div>
                    </div>
                    <!-- Добавьте остальные матчи сюда аналогично -->
                </div>
            </div>
        </div>
    `;
};
window.switchTab = function(tabId) {
    // 1. Скрываем все вкладки
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active-content');
    });

    // 2. Убираем подсветку с кнопок
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Показываем нужную вкладку
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active-content');
    }

    // 4. Подсвечиваем нажатую кнопку
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    } else if (event && event.target) {
        event.target.classList.add('active');
    }

    // 5. ДИНАМИЧЕСКИ ВЫЗЫВАЕМ ОТРИСОВКУ ДЛЯ КАЖДОЙ ВКЛАДКИ
    // (Используйте названия ваших оригинальных функций рендеринга, если они отличаются)
    if (tabId === 'news' && typeof renderNews === 'function') {
        renderNews();
    } else if (tabId === 'analytics' && typeof renderAnalytics === 'function') {
        renderAnalytics();
    } else if (tabId === 'rating' && typeof renderRating === 'function') {
        renderRating();
    } else if (tabId === 'teams' && typeof renderTeams === 'function') {
        renderTeams();
    } else if (tabId === 'meta' && typeof renderMeta === 'function') {
        renderMeta();
    } else if (tabId === 'archive' && typeof renderArchive === 'function') {
        renderArchive();
    } else if (tabId === 'bracket') {
        renderCleanBracket();
    }
};

// 2. Функция отрисовки полной сетки (не ломает другие вкладки)
window.renderCleanBracket = function() {
    const bracket = document.getElementById('bracket-container');
    if (!bracket) return;
    
    // Если сетка уже отрисована, не затираем её заново
    if (bracket.innerHTML.trim() !== "") return;

    bracket.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 30px; overflow-x: auto; padding-bottom: 15px;">
            
            <!-- ВЕРХНЯЯ СЕТКА -->
            <div>
                <div style="font-size: 1.1rem; color: #f1c40f; font-weight: bold; margin-bottom: 15px;">🏆 ВЕРХНЯЯ СЕТКА (UPPER BRACKET)</div>
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    
                    <!-- Четвертьфиналы -->
                    <div>
                        <div style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 8px;">UB Quarterfinals</div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px;">
                            <div class="card" style="background: #111827; padding: 12px; border-radius: 8px;">
                                <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:6px;">19 Авг, 11:00 МСК</div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #374151;"><span>Iron Wing</span> <span style="color:#f1c40f;">—</span></div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0;"><span>Team Spirit</span> <span style="color:#f1c40f;">—</span></div>
                            </div>
                            <div class="card" style="background: #111827; padding: 12px; border-radius: 8px;">
                                <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:6px;">19 Авг, 14:00 МСК</div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #374151;"><span>TEAM VISION</span> <span style="color:#f1c40f;">—</span></div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0;"><span>BoomBoys</span> <span style="color:#f1c40f;">—</span></div>
                            </div>
                            <div class="card" style="background: #111827; padding: 12px; border-radius: 8px;">
                                <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:6px;">19 Авг, 17:00 МСК</div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #374151;"><span>Team Liquid</span> <span style="color:#f1c40f;">—</span></div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0;"><span>Team Yandex</span> <span style="color:#f1c40f;">—</span></div>
                            </div>
                            <div class="card" style="background: #111827; padding: 12px; border-radius: 8px;">
                                <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:6px;">19 Авг, 20:00 МСК</div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #374151;"><span>Nigma Galaxy</span> <span style="color:#f1c40f;">—</span></div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0;"><span>Team Falcons</span> <span style="color:#f1c40f;">—</span></div>
                            </div>
                        </div>
                    </div>

                    <!-- Полуфиналы -->
                    <div>
                        <div style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 8px;">Upper Bracket Semifinals</div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px;">
                            <div class="card" style="background: #111827; padding: 12px; border-radius: 8px;">
                                <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:6px;">21 Авг, 14:00 МСК</div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #374151;"><span>Победитель матча 1</span> <span style="color:#f1c40f;">—</span></div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0;"><span>Победитель матча 2</span> <span style="color:#f1c40f;">—</span></div>
                            </div>
                            <div class="card" style="background: #111827; padding: 12px; border-radius: 8px;">
                                <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:6px;">21 Авг, 17:30 МСК</div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #374151;"><span>Победитель матча 3</span> <span style="color:#f1c40f;">—</span></div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0;"><span>Победитель матча 4</span> <span style="color:#f1c40f;">—</span></div>
                            </div>
                        </div>
                    </div>

                    <!-- Финал верхней сетки -->
                    <div>
                        <div style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 8px;">Upper Bracket Final</div>
                        <div style="max-width: 320px;">
                            <div class="card" style="background: #111827; padding: 12px; border-radius: 8px;">
                                <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:6px;">22 Авг, 15:00 МСК</div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #374151;"><span>Победитель полуфинала 1</span> <span style="color:#f1c40f;">—</span></div>
                                <div style="display: flex; justify-content: space-between; padding: 4px 0;"><span>Победитель полуфинала 2</span> <span style="color:#f1c40f;">—</span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- ГРАНД-ФИНАЛ -->
            <div>
                <div style="font-size: 1.1rem; color: #ef4444; font-weight: bold; margin-bottom: 15px;">🔥 ГРАНД-ФИНАЛ (GRAND FINAL)</div>
                <div style="max-width: 320px;">
                    <div class="card" style="background: #1f1118; border: 1px solid #ef4444; padding: 12px; border-radius: 8px;">
                        <div style="font-size:0.75rem; color:#fca5a5; margin-bottom:6px;">24 Авг, 16:00 МСК (BO5)</div>
                        <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #374151;"><span>Победитель верхней сетки</span> <span style="color:#f1c40f;">—</span></div>
                        <div style="display: flex; justify-content: space-between; padding: 4px 0;"><span>Победитель нижней сетки</span> <span style="color:#f1c40f;">—</span></div>
                    </div>
                </div>
            </div>

        </div>
    `;
};
// Автоматически запускаем всё, что было наработано для остальных вкладок при загрузке страницы
window.onload = function() {
    // 1. Если у вас была главная функция инициализации, вызываем её
    if (typeof initApp === 'function') {
        initApp();
    }
    
    // 2. Принудительно генерируем сетку, чтобы она была готова
    if (typeof renderCleanBracket === 'function') {
        renderCleanBracket();
    }

    // 3. Вызываем рендер основных блоков, если функции доступны в вашем коде
    if (typeof renderNews === 'function') renderNews();
    if (typeof renderAnalytics === 'function') renderAnalytics();
    if (typeof renderRating === 'function') renderRating();
    if (typeof renderTeams === 'function') renderTeams();
    if (typeof renderMeta === 'function') renderMeta();
    if (typeof renderArchive === 'function') renderArchive();
};
window.renderAnalytics = function() {
    const container = document.getElementById('analytics-container');
    if (!container) return;

    // Берем матчи ровно из нашей турнирной сетки Main Event
    const analyticsData = [
        {
            match: "Iron Wing vs Team Spirit",
            time: "19 Авг, 11:00 МСК",
            winrate: "45% vs 55%",
            prediction: "Победа Team Spirit со счетом 2:0. Опыт прошлых турниров скажется на драфтах."
        },
        {
            match: "TEAM VISION vs BoomBoys",
            time: "19 Авг, 14:00 МСК",
            winrate: "50% vs 50%",
            prediction: "Победа TEAM VISION на трех картах. Равное противостояние, но индивидуальный скилл выше."
        },
        {
            match: "Team Liquid vs Team Yandex",
            time: "19 Авг, 17:00 МСК",
            winrate: "60% vs 40%",
            prediction: "Победа Team Liquid со счетом 2:1. Yandex смогут забрать одну карту за счет нестандартных героев."
        },
        {
            match: "Nigma Galaxy vs Team Falcons",
            time: "19 Авг, 20:00 МСК",
            winrate: "35% vs 65%",
            prediction: "Победа Team Falcons со счетом 2:0. Фавориты уверенно контролируют текущую мету."
        }
    ];

    container.innerHTML = analyticsData.map(item => `
        <div class="card" style="background: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 15px; margin-bottom: 12px;">
            <div style="font-size: 0.95rem; font-weight: bold; color: #f3f4f6; margin-bottom: 6px;">⚔️ ${item.match}</div>
            <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 4px;">📅 Начало матча: ${item.time}</div>
            <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 6px;">📊 Винрейт: ${item.winrate}</div>
            <div style="font-size: 0.82rem; color: #f1c40f; background: #1f2937; padding: 6px 10px; border-radius: 6px;">💡 Прогноз: ${item.prediction}</div>
        </div>
    `).join('');
};

// Обновляем вызов
renderAnalytics();
window.renderNews = function() {
    const container = document.getElementById('news-container');
    if (!container) return;

    const newsList = [
        {
            title: "Плей-офф главного турнира в самом разгаре: расписание актуализировано",
            source: "Cybersport.ru",
            time: "19 Авг, 09:00",
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
            text: "Аналитики отмечают высочайший уровень подготовки команд верхней сетки.",
            quote: "«Патч очень динамичный, камбэки случаются даже на 50-й минуте. Фаворитам расслабляться нельзя.»",
            expert: "Артур 'Goblak' Костенко (аналитик, экс-про)"
        },
        {
            title: "Team Falcons и Team Spirit диктуют мету патча на про-сцене",
            source: "Dotabuff Meta",
            time: "18 Авг, 21:30",
            img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500",
            text: "Гибкость драфтов позволяет фаворитам уверенно забирать карты.",
            quote: "«Spirit нашли идеальный темп через активных героев тройки. Остальным командам придется срочно пикать контр-пики.»",
            expert: "Ярослав 'NS' Кузнецов (стример, экс-про)"
        },
        {
            title: "Новый герой ломает паблики: почему его не берут на турнирах?",
            source: "Dota2ProTracker",
            time: "18 Авг, 15:10",
            img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500",
            text: "Статистика показывает высокий винрейт в пабликах, но капитаны обходят его стороной.",
            quote: "«В паблике он силен за счет хаоса, но в профессиональной игре его легко наказать на линиях в первые 10 минут.»",
            expert: "Данил 'Dendi' Ишутин (капитан B8)"
        },
        {
            title: "Превью матчей нижней сетки: кто покинет турнир первым?",
            source: "Liquipedia",
            time: "17 Авг, 18:45",
            img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500",
            text: "Команды из нижней сетки находятся в шаге от вылета и будут играть на пределе возможностей.",
            quote: "«Нижняя сетка — это всегда лотерея нервов. Ошибся на драфте — едешь домой.»",
            expert: "Клемент 'Puppey' Иванов (легендарный капитан)"
        }
    ];

    container.innerHTML = newsList.map(item => `
        <div class="news-card">
            <div>
                <div style="font-size: 0.7rem; color: #94a3b8; display: flex; justify-content: space-between; margin-bottom: 6px;">
                    <span>🔥 ${item.source}</span>
                    <span>⏳ ${item.time}</span>
                </div>
                <h3 style="font-size: 0.95rem; margin-bottom: 6px; color: #f3f4f6; line-height: 1.3;">${item.title}</h3>
                <p style="font-size: 0.8rem; color: #9ca3af; margin-bottom: 8px;">${item.text}</p>
                <img src="${item.img}" alt="news">
            </div>
            <div class="news-expert-quote">
                ${item.quote}<br>
                <span style="color: #f1c40f; font-weight: bold; display: inline-block; margin-top: 4px;">— ${item.expert}</span>
            </div>
        </div>
    `).join('');
};

// Вызываем функцию отрисовки новостей сразу при загрузке
renderNews();