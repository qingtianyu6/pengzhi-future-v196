import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CloudOutlined, ExperimentOutlined, FileTextOutlined, BulbOutlined, DatabaseOutlined, AlertOutlined, CameraOutlined, CheckCircleOutlined } from '@ant-design/icons'
import './PlatformIntroductionPage.css'
import { DashboardMockup, PhoneMockup } from '../components/MarketingVisuals'

import greenhousePhoto from '../assets/pure-scenes/greenhouse-wide.png'
import greenhousePhoto1920 from '../assets/pure-scenes/greenhouse-wide-1920.webp'
import greenhousePhoto2560 from '../assets/pure-scenes/greenhouse-wide-2560.webp'
import greenhousePhoto3360 from '../assets/pure-scenes/greenhouse-wide-3360.webp'
import sensor from '../assets/platform-intro/棚智未来_平台介绍页面素材包/photo_refs/06_痛点_传感器设备参考.png'
import phone from '../assets/platform-intro/棚智未来_平台介绍页面素材包/photo_refs/07_痛点_手机信息参考.png'
import leaf from '../assets/platform-intro/棚智未来_平台介绍页面素材包/photo_refs/08_痛点_病害叶片参考.png'
import notebook from '../assets/platform-intro/棚智未来_平台介绍页面素材包/photo_refs/09_痛点_农事记录本参考.png'
import dataScene from '../assets/platform-intro/棚智未来_平台介绍页面素材包/photo_refs/10_痛点_温室数据场景参考.png'
import reality from '../assets/pure-scenes/greenhouse-card.png'
import equipment from '../assets/pure-scenes/sensor-clean.png'
import testing from '../assets/platform-intro/棚智未来_平台介绍页面素材包/photo_refs/14_团队实地测试参考.png'
import footerImage from '../assets/pure-scenes/greenhouse-wide.png'

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [shown, setShown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => { const n = ref.current; if (!n) return; const o = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: .12 }); o.observe(n); return () => o.disconnect() }, [])
  return <div ref={ref} className={`intro-reveal ${shown ? 'is-shown' : ''} ${className}`}>{children}</div>
}

function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <header className="intro-heading"><p>{eyebrow}</p><h2>{title}</h2><span>{children}</span></header>
}

const painPoints = [
  [sensor, '传感器数据很多', '温度、湿度、光照……但分散在不同设备。'],
  [phone, '手机里信息零散', '不同软件、不同平台，看一次就要切换好几处。'],
  [leaf, '病害发现靠经验', '发现问题时，往往不知道是什么病害。'],
  [notebook, '农事记录容易忘', '浇水、施肥、打药……靠纸笔记录，很难追溯。'],
  [dataScene, '很难形成完整依据', '缺少长期数据支持，不利于复盘和科学决策。'],
] as const
const advantages = [['01', DatabaseOutlined, '数据不用到处找', '棚里的环境信息集中在一个地方。'], ['02', AlertOutlined, '异常不用一直盯', '重要变化及时提醒，不用 24 小时守着。'], ['03', CameraOutlined, '有问题不用只靠猜', '拍一张作物照片，系统帮助分析。'], ['04', CheckCircleOutlined, '做过什么不会忘', '农事操作持续记录，方便之后复盘。']] as const
const flow = [['感知', '多源数据实时采集'], ['分析', '数据融合与智能分析'], ['提醒', '异常情况及时预警'], ['决策', '给出辅助管理建议'], ['执行', '农事操作落地'], ['记录', '形成可追溯数据']] as const
const realScenes = [[reality, '真实种植场景', '在真实大棚中测试与优化。'], [equipment, '部署采集设备', '稳定采集环境数据。'], [testing, '团队实地测试', '持续迭代，不断改进。']] as const

