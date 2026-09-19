import type { ElementType } from 'react'
import {
  AreaChartOutlined, BarChartOutlined, CameraOutlined, CheckCircleOutlined, CloudOutlined,
  ExperimentOutlined, FileTextOutlined, SettingOutlined, TeamOutlined,
} from '@ant-design/icons'
import { MarketingReveal } from '../components/MarketingReveal'
import './MarketingShared.css'
import './ApplicationScenariosPage.css'
import heroImage from '../assets/pure-scenes/greenhouse-wide.png'
import heroImage1920 from '../assets/pure-scenes/greenhouse-wide-1920.webp'
import heroImage2560 from '../assets/pure-scenes/greenhouse-wide-2560.webp'
import heroImage3360 from '../assets/pure-scenes/greenhouse-wide-3360.webp'
import vegetableImage from '../assets/scenarios-design/vegetable-tomato.png'
import fruitImage from '../assets/scenarios-design/fruit-strawberry.png'
import flowerImage from '../assets/scenarios-design/flower-greenhouse.png'
import seedlingImage from '../assets/scenarios-design/seedling-nursery.png'
import baseImage from '../assets/pure-scenes/regional-base-clean.png'
import mapImage from '../assets/scenarios-design/china-map.png'
import footerImage from '../assets/pure-scenes/greenhouse-wide.png'

const heroFeatures = [
  [ExperimentOutlined, '多场景适配', '覆盖多种作物'],
  [SettingOutlined, '灵活部署', '适应不同规模'],
  [BarChartOutlined, '数据驱动', '提升生产效益'],
  [TeamOutlined, '助力可持续', '推动绿色农业'],
] as const

type Scenario = {
  number: string; title: string; lead: string; image: string;
  features: [ElementType, string, string][]; benefits: string[]; note: string
}

const scenarios: Scenario[] = [
  {number:'01',title:'蔬菜种植大棚 · 精准管理，稳定高产',lead:'适用于番茄、黄瓜、辣椒、茄子等常见蔬菜种植，实时监测棚内环境，识别病害风险，提供农事建议，帮助种植户实现精细化管理。',image:vegetableImage,features:[[ExperimentOutlined,'环境监测','掌握温湿度、光照、CO₂等关键环境因子'],[CameraOutlined,'病害识别','早发现、早干预，降低病害损失'],[FileTextOutlined,'农事管理','浇水、施肥、打药、巡棚全流程记录']],benefits:['产量提升 10%～30%','病害损失降低 20%～40%','管理效率提升 50% 以上'],note:'让每一棵菜，都长得更好'},
  {number:'02',title:'水果种植大棚 · 品质提升，价值更高',lead:'适用于草莓、葡萄、樱桃、蓝莓等高附加值水果种植，帮助种植户更好地控制生长环境，提升果实品质与商品率，打造优质品牌。',image:fruitImage,features:[[AreaChartOutlined,'生长监测','关注关键生育期环境变化'],[CameraOutlined,'品质管理','通过数据优化果品品质'],[CheckCircleOutlined,'风险预警','异常情况及时提醒']],benefits:['优质果率提升 15%～35%','商品价值提升 20%～50%','品牌竞争力增强'],note:'好环境，结出好果实'},
  {number:'03',title:'花卉种植大棚 · 环境可控，花开更稳',lead:'适用于玫瑰、百合、菊花、蝴蝶兰等花卉种植，精准控制温湿度、光照等环境条件，为花卉的高品质生长提供稳定的环境支持。',image:flowerImage,features:[[CloudOutlined,'环境调控','营造适宜的生长环境'],[FileTextOutlined,'生长记录','记录不同生长阶段数据'],[SettingOutlined,'智能建议','提供灌溉、通风、遮阴等管理建议']],benefits:['花卉品质提升 20%～40%','生产成本降低 15%～30%','出花稳定性增强'],note:'让每一朵花，都按时绽放'},
  {number:'04',title:'育苗与种苗繁育 · 健康种苗，打好基础',lead:'适用于蔬菜育苗、花卉育苗及特色作物种苗繁育，帮助控制育苗环境，提高出苗率与种苗质量，为后续种植提供健康、整齐的种苗。',image:seedlingImage,features:[[SettingOutlined,'环境精细控制','保证温湿度稳定'],[CameraOutlined,'生长状态监测','及时发现异常'],[FileTextOutlined,'数据记录','形成可追溯的育苗档案']],benefits:['出苗率提升 10%～30%','种苗质量提升 20%～40%','育苗成本降低'],note:'好种苗，是丰收的第一步'},
]

