import {
  AreaChartOutlined, BarChartOutlined, CheckCircleOutlined, DatabaseOutlined,
  ExperimentOutlined, SafetyCertificateOutlined, TeamOutlined, TrophyOutlined,
} from '@ant-design/icons'
import { CountUp, MarketingReveal } from '../components/MarketingReveal'
import { CertificateStrip, DashboardMockup } from '../components/MarketingVisuals'
import './MarketingShared.css'
import './ProjectResultsPage.css'
import heroImage from '../assets/pure-scenes/greenhouse-wide.png'
import heroImage1920 from '../assets/pure-scenes/greenhouse-wide-1920.webp'
import heroImage2560 from '../assets/pure-scenes/greenhouse-wide-2560.webp'
import heroImage3360 from '../assets/pure-scenes/greenhouse-wide-3360.webp'
import sensorImage from '../assets/pure-scenes/sensor-clean.png'
import diseaseImage from '../assets/pure-scenes/disease-gallery.png'
import knowledgeImage from '../assets/pure-scenes/greenhouse-card.png'
import applicationImage from '../assets/pure-scenes/greenhouse-wide.png'
import farmerImage from '../assets/results-design/farmer-portrait.png'
import footerImage from '../assets/pure-scenes/greenhouse-wide.png'

const resultHeroFeatures = [
  [DatabaseOutlined, '技术有创新', '形成自主成果'],
  [CheckCircleOutlined, '应用可落地', '解决真实问题'],
  [BarChartOutlined, '效果可量化', '提升种植效益'],
  [ExperimentOutlined, '价值可持续', '助力绿色农业'],
] as const

const heroMetrics = [
  ['示范基地',12,'个'],['覆盖面积',850,'亩'],['累计服务种植户',320,'+'],['平均增产',18.6,'%']
] as const
const overview = [['6','项','核心技术成果'],['12','个','示范应用基地'],['320','+','服务种植户'],['18.6','%','平均增产效果'],['25','%','平均成本降低'],['3','篇','相关论文发表']] as const
const future = [['拓展更多作物','从蔬菜向果树、花卉等延伸'],['扩大示范范围','覆盖更多地区和规模化基地'],['深化AI能力','提升预测与决策精度'],['打造开放生态','与更多伙伴共建智慧农业']] as const