export default function PlatformIntroductionPage() {
  return <div className="intro-page">
    <Reveal className="intro-hero"><div className="intro-hero-copy"><p className="intro-kicker">关于我们</p><h1>不是多一个农业系统，<br />而是让大棚真正<br /><em>看得见、管得住、有人帮。</em></h1><p className="intro-lead">棚智未来面向设施农业日常生产场景，把环境监测、病害识别、农事记录和智能建议放到一个平台里。<br /><br />让种植人员不用反复切换设备和软件，也能快速知道棚里发生了什么，接下来应该做什么。</p><Link to="/platform" className="intro-button">进入管理平台 <span>→</span></Link><div className="intro-mini-points"><div><b>◌</b><span><strong>环境有变化</strong>第一时间知道</span></div><div><b>⌁</b><span><strong>作物有问题</strong>拍照就能辅助判断</span></div><div><b>✓</b><span><strong>今天干过什么</strong>系统帮你留下记录</span></div></div></div><div className="intro-hero-media intro-hero-pure"><img loading="eager" decoding="async" fetchPriority="high" src={greenhousePhoto} srcSet={`${greenhousePhoto1920} 1920w, ${greenhousePhoto2560} 2560w, ${greenhousePhoto3360} 3360w`} sizes="100vw" alt="高清温室实景" /><div className="intro-device-dashboard"><DashboardMockup /></div><div className="intro-device-phone"><PhoneMockup /></div></div></Reveal>

    <Reveal className="intro-section why"><Heading eyebrow="WHY PENGZHI FUTURE" title="为什么要做棚智未来？">大棚管理，很多时候不是不会种，而是信息太散。</Heading><div className="pain-chain">{painPoints.map(([image, title, text], i) => <div className="pain-node" key={title}><img loading="lazy" decoding="async" src={image} alt={title} /><h3>{title}</h3><p>{text}</p>{i < painPoints.length - 1 && <i>→</i>}</div>)}</div><p className="intro-quote">我们希望做的，就是把这些分散的信息，变成一个真正能辅助种植的工作台。</p></Reveal>

    <Reveal className="intro-section capabilities"><Heading eyebrow="WHAT IT CAN DO" title="平台能做什么？">从环境感知到智能决策，覆盖大棚管理的全过程。</Heading><div className="capability-scene"><div className="capability-backdrop" /><div className="hotspot h1"><CloudOutlined /><b>环境监测</b><span>温度、湿度、光照等变化随时掌握</span></div><div className="hotspot h2"><ExperimentOutlined /><b>病害识别</b><span>拍照上传，快速辅助判断常见病害</span></div><div className="hotspot h3"><FileTextOutlined /><b>农事管理</b><span>浇水、施肥、巡棚等操作轻松记录</span></div><div className="hotspot h4"><BulbOutlined /><b>智能助手</b><span>结合当前情况，给出简单易懂的管理建议</span></div></div></Reveal>

    <Reveal className="intro-section advantages"><Heading eyebrow="OUR ADVANTAGES" title="我们的特色">我们更在意，它到底好不好用。</Heading><div className="advantage-grid">{advantages.map(([number, Icon, title, text]) => <article key={number}><b className="adv-number">{number}</b><Icon className="adv-icon" /><h3>{title}</h3><p>{text}</p></article>)}</div></Reveal>

    <Reveal className="intro-section flow-section"><Heading eyebrow="FROM DATA TO ACTION" title="从数据到行动">让每一条数据，都真正服务于农业生产。</Heading><div className="flow-track"><svg viewBox="0 0 1100 160" preserveAspectRatio="none" aria-hidden="true"><path d="M20 110 C180 20 300 20 430 92 S700 150 1080 48" /></svg>{flow.map(([title, text], i) => <div className={`flow-node flow-${i}`} key={title}><span>{i + 1}</span><b>{title}</b><small>{text}</small></div>)}</div></Reveal>

    <Reveal className="intro-section real-world"><Heading eyebrow="REAL AGRICULTURE" title="走进真实的大棚">从实际种植场景出发，按照真实管理流程设计，持续迭代。不做只停留在演示里的系统。</Heading><div className="scene-grid">{realScenes.slice(0,2).map(([image, title, text]) => <article key={title}><img loading="lazy" decoding="async" src={image} alt={title} /><h3>{title}</h3><p>{text}</p></article>)}<article className="scene-dashboard-card"><div className="scene-dashboard-wrap"><DashboardMockup compact /></div><h3>平台实际界面</h3><p>数据清晰，操作简单。</p></article>{realScenes.slice(2).map(([image, title, text]) => <article key={title}><img loading="lazy" decoding="async" src={image} alt={title} /><h3>{title}</h3><p>{text}</p></article>)}</div></Reveal>

    <Reveal className="intro-footer-banner"><img loading="lazy" decoding="async" src={footerImage} alt="温室全景" /><div><h2>从一座大棚出发，<br />看见农业管理的每一步。</h2><span>科技，让农业更美好</span></div></Reveal>
  </div>
}
