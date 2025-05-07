--
-- PostgreSQL database dump
--

-- Dumped from database version 16.8 (Debian 16.8-1.pgdg120+1)
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


--
-- Name: blog; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.blog (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    author character varying(50) NOT NULL,
    blog text NOT NULL,
    summary character varying(500) NOT NULL,
    read_time integer NOT NULL,
    image_url character varying(500)
);


--
-- Name: blog_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.blog_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: blog_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.blog_id_seq OWNED BY public.blog.id;


--
-- Name: event; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.event (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    summary character varying(500) NOT NULL,
    content text NOT NULL,
    date character varying(10) NOT NULL,
    "time" character varying(5) NOT NULL,
    availability character varying(100) NOT NULL,
    image_url character varying(500)
);


--
-- Name: event_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.event_id_seq OWNED BY public.event.id;


--
-- Name: news; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    author character varying(50) NOT NULL,
    content text NOT NULL,
    summary character varying(500) NOT NULL,
    image_url character varying(500)
);


--
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;


--
-- Name: prayer_times; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.prayer_times (
    id integer NOT NULL,
    fajr_adhan character varying(50) NOT NULL,
    fajr_iqama character varying(50) NOT NULL,
    dhuhr_adhan character varying(50) NOT NULL,
    dhuhr_iqama character varying(50) NOT NULL,
    asr_adhan character varying(50) NOT NULL,
    asr_iqama character varying(50) NOT NULL,
    maghrib_adhan character varying(50) NOT NULL,
    maghrib_iqama character varying(50) NOT NULL,
    isha_adhan character varying(50) NOT NULL,
    isha_iqama character varying(50) NOT NULL,
    jumuah_adhan character varying(50),
    jumuah_iqama character varying(50)
);


--
-- Name: prayer_times_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.prayer_times_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: prayer_times_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.prayer_times_id_seq OWNED BY public.prayer_times.id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    price double precision NOT NULL,
    description character varying(500) NOT NULL,
    image_url character varying(500)
);


--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- Name: blog id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blog ALTER COLUMN id SET DEFAULT nextval('public.blog_id_seq'::regclass);


--
-- Name: event id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.event ALTER COLUMN id SET DEFAULT nextval('public.event_id_seq'::regclass);


--
-- Name: news id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- Name: prayer_times id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.prayer_times ALTER COLUMN id SET DEFAULT nextval('public.prayer_times_id_seq'::regclass);


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.alembic_version (version_num) FROM stdin;
a8b21efa0f16
\.


