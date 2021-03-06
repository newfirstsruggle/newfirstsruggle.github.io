var tooltipData = [
    {name: '山西', value: '山西是具有光荣传统的革命老区，也是红色文化资源的重要聚集地，山西深厚的红色文化土壤，为我们留下了众多革命遗迹，通过学习红色知识对于引导人民群众，特别是广大青少年树立正确的世界观、人生观、价值观，对于进一步弘扬爱国主义和革命英雄主义精神有重要意义。'},
    {name: '吉林', value: '十四年抗日战争，无数东北抗日联军先烈抛头颅洒热血，与日寇进行了艰苦卓绝的斗争，白山松水间留下了无数他们战斗过的痕迹。 三年解放战争，四保临江、四战四平这一系列战役中，发生了无数可歌可泣的故事，留下了至今仍让人肃然起敬的战斗精神和革命精神，这一切，将永远成为我们宝贵的精神财富。'},
    {name: '黑龙江', value: '黑龙江地处东北边疆，随着中东铁路的修建，近代产业工人队伍不断发展壮大。俄国十月革命给中国送来了马克思列宁主义，五四运动进一步推动了革命思想的传播及其与工人运动的结合。1921年中国共产党成立前后，一批先进知识分子来到黑龙江，积极开展革命宣传和建党活动。1923年10月，东北第一个党组织中共哈尔滨组成立，在龙江大地点燃了人民革命运动的星星之火。'},
    {name: '陕西', value: '“红军不怕远征难，万水千山只等闲” 红军先辈们以敢为天下先的创造精神， 以不畏艰险、不怕失败的拼搏意识， 踏上了那条布满荆棘的长征路。'},
    {name: '河北', value: '河北有着光荣的革命传统和革命历史。大革命时期，河北原野风雷激荡，革命斗争波澜壮阔。一起走进河北.....'},
    {name: '辽宁', value: '太阳出来东方红， 雨后彩霞满天红。共产党建立中国红，中国红不忘时代的英雄！共和国长子带着历史的印记缓缓走来.....'},
    {name: '甘肃', value: '红色甘肃有可歌可泣的革命斗争史，有众多宝贵的革命遗迹，红色甘肃，生生不息......'},
    {name: '青海', value: '1934年10月至1936年10月，中国工农红军第一、第二、第四方面军主力在极端艰苦的条件下先后实行了战略大转移，完成了两万五千里长征。在青海，红军也留下了他们铿锵的足迹。'},
    {name: '山东', value: '弘扬沂蒙精神、传承红色基因、发展红色故事.....'},
    {name: '福建', value: '福建省被列入了以韶山、井冈山和瑞金为中心的“湘赣闽红色旅游区”，红色旅游走一走、看一看伟大的革命先辈曾经生活工作过的地方，也是一种缅怀。'},
    {name: '浙江', value: '微风拂过，带来南湖的气息与历史的记忆，那年1921......'},
    {name: '河南', value: '在这个红色的季节里，进行一场关于红色记忆的旅行，感受过去的峥嵘岁月，才是对当下生活的来之不易，报以最大的敬意。'},
    {name: '湖北', value: '这里是辛亥革命发生地，革命先烈曾在此建立湘鄂赣革命根据地，在这里曾留下无数的红色记忆与红色故事，值得我们仔细探寻......'},
    {name: '湖南', value: '湖南被誉为“革命摇篮，伟人故里”，红色旅游资源极为丰富。既有自鸦片战争以来，为了国家昌盛和民族复兴抛头颅、洒热血的大批仁人志士留下的艰难求索足迹，更有中国共产党早期领导人和先烈革命活动、重大历史事件遗址遗迹。'},
    {name: '江西', value: '江西是个好地方，这里不仅名山大川遍布，历史古迹众多，而且还是著名的革命老区、红色沃土。 这片土地上承载着太多的红色记忆，山水中凝结着太深的革命传奇，可谓县县有红色故事，市市有红色景区，全省犹如一个没有围墙的革命历史博物馆。'},
    {name: '江苏', value: '追忆革命岁月，翻阅历史画卷 传承红色精神，体验红色旅游魅力。走进江苏一起体验那个红色年代的点点滴滴。'},
    {name: '新疆', value: '在这里，记录着辉煌的历史，承载着先烈的精神，诉说着感人的故事，传承着红色的基因，新疆是个好地方......'},
    {name: '西藏', value: '西藏是中国的领土，绝不容许任何外国侵略；西藏人民是中国人民的一个不可分离的组成部分，绝不容许任何外国分割。这是中国人民、中国共产党和中国人民解放军的坚定不移的方针......'},
    {name: '宁夏', value: '宁夏，是一片有着光荣传统的红色土地，长征给宁夏留下了弥足珍贵的红色记忆和历史遗产。讲不完的红色故事，道不尽的红色情怀......'},
    {name: '贵州', value: '贵州不仅是红色文化资源富集的省份，还是中央红军长征途中活动时间最长、活动区域最广、发生重大事件最多的省份之一。红军长征在贵州经过的61个县，涉及全省9个市(州、地)，占全省88个县(市、区)的三分之二以上。当年红军长征路上一朵朵鲜红的烙印，深深镶嵌于黔山秀水之间，留给贵州人民难忘的红色记忆，并在新的历史条件下，联姻旅游，谱写着一支激荡奔流的进行曲。'},
    {name: '四川', value: '“四川是一片充满红色印记的革命热土”。这句话，让人首先想到的当是红军长征。如果把长征比作一幅波澜壮阔的历史画卷，展开这幅画卷,人们就可以发现，爬雪山、过草地、强渡大度江、飞夺泸定桥、懋功会师……红军最艰难的路程，最激烈的战斗，多在四川。可见，四川对红军长征胜利贡献之大，对中国革命贡献之大。 也可见，四川是一片充满红色印记的革命热土，名不虚传，值得每个四川人为之骄傲。'},
    {name: '安徽', value: '安徽曾是重要的革命根据地，为建立新中国做出了巨大牺牲和重要贡献。安徽的红色文化厚重。在安徽这片红色沃土上，诞生过中国共产党主要创始人，涌现出一大批革命先驱、各个方面的创建者和领导者，为革命输送过无数英雄儿女，还进行了多次起义。  通过这些人与事，他们在安徽留下了丰厚的历史人文资源，描绘出了安徽的革命色彩。'},
    {name: '内蒙古', value: '内蒙古在中国革命各个时期留下了许多珍贵的红色史料。在抗日战争时期,内蒙古回族为大青山抗日根据地的坚持和巩固作出了特殊的贡献。20世纪三四十年代活跃在大青山南麓蒙绥大地商界的马老红和他的"三合兴"杂货铺,在援助八路军抗击日寇和敌伪势力的殊死斗争中,立下了不朽的功勋。解放战争中,在中国共产党的领导下,1946年5月在赤峰经棚地区组建的回民连,这些多数都是经棚镇贫苦的回族青年,他们以自己的无畏和牺牲,为全国的解放和维护人民生命安全建立了不可磨灭的功绩,等等。这些红色记忆,对今天的人们来说,是一部十分宝贵的革命传统教育教材。回顾内蒙古回族革命前辈亲历的卓越的革命实践及其红色史料,使我们备感今天幸福生活来之不易,使我们对回族革命前辈的功绩倍加景仰。'},
    {name: '上海', value: '上海是当时中国思想界最为活跃的开放之地，也是中国新思想传播的高地。1919年五四运动以后，更由于陈独秀南下上海。更使上海成为中国共产党筹备、成立的宣传、政治、思想、组织、人员集聚的高地。上海的城市性格接纳了马克思主义的启蒙的功能，上海的海派文化也接受了红色基因的植入，中国共产党在上海筹备、成立，中国的红色文化从此开始。随着中国共产党的成立，上海作为红色文化源头的“水塔效应”不断体现。从此，红色文化之流，随着中国革命进程，浩浩汤汤，跌宕起伏，气象万千，流向全国，不断推进。'},
    {name: '广东', value: '广东，简称“粤”，中华人民共和国省级行政区，省会广州。世界上仅有的两个红场，一个是位于俄罗斯的莫斯科红场，另一个则是坐落在广东省汕尾市海丰县境内的红宫红场旧址。这里，是被毛泽东同志称赞为“农民运动大王”、优秀中国共产党党员彭湃的故乡，也是我国第一个红色苏维埃政权的诞生地。百年风雷激荡的红色记忆和革命精神，如今仍在这片红色热土上代代相传，历久弥新。而见证了诸多革命历史的红宫红场旧址，已经成为了“不忘初心、牢记使命”的红色文化宣传教育基地、党史革命史研究基地和重要的红色旅游目的地。'},
    {name: '澳门', value: '无'},
    {name: '北京', value: '北京市，简称“京”，古称燕京、北平，是中华人民共和国的首都、直辖市、国家中心城市、超大城市，国务院批复确定的中国政治中心、文化中心、国际交往中心、科技创新中心 。北京同样是革命老区，境内存有大量的革命旧址。这里有天安门广场，人民英雄纪念碑，中国人民抗日战争纪念馆等一系列刻有革命印记的红色景点。革命旧址不仅是极其珍贵的历史文化遗产，也是一笔极其难得的精神财富。这一切都铭记着中华儿女英勇奋斗的光辉历程。'},
    {name: '云南', value: '印象中的云南，是四季如春，是彩云之南，是苍山洱海，是多情丽江……事实上，云南的美不止于此，云南还是纯洁高冷的玉龙雪山，还是孕育生机的热带雨林，还是奔腾如雷的大江大河，还是祥和静谧的高原湖泊，还是26个民族的世居家园。抗日战争期间，云南是大后方，亦是战事前沿、战略命脉，为赢得民族的未来贡献颇多。铭记历史，勇闯未来，大美七彩云南。'},
    {name: '海南', value: '海南有着丰富的优秀历史文化和红色文化资源，海南在几千年的历史发展进程中，世居海南的黎、苗、回、汉等各族人民创造了独具魅力的民族民俗文化和多姿多彩的文学艺术。拥有以23年红旗不倒的琼崖革命为代表的红色文化，以张云逸大将、周士第上将为代表的将军文化、以海南四大名菜为代表的海南饮食文化，以及华侨文化、海洋文化、宗教文化等等。这些海南传统文化已经催生出了丰厚的理论研究成果和丰富的文学艺术作品，是海南文艺创作和文旅融合的宝贵资源，同时对挖掘、保护、传承海南优秀传统文化和红色文化发挥了非常重要的作用。'},
    {name: '广西', value: '在广西这片土地上 还有更多的英雄事迹挥洒于此 他们用鲜血换来现在的和平与安宁 让我们舒适生活 建党100周年 让我们一起重游红色文化 追寻先烈足迹 传承永不磨灭的红色记忆'},
    {name: '天津', value: '红色的历史文化给天津这座历史名城留下了不朽的红色精神，一代代天津人在红色精神的熏陶下成长，在改革开放的大形势下结合改革的时代精神和经典的红色精神，努力创造着天津一个个改革新成就，不断刷新着天津的新面貌。天津人以红色革命精神为积淀，以改革开放的时代精神为指导，努力发扬和传承红色精神与改革精神并在此基础上，结合二者，结出新时代下新的创新精神。'},
    {name: '重庆', value: '重庆是一座英雄的山城，是红色文化的渊源之地，在一个红红火火的山城背后，是一段段奋斗的红色文化历史。月光温柔地缠绕着这座城，闪烁着永不磨灭的红色记忆，忆往昔峥嵘岁月，多少个黑夜中怒吼的声音，凝结成刺穿黑暗的利剑，披荆斩棘，护佑家园，浸染着一代代革命人拼搏奋进，激情奋起的五四岁月，是社会各界抵制侵略的决心，重庆谈判的艰难协定，蕴含着共产党向往和平的决心，将军气势如虹宣改的解放碑，是重庆红色文化不断的源远流长，绵长绽放着永恒的伟大力量。'},
    {name: '香港', value: '20载劈波斩浪，20载春华秋实。“一国两制”在香港的伟大实践，演绎出精彩的时代画卷，将“这一刻”永远镌刻在中华民族伟大复兴的丰碑上。正如习近平主席在庆祝大会讲话中所指出的：“香港回归祖国是彪炳中华民族史册的千秋功业，香港从此走上同祖国共同发展、永不分离的宽广道路。‘一国两制’在香港的实践取得了举世公认的成功。”“回到祖国怀抱的香港已经融入中华民族伟大复兴的壮阔征程。”'},
    {name: '台湾', value: '无'}
]