export default function ProjectResultsPage(){
  return <div className="marketing-page results-page">
    <section className="marketing-hero reference-hero results-hero">
      <div className="marketing-hero-copy">
        <MarketingReveal><p className="marketing-kicker">项目成果</p><h1>从研发到落地<br/>让智慧农业<em>看得见成果</em></h1><p className="marketing-hero-lead">棚智未来坚持以实际需求为导向，持续推进技术研发与应用落地，在算法模型、平台系统、示范应用和社会效益等方面取得了一系列可量化、可验证的成果。</p></MarketingReveal>
        <div className="marketing-icon-strip">{resultHeroFeatures.map(([Icon,title,text],i)=><MarketingReveal className="marketing-icon-item" delay={90+i*85} key={title}><Icon/><span><strong>{title}</strong>{text}</span></MarketingReveal>)}</div>
      </div>
      <div className="marketing-hero-media results-hero-media"><picture><source type="image/webp" srcSet={`${heroImage1920} 1920w, ${heroImage2560} 2560w, ${heroImage3360} 3360w`} sizes="100vw"/><img loading="eager" decoding="async" fetchPriority="high" src={heroImage} alt="项目成果温室场景"/></picture></div>
      <div className="results-hero-metrics">{heroMetrics.map(([label,value,suffix],i)=><MarketingReveal className="results-metric" delay={180+i*90} key={label}><small>{label}</small><strong><CountUp value={value}/>{suffix}</strong><BarChartOutlined/></MarketingReveal>)}</div>
      <span className="results-scribble">用成果说话<br/>让科技真正改变农业</span>
    </section>

    <MarketingReveal className="marketing-section results-section-block">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">01</span><div><h2>项目成果总览 · 多维成果，全面推进</h2><p>从技术研发、平台系统、示范应用到社会效益，项目已在多个维度取得阶段性成果，并在实际生产中验证了可行性与先进性。</p></div></div>
      <div className="results-overview-layout"><div className="overview-grid">{overview.map(([value,suffix,label])=><article className="soft-card" key={label}><strong>{value}<small>{suffix}</small></strong><span>{label}</span></article>)}</div><div className="results-dashboard-visual"><DashboardMockup compact/></div></div>
      <div className="hand-note results-note">每一份数据，都来自真实的种植现场。</div>
    </MarketingReveal>

    <MarketingReveal className="marketing-section results-section-block">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">02</span><div><h2>技术成果 · 自主研发，持续创新</h2><p>围绕环境感知、病害识别、智能决策和农业知识图谱等关键方向，形成了一系列可落地的技术成果。</p></div></div>
      <div className="results-tech-layout"><div className="results-tech-grid"><article><img loading="lazy" decoding="async" src={sensorImage} alt="多源环境感知技术"/><b>多源环境感知技术</b><span>融合多种传感器数据，实现环境精准监测</span></article><article><img loading="lazy" decoding="async" src={diseaseImage} alt="作物病害识别算法"/><b>作物病害识别算法</b><span>基于深度学习的图像识别，支持多种常见病害识别</span></article><article className="results-dashboard-card"><div className="results-mini-dashboard"><DashboardMockup compact/></div><b>智能决策模型</b><span>融合生长规律与历史数据，生成个性化管理建议</span></article><article><img loading="lazy" decoding="async" src={knowledgeImage} alt="农业知识图谱"/><b>农业知识图谱</b><span>整合种植经验与专家知识，构建可持续迭代体系</span></article></div><aside className="soft-card technical-index"><h3>技术指标</h3><p><span>病害识别准确率</span><b>92%+</b></p><p><span>环境数据采集稳定性</span><b>99%+</b></p><p><span>智能建议采纳率</span><b>75%+</b></p><p><span>系统响应时间</span><b>&lt; 2s</b></p><p><span>支持作物种类</span><b>10+</b></p><p><span>模型持续迭代</span><b>持续优化</b></p></aside></div>
    </MarketingReveal>

    <MarketingReveal className="marketing-section results-section-block">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">03</span><div><h2>应用成效 · 真实落地，看得见的改变</h2><p>已在多个地区的设施农业基地开展示范应用，帮助种植户提升产量、降低成本、减少病害、提高管理效率。</p></div></div>
      <div className="results-impact-layout"><div className="impact-photo"><img loading="lazy" decoding="async" src={applicationImage} alt="示范基地温室"/><span>山东 · 寿光<br/><small>示范基地实景</small></span></div><div className="impact-metrics"><div><AreaChartOutlined/><span>增产<strong>18.6%</strong></span></div><div><BarChartOutlined/><span>成本降低<strong>25%</strong></span></div><div><SafetyCertificateOutlined/><span>病害发生率降低<strong>32%</strong></span></div><div><TeamOutlined/><span>管理效率提升<strong>40%</strong></span></div></div><aside className="soft-card farmer-quote"><h3>种植户的反馈</h3><blockquote>“以前全靠经验种，现在有了这个平台，棚里的情况一目了然，出现问题也能及时发现，产量明显提高了。”</blockquote><div><span>— 山东寿光　王师傅</span><img loading="lazy" decoding="async" src={farmerImage} alt="种植户头像"/></div></aside></div>
    </MarketingReveal>

    <MarketingReveal className="marketing-section results-section-block">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">04</span><div><h2>荣誉与认可 · 专业背书，值得信赖</h2><p>项目在各类竞赛、评选和媒体报道中获得认可，成果得到行业专家和用户的肯定。</p></div></div>
      <div className="honors-layout"><div><CertificateStrip/></div><aside className="soft-card expert-quote"><TrophyOutlined/><p>“棚智未来在设施农业智能化应用方面具有良好的创新性和推广价值，为智慧农业发展提供了有益探索。”</p><span>— 行业专家评审意见</span></aside></div>
    </MarketingReveal>

    <MarketingReveal className="marketing-section results-section-block future-section">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">05</span><div><h2>未来展望 · 持续迭代，创造更大价值</h2><p>我们将继续深耕设施农业场景，不断优化技术和产品，扩大应用范围，让更多大棚用上更聪明、更好用的智能管理平台。</p></div></div>
      <div className="future-grid">{future.map(([title,text],i)=><article key={title}><span>0{i+1}</span><b>{title}</b><p>{text}</p></article>)}</div><div className="hand-note results-future-note">扎根农业实际，让更多大棚受益。</div>
    </MarketingReveal>

    <MarketingReveal className="marketing-footer-banner results-footer"><img loading="lazy" decoding="async" src={footerImage} alt="农业温室全景"/><div><h2>科技，让农业更美好</h2><span>从一座大棚，到一个更可持续的未来</span></div></MarketingReveal>
  </div>
}
