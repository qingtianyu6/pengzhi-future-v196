import {
  BarChartOutlined, BulbOutlined, CheckCircleOutlined, CloudOutlined, DatabaseOutlined,
  DeploymentUnitOutlined, ExperimentOutlined, FileTextOutlined, PictureOutlined,
  RobotOutlined, SyncOutlined, ThunderboltOutlined,
} from '@ant-design/icons'
import { MarketingReveal } from '../components/MarketingReveal'
import { MiniLayerStack, TrendMiniChart, DataCard } from '../components/MarketingVisuals'
import './MarketingShared.css'
import './TechHighlightsPage.css'
import heroImage from '../assets/pure-scenes/sensor-clean.png'
import heroImage1920 from '../assets/pure-scenes/sensor-clean-1920.webp'
import heroImage2560 from '../assets/pure-scenes/sensor-clean-2560.webp'
import heroImage3360 from '../assets/pure-scenes/sensor-clean-3360.webp'
import diseaseImage from '../assets/highlights-design/disease-gallery.png'
import knowledgeImage from '../assets/pure-scenes/greenhouse-card.png'
import edgeImage from '../assets/pure-scenes/greenhouse-wide.png'
import footerImage from '../assets/pure-scenes/greenhouse-wide.png'

const heroFeatures = [
  [DatabaseOutlined, '数据更全面', '多源融合感知'],
  [RobotOutlined, '识别更准确', 'AI 智能算法'],
  [FileTextOutlined, '建议更科学', '农业知识融合'],
  [DeploymentUnitOutlined, '落地更友好', '面向真实场景'],
] as const

const dataSources = [
  [ExperimentOutlined, '环境数据', '温度、湿度、光照\nCO₂、土壤等'],
  [PictureOutlined, '图像数据', '作物叶片、果实\n生长状态图像'],
  [FileTextOutlined, '农事数据', '浇水、施肥、打药\n巡棚等记录'],
  [CloudOutlined, '气象数据', '温度、降雨、光照\n风速等外部信息'],
] as const

const edgeFeatures = [
  [ThunderboltOutlined, '边缘计算', '本地实时处理\n响应更快'],
  [DeploymentUnitOutlined, '多场景适配', '单棚 / 连栋棚\n灵活部署'],
  [BulbOutlined, '低功耗设备', '太阳能供电\n稳定运行'],
  [SyncOutlined, '快速接入', '即插即用\n易于维护'],
] as const

