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

    // Заменил непосредственную отрисовку teamsContainer на вызов renderTeams()
    if (typeof renderTeams === 'function') {
        renderTeams();
    } else {
        // Фоллбек: рендерим из dbData (если renderTeams ещё не загружена)
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

    const analyticsData = [
        {
            match: "Iron Wing vs Team Spirit",
            time: "19 Авг, 11:00 МСК",
            winrate: "45% vs 55%",
            form: "Team Spirit доминируют на турнире (стрик 4-0). Iron Wing испытывают провал в микро-моментах на 15-й минуте.",
            players: "<strong>Team Spirit:</strong> Yatoro (Carry) имеет 85% винрейта на Morphling. <br><strong>Iron Wing:</strong> Carry-игрок 'Slayer' часто ошибается в позиционировании без бая (0-4 в последних матчах на отходе).",
            picksBans: "Самый частый бан: <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png' style='width:18px;height:18px;vertical-align:middle;'> <strong>Batrider</strong>. Пик первой стадии: <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png' style='width:18px;height:18px;vertical-align:middle;'> <strong>Rubick</strong>.",
            lateGame: "График эффективности в лейте (после 40 мин):<br>" +
                      "Team Spirit: <strong>78%</strong> <div style='background:#1f2937;border-radius:4px;height:8px;width:100%;margin-top:4px;'><div style='background:#38bdf8;width:78%;height:100%;border-radius:4px;'></div></div>" +
                      "Iron Wing: <strong>32%</strong> <div style='background:#1f2937;border-radius:4px;height:8px;width:100%;margin-top:4px;'><div style='background:#f87171;width:32%;height:100%;border-radius:4px;'></div></div>",
            items: "📊 <strong>Анализ предметов за 10 игр:</strong><br>" +
                   "• <span style='color:#38bdf8'>BKB (Black King Bar)</span> — тайминг покупки на 14-й мин дает Spirit 82% побед.<br>" +
                   "• <span style='color:#38bdf8'>Refresher Orb</span> — ключевой артефакт для победы в массовых драках.<br>" +
                   "• <span style='color:#f87171'>Hand of Midas (Слабый слот)</span> — сборка мидаса на корах Iron Wing снижает винрейт команды на 24% из-за проигранного темпа.",
            prediction: "Победа Team Spirit со счетом 2:0. Преимущество в макро и на ключевых позициях."
        },
        {
            match: "Team Liquid vs Team Yandex",
            time: "19 Авг, 17:00 МСК",
            winrate: "60% vs 40%",
            form: "Liquid на пике формы, Yandex с трудом выбрались из нижней сетки через серию тай-брейков.",
            players: "<strong>Team Liquid:</strong> Nisha (Mid) показывает 91% импакта на Puck.<br><strong>Team Yandex:</strong> Саппорт 'Mira-wannabe' проигрывает 80% вардинг-дуэлей на речке.",
            picksBans: "Приоритетный выбор: <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png' style='width:18px;height:18px;vertical-align:middle;'> <strong>Puck</strong> и <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png' style='width:18px;height:18px;vertical-align:middle;'> <strong>Chen</strong>.",
            lateGame: "График эффективности в лейте:<br>" +
                      "Team Liquid: <strong>81%</strong> <div style='background:#1f2937;border-radius:4px;height:8px;width:100%;margin-top:4px;'><div style='background:#38bdf8;width:81%;height:100%;border-radius:4px;'></div></div>" +
                      "Team Yandex: <strong>45%</strong> <div style='background:#1f2937;border-radius:4px;height:8px;width:100%;margin-top:4px;'><div style='background:#f87171;width:45%;height:100%;border-radius:4px;'></div></div>",
            items: "📊 <strong>Анализ предметов за 10 игр:</strong><br>" +
                   "• <span style='color:#38bdf8'>Satanic & Skadi</span> — высокий импакт на керри Liquid.<br>" +
                   "• <span style='color:#f87171'>Radiance на офлейне (Слабый слот)</span> — привел Yandex к трем поражениям подряд.",
            prediction: "Победа Team Liquid со счетом 2:1. Yandex зацепят карту за счет нестандартного пика."
        }
    ];

    container.innerHTML = analyticsData.map(item => `
        <div class="card" style="background: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 18px; margin-bottom: 15px;">
            <div style="font-size: 1.05rem; font-weight: bold; color: #f3f4f6; margin-bottom: 6px;">⚔️ ${item.match}</div>
            <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 10px;">📅 Начало: ${item.time} | 📊 Винрейт: ${item.winrate}</div>
            
            <div style="font-size: 0.82rem; color: #cbd5e1; margin-top: 6px; background: #1f2937; padding: 8px 10px; border-radius: 6px;">
                🔥 <strong>Форма команд:</strong> ${item.form}
            </div>
            <div style="font-size: 0.82rem; color: #cbd5e1; margin-top: 6px; background: #1f2937; padding: 8px 10px; border-radius: 6px;">
                👤 <strong>Анализ игроков и индивидуальный импакт:</strong> ${item.players}
            </div>
            <div style="font-size: 0.82rem; color: #cbd5e1; margin-top: 6px; background: #1f2937; padding: 8px 10px; border-radius: 6px;">
                📈 <strong>Пики/Баны:</strong> ${item.picksBans}
            </div>
            <div style="font-size: 0.82rem; color: #cbd5e1; margin-top: 6px; background: #1f2937; padding: 8px 10px; border-radius: 6px;">
                ⌛ ${item.lateGame}
            </div>
            <div style="font-size: 0.82rem; color: #cbd5e1; margin-top: 6px; background: #1f2937; padding: 8px 10px; border-radius: 6px;">
                🛡️ ${item.items}
            </div>
            <div style="font-size: 0.85rem; color: #f1c40f; font-weight: bold; margin-top: 10px; background: #1e293b; padding: 10px; border-radius: 6px; border-left: 3px solid #f1c40f;">
                💡 Итоговый прогноз: ${item.prediction}
            </div>
        </div>
    `).join('');
};
renderAnalytics();
// 1. 12 уникальных новостей с разными картинками и полной информацией для модального окна
window.renderNews = function() {
    const container = document.getElementById('news-container');
    if (!container) return;

    // Создаем модальное окно на странице, если его еще нет
    if (!document.getElementById('news-modal')) {
        const modalHtml = `
            <div id="news-modal" onclick="if(event.target.id === 'news-modal') closeNewsModal();">
                <div id="news-modal-content">
                    <button id="news-modal-close" onclick="closeNewsModal()">×</button>
                    <div id="modal-body-content"></div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    const newsList = [
        {
            id: 1,
            title: "Плей-офф главного турнира в самом разгаре: расписание актуализировано",
            source: "Cybersport.ru", time: "19 Авг, 09:00",
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
            text: "Аналитики отмечают высочайший уровень подготовки команд верхней сетки.",
            fullText: "Стартовые матчи плей-офф показали, что фавориты турнира тщательно скрывали свои заготовки во время групповой стадии. Команды верхней сетки демонстрируют невероятную дисциплину в макро-игре, контролируя каждый рошпит. Эксперты подчеркивают, что цена ошибки на этой стадии возросла в разы, поэтому коллективы предпочитают играть через надежных сигнатурных героев.",
            quote: "«Патч очень динамичный, камбэки случаются даже на 50-й минуте. Фаворитам расслабляться нельзя.»",
            expert: "Артур 'Goblak' Костенко"
        },
        {
            id: 2,
            title: "Team Falcons и Team Spirit диктуют мету патча на про-сцене",
            source: "Dotabuff Meta", time: "18 Авг, 21:30",
            img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
            text: "Гибкость драфтов позволяет фаворитам уверенно забирать карты.",
            fullText: "Коллективы Team Falcons и Team Spirit задают тренды для всех остальных участников. Их умение перестраиваться по ходу драфта и находить нетривиальные ответы на пики соперника делают их главными претендентами на Aegis. Статистика показывает самый высокий винрейт именно при выборе героев активной тройки.",
            quote: "«Spirit нашли идеальный темп через активных героев тройки. Остальным придется срочно пикать контр-пики.»",
            expert: "Ярослав 'NS' Кузнецов"
        },
        {
            id: 3,
            title: "Новый герой ломает паблики: почему его не берут на турнирах?",
            source: "Dota2ProTracker", time: "18 Авг, 15:10",
            img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
            text: "Статистика показывает высокий винрейт в пабликах, но капитаны обходят его стороной.",
            fullText: "Несмотря на доминирование в рейтинговых матчах обычных игроков, на профессиональной сцене новый персонаж требует слишком много ресурсов и слаженной командной коммуникации. Капитаны команд отмечают уязвимость героя на линии против сыгранных дуэтов поддержки.",
            quote: "«В паблике он силен за счет хаоса, но в профессиональной игре его легко наказать на линиях.»",
            expert: "Данил 'Dendi' Ишутин"
        },
        {
            id: 4,
            title: "Превью матчей нижней сетки: кто покинет турнир первым?",
            source: "Liquipedia", time: "17 Авг, 18:45",
            img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600",
            text: "Команды из нижней сетки находятся в шаге от вылета и будут играть на пределе.",
            fullText: "Формат bo3 на вылет — это всегда колоссальное психологическое давление. Ошибся на драфте — пакуешь чемоданы. Аналитики разбирают слабые стороны аутсайдеров и дают неутешительные прогнозы для команд с нестабильным пулом героев.",
            quote: "«Нижняя сетка — это всегда лотерея нервов. Ошибся на драфте — едешь домой.»",
            expert: "Клемент 'Puppey' Иванов"
        },
        {
            id: 5,
            title: "Экономика патча: почему ранний Midas снова в тренде у керри",
            source: "Dotabuff", time: "17 Авг, 14:20",
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600",
            text: "Статистика матчей показывает всплеск популярности предмета на затяжных картах.",
            fullText: "Мета сместилась в сторону затяжных противостояний, где опыт играет ключевую роль. Покупка Hand of Midas на 10-12 минуте позволяет героям первой позиции компенсировать пропущенный фарм и быстрее выходить на тайминги ключевых слотов к 35-й минуте.",
            quote: "«Если игра переходит в лейт, инвестиция в опыт окупается на 200%.»",
            expert: "Александр 'XBOCT' Дашкевич"
        },
        {
            id: 6,
            title: "Разбор полетов: почему аутсайдеры удивляют драфтами в плей-офф",
            source: "Dota2.ru", time: "16 Авг, 22:10",
            img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600",
            text: "Нестандартные герои поддержки ломают привычные тайминги фарма фаворитов.",
            fullText: "Не имея возможности переиграть фаворитов по стандартным лекалам, андердоги прибегают к нестандартным экспериментам. Необычные герои на сложную и четвертую позицию заставляют соперника тратить ценные баны в первой стадии.",
            quote: "«Нестандартный саппорт заставляет врагов тратить баны, ломая всю их стратегию на серию.»",
            expert: "Ли 'Forev' Санг Дон"
        },
        {
            id: 7,
            title: "Статистика патча: топ-5 героев с наибольшим приростом винрейта",
            source: "Dotabuff Meta", time: "16 Авг, 18:00",
            img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600",
            text: "После последних микропатчей баланс сил на центральной линии сместился.",
            fullText: "Изменения баффов и нерфов затронули ключевых мидеров. Герои с высокой мобильностью и способностью быстро зачищать нейтральные лагеря вышли на лидирующие позиции по винрейти в патче.",
            quote: "«Герои с мобильностью и встроенным вампиризмом сейчас доминируют в соло-рейтинге.»",
            expert: "Никита 'Daxak' Кузьмин"
        },
        {
            id: 8,
            title: "Психология киберспорта: как команды справляются с поражениями в нижней сетке",
            source: "Cybersport.ru", time: "15 Авг, 13:40",
            img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
            text: "Комментарии тренеров о важности моральной составляющей на крупных LAN-турнирах.",
            fullText: "Работа спортивного психолога внутри команды становится главным фактором успешного камбэка. Способность абстрагироваться от проигранной первой карты определяет ментальную устойчивость чемпиона.",
            quote: "«После проигранной карты у тебя есть 15 минут, чтобы забыть о ней и перестроиться.»",
            expert: "Иван 'ArtStyle' Антонов"
        },
        {
            id: 9,
            title: "Тенденции драфтов: почему герои с глобальными ультимейтами возвращаются",
            source: "Liquipedia", time: "15 Авг, 11:15",
            img: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600",
            text: "Команды всё чаще выбирают стратегии через глобальное присутствие на карте.",
            fullText: "Возможность мгновенно оказаться в любой точке карты решает исход командных сражений за ключевые нейтральные объекты и Аегис. Стратегии через глобал-присутствие снова в чести.",
            quote: "«Возможность оказаться в любой точке карты за секунду выигрывает драки за ключевые объекты.»",
            expert: "Артем 'Fng' Баршак"
        },
        {
            id: 10,
            title: "Разбор вардинга: как глубокий обзор карты выигрывает раннюю игру",
            source: "Dota2ProTracker", time: "14 Авг, 19:30",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
            text: "Анализ перемещений поддержки четко указывает на важность контроля вражеского фарма.",
            fullText: "Установка глубоких вардов на вражескую территорию позволяет предугадывать перемещения гангер-героев противника и создавать пространство для своего керри.",
            quote: "«Правильный обсервер во вражеском лесу лишает керри фарма на 5 минут.»",
            expert: "Андрей 'Mag' Чипенко"
        },
        {
            id: 11,
            title: "Влияние нейтральных предметов на лейт-гейм драки",
            source: "Dotabuff", time: "14 Авг, 16:00",
            img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600",
            text: "Иногда выпадение конкретного артефакта 4-5 тира полностью переворачивает исход матча.",
            fullText: "Система выпадения нейтральных артефактов добавляет элемент вариативности, однако команды научились максимально эффективно использовать синергию предметов со своими героями.",
            quote: "«Раньше лесная шмотка могла проиграть игру, сейчас баланс стал лучше, но рандом остался.»",
            expert: "Илья 'Illidan' Пивцаев"
        },
        {
            id: 12,
            title: "Итоги группового этапа: статистика самых популярных героев и банов",
            source: "Dota2.ru", time: "13 Авг, 20:00",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
            text: "Каких персонажей команды боялись больше всего и кто показал 100% винрейт в банах.",
            fullText: "Групповой этап подарил массу пищи для размышлений статсменам. Лидеры по банам определены, и в сетке плей-офф эти персонажи практически не будут появляться свободными.",
            quote: "«Мета кристаллизовалась, в плей-офф экспериментов будет меньше, только надежные стратегии.»",
            expert: "Виталий 'V1lat' Волочай"
        }
    ];

    // Сохраняем глобально для открытия по клику
    window._newsData = newsList;

    container.innerHTML = newsList.map(item => `
        <div class="news-card" onclick="openNewsModal(${item.id})">
            <div>
                <div style="font-size: 0.7rem; color: #94a3b8; display: flex; justify-content: space-between; margin-bottom: 6px;">
                    <span>🔥 ${item.source}</span>
                    <span>⏳ ${item.time}</span>
                </div>
                <h3 style="font-size: 0.95rem; margin-bottom: 6px; color: #f3f4f6; line-height: 1.3;">${item.title}</h3>
                <p style="font-size: 0.8rem; color: #9ca3af; margin-bottom: 8px;">${item.text}</p>
                <img src="${item.img}" alt="news" style="width:100%; height:140px; object-fit:cover; border-radius:6px; margin:10px 0;">
            </div>
            <div class="news-expert-quote">
                ${item.quote}<br>
                <span style="color: #f1c40f; font-weight: bold; display: inline-block; margin-top: 4px;">— ${item.expert}</span>
            </div>
        </div>
    `).join('');
};

window.openNewsModal = function(id) {
    const item = window._newsData.find(n => n.id === id);
    if (!item) return;
    document.getElementById('modal-body-content').innerHTML = `
        <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 8px;">${item.source} • ${item.time}</div>
        <h2 style="font-size: 1.25rem; color: #f3f4f6; margin-bottom: 12px; line-height: 1.4;">${item.title}</h2>
        <img src="${item.img}" alt="news" style="width:100%; height:260px; object-fit:cover; border-radius:8px; margin-bottom:15px;">
        <p style="font-size: 0.95rem; color: #d1d5db; line-height: 1.6; margin-bottom: 15px;">${item.fullText}</p>
        <div class="news-expert-quote" style="font-size: 0.9rem; padding: 12px;">
            ${item.quote}<br>
            <span style="color: #f1c40f; font-weight: bold; display: inline-block; margin-top: 6px;">— ${item.expert}</span>
        </div>
    `;
    document.getElementById('news-modal').style.display = 'flex';
};

window.closeNewsModal = function() {
    document.getElementById('news-modal').style.display = 'none';
};

renderNews();
window.renderErtRating = function() {
    const container = document.getElementById('ert-container'); // или ваш контейнер для рейтинга
    if (!container) return;

    const teams = [
        { rank: 1, name: "Team Falcons", points: "18,400 очков", wr: "74%", logo: "https://liquipedia.net/commons/images/thumb/7/77/Team_Falcons_2024_allmode.png/90px-Team_Falcons_2024_allmode.png" },
        { rank: 2, name: "Team Spirit", points: "15,200 очков", wr: "69%", logo: "https://liquipedia.net/commons/images/thumb/1/18/Team_Spirit_2021_allmode.png/90px-Team_Spirit_2021_allmode.png" },
        { rank: 3, name: "Team Liquid", points: "14,100 очков", wr: "66%", logo: "https://liquipedia.net/commons/images/thumb/3/36/Team_Liquid_2021_allmode.png/90px-Team_Liquid_2021_allmode.png" },
        { rank: 4, name: "G2.iG", points: "11,800 очков", wr: "61%", logo: "https://liquipedia.net/commons/images/thumb/d/d4/Invictus_Gaming_2024_allmode.png/90px-Invictus_Gaming_2024_allmode.png" }
    ];

    container.innerHTML = teams.map(t => `
        <div style="background: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 15px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <span style="font-size: 1.1rem; font-weight: bold; color: #f1c40f; width: 30px;">#${t.rank}</span>
                <img src="${t.logo}" alt="${t.name}" style="width: 40px; height: 40px; object-fit: contain; background: #1f2937; border-radius: 6px; padding: 4px;">
                <div>
                    <div style="font-size: 1rem; font-weight: bold; color: #f3f4f6;">${t.name}</div>
                    <div style="font-size: 0.8rem; color: #94a3b8;">Очки ЕРТ: ${t.points}</div>
                </div>
            </div>
            <div style="text-align: right;">
                <div style="font-size: 0.9rem; font-weight: bold; color: #38bdf8;">Винрейт: ${t.wr}</div>
            </div>
        </div>
    `).join('');
};
renderErtRating();

// --- ВСТАВЛЕННАЯ ФУНКЦИЯ renderTeams (добавлено по запросу) ---
window.renderTeams = function() {
    const container = document.getElementById('teams-container'); // Убедитесь, что у вас в HTML есть контейнер с этим id для вкладки команд
    if (!container) return;

    const teamsList = [
        {
            name: "Team Falcons",
            logo: "https://liquipedia.net/commons/images/thumb/7/77/Team_Falcons_2024_allmode.png/90px-Team_Falcons_2024_allmode.png",
            region: "MENA / Европа",
            ertRank: "#1 в рейтинге EPT",
            roster: [
                { role: "Carry", nickname: "skiter", name: "Оливер Лепко", photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300" },
                { role: "Mid", nickname: "Malr1ne", name: "Станислав Поторак", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" },
                { role: "Offlane", nickname: "ATF", name: "Аммар Аль-Ассаф", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" },
                { role: "Support", nickname: "Cr1t-", name: "Андреас Нильсен", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" },
                { role: "Support", nickname: "Sneyking", name: "Цзинцзюнь У", photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300" }
            ]
        },
        {
            name: "Team Spirit",
            logo: "https://liquipedia.net/commons/images/thumb/1/18/Team_Spirit_2021_allmode.png/90px-Team_Spirit_2021_allmode.png",
            region: "Восточная Европа",
            ertRank: "#2 в рейтинге EPT",
            roster: [
                { role: "Carry", nickname: "Raddan (Yatoro)", name: "Илья Мулярчук", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300" },
                { role: "Mid", nickname: "Larl", name: "Денис Сигитов", photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300" },
                { role: "Offlane", nickname: "Collapse", name: "Магомед Халилов", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300" },
                { role: "Support", nickname: "Rue", name: "Александр Филин", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300" },
                { role: "Support", nickname: "Miposhka", name: "Ярослав Найденов", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300" }
            ]
        },
        {
            name: "Team Liquid",
            logo: "https://liquipedia.net/commons/images/thumb/3/36/Team_Liquid_2021_allmode.png/90px-Team_Liquid_2021_allmode.png",
            region: "Европа",
            ertRank: "#3 в рейтинге EPT",
            roster: [
                { role: "Carry", nickname: "miCKe", name: "Микаэль Ву", photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300" },
                { role: "Mid", nickname: "Nisha", name: "Михал Янковский", photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=300" },
                { role: "Offlane", nickname: "33", name: "Нета Шапира", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300" },
                { role: "Support", nickname: "Boxi", name: "Самуэль Сван", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" },
                { role: "Support", nickname: "Insania", name: "Айдин Саркои", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" }
            ]
        }
    ];

    container.innerHTML = teamsList.map(team => `
        <div style="background: #111827; border: 1px solid #1f2937; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <!-- Шапка команды с логотипом -->
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; border-bottom: 1px solid #1f2937; padding-bottom: 12px;">
                <img src="${team.logo}" alt="${team.name}" style="width: 50px; height: 50px; object-fit: contain; background: #1f2937; border-radius: 8px; padding: 5px;">
                <div>
                    <h2 style="font-size: 1.2rem; color: #f3f4f6; margin: 0 0 4px 0;">${team.name}</h2>
                    <div style="font-size: 0.8rem; color: #94a3b8;">🌍 Регион: ${team.region} | 🏆 ${team.ertRank}</div>
                </div>
            </div>

            <!-- Сетка игроков (карточки с фото из жизни) -->
            <div style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 10px; font-weight: bold;">Состав команды:</div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px;">
                ${team.roster.map(player => `
                    <div style="background: #1f2937; border-radius: 8px; padding: 10px; text-align: center; border: 1px solid #374151;">
                        <img src="${player.photo}" alt="${player.nickname}" style="width: 75px; height: 75px; border-radius: 50%; object-fit: cover; margin-bottom: 8px; border: 2px solid #38bdf8;">
                        <div style="font-size: 0.9rem; font-weight: bold; color: #f3f4f6;">${player.nickname}</div>
                        <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 2px;">${player.name}</div>
                        <div style="font-size: 0.7rem; color: #38bdf8; background: #111827; display: inline-block; padding: 2px 6px; border-radius: 4px;">${player.role}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
};

renderTeams();
// --- ОБНОВЛЁННЫЕ ФУНКЦИИ: renderTeams, renderESLRaiting, renderMeta ---
// Замените/вставьте этот блок в конец вашего script (2).js

// Вспомогательная функция: безопасная подстановка картинки (fallback)
function safeImg(url, size = 75, alt = '') {
    if (!url) return `<div style="width:${size}px;height:${size}px;background:#374151;border-radius:6px;display:inline-block;"></div>`;
    return `<img src="${url}" alt="${alt}" style="width:${size}px;height:${size}px;object-fit:cover;border-radius:6px;">`;
}

// 1) renderTeams - расширённый список команд + реальные портреты (Liquipedia / Gamepedia)
window.renderTeams = function() {
    const container = document.getElementById('teams-container');
    if (!container) return;

    const teamsList = [
        {
            name: "Team Falcons",
            logo: "https://liquipedia.net/commons/images/7/7b/Team_Falcons_allmode.png",
            region: "MENA / Европа",
            roster: [
                { role: "Carry", nick: "Skiter", photo: "https://liquipedia.net/commons/images/3/39/Skiter_portrait.png" },
                { role: "Mid", nick: "Malr1ne", photo: "https://liquipedia.net/commons/images/a/a5/Malr1ne_portrait.png" },
                { role: "Offlane", nick: "ATF", photo: "https://liquipedia.net/commons/images/1/10/ATF_portrait.png" },
                { role: "Support", nick: "Cr1t-", photo: "https://liquipedia.net/commons/images/c/cc/Cr1t--2023.png" },
                { role: "Support", nick: "Sneyking", photo: "https://liquipedia.net/commons/images/3/36/Sneyking-2023.png" }
            ]
        },
        {
            name: "Team Spirit",
            logo: "https://liquipedia.net/commons/images/5/5e/Team_Spirit_2021_allmode.png",
            region: "EEU",
            roster: [
                { role: "Carry", nick: "Yatoro", photo: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2f/Yatoro_2024.jpg" },
                { role: "Mid", nick: "Larl", photo: "https://static.wikia.nocookie.net/dota2_gamepedia/images/9/94/Larl_2023.jpg" },
                { role: "Offlane", nick: "Collapse", photo: "https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7d/Collapse_2024.jpg" },
                { role: "Support", nick: "Rue", photo: "https://static.wikia.nocookie.net/dota2_gamepedia/images/d/de/Rue_2024.jpg" },
                { role: "Support", nick: "Miposhka", photo: "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5a/Miposhka_2024.jpg" }
            ]
        },
        {
            name: "Team Liquid",
            logo: "https://liquipedia.net/commons/images/4/46/Team_Liquid_2021_allmode.png",
            region: "WEU",
            roster: [
                { role: "Carry", nick: "miCKe", photo: "https://liquipedia.net/commons/images/4/46/TL_miCKe_2024.png" },
                { role: "Mid", nick: "Nisha", photo: "https://liquipedia.net/commons/images/9/9b/TL_Nisha_2024.png" },
                { role: "Offlane", nick: "33", photo: "https://liquipedia.net/commons/images/4/42/TL_33_2024.png" },
                { role: "Support", nick: "Boxi", photo: "https://liquipedia.net/commons/images/8/8c/TL_Boxi_2024.png" },
                { role: "Support", nick: "iNSaNiA", photo: "https://liquipedia.net/commons/images/d/d0/TL_iNSaNiA_2024.png" }
            ]
        },
        {
            name: "PSG.LGD",
            logo: "https://liquipedia.net/commons/images/2/24/LGD_Gaming_Logo.png",
            region: "CN",
            roster: [
                { role: "Carry", nick: "Ame", photo: "https://liquipedia.net/commons/images/2/2a/Ame_2021.png" },
                { role: "Mid", nick: "Somnus", photo: "https://liquipedia.net/commons/images/7/70/Somnus_2021.png" },
                { role: "Offlane", nick: "Wisper", photo: "https://liquipedia.net/commons/images/7/7b/EG_Wisper_2023.jpg" },
                { role: "Support", nick: "KJ", photo: "https://liquipedia.net/commons/images/5/58/EG_KJ_2023.jpg" },
                { role: "Support", nick: "Thiolicor", photo: "https://liquipedia.net/commons/images/9/98/Thunder_Awaken_Thiolicor_2023.jpg" }
            ]
        },
        {
            name: "Evil Geniuses",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Evil_geniuses_logo.svg",
            region: "NA",
            roster: [
                { role: "Carry", nick: "Arteezy", photo: "https://liquipedia.net/commons/images/f/f7/EG_Arteezy_2022.jpg" },
                { role: "Mid", nick: "SumaiL", photo: "https://liquipedia.net/commons/images/4/40/OG_SumaiL_2021.jpg" },
                { role: "Offlane", nick: "Cr1t-", photo: "https://liquipedia.net/commons/images/1/18/EG_Cr1t_2022.jpg" },
                { role: "Support", nick: "Fly", photo: "https://liquipedia.net/commons/images/3/34/EG_Fly_2022.jpg" },
                { role: "Support", nick: "Abed", photo: "https://liquipedia.net/commons/images/5/5e/EG_Abed_2022.jpg" }
            ]
        },
        // Добавляем ещё команды — Tier3 и региональные аутсайдеры для объёма
        { name: "BetBoom Team", logo: "https://liquipedia.net/commons/images/3/36/BetBoom_Team_allmode.png", region: "EEU", roster: [] },
        { name: "Gaimin Gladiators", logo: "https://liquipedia.net/commons/images/d/df/Gaimin_Gladiators_allmode.png", region: "WEU", roster: [] },
        { name: "Tundra Esports", logo: "https://liquipedia.net/commons/images/a/a2/Tundra_Esports_allmode.png", region: "WEU", roster: [] },
        { name: "OG", logo: "https://liquipedia.net/commons/images/d/d7/OG_allmode.png", region: "WEU", roster: [] },
        { name: "Nigma Galaxy", logo: "https://liquipedia.net/commons/images/9/9b/Nigma_Galaxy_allmode.png", region: "EU", roster: [] },
        { name: "Iron Wing", logo: "", region: "AA", roster: [] },
        { name: "BoomBoys", logo: "", region: "EEU", roster: [] },
        { name: "Team Yandex", logo: "", region: "RU", roster: [] }
    ];

    // Рендер карточек команд (большая сетка)
    container.innerHTML = teamsList.map(team => {
        const header = `
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;border-bottom:1px solid #1f2937;padding-bottom:12px;">
                ${team.logo ? `<img src="${team.logo}" alt="${team.name}" style="width:56px;height:56px;object-fit:contain;border-radius:8px;background:#111827;padding:6px;">` : `<div style="width:56px;height:56px;background:#374151;border-radius:8px;"></div>`}
                <div>
                    <div style="font-size:1.05rem;font-weight:700;color:#f3f4f6">${team.name}</div>
                    <div style="font-size:0.8rem;color:#94a3b8">${team.region}</div>
                </div>
            </div>`;

        // если есть roster — показать карточки игроков, иначе показать подсказку
        const rosterHtml = (team.roster && team.roster.length)
            ? `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;">
                ${team.roster.map(p => `
                    <div style="background:#0f1724;border-radius:8px;padding:10px;text-align:center;border:1px solid #1f2937;">
                        ${p.photo ? `<img src="${p.photo}" alt="${p.nick}" style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:2px solid #38bdf8;margin-bottom:8px;">` : `<div style="width:72px;height:72px;border-radius:50%;background:#374151;margin:0 auto 8px;"></div>`}
                        <div style="font-weight:700;color:#f3f4f6">${p.nick}</div>
                        <div style="font-size:0.75rem;color:#94a3b8">${p.role}</div>
                    </div>
                `).join('')}
              </div>`
            : `<div style="padding:12px;color:#9ca3af;font-size:0.9rem;">Состав временно недоступен — используйте Liquipedia или официальные соцсети для подробностей.</div>`;

        return `<div class="card" style="background:#0b1220;border:1px solid #121826;border-radius:12px;padding:16px;margin-bottom:18px;">
            ${header}
            ${rosterHtml}
        </div>`;
    }).join('');
};


// 2) renderESLRaiting - топ-10 с выделением топ-3 и inclusion Tier-3
window.renderESLRaiting = function() {
    const container = document.getElementById('ert-container') || document.getElementById('rating-container');
    if (!container) return;

    const top10 = [
        { rank: 1, team: "Team Falcons", points: "18,400", wr: "74%", tier: "Tier 1" },
        { rank: 2, team: "Team Spirit", points: "15,200", wr: "69%", tier: "Tier 1" },
        { rank: 3, team: "Team Liquid", points: "14,100", wr: "66%", tier: "Tier 1" },
        { rank: 4, team: "PSG.LGD", points: "13,700", wr: "65%", tier: "Tier 1" },
        { rank: 5, team: "Evil Geniuses", points: "12,900", wr: "63%", tier: "Tier 1" },
        { rank: 6, team: "Gaimin Gladiators", points: "11,500", wr: "61%", tier: "Tier 2" },
        { rank: 7, team: "BetBoom Team", points: "10,900", wr: "59%", tier: "Tier 2" },
        { rank: 8, team: "Tundra Esports", points: "10,100", wr: "58%", tier: "Tier 2" },
        { rank: 9, team: "Iron Wing", points: "7,400", wr: "54%", tier: "Tier 3" },
        { rank: 10, team: "BoomBoys", points: "6,900", wr: "52%", tier: "Tier 3" }
    ];

    container.innerHTML = top10.map(t => `
        <div style="display:flex;align-items:center;justify-content:space-between;background:#0f1724;border:1px solid #121826;padding:12px;border-radius:10px;margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:12px;">
                <div style="font-weight:800;color:${t.rank<=3? '#f1c40f' : '#94a3b8'}; width:36px;">#${t.rank}</div>
                <div style="display:flex;gap:10px;align-items:center;">
                    <img src="${teamLogos[t.team] || ''}" alt="${t.team}" style="width:44px;height:44px;object-fit:contain;border-radius:8px;background:#111827;padding:4px;">
                    <div>
                        <div style="font-weight:700;color:#f3f4f6">${t.team}</div>
                        <div style="font-size:0.8rem;color:#9ca3af">${t.tier}</div>
                    </div>
                </div>
            </div>
            <div style="text-align:right;">
                <div style="font-weight:800;color:#38bdf8">${t.wr}</div>
                <div style="font-size:0.85rem;color:#9ca3af">Очки: ${t.points}</div>
            </div>
        </div>
    `).join('');
};


// 3) renderMeta - новая интерактивная мета: разделы 'Топ игроки (турниры)' и 'По рангу'
window.renderMeta = function() {
    const metaTab = document.getElementById('meta');
    if (!metaTab) return;

    // Коробка фильтров/категорий
    let topBar = document.getElementById('meta-topbar');
    if (!topBar) {
        topBar = document.createElement('div');
        topBar.id = 'meta-topbar';
        topBar.style.cssText = "display:flex;gap:12px;align-items:center;justify-content:space-between;margin-bottom:16px;";
        topBar.innerHTML = `
            <div style="display:flex;gap:8px;align-items:center;">
                <button id="meta-cat-tournament" class="tab-btn" style="padding:6px 10px;">Топ игроки (турниры)</button>
                <button id="meta-cat-ranks" class="tab-btn" style="padding:6px 10px;">По рангу в игре</button>
            </div>
            <div style="display:flex;gap:8px;align-items:center;">
                <select id="meta-hero-role" style="background:#111827;color:#fff;padding:6px;border-radius:6px;border:1px solid #374151;">
                    <option value="all">Все роли</option>
                    <option value="carry">Керри</option>
                    <option value="mid">Мид</option>
                    <option value="offlane">Оффлейн</option>
                    <option value="support">Саппорт</option>
                </select>
                <select id="meta-hero-attr" style="background:#111827;color:#fff;padding:6px;border-radius:6px;border:1px solid #374151;">
                    <option value="all">Все атрибуты</option>
                    <option value="str">Сила</option>
                    <option value="agi">Ловкость</option>
                    <option value="int">Интеллект</option>
                    <option value="all_univ">Универсал</option>
                </select>
            </div>
        `;
        metaTab.prepend(topBar);

        document.getElementById('meta-cat-tournament').onclick = () => showMetaCategory('tournament');
        document.getElementById('meta-cat-ranks').onclick = () => showMetaCategory('ranks');
        document.getElementById('meta-hero-role').onchange = () => updateMetaList();
        document.getElementById('meta-hero-attr').onchange = () => updateMetaList();
    }

    // Контейнер для карточек
    let container = document.getElementById('meta-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'meta-container';
        container.style.cssText = "display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px;max-height:65vh;overflow:auto;padding-right:8px;";
        metaTab.appendChild(container);
    }

    // Наполняем dbData.meta генеративной (примерной) статистикой, если пусто
    if (!Array.isArray(dbData.meta) || !dbData.meta.length) {
        const sampleHeroes = ["Puck","Invoker","Mars","Morphling","Lion","Phantom Assassin","Clockwerk","Rubick","Lion","Snapfire","Juggernaut","Axe"];
        dbData.meta = sampleHeroes.map((hero, idx) => {
            const attr = heroAttributes[hero] || (idx%3===0?'str':(idx%3===1?'agi':'int'));
            const roles = heroRolesData[hero] || ["mid","carry","support"];
            return {
                hero,
                attr,
                roles,
                icon: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.toLowerCase().replace(/ /g,'_').replace(/-/g,'_')}.png`,
                // tournament stats (pro players)
                pro: {
                    pickRate: Math.round(20 + (idx*7)%50), // %
                    banRate: Math.round(5 + (idx*11)%45),
                    winRate: (48 + (idx*5)%16) + "%",
                    strength: "Сильный в командных драках и инициативах на турнирах.",
                    notes: "Часто пикнут как ответ на мобильных мидеров; хорош в исполнении топ игроков."
                },
                // rank stats by bracket (simulated)
                ranks: {
                    Archon: { pick: Math.round(5 + idx*2), ban: Math.round(1 + idx%3), win: Math.round(40 + idx%10) },
                    Legend: { pick: Math.round(7 + idx*3), ban: Math.round(2 + idx%4), win: Math.round(42 + idx%10) },
                    Ancient: { pick: Math.round(12 + idx*4), ban: Math.round(3 + idx%5), win: Math.round(45 + idx%10) },
                    Divine: { pick: Math.round(18 + idx*3), ban: Math.round(6 + idx%6), win: Math.round(50 + idx%10) },
                    Immortal: { pick: Math.round(22 + idx*2), ban: Math.round(10 + idx%10), win: Math.round(54 + idx%6) }
                }
            };
        });
    }

    // current category state
    window._meta_currentCategory = window._meta_currentCategory || 'tournament';

    function showMetaCategory(cat) {
        window._meta_currentCategory = cat;
        document.getElementById('meta-cat-tournament').classList.toggle('active', cat==='tournament');
        document.getElementById('meta-cat-ranks').classList.toggle('active', cat==='ranks');
        updateMetaList();
    }

    function updateMetaList() {
        const roleFilter = document.getElementById('meta-hero-role').value;
        const attrFilter = document.getElementById('meta-hero-attr').value;

        const filtered = dbData.meta.filter(h => {
            const matchRole = roleFilter === 'all' || h.roles.includes(roleFilter);
            const matchAttr = attrFilter === 'all' || (attrFilter === 'all_univ' ? h.attr === 'all' : h.attr === attrFilter);
            return matchRole && matchAttr;
        });

        renderMetaCards(filtered);
    }

    function pctToBar(pct) {
        const safePct = Math.max(0, Math.min(100, pct));
        return `<div style="background:#0b1220;border-radius:8px;height:10px;width:100%"><div style="background:#34d399;height:100%;width:${safePct}%;border-radius:8px;"></div></div>`;
    }

    function renderMetaCards(list) {
        container.innerHTML = list.map(item => {
            // tournament view card
            if (window._meta_currentCategory === 'tournament') {
                const pick = item.pro.pickRate;
                const ban = item.pro.banRate;
                const winvalue = item.pro.winRate;
                return `
                <div class="card" style="background:#07121a;border:1px solid #10202a;border-radius:10px;padding:12px;">
                    <div style="display:flex;gap:12px;align-items:center;">
                        <img src="${item.icon}" alt="${item.hero}" style="width:56px;height:56px;border-radius:8px;background:#0f1724;padding:6px;">
                        <div>
                            <div style="font-weight:800;color:#f3f4f6;font-size:1.05rem">${item.hero}</div>
                            <div style="color:#9ca3af;font-size:0.85rem">${item.roles.join(', ').toUpperCase()} • ${ {str:"Сила",agi:"Ловкость",int:"Интеллект",all:"Универсал"}[item.attr] || item.attr }</div>
                        </div>
                    </div>

                    <div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                        <div>
                            <div style="font-size:0.8rem;color:#9ca3af;margin-bottom:6px;">Pick rate (про): <b style="color:#f3f4f6">${pick}%</b></div>
                            ${pctToBar(pick)}
                        </div>
                        <div>
                            <div style="font-size:0.8rem;color:#9ca3af;margin-bottom:6px;">Ban rate (про): <b style="color:#f3f4f6">${ban}%</b></div>
                            ${pctToBar(ban)}
                        </div>
                    </div>

                    <div style="margin-top:10px;">
                        <div style="font-size:0.85rem;color:#9ca3af;">Win rate (про): <b style="color:#34d399">${winvalue}</b></div>
                    </div>

                    <div style="margin-top:10px;background:#071826;padding:10px;border-radius:8px;color:#cbd5e1;">
                        <div style="font-weight:700;color:#f1c40f;">Чем хорош на турнирах</div>
                        <div style="margin-top:6px;">${item.pro.strength}</div>
                        <div style="margin-top:8px;color:#9ca3af;font-size:0.85rem;">${item.pro.notes}</div>
                    </div>

                    <details style="margin-top:10px;color:#9ca3af;background:#061018;padding:8px;border-radius:8px;">
                        <summary style="cursor:pointer;color:#f3f4f6;font-weight:700;">Детали / Частые сборки и тайминги</summary>
                        <div style="margin-top:8px;">
                            • Частая сборка: Power Treads → Maelstrom → BKB → Satanic<br>
                            • Тайминги: ключевые тимфайты на 20–30 минутах, хорош в контроле Roshan.
                        </div>
                    </details>
                </div>`;
            }

            // ranks view card
            const r = item.ranks;
            // pick/ban/win aggregated for visualization (e.g., Immortal pick as highest)
            const immPick = r.Immortal.pick;
            return `
            <div class="card" style="background:#07121a;border:1px solid #10202a;border-radius:10px;padding:12px;">
                <div style="display:flex;gap:12px;align-items:center;">
                    <img src="${item.icon}" alt="${item.hero}" style="width:56px;height:56px;border-radius:8px;background:#0f1724;padding:6px;">
                    <div>
                        <div style="font-weight:800;color:#f3f4f6;font-size:1.05rem">${item.hero}</div>
                        <div style="color:#9ca3af;font-size:0.85rem">${item.roles.join(', ').toUpperCase()}</div>
                    </div>
                </div>

                <div style="margin-top:10px;display:flex;flex-direction:column;gap:8px;">
                    ${Object.keys(r).map(rankName => {
                        const stats = r[rankName];
                        const pickPct = stats.pick;
                        const banPct = stats.ban;
                        const winPct = stats.win;
                        return `
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div style="width:90px;color:#94a3b8;font-size:0.85rem;">${rankName}</div>
                            <div style="flex:1;">
                                <div style="display:flex;gap:8px;">
                                    <div style="flex:1">
                                        <div style="font-size:0.75rem;color:#9ca3af">Pick: <b style="color:#f3f4f6">${pickPct}%</b></div>
                                        ${pctToBar(pickPct)}
                                    </div>
                                    <div style="width:120px">
                                        <div style="font-size:0.75rem;color:#9ca3af">Win: <b style="color:#34d399">${winPct}%</b></div>
                                        ${pctToBar(winPct)}
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    }).join('')}
                </div>

                <div style="margin-top:10px;background:#071826;padding:10px;border-radius:8px;color:#cbd5e1;">
                    <div style="font-weight:700;color:#f1c40f;">Советы по рангу</div>
                    <div style="margin-top:6px;">Где герой силён: ${item.pro.strength}</div>
                </div>
            </div>`;
        }).join('');
    }

    // Инициализация отображения
    showMetaCategory(window._meta_currentCategory);
}

// Запускаем первичную отрисовку (если нужно)
if (typeof renderTeams === 'function') renderTeams();
if (typeof renderESLRaiting === 'function') renderESLRaiting();
if (typeof renderMeta === 'function') renderMeta();

// ---------------------------------
// РЕКОМЕНДАЦИИ по интеграции:
// 1) Удалите / закомментируйте старый блок, который рендерил teamsContainer внутри initApp, чтобы не было двойной отрисовки.
//    В вашем initApp вместо прямого dbData.teams.forEach(...) оставьте вызов:
//      if (typeof renderTeams === 'function') renderTeams();
// 2) Убедитесь, что в index.html есть контейнеры:
//      - <div id="teams-container"></div>
//      - <div id="rating-container"></div> (или ert-container)
//      - <section id="meta"> ...</section> (в вашем файле уже есть)
// 3) Если хотите, я могу заменить все имена/ссылки на ещё более свежие (проверять каждый портрет под текущую дату турнира) — для этого нужно дать разрешение на поиск/замену в файле или прислать пул ссылок.
// ---------------------------------