--
-- Data for Name: blog; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.blog (id, title, author, blog, summary, read_time, image_url) FROM stdin;
6	Mecca - the Holiest City in the World in Islam	MSSN ADMIN - alim.org	**Mecca: The Holiest City in the World in Islam**\n\nMecca is the holy city in the World. This title has been given to Mecca because, Prophet Muhammad was born here. The Kabba, the holy site in Islam, is located in Mecca. Islam perform the ritual prayer to Kaaba called the Qiblah here in Mecca. Each Muslim can collect the holiest water in the world, Zamzam from Mecca. Every year, Islam devotees make pilgrimage trips to Mecca to perform Hajj and Umrah. \n\nThe holy city, Mecca is located 45 miles east of the city of Jeddah in Saudi Arabia. The place has 909 feet of elevation and is located in a valley surrounded by mountains. Here the temperature can reach upto 120 degree Fahrenhei. In fact, Allah has described Mecaa in many names in the holy Quran such as  Mecca, Bakkah, Al-Balad, Al-Qaryah, and Ummul-Qura. The largest and holiest mosque in the world named Masjid Al-Haram is situated in Mecca. This holy devotion place has a capacity of allowing up to 1.2 million people to pray at any one time. \n\nMasjid An-Nabawi called as the Prophet’s Mosque in Medina where the reward for prayers is equivalent to 1,000 times prayer from any other mosque in the world.\n\n\n[ What is Kaaba?]\n\nKaaba is a large stone structure that lies in the center of Masjid Al-Haram. Kaaba is 60 feet high and constitutes a single room. Kaaba is covered with a black curtain called Kiswah. Kaaba has a door which is located at the south-east wall. It is noted that Kaaba was built by Prophet Abraham and Prophet Ismail. The holy Quran provides evidence that prophet Abraham and Prophet Ismail were the founders of Kaaba. Kaaba has been given several names such as Bayt Al-Ateeq(ancient house), Bayt Al-Haram( honorable house) and Baytullah( house of Allah- This is just a figure of sppech and does not mean).\n\nThe black stone, which is brought from the paradise is placed in Kaaba. Now this black stone is framed with silver as it had been broken into a number of pieces when it was rebuilt by the Quraysh. Islamic devotees try to kiss the black stone because the Prophet Muhammad used to do so. \n\n\n\n[Zamzam Spring]\n\nZamzam spring holds a historical miracle and has got extreme religious relevance due to its origin. Zamzam has a wonderful historical significance that miraculously, had issued forth from a barren and desolate wadi, where the Prophet Ibrahim sent his wife Hajar and infant son Ismail. She searched for a drop of water desperately. She ran seven times across mountains and she could not find some water. Thus, by seeing this, Allah sent Gabriel to give Hajar some water. Gabriel scratched the ground to appear the spring. By finding the spring, she became happy and gave water to Ismail who was dying with thirst. Hajar has got in a great fear that, what will do if this spring disappears all on a sudden. Thus, she enclosed the spring with sand and stones. The name ZamZam got this name from Hajar that she chanted Zome Zome repeatedly while enclosing the spring with sand to prevent the water from flowing. Zamzam means “stop flowing”. Now Zamzam is protected in a well and every Muslim collect the water during their pilgrimage. \n\nApart from these, Hira cave which is been known for prophet Muhammad’s first revelation place, is located at Mount Al-Nur, a place nearby Mecca. \n	Mecca: Islam’s holiest city, home to the Kaaba, Zamzam, and birthplace of Prophet Muhammad ﷺ.	3	https://i.im.ge/2025/04/13/pJ00TX.mssn-abuad-mecca-holies-city.jpeg
7	Hadith Explained: Prophet Musa Slaps the Angel of Death	MSSN ADMIN	أَنَّ مُوسَى لَطَمَ عَيْنَ مَلَكِ الْمَوْتِ، فَأَعْوَرَهُ \n“Indeed, Musa struck the Angel of Death in his eye, blinding it.”\n\nThis hadith is considered sound by the scholars of hadith and I think is grounded in ancient reports. It has a valid interpretation that is not negated by reason.\n\nWhat we conclude is that Allah’s angels are spiritual beings, meaning they are creations attributed to the spirit in their essence, as if they are spirits without physical bodies that can be seen with the naked eye. They do not possess eyes like ours or skin like ours.\n\nWe do not know how Allah has fashioned them, for we can only comprehend what we observe or what has a comparable example in our experience. The same applies to jinn, devils, and other unseen entities—they are spirits whose exact nature is unknown to us.\n\nWe are limited to understanding their attributes as described by Allah and His Messenger ﷺ.\n\nAllah says:\n“Who made the angels messengers with wings—two, three, or four. He increases in creation what He wills.” (Qur’an 35:1)\n\nThis implies He increases these wings or other aspects of their creation as He wishes.\n\nThe Arabs used to refer to angels as jinn because they are hidden from sight, just as the jinn. Al-A‘sha [a pre-Islamic Arab poet] mentions in his poetry about Sulayman ibn Dawud:\n“And he subdued from the jinn of the angels nine,\nStanding before him, working without wage.”\n\nAllah has granted angels the ability to take on various forms. Jibril (Gabriel) appeared to the Prophet ﷺ in the form of Dihyah al-Kalbi as well as in the form of a Bedouin. At other times, he appeared filling the horizon with his wings.\n\nSimilarly, Allah has allowed the jinn to take on various forms, just as He has allowed angels. Allah says:\n\n“We sent to her Our spirit, and he appeared to her as a perfect human being.” (Qur’an 19:17)\n\nWhen these forms are assumed, they are not actual transformations but representations and imitations so that they can be perceived by the eye.\n\nAnd the true nature of their creation is that they are spiritual beings, flowing like blood, reaching the hearts, entering into the earth, seeing but not being seen.\n\nAllah says regarding Iblis (Satan):\n\n“He sees you—he and his tribe—from where you cannot see them.” (Qur’an 7:27)\nThis indicates that we cannot see them in their true forms.\n\nAllah also says:\n“And they say, ‘Why has no angel been sent down to him?’ If We had sent down an angel, the matter would have been decided, and they would not be reprieved. And if We had made him an angel, We would have made him appear as a man.” (Qur’an 6:8-9)\n\nThis means that if an angel were sent, they would not perceive his true form because their senses cannot grasp the essence of angels. Thus, the angel would be made to resemble a human, so they could see and comprehend him.\n\nIbn Abbas mentioned that when Allah sent the two angels [Harut and Marut] to judge among the people on earth, He transformed them into human forms and instilled them with desires. This was because it is not possible for someone to judge among people unless they can see him, hear his speech, and find him resembling and akin to them.\n\nWhen the Angel of Death appeared to Musa—both being creations of Allah—it was in a representational form. Musa struck the angel, damaging the eye of that representational form, not his true form. Afterward, the Angel of Death returned to his true spiritual form, untouched and unaffected by the incident.\n\nSource: Ibn Qutaybah’s (d. 276 AH) Ta’weel Mukhtalif al-Hadith, pgs. 400-402	Did Musa(AS) really strike the Angel of Death? Discover the hadith's meaning and its deeper insights	5	https://i0.wp.com/thethinkingmuslim.com/wp-content/uploads/2024/12/Slap.jpg?resize=1024%2C683&ssl=1
8	The Reality of Yawm al‑Qiyāmah: What Happens After Death?	Muslim Rikiji	Every soul will one day stand before its Lord on Yawm al‑Qiyāmah—the Day of Resurrection—also called Yawm ad‑Dīn (يوم الدّين, “Day of Recompense”), Yawm al‑Fasl (يوم الفصل, “Day of Separation”), Yawm al‑Ḥisāb (يوم الحساب, “Day of Reckoning”), and Yawm al‑Ba‘th (يوم البعث, “Day of Rising”). These names remind us that on that Day our deeds will be weighed, the righteous separated from the wicked, and every person brought back to life to receive their full recompense.\n\nDeath is the one certainty in life: “Every soul shall taste death…” (Q 3:185). In fact, Allah even frames loss of life as one of the trials—or مُصِيبَةٌ (calamities)—that can befall us:\n\n64:11\n﴿لَا يُصِيبُكُم مِّن مُّصِيبَةٍ إِلَّا بِإِذْنِ اللَّهِ ۗ وَمَن يُؤْمِن بِاللَّهِ يَهْدِ قَلْبَهُ ۚ وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ﴾\n“No misfortune befalls you except by permission of Allah. And whoever believes in Allah—He will guide his heart; and Allah is Knowing of all things.”\nThis shows that even death itself is a trial decreed by Allah, meant to test our faith and patience. The Prophet ﷺ reminds us further, “إنما الأعمال بالخواتيم” (“Indeed, deeds are [judged] by their endings”), so the state of one’s heart and faith at the moment of departure seals their record of good or ill.\n\nAllah also warns us sharply in His Book:\n\n35:5–6\n﴿يَا أَيُّهَا النَّاسُ إِنَّ وَعْدَ اللَّهِ حَقٌّ فَلا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا وَلا يَغُرَّنَّكُم بِاللَّهِ الْمَخَادِعُ ۗ إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ فَاتَّخِذُوهُ عَدُوًّا﴾\n“O mankind, the promise of Allah is true—so let not worldly life deceive you, nor let the Deceiver deceive you about Allah. Indeed, Satan is to you an open enemy.”\n59:18–19\n﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ كُلُّ نَفْسٍ مَاذَا قَدَّمَتْ لِغَدٍ ۗ وَلَا تَكُونُوا كَالَّذِينَ نَسُوا اللَّهَ فَأَنسَاهُمْ أَنفُسَهُمْ﴾\n“O believers, fear Allah—and let every soul look to what it has prepared for tomorrow. And do not be like those who forgot Allah, so He made them forget themselves.”\nReflect, too, on the life‑cycle Allah sketches—birth in weakness, peak vigor, decline into old age, and return to dust (30:54). Each stage races us toward that final breath, reminding us to live mindfully.\n\nAt the moment of death, the Angel of Death (Malak al‑Mawt) is dispatched to extract the soul. The Prophet ﷺ described this as sometimes so painful the dying person feels their insides being drawn out—an agony both physical and spiritual, underscoring that death is no gentle sleep.\n\nOnce the body is lowered into the grave, two angels—Munkar and Nakīr—come to question the soul. They ask a series of nine items (three core questions, each repeated three times): “Who is your Lord?” (مَنْ رَبُّكَ؟), “What is your religion?” (مَا دِينُكَ؟), and “Who is your Prophet?” (مَنْ نَبِيُّكَ؟). Those who answer with true faith will find their grave widened into a garden; those who falter will taste its punishment.\n\nIn conclusion, death is unavoidable and is itself a divinely decreed trial. What follows—grave questioning, Resurrection, and ultimate reckoning—will determine our eternal abode. May we all seek a “good ending,” cling to faith until the last breath, and live with constant awareness of the Hereafter, so that our graves become gardens of peace rather than pits of torment.	Death is a trial; after it, the soul is judged, and the final Resurrection determines eternity.	4	https://i.ibb.co/CKvMWVzr/mssn-abuad-yawm-al-qiyamah.jpg
\.


