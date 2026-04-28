import { useState } from 'react';
import { ChevronDown, MapPin, Clock, Utensils, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const toggleDay = (day: string) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container py-4 px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-primary mb-1" style={{ fontFamily: 'Caveat, cursive' }}>
              Hyman's Travel Journal
            </h1>
            <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              巴黎 & 米科诺斯 · 4月30日 - 5月8日
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-8">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base text-muted-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ✨ 一场精心策划的旅行体验，融合艺术、文化与美食，跨越两个标志性的欧洲目的地。
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>时长</p>
                  <p className="text-lg text-primary" style={{ fontFamily: 'Caveat, cursive' }}>9天</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>城市</p>
                  <p className="text-lg text-primary" style={{ fontFamily: 'Caveat, cursive' }}>2个</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>体验</p>
                  <p className="text-lg text-primary" style={{ fontFamily: 'Caveat, cursive' }}>∞</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344760698/iTNCRBAbnhMXFfonuHK58r/paris-canal-illustration-oQp5Ed2mfyxbbifJ5bFmKF.webp"
                alt="Canal Saint-Martin"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Paris Section */}
      <section className="py-12 border-b border-border">
        <div className="container px-4">
          <div className="mb-8">
            <h2 className="text-4xl text-primary mb-2" style={{ fontFamily: 'Caveat, cursive' }}>🇫🇷 巴黎</h2>
            <p className="text-base text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              4月30日 - 5月3日 · 艺术、文化与浪漫
            </p>
          </div>

          {/* Paris Image */}
          <div className="mb-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344760698/iTNCRBAbnhMXFfonuHK58r/paris-marais-illustration-bW6bTFJwQ7VjLuVncLRxJb.webp"
              alt="Le Marais, Paris"
              className="rounded-xl shadow-lg w-full mb-4"
            />
          </div>

          {/* Days */}
          <div className="space-y-4">
            {parisItinerary.map((day) => (
              <DayCard
                key={day.id}
                day={day}
                isExpanded={expandedDay === day.id}
                onToggle={() => toggleDay(day.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mykonos Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="mb-8">
            <h2 className="text-4xl text-primary mb-2" style={{ fontFamily: 'Caveat, cursive' }}>🇬🇷 米科诺斯</h2>
            <p className="text-base text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              5月4日 - 5月8日 · 岛屿天堂与古代奇迹
            </p>
          </div>

          {/* Mykonos Images */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344760698/iTNCRBAbnhMXFfonuHK58r/mykonos-old-town-illustration-Jw8y9ZtTyAS5jUm2W7HGdL.webp"
              alt="Mykonos Old Town"
              className="rounded-xl shadow-lg w-full"
            />
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344760698/iTNCRBAbnhMXFfonuHK58r/mykonos-delos-illustration-bDavEAyPAYcZ6baHNbjPGW.webp"
              alt="Delos & Mykonos"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Days */}
          <div className="space-y-4">
            {mykonosItinerary.map((day) => (
              <DayCard
                key={day.id}
                day={day}
                isExpanded={expandedDay === day.id}
                onToggle={() => toggleDay(day.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Food & Wine Section */}
      <section className="py-12 bg-secondary/20 border-t border-border">
        <div className="container px-4">
          <h2 className="text-4xl text-primary mb-6" style={{ fontFamily: 'Caveat, cursive' }}>🍷 美食之旅</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344760698/iTNCRBAbnhMXFfonuHK58r/food-wine-illustration-6GLTsR4KSfFS9j3qqXNadG.webp"
              alt="French & Greek Flavors"
              className="rounded-xl shadow-lg w-full"
            />
            <div>
              <p className="text-base text-muted-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                这场旅行庆祝法国和希腊最精美的烹饪传统。从玛黑区的亲密小酒馆到爱琴海的隐秘酒馆，每一餐都讲述着一个故事。
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-primary">
                  <p className="text-lg text-primary" style={{ fontFamily: 'Caveat, cursive' }}>专业建议</p>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    一定要提前预订热门餐厅，尤其是周末和假日。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 border-t border-border">
        <div className="container px-4">
          <h2 className="text-4xl text-primary mb-8" style={{ fontFamily: 'Caveat, cursive' }}>💡 旅行贴士</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{tip.icon}</div>
                  <div>
                    <h3 className="text-xl text-primary mb-2" style={{ fontFamily: 'Caveat, cursive' }}>{tip.title}</h3>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 border-t border-border">
        <div className="container px-4 text-center">
          <p className="text-lg mb-2" style={{ fontFamily: 'Caveat, cursive' }}>祝您旅途愉快，Hyman！</p>
          <p className="text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>
            用❤️为难忘的回忆而创作
          </p>
        </div>
      </footer>
    </div>
  );
}

function DayCard({
  day,
  isExpanded,
  onToggle,
}: {
  day: any;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-secondary/10 transition-colors flex items-center justify-between"
      >
        <div className="flex-1">
          <h3 className="text-2xl text-primary mb-1" style={{ fontFamily: 'Caveat, cursive' }}>{day.title}</h3>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{day.date}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="border-t border-border px-6 py-6 space-y-6 bg-background/50">
          {day.activities.map((activity: any, idx: number) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{activity.icon}</div>
                <div>
                  <h4 className="text-lg text-primary" style={{ fontFamily: 'Caveat, cursive' }}>{activity.time}</h4>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{activity.title}</p>
                </div>
              </div>

              {activity.location && (
                <div className="flex items-start gap-3 ml-9">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{activity.location}</p>
                    {activity.address && (
                      <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {activity.address}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {activity.description && (
                <p className="text-sm text-muted-foreground ml-9" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {activity.description}
                </p>
              )}

              {activity.tips && (
                <div className="ml-9 bg-accent/10 rounded-lg p-3 border-l-2 border-accent">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{activity.tips}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const parisItinerary = [
  {
    id: 'day1',
    title: '第1天 · 抵达与苏醒',
    date: '4月30日（周四）',
    activities: [
      {
        icon: '☕',
        time: '下午',
        title: '圣马丁运河漫步',
        location: '圣马丁运河，第10区',
        address: '距酒店步行15分钟',
        description: '沿着风景如画的运河漫步，当地人在此聚集。找一家舒适的咖啡馆坐下，慢慢适应巴黎时间。',
        tips: '长途飞行后避免重度观光。让身体自然调整。',
      },
      {
        icon: '🍽️',
        time: '晚餐',
        title: 'Chez Jeannette',
        location: 'Chez Jeannette',
        address: '47 Rue du Faubourg Saint-Denis, 10th Arr.',
        description: '随意的小酒馆，艺术家和工人混杂。完美的时差恢复餐厅，无需正装。',
        tips: '无着装要求。价格便宜，品质稳定。',
      },
    ],
  },
  {
    id: 'day2',
    title: '第2天 · 艺术深度之旅',
    date: '5月1日（周五，劳动节）',
    activities: [
      {
        icon: '🎨',
        time: '上午',
        title: '毕加索博物馆',
        location: '玛黑区',
        address: '5 Rue de Thorigny, 75003 Paris',
        description: '超过5000件作品的历史豪宅。建筑本身就是杰作，比卢浮宫人少。',
        tips: '⚠️ 5月1日很多博物馆关闭，但毕加索博物馆通常开放。出发前确认。',
      },
      {
        icon: '🥘',
        time: '午餐',
        title: '红孩子市场',
        location: '红孩子市场',
        address: '39 Rue de Bretagne, 75003 Paris',
        description: '巴黎最古老的有顶市场（建于1628年）。热闹的美食广场，提供法国、日本、意大利和非洲菜。',
        tips: '无需预订。轻松氛围，完美品尝本地风味。',
      },
      {
        icon: '🏛️',
        time: '下午',
        title: '卡纳瓦莱博物馆',
        location: '玛黑区',
        address: '23 Rue de Sévigné, 75003 Paris',
        description: '专门讲述巴黎历史的博物馆。坐落在两座宏伟的私人豪宅，拥有宁静的庭院和精美的古典房间。',
        tips: '免费入场！远离人群的秘密避难所。',
      },
      {
        icon: '🍷',
        time: '晚餐',
        title: 'Bistrot des Tournelles',
        location: '孚日广场附近',
        address: '6 Rue des Tournelles, 75004 Paris',
        description: '复古魅力，老照片和手绘招牌。经典法式家常菜。仅供晚餐7-11点。',
        tips: '提前几天预订。巴黎最有怀旧气质的小酒馆之一。人均40-70欧。',
      },
    ],
  },
  {
    id: 'day3',
    title: '第3天 · 莫奈与浪漫',
    date: '5月2日（周六）',
    activities: [
      {
        icon: '🎨',
        time: '上午',
        title: '马莫坦莫奈博物馆',
        location: '第16区',
        address: '2 Rue Louis Boilly, 75016 Paris',
        description: '世界上最大的莫奈收藏（100+幅），包括《日出·印象》原作。地下椭圆展厅展示他晚期的睡莲。',
        tips: '周一闭馆。官网提前买票避免排队。比橘园更亲密。',
      },
      {
        icon: '🌳',
        time: '午餐',
        title: '布洛涅森林',
        location: '森林公园',
        address: '毗邻马莫坦博物馆',
        description: '巴黎最美的公园之一。找一家小餐厅悠闲午餐。',
        tips: '博物馆后完美的宁静下午。',
      },
      {
        icon: '💕',
        time: '下午',
        title: '浪漫主义生活博物馆',
        location: '蒙马特山脚',
        address: '16 Rue Chaptal, 75009 Paris',
        description: '画家Ary Scheffer的故居，肖邦、乔治·桑和德拉克洛瓦常聚于此。房间里充满画像、信件和纪念品。花园咖啡馆是巴黎最美的隐秘地点之一。',
        tips: '免费入场。浪漫时代优雅的庇护所。',
      },
      {
        icon: '🍷',
        time: '晚餐',
        title: 'Au Bourguignon du Marais',
        location: '玛黑区',
        address: '52 Rue François Miron, 75004 Paris',
        description: '现代干净的氛围，勃艮第经典菜肴。红酒炖牛肉是传奇菜肴。',
        tips: '一定不要错过San Marcellin奶酪甜点！',
      },
    ],
  },
  {
    id: 'day4',
    title: '第4天 · 慢晨光与离别',
    date: '5月3日（周日）',
    activities: [
      {
        icon: '🥐',
        time: '上午',
        title: '玛黑早午餐与购物',
        location: '布雷塔尼街区',
        address: '玛黑区，75003 Paris',
        description: '悠闲的早午餐和探索独立精品店。或租一辆Vélib自行车沿运河骑行。',
        tips: '玛黑有许多值得探索的设计师小店和画廊。',
      },
      {
        icon: '✈️',
        time: '下午/晚上',
        title: '转移到机场酒店',
        location: '戴高乐机场',
        address: '巴黎CDG',
        description: '两个优秀选择：Sheraton（直接连接2号航站楼）或Pullman（配有水疗和餐厅）。',
        tips: '在航班前放松。两家酒店都有优秀的设施。',
      },
    ],
  },
];

const mykonosItinerary = [
  {
    id: 'day5',
    title: '第5天 · 抵达Bill & Coo',
    date: '5月4日（周一）',
    activities: [
      {
        icon: '🏨',
        time: '下午',
        title: '入住与放松',
        location: 'Bill & Coo Mykonos',
        address: '梅加利阿莫斯海滩，距老城10分钟步行',
        description: '拥有卓越无边泳池和水疗的精品酒店。岛上最成熟的奢华度假村。放松并适应环境。',
        tips: '抵达日不要安排活动。享受酒店设施。',
      },
      {
        icon: '🍽️',
        time: '晚餐',
        title: 'Kastro\'s（小威尼斯）',
        location: '米科诺斯老城',
        address: '秘密小巷，拥有最佳海景',
        description: '隐秘宝石，全景爱琴海景观和日落景致。完美的浪漫晚餐地点。',
        tips: '日落前一小时到达。预订能看到风车的位置。',
      },
    ],
  },
  {
    id: 'day6',
    title: '第6天 · 德洛斯岛与艺术漫步',
    date: '5月5日（周二）',
    activities: [
      {
        icon: '⛴️',
        time: '上午',
        title: '渡轮前往德洛斯岛',
        location: '老港口，米科诺斯',
        address: '上午9:00或10:00出发',
        description: '联合国世界文化遗产。神话中阿波罗的诞生地。爱琴海最重要的考古遗址。渡轮单程30分钟。',
        tips: '🌟 强烈推荐：预订导览游（€79包含渡轮+讲解）。没有导游你只看到石头；有导游你看到2000年前的文明。',
      },
      {
        icon: '🐟',
        time: '午餐',
        title: 'Kounelas',
        location: '老港口',
        address: '米科诺斯港口附近',
        description: '自1960年代经营的家族鱼餐馆。新鲜烤鱼、炸鱿鱼、章鱼、希腊沙拉。简单的桌椅和港口景观。',
        tips: '人均€25-40。地道本地体验。让食材自己说话。',
      },
      {
        icon: '🎨',
        time: '下午',
        title: '老城艺术漫步',
        location: '米科诺斯老城',
        address: 'Matogianni街及周围小巷',
        description: '蜿蜒的街道隐藏着艺术画廊、亚麻精品店和手工珠宝店。参观Minima Gallery和Rarity Gallery了解当代艺术。',
        tips: '在狭窄的街道中迷路。最好的发现来自漫步。',
      },
      {
        icon: '🌅',
        time: '日落',
        title: '180°日落酒吧',
        location: '山顶俯瞰城镇',
        address: '山顶观景点',
        description: '全景俯瞰老城、风车和港口。游客比小威尼斯少。',
        tips: '轻松氛围。完美观看太阳沉入爱琴海。',
      },
    ],
  },
  {
    id: 'day7',
    title: '第7天 · 酒店转移与Ano Mera',
    date: '5月6日（周三）',
    activities: [
      {
        icon: '☀️',
        time: '上午',
        title: 'Bill & Coo的悠闲早餐',
        location: 'Bill & Coo Mykonos',
        address: '泳池边',
        description: '享受在第一家酒店的最后一个上午。',
        tips: '品味无边泳池的景观。',
      },
      {
        icon: '🏨',
        time: '中午',
        title: '转移到Kalesma Mykonos',
        location: 'Ornos区',
        address: '由著名设计师Vangelis Bonios设计的当代基克拉迪风格',
        description: '设计前沿的奢华。每个别墅都有自己的泳池。建筑本身就是当代艺术。',
        tips: '下午探索新别墅和主泳池。',
      },
      {
        icon: '🍽️',
        time: '晚餐',
        title: 'Bistrot de Nicolas',
        location: 'Ano Mera村',
        address: '距Kalesma约15分钟车程',
        description: '迷人的法式地中海小酒馆。创意精致的菜肴，使用最新鲜食材。出色的葡萄酒单。主要服务本地人。',
        tips: '⭐ 岛上最被低估的餐厅之一。强烈推荐。',
      },
    ],
  },
  {
    id: 'day8',
    title: '第8天 · 野生风景与隐秘海滩',
    date: '5月7日（周四）',
    activities: [
      {
        icon: '☕',
        time: '上午',
        title: 'Kalesma早餐与水疗',
        location: 'Kalesma Mykonos',
        address: 'Ornos',
        description: '享受水疗或瑜伽课程。',
        tips: '旅行中最放松的一天。',
      },
      {
        icon: '🍽️',
        time: '午餐',
        title: 'Fokos Taverna',
        location: '米科诺斯北部',
        address: '偏远海滩，土路尽头',
        description: '感觉像1970年代的米科诺斯。柽柳树荫下的石头建筑。简短菜单随季节和当日捕获变化。蜂蜜淋浇的saganaki奶酪是必点。氛围：零匆忙，海浪声而非音箱。',
        tips: '两人€30-50。最地道、最本地的体验。海滩保持原始未开发。',
      },
      {
        icon: '🌊',
        time: '下午',
        title: 'Fokos海滩漫步',
        location: 'Fokos海滩',
        address: '米科诺斯北部',
        description: '捡贝壳，看海，冥想。',
        tips: '纯粹放松。',
      },
      {
        icon: '🍷',
        time: '晚餐',
        title: 'Pere Pere或Kalesma的Pere',
        location: '米科诺斯城镇或Kalesma',
        address: '自然葡萄酒小酒馆或酒店餐厅',
        description: '基克拉迪食材，创意但不浮夸。主厨Nikos Roussos的菜肴是岛屿真正的代表。',
        tips: '卓越的品质声誉。',
      },
    ],
  },
  {
    id: 'day9',
    title: '第9天 · 从容离岛',
    date: '5月8日（周五）',
    activities: [
      {
        icon: '🥐',
        time: '上午',
        title: '最后的早餐与泳池时光',
        location: 'Kalesma Mykonos',
        address: 'Ornos',
        description: '品味最后的时刻。',
        tips: '花时间吸收美景。',
      },
      {
        icon: '⛪',
        time: '可选',
        title: 'Panagia Tourliani修道院',
        location: 'Ano Mera',
        address: 'Ano Mera村',
        description: '18世纪修道院，拥有精美的拜占庭木制圣像屏。岛上最重要的宗教艺术品。',
        tips: '如果午餐前有时间。',
      },
      {
        icon: '🐟',
        time: '午餐',
        title: 'Kiki\'s Tavern（可选）',
        location: 'Agios Sostis海滩',
        address: '传奇本地地点',
        description: '无电、无预订系统、仅用炭火烤。预期等位。仅供午餐。极度本地。',
        tips: '🌟 岛屿传奇。最地道的体验。',
      },
      {
        icon: '✈️',
        time: '下午',
        title: '前往机场',
        location: '米科诺斯机场',
        address: 'JMY',
        description: '带着难忘的回忆飞回家。',
        tips: '祝您旅途愉快！',
      },
    ],
  },
];

const tips = [
  {
    icon: '📅',
    title: '预订策略',
    content: '提前几天预订热门餐厅，尤其是周末和假日。博物馆通常提供在线预订以跳过队伍。',
  },
  {
    icon: '🚶',
    title: '步行探索',
    content: '最好的发现来自步行。在狭窄的街道中迷路，发现隐秘的画廊，与当地人交流。',
  },
  {
    icon: '🍽️',
    title: '在本地人吃饭的地方吃饭',
    content: '避免游客众多的区域。寻找家族经营的酒馆和街区小酒馆，当地人聚集的地方品尝地道风味。',
  },
  {
    icon: '⏰',
    title: '调整节奏',
    content: '不要匆匆从一个景点赶到另一个。留出时间在咖啡馆坐着，观察人群，吸收氛围。质量优于数量。',
  },
  {
    icon: '🗺️',
    title: '本地交通',
    content: '在巴黎使用地铁，在米科诺斯使用出租车/酒店接驳。巴黎的Vélib自行车非常适合沿运河的悠闲骑行。',
  },
  {
    icon: '📸',
    title: '拍照与体验',
    content: '拍照，但也要放下手机。最好的回忆来自完全沉浸在当下的时刻。',
  },
];
