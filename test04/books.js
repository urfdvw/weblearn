var book_ind = {"Genesis": 1, "Gen": 1, "创世记": 1, "创": 1, "chuangshiji": 1, "chuang": 1, "csj": 1, "Exodus": 2, "Exo": 2, "出埃及记": 2, "出": 2, "chuaijiji": 2, "chu": 2, "cajj": 2, "Leviticus": 3, "Lev": 3, "利未记": 3, "利": 3, "liweiji": 3, "li": 3, "lwj": 3, "Numbers": 4, "Num": 4, "民数记": 4, "民": 4, "minshuji": 4, "min": 4, "msj": 4, "Deuteronomy": 5, "Deu": 5, "申命记": 5, "申": 5, "shenmingji": 5, "shen": 5, "smj": 5, "Joshua": 6, "Jos": 6, "约书亚记": 6, "书": 6, "yueshuyaji": 6, "shu": 6, "ysyj": 6, "Judges": 7, "Jug": 7, "士师记": 7, "士": 7, "shishiji": 7, "shi": 19, "ssj": 7, "Ruth": 8, "Rut": 8, "路得记": 8, "得": 8, "ludeji": 8, "de": 8, "ldj": 8, "1Samuel": 9, "1Sa": 9, "撒母耳记上": 9, "撒上": 9, "samuerjishang": 9, "sashang": 9, "smejs": 9, "2Samuel": 10, "2Sa": 10, "撒母耳记下": 10, "撒下": 10, "samuerjixia": 10, "saxia": 10, "smejx": 10, "1Kings": 11, "1Ki": 11, "列王记上": 11, "王上": 11, "liewangjishang": 11, "wangshang": 11, "lwjs": 11, "2Kings": 12, "2Ki": 12, "列王记下": 12, "王下": 12, "liewangjixia": 12, "wangxia": 12, "lwjx": 12, "1Chronicles": 13, "1Ch": 13, "历代志上": 13, "代上": 13, "lidaizhishang": 13, "daishang": 13, "ldzs": 13, "2Chronicles": 14, "2Ch": 14, "历代志下": 14, "代下": 14, "lidaizhixia": 14, "daixia": 14, "ldzx": 14, "Ezra": 15, "Ezr": 15, "以斯拉记": 15, "拉": 15, "yisilaji": 15, "la": 15, "yslj": 15, "Nehemiah": 16, "Neh": 16, "尼希米记": 16, "尼": 16, "niximiji": 16, "ni": 16, "nxmj": 16, "Esther": 17, "Est": 17, "以斯帖记": 17, "斯": 17, "yisitieji": 17, "si": 17, "ystj": 17, "Job": 18, "约伯记": 18, "伯": 18, "yueboji": 18, "bo": 18, "ybj": 18, "Psalm": 19, "Psm": 19, "诗篇": 19, "诗": 19, "shipian": 19, "sp": 19, "Proverbs": 20, "Pro": 20, "箴言": 20, "箴": 20, "zhenyan": 20, "zhen": 20, "zy": 20, "Ecclesiastes": 21, "Ecc": 21, "传道书": 21, "传": 21, "chuandaoshu": 21, "chuan": 21, "cds": 21, "SongofSolomon": 22, "Son": 22, "雅歌": 22, "歌": 22, "yage": 22, "ge": 22, "yg": 22, "Isaiah": 23, "Isa": 23, "以赛亚书": 23, "赛": 23, "yisaiyashu": 23, "sai": 23, "ysys": 23, "Jeremiah": 24, "Jer": 24, "耶利米书": 24, "耶": 24, "yelimishu": 24, "ye": 24, "ylms": 24, "Lamentations": 25, "Lam": 25, "耶利米哀歌": 25, "哀": 25, "yelimiaige": 25, "ai": 25, "ylmag": 25, "Ezekiel": 26, "Eze": 26, "以西结书": 26, "结": 26, "yixijieshu": 26, "jie": 26, "yxjs": 26, "Daniel": 27, "Dan": 27, "但以理书": 27, "但": 27, "danyilishu": 27, "dan": 27, "dyls": 27, "Hosea": 28, "Hos": 28, "何西阿书": 28, "何": 28, "hexiashu": 28, "he": 28, "hxas": 28, "Joel": 29, "Joe": 29, "约珥书": 29, "珥": 29, "yueershu": 29, "er": 29, "yes": 29, "Amos": 30, "Amo": 30, "阿摩司书": 30, "摩": 30, "amosishu": 30, "mo": 30, "amss": 30, "Obadiah": 31, "Oba": 31, "俄巴底亚书": 31, "俄": 31, "ebadiyashu": 31, "e": 31, "ebdys": 31, "Jonah": 32, "Jon": 32, "约拿书": 32, "拿": 32, "yuenashu": 32, "na": 32, "yns": 32, "Micah": 33, "Mic": 33, "弥迦书": 33, "弥": 33, "mijiashu": 33, "mi": 33, "mjs": 33, "Nahum": 34, "Nah": 34, "那鸿书": 34, "鸿": 34, "nahongshu": 34, "hong": 34, "nhs": 34, "Habakkuk": 35, "Hab": 35, "哈巴谷书": 35, "哈": 35, "habagushu": 35, "ha": 35, "hbgs": 35, "Zephaniah": 36, "Zep": 36, "西番雅书": 36, "番": 36, "xifanyashu": 36, "fan": 36, "xfys": 36, "Haggai": 37, "Hag": 37, "哈该书": 37, "该": 37, "hagaishu": 37, "gai": 37, "hgs": 37, "Zechariah": 38, "Zec": 38, "撒迦利亚书": 38, "亚": 38, "sajialiyashu": 38, "ya": 59, "sjlys": 38, "Malachi": 39, "Mal": 39, "玛拉基书": 39, "玛": 39, "malajishu": 39, "ma": 39, "mljs": 39, "Matthew": 40, "Mat": 40, "马太福音": 40, "太": 40, "mataifuyin": 40, "tai": 40, "mtfy": 40, "Mark": 41, "Mak": 41, "马可福音": 41, "可": 41, "makefuyin": 41, "ke": 41, "mkfy": 41, "Luke": 42, "Luk": 42, "路加福音": 42, "路": 42, "lujiafuyin": 42, "lu": 42, "ljfy": 42, "John": 43, "Jhn": 43, "约翰福音": 43, "约": 43, "yuehanfuyin": 43, "yue": 43, "yhfy": 43, "Acts": 44, "Act": 44, "使徒行传": 44, "徒": 44, "shituxingzhuan": 44, "tu": 44, "stxz": 44, "Romans": 45, "Rom": 45, "罗马书": 45, "罗": 45, "luomashu": 45, "luo": 45, "lms": 45, "1Corinthians": 46, "1Co": 46, "哥林多前书": 46, "林前": 46, "gelinduoqianshu": 46, "linqian": 46, "gldqs": 46, "2Corinthians": 47, "2Co": 47, "哥林多后书": 47, "林后": 47, "gelinduohoushu": 47, "linhou": 47, "gldhs": 47, "Galatians": 48, "Gal": 48, "加拉太书": 48, "加": 48, "jialataishu": 48, "jia": 48, "jlts": 48, "Ephesians": 49, "Eph": 49, "以弗所书": 49, "弗": 49, "yifusuoshu": 49, "fu": 49, "yfss": 49, "Philippians": 50, "Phl": 50, "腓立比书": 50, "腓": 50, "feilibishu": 50, "fei": 50, "flbs": 50, "Colossians": 51, "Col": 51, "歌罗西书": 51, "西": 51, "geluoxishu": 51, "xi": 51, "glxs": 51, "1Thessalonians": 52, "1Ts": 52, "帖撒罗尼迦前书": 52, "帖前": 52, "tiesaluonijiaqianshu": 52, "tieqian": 52, "tslnjqs": 52, "2Thessalonians": 53, "2Ts": 53, "帖撒罗尼迦后书": 53, "帖后": 53, "tiesaluonijiahoushu": 53, "tiehou": 53, "tslnjhs": 53, "1Timothy": 54, "1Ti": 54, "提摩太前书": 54, "提前": 54, "timotaiqianshu": 54, "tiqian": 54, "tmtqs": 54, "2Timothy": 55, "2Ti": 55, "提摩太后书": 55, "提后": 55, "timotaihoushu": 55, "tihou": 55, "tmths": 55, "Titus": 56, "Tit": 56, "提多书": 56, "多": 56, "tiduoshu": 56, "duo": 56, "tds": 56, "Philemon": 57, "Phm": 57, "腓利门书": 57, "门": 57, "feilimenshu": 57, "men": 57, "flms": 57, "Hebrews": 58, "Heb": 58, "希伯来书": 58, "来": 58, "xibolaishu": 58, "lai": 58, "xbls": 58, "James": 59, "Jas": 59, "雅各书": 59, "雅": 59, "yageshu": 59, "ygs": 59, "1Peter": 60, "1Pe": 60, "彼得前书": 60, "彼前": 60, "bideqianshu": 60, "biqian": 60, "bdqs": 60, "2Peter": 61, "2Pe": 61, "彼得后书": 61, "彼后": 61, "bidehoushu": 61, "bihou": 61, "bdhs": 61, "1John": 62, "1Jn": 62, "约翰一书": 62, "约一": 62, "yuehanyishu": 62, "yueyi": 62, "yhys": 62, "2John": 63, "2Jn": 63, "约翰二书": 63, "约二": 63, "yuehanershu": 63, "yueer": 63, "yhes": 63, "3John": 64, "3Jn": 64, "约翰三书": 64, "约三": 64, "yuehansanshu": 64, "yuesan": 64, "yhss": 64, "Jude": 65, "Jud": 65, "犹大书": 65, "犹": 65, "youdashu": 65, "you": 65, "yds": 65, "Revelation": 66, "Rev": 66, "启示录": 66, "启": 66, "qishilu": 66, "qi": 66, "qsl": 66}
var tr_book_name = {"1": "創世紀", "2": "出埃及記", "3": "利未記", "4": "民數記", "5": "申命記", "6": "約書亞記", "7": "士師記", "8": "路得記", "9": "撒母耳記上", "10": "撒母耳記下", "11": "列王記上", "12": "列王記下", "13": "歷代志上", "14": "歷代志下", "15": "以斯拉記", "16": "尼希米記", "17": "以斯帖記", "18": "約伯記", "19": "詩篇", "20": "箴言", "21": "傳道書", "22": "雅歌", "23": "以賽亞書", "24": "耶利米書", "25": "耶利米哀歌", "26": "以西結書", "27": "但以理書", "28": "何西阿書", "29": "約珥書", "30": "阿摩司書", "31": "俄巴底亞書", "32": "約拿書", "33": "彌迦書", "34": "那鴻書", "35": "哈巴谷書", "36": "西番雅書", "37": "哈該書", "38": "撒迦利亞書", "39": "瑪拉基書", "40": "馬太福音", "41": "馬可福音", "42": "路加福音", "43": "約翰福音", "44": "使徒行傳", "45": "羅馬書", "46": "哥林多前書", "47": "哥林多後書", "48": "加拉太書", "49": "以弗所書", "50": "腓立比書", "51": "歌羅西書", "52": "帖撒羅尼迦前書", "53": "帖撒羅尼迦後書", "54": "提摩太前書", "55": "提摩太後書", "56": "提多書", "57": "腓利門書", "58": "希伯來書", "59": "雅各書", "60": "彼得前書", "61": "彼得後書", "62": "約翰一書", "63": "約翰二書", "64": "約翰三書", "65": "猶大書", "66": "啟示錄"}
var si_book_name = {"1": "创世记", "2": "出埃及记", "3": "利未记", "4": "民数记", "5": "申命记", "6": "约书亚记", "7": "士师记", "8": "路得记", "9": "撒母耳记上", "10": "撒母耳记下", "11": "列王记上", "12": "列王记下", "13": "历代志上", "14": "历代志下", "15": "以斯拉记", "16": "尼希米记", "17": "以斯帖记", "18": "约伯记", "19": "诗篇", "20": "箴言", "21": "传道书", "22": "雅歌", "23": "以赛亚书", "24": "耶利米书", "25": "耶利米哀歌", "26": "以西结书", "27": "但以理书", "28": "何西阿书", "29": "约珥书", "30": "阿摩司书", "31": "俄巴底亚书", "32": "约拿书", "33": "弥迦书", "34": "那鸿书", "35": "哈巴谷书", "36": "西番雅书", "37": "哈该书", "38": "撒迦利亚书", "39": "玛拉基书", "40": "马太福音", "41": "马可福音", "42": "路加福音", "43": "约翰福音", "44": "使徒行传", "45": "罗马书", "46": "哥林多前书", "47": "哥林多后书", "48": "加拉太书", "49": "以弗所书", "50": "腓立比书", "51": "歌罗西书", "52": "帖撒罗尼迦前书", "53": "帖撒罗尼迦后书", "54": "提摩太前书", "55": "提摩太后书", "56": "提多书", "57": "腓利门书", "58": "希伯来书", "59": "雅各书", "60": "彼得前书", "61": "彼得后书", "62": "约翰一书", "63": "约翰二书", "64": "约翰三书", "65": "犹大书", "66": "启示录"}
var en_book_name = {"1": "enesis", "2": "Exodus", "3": "Leviticus", "4": "Numbers", "5": "Deuteronomy", "6": "Joshua", "7": "Judges", "8": "Ruth", "9": "1 Samuel", "10": "2 Samuel", "11": "1 Kings", "12": "2 Kings", "13": "1 Chronicles", "14": "2 Chronicles", "15": "Ezra", "16": "Nehemiah", "17": "Esther", "18": "Job", "19": "Psalm", "20": "Proverbs", "21": "Ecclesiastes", "22": "Song of Solomon", "23": "Isaiah", "24": "Jeremiah", "25": "Lamentations", "26": "Ezekiel", "27": "Daniel", "28": "Hosea", "29": "Joel", "30": "Amos", "31": "Obadiah", "32": "Jonah", "33": "Micah", "34": "Nahum", "35": "Habakkuk", "36": "Zephaniah", "37": "Haggai", "38": "Zechariah", "39": "Malachi", "40": "Matthew", "41": "Mark", "42": "Luke", "43": "John", "44": "Acts", "45": "Romans", "46": "1 Corinthians", "47": "2 Corinthians", "48": "Galatians", "49": "Ephesians", "50": "Philippians", "51": "Colossians", "52": "1 Thessalonians", "53": "2 Thessalonians", "54": "1 Timothy", "55": "2 Timothy", "56": "Titus", "57": "Philemon", "58": "Hebrews", "59": "James", "60": "1 Peter", "61": "2 Peter", "62": "1 John", "63": "2 John", "64": "3 John", "65": "Jude", "66": "Revelation"}
var suggestionKeys = Object.keys(book_ind)