--
-- Data for Name: event; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.event (id, title, summary, content, date, "time", availability, image_url) FROM stdin;
1	Sisters Session - Empowered by Purpose	Inspiring discussion on Muslim women's strength through Islamic purpose	MSSN ABUAD MOSQUE	2025-03-29	16:25	Female members only	https://i.im.ge/2025/04/05/pENNXG.mssn-abuad-sisters-session.jpeg
2	Film Show - الثقة في التراضع 	Special Islamic movie screening on 2nd day of Eid 	Owolabi Hall	2025-03-31	16:30	All members	https://i.im.ge/2025/04/05/pENC7y.mssn-abuad-film-show.jpeg
3	Medical Outreach	Free health checks (Vision check, BP, BMI, Glucose) for community 	Front of Owolabi Hall	2025-04-04	14:00	All members	https://i.im.ge/2025/04/05/pENVDM.mssn-abuad-medical-outreach.jpeg
4	Brothers Session	Special Islamic discourse for brothers after Maghrib 	Campus Mosque Male Section	2025-04-04	19:10	Male members only	https://i.im.ge/2025/04/05/pEPMDm.mssn-abuad-brothers-session.jpeg
5	Fajr Fit Session	Morning workout (skipping, stretching, jogging, football, Tug-of-war etc.) 	Mosque to Planetarium	2025-04-05	06:20	Male members only	https://i.im.ge/2025/04/05/pEPQEr.mssn-abuad-fajr-fit.jpeg
6	Walimah 	Grand closing dinner for MSSN Week 	Bimbo Owolabi Hall	2025-04-05	16:30	All members	https://i.im.ge/2025/04/05/pEP7Sz.mssn-abuad-walimah.jpeg
7	MSSN TUTORIAL CLASSES	Tutorial for All 100 Level students offering - CHM 102, ACC 102, ELS	COLLEGE OF SCIENCES AUDITORIUM, SMS (A-114), LAW(ground floor)	2025-04-19	10:00	All members	https://i.ibb.co/btxLS6q/tutorial-Class.png
8	The Reality of Yawm Al-Qiyamah(Day of Resurrection) what happens after ddeath?	 	Owolabi Hall	2025-04-20	11:00	All members	https://i.ibb.co/jv33XBdB/Whats-App-Image-2025-04-17-at-21-12-06.jpg
\.


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.news (id, title, author, content, summary, image_url) FROM stdin;
\.

