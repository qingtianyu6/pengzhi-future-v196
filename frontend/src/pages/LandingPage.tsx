import { Link } from 'react-router-dom'
import { MarketingReveal } from '../components/MarketingReveal'
import heroScene from '../assets/pure-scenes/greenhouse-wide.png'
import heroScene1920 from '../assets/pure-scenes/greenhouse-wide-1920.webp'
import heroScene2560 from '../assets/pure-scenes/greenhouse-wide-2560.webp'
import heroScene3360 from '../assets/pure-scenes/greenhouse-wide-3360.webp'
import { DataCard } from '../components/MarketingVisuals'
import './LandingPage.css'

function LeafIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M27 5C15 6 7.8 12.5 7.8 21.2c0 2.1.6 3.9 1.8 5.3C12 17.8 18.7 11.1 27 5Z"/><path d="M7.2 27.6c4.2-6.2 9.4-10.6 15.9-13.4"/></svg>
}
function ChartIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 26.5V8.5M5 26.5h23"/><rect x="9" y="17" width="4.5" height="7.5" rx=".8"/><rect x="16" y="11" width="4.5" height="13.5" rx=".8"/><rect x="23" y="6" width="4.5" height="18.5" rx=".8"/></svg>
}
function SproutIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 27V12"/><path d="M15.8 14.5C10.4 14.5 6.7 11.1 6 6c5.5-.1 9.2 2.8 9.8 8.5Z"/><path d="M16.2 12.4C16.8 7 20.5 4.2 26 4.5c-.8 5.1-4.3 8-9.8 7.9Z"/><path d="M8 27h16"/></svg>
}
function GridIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="5" width="8" height="8" rx="1.5"/><rect x="19" y="5" width="8" height="8" rx="1.5"/><rect x="5" y="19" width="8" height="8" rx="1.5"/><rect x="19" y="19" width="8" height="8" rx="1.5"/></svg>
}
function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 7l5 5-5 5"/></svg>
}
function PlayIcon() {
  return <svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="14" cy="14" r="11.2"/><path d="m12 9.8 7 4.2-7 4.2Z"/></svg>
}

const features = [
  [LeafIcon, '环境实时监测', '看得更清'],
  [ChartIcon, '数据智能分析', '管得更准'],
  [SproutIcon, '病害智能识别', '防得更早'],
  [GridIcon, '农事科学管理', '做得更轻松'],
] as const

export default function LandingPage() {
  return (
    <section className="home-design-hero">
      <div className="home-design-visual" aria-hidden="true">
        <picture><source type="image/webp" srcSet={`${heroScene1920} 1920w, ${heroScene2560} 2560w, ${heroScene3360} 3360w`} sizes="100vw"/><img loading="eager" decoding="async" fetchPriority="high" src={heroScene} alt="" /></picture>
        <div className="home-sensor-illustration"><i/><i/><span/></div>
        <DataCard label="光照强度" value="685" unit="μmol/m²·s" className="home-data-light" />
        <DataCard label="棚内温度" value="24.6" unit="℃" className="home-data-temp" />
        <DataCard label="空气湿度" value="62" unit="%" className="home-data-soil" />
      </div>

      <div className="home-design-copy">
        <MarketingReveal>
          <h1>让每一座大棚<br />拥有<span>智慧生长力</span></h1>
          <p>用数据感知作物，用智能守护生长。<br />让农业管理更简单、更科学、更高效。</p>
          <div className="home-design-actions">
            <Link className="home-primary" to="/platform?auth=login">进入管理平台 <ArrowIcon /></Link>
            <Link className="home-secondary" to="/introduction"><PlayIcon /> 观看介绍视频</Link>
          </div>
        </MarketingReveal>

        <div className="home-design-features">
          {features.map(([Icon, title, text], index) => (
            <MarketingReveal key={title} delay={80 + index * 90} className="home-feature-item">
              <Icon />
              <strong>{title}</strong>
              <span>{text}</span>
            </MarketingReveal>
          ))}
        </div>
        <div className="home-design-pagination" aria-hidden="true"><b/><i/><i/><span/></div>
      </div>
    </section>
  )
}
