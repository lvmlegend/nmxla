/**
 * JOJO'S BIZARRE ADVENTURE - CHARACTER CREW & CUSTOM SVG PORTRAITS
 * 6 Iconic Characters with Custom Vector Art, Stand Info, and Dynamic Dialogues
 */

window.JOJO_CHARACTERS = {
    jotaro: {
        id: 'jotaro',
        name: 'Jotaro Kujo',
        stand: '『Star Platinum』',
        part: 'Part 3: Stardust Crusaders',
        accent: '#38bdf8',
        badgeBg: 'rgba(56, 189, 248, 0.15)',
        stats: 'PWR: A • SPD: A • PRC: A',
        svg: `
        <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="jotaroBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1e1b4b"/>
                    <stop offset="100%" stop-color="#0284c7"/>
                </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#jotaroBg)" stroke="#38bdf8" stroke-width="3"/>
            <!-- Aura -->
            <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(56,189,248,0.25)" stroke-width="2" stroke-dasharray="6 4"/>
            <!-- Coat Collar & Chain -->
            <path d="M20 112 L32 82 L88 82 L100 112 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
            <path d="M44 88 L60 105 L76 88" fill="#1e293b"/>
            <!-- Gold Chain -->
            <path d="M32 88 Q42 102 52 94" fill="none" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <circle cx="36" cy="93" r="3" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
            <!-- Face -->
            <path d="M40 50 L42 78 Q60 92 78 78 L80 50 Z" fill="#fde6d8" stroke="#1e293b" stroke-width="2"/>
            <!-- Jaw shadow -->
            <path d="M44 76 Q60 88 76 76 Q60 83 44 76 Z" fill="#e2b8a3"/>
            <!-- Fierce Eyes under cap shadow -->
            <path d="M40 48 L80 48 L79 58 L41 58 Z" fill="rgba(15,23,42,0.45)"/>
            <path d="M44 53 L55 56" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
            <path d="M76 53 L65 56" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
            <ellipse cx="50" cy="58" rx="4" ry="2.5" fill="#fff"/>
            <circle cx="50" cy="58" r="2" fill="#0284c7"/>
            <ellipse cx="70" cy="58" rx="4" ry="2.5" fill="#fff"/>
            <circle cx="70" cy="58" r="2" fill="#0284c7"/>
            <!-- Nose & Stoic Mouth -->
            <path d="M60 58 L58 68 L62 69" fill="none" stroke="#9a6b56" stroke-width="2" stroke-linecap="round"/>
            <path d="M53 76 L67 75" stroke="#7c4d3a" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Iconic Torn Cap merging with hair -->
            <path d="M30 48 L36 22 L84 22 L92 38 L86 48 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
            <!-- Cap Visor -->
            <path d="M26 48 Q60 54 88 45 L82 40 Q58 46 30 42 Z" fill="#090d16" stroke="#fbbf24" stroke-width="1.5"/>
            <!-- Gold Cap Badges (Hand emblem & pins) -->
            <rect x="42" y="34" width="36" height="5" fill="#fbbf24" rx="1"/>
            <circle cx="52" cy="29" r="4.5" fill="#fbbf24"/>
            <rect x="64" y="26" width="8" height="6" fill="#fbbf24" rx="1"/>
        </svg>`,
        quotes: {
            idle: '「Yare Yare Daze...」 Bình tĩnh quan sát từng từ khóa trong câu hỏi. Tốc độ và độ chính xác của 『Star Platinum』 sẽ giúp cậu vượt qua hết.',
            correct: [
                '「ORA ORA ORA!!」 Chính xác tuyệt đối! Phản xạ của cậu sắc bén không kém gì Star Platinum.',
                '「Yare Yare...」 Câu này không làm khó được cậu đâu. Tiến lên câu tiếp theo nào!',
                'Đòn đánh cực chuẩn! Cứ giữ nhịp độ này thì kỳ thi Xử Lý Ảnh chỉ là chuyện nhỏ.'
            ],
            wrong: [
                '「Yare Yare Daze...」 Cậu vội vàng quá rồi. Nhìn xuống phần phân tích của Rohan bên dưới để nắm lại bản chất đi.',
                'Đừng để bị đánh lừa bởi các phương án nhiễu. Đọc kỹ từ khóa chính trong câu hỏi nhé!',
                'Sai một câu ở đây còn hơn sai trong phòng thi. Ghi nhớ định nghĩa này rồi làm lại nào!'
            ],
            streak: '「STAR PLATINUM: THE WORLD!!」 Chuỗi trả lời đúng liên tiếp quá ấn tượng! Không ai cản nổi cậu lúc này!'
        }
    },

    giorno: {
        id: 'giorno',
        name: 'Giorno Giovanna',
        stand: '『Gold Experience』',
        part: 'Part 5: Golden Wind',
        accent: '#eab308',
        badgeBg: 'rgba(234, 179, 8, 0.15)',
        stats: 'PWR: C • SPD: A • DEV: A',
        svg: `
        <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="giornoBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#4c1d95"/>
                    <stop offset="100%" stop-color="#db2777"/>
                </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#giornoBg)" stroke="#facc15" stroke-width="3"/>
            <!-- Suit with Heart Chest Window -->
            <path d="M22 112 L34 82 L86 82 L98 112 Z" fill="#be185d" stroke="#facc15" stroke-width="2"/>
            <path d="M48 84 Q60 95 72 84 L60 108 Z" fill="#fde6d8" stroke="#facc15" stroke-width="1.5"/>
            <!-- Ladybug Brooch -->
            <circle cx="38" cy="96" r="5" fill="#ef4444" stroke="#facc15" stroke-width="1.5"/>
            <circle cx="37" cy="95" r="1" fill="#000"/>
            <circle cx="40" cy="97" r="1" fill="#000"/>
            <!-- Face -->
            <path d="M41 48 L43 76 Q60 90 77 76 L79 48 Z" fill="#fff1e6" stroke="#4c1d95" stroke-width="2"/>
            <!-- Emerald Eyes -->
            <path d="M45 54 L55 56" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M75 54 L65 56" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/>
            <ellipse cx="50" cy="59" rx="4" ry="3" fill="#fff"/>
            <circle cx="50" cy="59" r="2.2" fill="#10b981"/>
            <ellipse cx="70" cy="59" rx="4" ry="3" fill="#fff"/>
            <circle cx="70" cy="59" r="2.2" fill="#10b981"/>
            <!-- Nose & Confident Smile -->
            <path d="M60 59 L58 67 L61 68" fill="none" stroke="#c28d75" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M54 74 Q60 78 66 74" fill="none" stroke="#9a5b42" stroke-width="2.2" stroke-linecap="round"/>
            <!-- Golden Braid & Sidelocks -->
            <path d="M35 45 Q28 32 42 22 Q60 15 78 22 Q92 32 85 45 Z" fill="#facc15" stroke="#b45309" stroke-width="1.8"/>
            <!-- Iconic 3 Golden Hair Donuts (Cannon Rolls) -->
            <circle cx="46" cy="34" r="8.5" fill="#fde047" stroke="#b45309" stroke-width="2"/>
            <circle cx="46" cy="34" r="3" fill="#4c1d95"/>
            <circle cx="60" cy="31" r="9" fill="#fde047" stroke="#b45309" stroke-width="2"/>
            <circle cx="60" cy="31" r="3.2" fill="#4c1d95"/>
            <circle cx="74" cy="34" r="8.5" fill="#fde047" stroke="#b45309" stroke-width="2"/>
            <circle cx="74" cy="34" r="3" fill="#4c1d95"/>
        </svg>`,
        quotes: {
            idle: '「Tôi, Giorno Giovanna, có một giấc mơ!」 Đó là giúp bạn nắm chắc toàn bộ 400 câu hỏi Xử Lý Ảnh và đạt điểm A+!',
            correct: [
                '「GOLD EXPERIENCE!!」 Tuyệt vời! Kiến thức của bạn đang tỏa sáng rực rỡ như tiếng đàn Piano 3:45 vậy! 🐞✨',
                '「MUDA MUDA!!」 Mọi câu hỏi khó đều trở nên vô dụng trước sự chuẩn bị kỹ lưỡng của bạn!',
                'Quyết tâm (Resolve) của bạn thật đáng ngưỡng mộ! Tiếp tục tiến tới đỉnh cao Passione nào!'
            ],
            wrong: [
                'Đừng lo lắng! 『Gold Experience』 sẽ truyền sinh lực để bạn ghi nhớ khái niệm này ngay lập tức!',
                'Một cú sẩy chân nhỏ thôi! Hãy đọc kỹ phần tóm tắt kiến thức bên dưới để biến sai lầm thành kinh nghiệm nhé.',
                'Con đường trở thành Capo luôn có thử thách. Xem lại định nghĩa gốc rồi phục thù câu tiếp theo nào!'
            ],
            streak: '「KOREGA REQUIEM DA!! 🎹🔥」 Chuỗi Combo bất bại! Bạn đã đạt tới cảnh giới Gold Experience Requiem!'
        }
    },

    josuke: {
        id: 'josuke',
        name: 'Josuke Higashikata',
        stand: '『Crazy Diamond』',
        part: 'Part 4: Diamond is Unbreakable',
        accent: '#ec4899',
        badgeBg: 'rgba(236, 72, 153, 0.15)',
        stats: 'PWR: A • SPD: A • FIX: S',
        svg: `
        <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="josukeBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#3b0764"/>
                    <stop offset="100%" stop-color="#be185d"/>
                </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#josukeBg)" stroke="#f472b6" stroke-width="3"/>
            <!-- School Uniform & Gold Heart/Peace Pins -->
            <path d="M22 112 L34 82 L86 82 L98 112 Z" fill="#1e1b4b" stroke="#facc15" stroke-width="2"/>
            <path d="M50 82 L60 102 L70 82 Z" fill="#facc15"/>
            <circle cx="40" cy="94" r="4.5" fill="#facc15"/>
            <circle cx="80" cy="94" r="4.5" fill="#f472b6"/>
            <!-- Face -->
            <path d="M41 50 L43 77 Q60 90 77 77 L79 50 Z" fill="#fde6d8" stroke="#1e1b4b" stroke-width="2"/>
            <!-- Friendly Energetic Eyes -->
            <path d="M44 52 L55 54" stroke="#1e1b4b" stroke-width="2.8" stroke-linecap="round"/>
            <path d="M76 52 L65 54" stroke="#1e1b4b" stroke-width="2.8" stroke-linecap="round"/>
            <ellipse cx="50" cy="58" rx="4.2" ry="3.2" fill="#fff"/>
            <circle cx="50" cy="58" r="2.2" fill="#6366f1"/>
            <ellipse cx="70" cy="58" rx="4.2" ry="3.2" fill="#fff"/>
            <circle cx="70" cy="58" r="2.2" fill="#6366f1"/>
            <!-- Big Cheerful Grin -->
            <path d="M51 73 Q60 81 69 73 Z" fill="#fff" stroke="#7c4d3a" stroke-width="1.8"/>
            <!-- Iconic Giant Pompadour Hair! -->
            <path d="M36 48 Q22 25 45 16 Q60 11 78 16 Q98 25 82 48 Q60 40 36 48 Z" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
            <path d="M40 24 Q60 18 76 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        quotes: {
            idle: '「Gureto Daze (Great)! ✨」 Chào người anh em! Cứ thoải mái làm bài nhé, nếu có sai chỗ nào thì 『Crazy Diamond』 của tôi sẽ sửa lại giúp bạn ngay!',
            correct: [
                '「DORA DORA DORA!! 💎」 Quá đỉnh luôn người anh em! Câu này bạn xử lý gọn gàng thật đấy!',
                '「Gureto Daze!!」 Chuẩn không cần chỉnh! Cứ đà này điểm 10 nằm chắc trong tay rồi!',
                'Tuyệt cú mèo! Nhịp điệu ôn tập ở thị trấn Morioh hôm nay cực kỳ suôn sẻ!'
            ],
            wrong: [
                '「CRAZY DIAMOND!! 💎✨」 Đừng lo, tôi vừa phục hồi lại kiến thức chuẩn cho bạn ở khung giải thích bên dưới rồi kìa!',
                'Úi chà, câu này hơi lừa một chút! Xem nhanh lời giải bên dưới là hiểu liền à!',
                'Không sao hết! Sai ở lúc ôn luyện là cách tốt nhất để nhớ bài lâu gấp đôi đấy!'
            ],
            streak: '「UNBREAKABLE COMBO!! 💎🔥」 Phong độ của bạn cứng cáp hơn cả kim cương! Quá xuất sắc!'
        }
    },

    dio: {
        id: 'dio',
        name: 'DIO Brando',
        stand: '『The World (ZA WARUDO)』',
        part: 'Part 3: Final Boss',
        accent: '#f59e0b',
        badgeBg: 'rgba(245, 158, 11, 0.15)',
        stats: 'PWR: A • SPD: A • TIME: 9s',
        svg: `
        <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="dioBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1f1235"/>
                    <stop offset="100%" stop-color="#78350f"/>
                </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#dioBg)" stroke="#fbbf24" stroke-width="3"/>
            <!-- Golden Outfit & Dark Collar -->
            <path d="M20 112 L32 82 L88 82 L100 112 Z" fill="#eab308" stroke="#1e1b4b" stroke-width="2"/>
            <path d="M40 82 L60 106 L80 82 Z" fill="#111827"/>
            <!-- Face -->
            <path d="M41 48 L43 76 Q60 90 77 76 L79 48 Z" fill="#fef3c7" stroke="#78350f" stroke-width="2"/>
            <!-- Sharp Crimson/Amber Vampire Eyes -->
            <path d="M43 51 L56 56" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>
            <path d="M77 51 L64 56" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>
            <ellipse cx="50" cy="58" rx="4" ry="2.5" fill="#fff"/>
            <circle cx="50" cy="58" r="2" fill="#dc2626"/>
            <ellipse cx="70" cy="58" rx="4" ry="2.5" fill="#fff"/>
            <circle cx="70" cy="58" r="2" fill="#dc2626"/>
            <!-- Smirk with Vampire Fang -->
            <path d="M51 74 Q60 79 69 72" fill="none" stroke="#78350f" stroke-width="2.2" stroke-linecap="round"/>
            <polygon points="64,74 66,79 68,73" fill="#fff"/>
            <!-- Wild Spiky Golden Hair -->
            <path d="M30 48 L24 30 L38 34 L36 18 L52 28 L60 14 L68 28 L84 18 L82 34 L96 30 L90 48 Z" fill="#facc15" stroke="#b45309" stroke-width="1.8"/>
            <!-- Green Heart Headband -->
            <rect x="38" y="42" width="44" height="6" fill="#10b981" stroke="#065f46" stroke-width="1.5" rx="2"/>
            <path d="M60 49 L55 43 A3 3 0 0 1 60 40 A3 3 0 0 1 65 43 Z" fill="#10b981" stroke="#facc15" stroke-width="1"/>
        </svg>`,
        quotes: {
            idle: '「Hồ... Ngươi dám tiến lại gần ngân hàng 400 câu hỏi của ta thay vì bỏ chạy sao?!」 Hãy chứng minh thực lực của ngươi cho DIO này xem!',
            correct: [
                '「NANI?!」 Ngươi... ngươi nhìn thấu được đáp án trong thế giới ngưng đọng thời gian của ta sao?! Khá lắm!',
                '「WRYYYYYY!!」 Không tệ chút nào! Kiến thức Xử Lý Ảnh của ngươi thực sự đáng gờm đấy!',
                'Hừm! Câu này ngươi vượt qua được, nhưng hãy xem câu tiếp theo ngươi còn giữ được sự tỉnh táo không!'
            ],
            wrong: [
                '「ZA WARUDO!! ⏱️🛑」 MUDA MUDA MUDA! Ngươi đã sập bẫy phương án nhiễu rồi! Hãy đọc kỹ lời giải bên dưới đi!',
                '「Một giây đã trôi qua...」 Và ngươi đã chọn nhầm! Nhưng đừng nản, đọc kỹ định nghĩa dưới kia để tiến hóa hơn!',
                'Ngươi vẫn còn thiếu một chút quan sát! Xem ngay phân tích của 『Heaven\'s Door』 bên dưới để khắc phục!'
            ],
            streak: '「BAKANA!! KHÔNG THỂ NÀO!! 🔥」 Chuỗi đúng liên tiếp này... Ngươi đã vượt qua cả giới hạn của 『The World』 rồi sao?!'
        }
    },

    rohan: {
        id: 'rohan',
        name: 'Rohan Kishibe',
        stand: '『Heaven\'s Door』',
        part: 'Part 4: Mangaka & Giảng Viên',
        accent: '#10b981',
        badgeBg: 'rgba(16, 185, 129, 0.15)',
        stats: 'PWR: D • SPD: B • KNW: S+',
        svg: `
        <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="rohanBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#064e3b"/>
                    <stop offset="100%" stop-color="#0d9488"/>
                </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#rohanBg)" stroke="#34d399" stroke-width="3"/>
            <!-- Artist Outfit -->
            <path d="M22 112 L34 82 L86 82 L98 112 Z" fill="#f8fafc" stroke="#10b981" stroke-width="2"/>
            <path d="M46 82 L60 104 L74 82 Z" fill="#065f46"/>
            <!-- Face -->
            <path d="M41 48 L43 76 Q60 89 77 76 L79 48 Z" fill="#fde6d8" stroke="#064e3b" stroke-width="2"/>
            <!-- Focused Artist Eyes -->
            <path d="M44 53 L55 55" stroke="#064e3b" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M76 53 L65 55" stroke="#064e3b" stroke-width="2.5" stroke-linecap="round"/>
            <ellipse cx="50" cy="58" rx="4" ry="2.8" fill="#fff"/>
            <circle cx="50" cy="58" r="2" fill="#0d9488"/>
            <ellipse cx="70" cy="58" rx="4" ry="2.8" fill="#fff"/>
            <circle cx="70" cy="58" r="2" fill="#0d9488"/>
            <!-- Calm Expression -->
            <path d="M54 74 Q60 76 66 74" fill="none" stroke="#7c4d3a" stroke-width="2" stroke-linecap="round"/>
            <!-- Green Hair & Iconic Zig-Zag Headband -->
            <path d="M34 45 L30 22 L46 28 L60 15 L74 28 L90 22 L86 45 Z" fill="#10b981" stroke="#064e3b" stroke-width="1.8"/>
            <path d="M36 42 L44 36 L52 42 L60 36 L68 42 L76 36 L84 42 L84 48 L36 48 Z" fill="#facc15" stroke="#064e3b" stroke-width="1.5"/>
        </svg>`,
        quotes: {
            idle: '「HEAVEN\'S DOOR! 📖」 Ta sẽ biến mỗi câu hỏi thành những trang sách mở! Chỉ cần nắm được từ khóa cốt lõi, bạn sẽ nhớ suốt đời.',
            correct: [
                '「Tuyệt tác! 🖋️✨」 Ta đã viết dòng chữ "Nắm vững kiến thức Xử Lý Ảnh" vào trang sách của bạn rồi!',
                'Sự quan sát tinh tế của một họa sĩ! Bạn nhận diện định nghĩa cực kỳ chuẩn xác.',
                'Hoàn hảo! Một tư duy mạch lạc đáng để đưa vào tác phẩm manga tiếp theo của ta.'
            ],
            wrong: [
                '「Hãy mở trang sách bên dưới ra! 📖」 Ta đã ghi chú lại chính xác định nghĩa chuẩn của bài giảng cho bạn rồi đấy.',
                'Đừng đoán mò! Hãy đọc kỹ cụm từ khóa được in đậm trong khung 『Heaven\'s Door』 bên dưới nhé.',
                'Mọi chi tiết trong xử lý ảnh đều có quy luật riêng. Xem lại lời giải để ghi vào trí nhớ nào!'
            ],
            streak: '「CẢM HỨNG BẤT TẬN!! 📖🔥」 Chuỗi trả lời đúng hoàn mỹ! Bạn thực sự đã làm chủ cuốn từ điển Xử Lý Ảnh!'
        }
    },

    joseph: {
        id: 'joseph',
        name: 'Joseph Joestar',
        stand: '『Hermit Purple』',
        part: 'Part 2 & 3: Trickster Master',
        accent: '#a855f7',
        badgeBg: 'rgba(168, 85, 247, 0.15)',
        stats: 'PWR: B • IQ: 400 • LCK: S+',
        svg: `
        <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="josephBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#3b0764"/>
                    <stop offset="100%" stop-color="#6d28d9"/>
                </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#josephBg)" stroke="#c084fc" stroke-width="3"/>
            <!-- Scarf & Jacket -->
            <path d="M22 112 L34 82 L86 82 L98 112 Z" fill="#4c1d95" stroke="#facc15" stroke-width="2"/>
            <path d="M34 82 Q60 98 86 82 L82 96 Q60 108 38 96 Z" fill="#22c55e" stroke="#facc15" stroke-width="2"/>
            <!-- Face -->
            <path d="M41 48 L43 76 Q60 90 77 76 L79 48 Z" fill="#fde6d8" stroke="#3b0764" stroke-width="2"/>
            <!-- Winking / Confident Eyes -->
            <path d="M44 52 L55 54" stroke="#3b0764" stroke-width="2.8" stroke-linecap="round"/>
            <path d="M76 52 L65 54" stroke="#3b0764" stroke-width="2.8" stroke-linecap="round"/>
            <ellipse cx="50" cy="58" rx="4" ry="3" fill="#fff"/>
            <circle cx="50" cy="58" r="2.2" fill="#0ea5e9"/>
            <ellipse cx="70" cy="58" rx="4" ry="3" fill="#fff"/>
            <circle cx="70" cy="58" r="2.2" fill="#0ea5e9"/>
            <!-- Smirk -->
            <path d="M52 74 Q60 80 68 73" fill="none" stroke="#7c4d3a" stroke-width="2.4" stroke-linecap="round"/>
            <!-- Spiky Brown Hair & Caesar Headband -->
            <path d="M32 45 L26 26 L42 30 L48 16 L60 25 L72 16 L78 30 L94 26 L88 45 Z" fill="#78350f" stroke="#451a03" stroke-width="1.8"/>
            <rect x="36" y="41" width="48" height="6.5" fill="#facc15" stroke="#dc2626" stroke-width="1.5" rx="2"/>
        </svg>`,
        quotes: {
            idle: '「Câu tiếp theo mà bạn sắp nói sẽ là: "Câu này mình biết đáp án rồi!"... Đúng chứ?! 👉✨」 Cùng chiến nào!',
            correct: [
                '「NICEU, NICEU! VERRRY NICEU, CAESAR-CHAN!! 👍✨」 Đúng y như tôi đã tiên đoán trước!',
                '「YES!!」 Không hổ danh là truyền nhân nhà Joestar! Trí tuệ ứng biến cực kỳ nhạy bén!',
                'Haha! Kẻ địch tưởng đánh lừa được bạn nhưng mọi thứ đều nằm trong tính toán của bạn cả rồi!'
            ],
            wrong: [
                '「OH MY GOD!! 😱」 HORY SHIIIT!! Bị lừa mất rồi! Mau xem ngay quẻ bói 『Hermit Purple』 ở phần giải thích bên dưới!',
                '「NIGERUNDAYO!! 🏃💨」 Tạm rút lui để đọc lại định nghĩa câu này đã, lần sau gặp lại chắc chắn ăn điểm!',
                'Úi chà! Câu này gài bẫy khéo đấy, nhớ lưu dấu sao ★ lại để ôn kỹ hơn nha!'
            ],
            streak: '「YOUR NEXT LINE IS: COMBO BẤT BẠI!! 🔥✨」 Đỉnh của chóp! Không một câu hỏi nào làm khó được bạn!'
        }
    }
};