--
-- Data for Name: prayer_times; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.prayer_times (id, fajr_adhan, fajr_iqama, dhuhr_adhan, dhuhr_iqama, asr_adhan, asr_iqama, maghrib_adhan, maghrib_iqama, isha_adhan, isha_iqama, jumuah_adhan, jumuah_iqama) FROM stdin;
1	05:30	05:45	12:45	12:55	15:50	16:00	18:51	18:56	19:55	20:05	13:00	13:30
2	05:25	05:40	12:40	12:50	15:45	15:55	18:51	18:56	19:55	20:05	13:00	13:30
3	05:25	05:40	12:40	12:50	15:45	15:55	18:50	18:55	19:55	20:05	13:00	13:30
4	05:25	05:40	12:40	12:50	15:45	15:55	18:50	18:55	19:55	20:05	13:00	13:30
5	05:25	05:40	12:40	12:50	15:45	15:55	18:50	18:55	19:55	20:05	13:00	13:30
6	05:15	05:40	12:40	12:50	15:45	15:55	18:50	18:55	19:55	20:05	13:00	13:30
7	05:15	05:40	12:35	12:40	15:45	15:55	18:50	18:55	19:55	20:05	13:00	13:30
8	05:15	05:40	12:35	12:45	15:45	15:55	18:50	18:55	19:55	20:05	13:00	13:30
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.product (id, name, price, description, image_url) FROM stdin;
3	Ablution Kettle (2L)	800	Durable 2-liter kettle for Islamic ritual washing (ablution, toilet)	https://i.im.ge/2025/04/13/pvJlKm.mssn-abuad-kettle.webp
4	Holy Quran (Standard Size)	6000	The complete text of the Holy Quran. Standard, readable size.	https://i.im.ge/2025/04/13/pvJQpP.mssn-abuad-quran.webp
5	Men's Islamic Thobe	18000	Comfortable and stylish traditional Islamic long shirt for men	https://i.im.ge/2025/04/13/pvve7q.mssn-abuad-jalabiya.webp
7	Holy Quran (Standard Size)	5000	 The complete text of the Holy Quran. 	https://i.im.ge/2025/04/13/pvJo21.mushafs.webp
8	Embroidered Men's Thobe	20000	Elegant men's thobe with beautiful, intricate embroidery details	https://i.im.ge/2025/04/13/pvJXwf.mssn-abuad-jalabiyya.webp
9	Digital Finger Counter	700	Easy-to-use digital tally counter. Perfect for dhikr or counting	https://i.im.ge/2025/04/13/pvJMAp.mssn-abuad-counter.webp
10	Women's Undercap	1000	Comfortable undercap for hijab or as a simple head covering	https://i.im.ge/2025/04/13/pvnxRy.mssn-abuad-female-cap.webp
\.


--
-- Name: blog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.blog_id_seq', 8, true);


--
-- Name: event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.event_id_seq', 8, true);


--
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.news_id_seq', 1, true);


--
-- Name: prayer_times_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.prayer_times_id_seq', 8, true);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.product_id_seq', 10, true);


--
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- Name: blog blog_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blog
    ADD CONSTRAINT blog_pkey PRIMARY KEY (id);


--
-- Name: event event_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);


--
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- Name: prayer_times prayer_times_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.prayer_times
    ADD CONSTRAINT prayer_times_pkey PRIMARY KEY (id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO mssn_db_user;


--
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO mssn_db_user;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO mssn_db_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO mssn_db_user;


--
-- PostgreSQL database dump complete
--