function ScenarioBlock({ item }: { item: Scenario }) {
  return <MarketingReveal className="marketing-section scenario-block">
    <div className="marketing-section-head"><i className="leaf"/><span className="num">{item.number}</span><div><h2>{item.title}</h2><p>{item.lead}</p></div></div>
    <div className="scenario-content">
      <img loading="lazy" decoding="async" className="scenario-photo" src={item.image} alt={item.title}/>
      <div className="scenario-feature-list">{item.features.map(([Icon,title,text])=><article className="soft-card" key={title}><Icon/><b>{title}</b><span>{text}</span></article>)}</div>
      <aside className="soft-card scenario-benefits"><h3><BarChartOutlined/> 典型收益</h3>{item.benefits.map(x=><p key={x}>{x}</p>)}</aside>
    </div>
    <div className="hand-note scenario-note">{item.note}</div>
  </MarketingReveal>
}

export default function ApplicationScenariosPage() {
  return <div className="marketing-page scenario-page">
    <section className="marketing-hero reference-hero scenario-hero">
      <div className="marketing-hero-copy">
        <MarketingReveal><p className="marketing-kicker">应用场景</p><h1>从不同种植场景出发<br/>让更多大棚用上<em>智能管理</em></h1><p className="marketing-hero-lead">棚智未来面向多种设施农业种植场景，提供可落地、可扩展的智能管理方案，帮助不同地区、不同作物、不同规模的种植主体提升管理效率、降低生产风险、实现稳定增收。</p></MarketingReveal>
        <div className="marketing-icon-strip">{heroFeatures.map(([Icon,title,text],i)=><MarketingReveal className="marketing-icon-item" delay={90+i*90} key={title}><Icon/><span><strong>{title}</strong>{text}</span></MarketingReveal>)}</div>
      </div>
      <div className="marketing-hero-media"><picture><source type="image/webp" srcSet={`${heroImage1920} 1920w, ${heroImage2560} 2560w, ${heroImage3360} 3360w`} sizes="100vw"/><img loading="eager" decoding="async" fetchPriority="high" src={heroImage} alt="温室种植应用场景"/></picture></div><div className="scenario-hero-panel"><article><ExperimentOutlined/><span><small>棚内温度</small><strong>24.6℃</strong></span></article><article><CloudOutlined/><span><small>空气湿度</small><strong>62%</strong></span></article><article><AreaChartOutlined/><span><small>环境状态</small><strong>适宜</strong></span></article><article><TeamOutlined/><span><small>管理模式</small><strong>多棚协同</strong></span></article><div className="scenario-hero-panel-note">蔬菜 / 水果 / 花卉 / 育苗 · 多场景统一管理</div></div>
      <span className="scenario-scribble">不止一种大棚<br/>都有更好的种植方式</span>
    </section>

    {scenarios.map(item=><ScenarioBlock key={item.number} item={item}/>) }

    <MarketingReveal className="marketing-section scenario-block regional-block">
      <div className="marketing-section-head"><i className="leaf"/><span className="num">05</span><div><h2>区域示范与规模化基地 · 可复制，可推广</h2><p>适用于现代农业园区、合作社、家庭农场等规模化种植场景，支持多棚管理、远程查看和数据汇总，助力形成可复制、可推广的数字化种植模式。</p></div></div>
      <div className="regional-layout"><img loading="lazy" decoding="async" className="scenario-photo" src={baseImage} alt="规模化温室基地"/><div className="scenario-feature-list regional-features"><article className="soft-card"><TeamOutlined/><b>多棚统一管理</b><span>集中查看，统一调度</span></article><article className="soft-card"><BarChartOutlined/><b>数据统计分析</b><span>形成区域种植画像</span></article><article className="soft-card"><SettingOutlined/><b>标准化管理</b><span>助力规模化生产</span></article></div><div className="regional-map"><img loading="lazy" decoding="async" src={mapImage} alt="区域示范分布示意"/><aside className="soft-card"><b>已在多地开展应用探索</b><p>山东　设施蔬菜基地</p><p>江苏　现代农业园区</p><p>云南　高原特色种植</p><p>四川　乡村振兴示范区</p><span>更多地区　持续拓展中…</span></aside></div></div>
    </MarketingReveal>

    <MarketingReveal className="marketing-footer-banner scenario-footer"><img loading="lazy" decoding="async" src={footerImage} alt="温室基地全景"/><div><h2>让智能走进更多大棚<br/>让农业拥有更大的可能</h2><span>科技，让农业更美好</span></div></MarketingReveal>
  </div>
}