export default function TechHighlightsPage() {
  return <div className="marketing-page tech-page">
    <section className="marketing-hero reference-hero tech-hero">
      <div className="marketing-hero-copy">
        <MarketingReveal><p className="marketing-kicker">我们的技术</p><h1>让大棚<em>更聪明</em><br/>让管理<em>更简单</em></h1><p className="marketing-hero-lead">棚智未来基于多源数据感知、智能算法分析和农业知识融合，构建面向设施农业的智能检测与管理技术体系，让数据真正转化为可执行的生产建议。</p></MarketingReveal>
        <div className="marketing-icon-strip">{heroFeatures.map(([Icon,title,text],i)=><MarketingReveal className="marketing-icon-item" delay={100+i*80} key={title}><Icon/><span><strong>{title}</strong>{text}</span></MarketingReveal>)}</div>
      </div>
      <div className="marketing-hero-media tech-hero-media tech-hero-pure"><picture><source type="image/webp" srcSet={`${heroImage1920} 1920w, ${heroImage2560} 2560w, ${heroImage3360} 3360w`} sizes="100vw"/><img loading="eager" decoding="async" fetchPriority="high" src={heroImage} alt="高清农业环境传感器"/></picture><div className="tech-hero-panel"><DataCard label="多源数据" value="4" unit="类" className="tech-data-card one"/><DataCard label="识别置信度" value="95" unit="%" className="tech-data-card two"/><div className="tech-hero-stack"><MiniLayerStack/></div></div></div>
      <span className="tech-scribble">用技术<br/>让每一株作物被更好地照顾</span>
    </section>

    <MarketingReveal className="marketing-section tech-section">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">01</span><div><h2>多源数据融合技术 · 让监测更全面</h2><p>融合环境、图像、土壤、气象和农事等多源数据，构建统一的数据底座，实现温室环境与作物生长状态的全方位感知。</p></div></div>
      <div className="tech-data-layout"><div className="tech-source-grid">{dataSources.map(([Icon,title,text])=><article className="soft-card" key={title}><Icon/><b>{title}</b><p>{text.split('\n').map((x,j)=><span key={j}>{x}</span>)}</p></article>)}</div><div className="tech-layer-visual"><MiniLayerStack/><ul><li><b>应用层</b><span>智能决策与管理</span></li><li><b>模型层</b><span>算法分析与知识融合</span></li><li><b>数据层</b><span>多源数据采集与融合</span></li><li><b>感知层</b><span>设备采集与边缘处理</span></li></ul></div></div>
      <div className="hand-note tech-note">把分散的数据，变成有价值的信息。</div>
    </MarketingReveal>

    <MarketingReveal className="marketing-section tech-section disease-tech">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">02</span><div><h2>作物病害智能识别技术 · 让识别更准确</h2><p>基于计算机视觉与深度学习算法，识别多种常见作物病害，提供置信度与防治建议，帮助种植户及早发现、及时处理。</p></div></div>
      <div className="tech-disease-layout"><div><img loading="lazy" decoding="async" className="tech-disease-strip" src={diseaseImage} alt="常见作物病害识别示例"/><div className="tech-disease-labels"><span>健康叶片</span><span>霜霉病</span><span>白粉病</span><span>灰霉病</span></div></div><article className="soft-card tech-result-card"><h3>识别结果</h3><div><div className="leaf-thumb"/><section><b>番茄灰霉病</b><em>高风险</em><p>置信度：<strong>92%</strong></p><small>防治建议：及时清除病叶，加强通风降湿，避免叶面长期潮湿。</small></section></div></article></div>
      <div className="hand-note tech-note right">看得更清，才能防得更早。</div>
    </MarketingReveal>

    <MarketingReveal className="marketing-section tech-section knowledge-tech">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">03</span><div><h2>农业知识图谱与决策技术 · 让建议更科学</h2><p>构建作物生长规律与农业知识图谱，结合实时数据与历史经验，生成可执行的管理建议，辅助种植人员科学决策。</p></div></div>
      <div className="knowledge-layout"><div className="knowledge-graph"><div className="graph-center">农业<br/>知识图谱</div>{['作物生长规律','专家种植经验','病害机理知识','农事管理规范','环境调控经验','气象影响模型'].map((x,i)=><span className={`kg kg${i+1}`} key={x}>{x}</span>)}</div><article className="soft-card decision-list"><h3><FileTextOutlined/> 智能决策建议</h3><p><b>当前棚内湿度偏高</b><span>建议加强通风，适当延长通风时间</span></p><p><b>未来24小时有降雨</b><span>建议提前检查排水设施</span></p><p><b>土壤湿度偏低</b><span>建议今日傍晚适量灌溉</span></p></article><img loading="lazy" decoding="async" className="knowledge-photo" src={knowledgeImage} alt="知识驱动的温室管理"/></div>
      <div className="hand-note tech-note right">不仅告诉你“发生了什么”，更告诉你“应该怎么做”。</div>
    </MarketingReveal>

    <MarketingReveal className="marketing-section tech-section edge-tech">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">04</span><div><h2>轻量化部署与边缘计算 · 让应用更友好</h2><p>支持多种部署方式，适配不同规模的温室场景。边缘计算保障数据实时处理，即使在网络不稳定的环境下也能正常运行。</p></div></div>
      <div className="edge-layout"><div className="edge-feature-grid">{edgeFeatures.map(([Icon,title,text])=><article className="soft-card" key={title}><Icon/><b>{title}</b><p>{text.split('\n').map(x=><span key={x}>{x}</span>)}</p></article>)}</div><div className="edge-photo"><img loading="lazy" decoding="async" src={edgeImage} alt="温室边缘设备"/><ul><li><CheckCircleOutlined/> 稳定可靠</li><li><CheckCircleOutlined/> 低成本部署</li><li><CheckCircleOutlined/> 适应复杂环境</li><li><CheckCircleOutlined/> 支持后续扩展</li></ul></div></div>
    </MarketingReveal>

    <MarketingReveal className="marketing-section tech-section iteration-tech">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">05</span><div><h2>持续迭代的算法体系 · 让平台不断进化</h2><p>基于真实生产数据持续优化算法模型，不断提升识别精度和决策效果，让平台在实际应用中越用越好。</p></div></div>
      <div className="iteration-layout"><div className="iteration-flow"><div><DatabaseOutlined/><b>数据积累</b><span>真实场景数据</span></div><i/><div><RobotOutlined/><b>模型训练</b><span>持续迭代优化</span></div><i/><div><ExperimentOutlined/><b>效果验证</b><span>多场景测试</span></div><i/><div><SyncOutlined/><b>版本更新</b><span>功能不断完善</span></div></div><TrendMiniChart/></div>
    </MarketingReveal>

    <MarketingReveal className="marketing-footer-banner tech-footer"><img loading="lazy" decoding="async" src={footerImage} alt="温室基地全景"/><div><h2>以技术赋能农业<br/>让每一座大棚都有更大的可能</h2><span>科技，让农业更美好</span></div></MarketingReveal>
  </div>
}
