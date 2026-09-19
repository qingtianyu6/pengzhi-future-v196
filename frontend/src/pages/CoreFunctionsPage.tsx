import { useEffect, useMemo, useRef, useState, type ChangeEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './CoreFunctionsPage.css'
import { DashboardMockup } from '../components/MarketingVisuals'

import heroImage from '../assets/pure-scenes/greenhouse-wide.png'
import heroImage1920 from '../assets/pure-scenes/greenhouse-wide-1920.webp'
import heroImage2560 from '../assets/pure-scenes/greenhouse-wide-2560.webp'
import heroImage3360 from '../assets/pure-scenes/greenhouse-wide-3360.webp'
import sensorImage from '../assets/pure-scenes/sensor-clean.png'
import diseaseImage from '../assets/pure-scenes/disease-phone.png'
import diseaseGroupImage from '../assets/pure-scenes/disease-gallery.png'
import decisionImage from '../assets/pure-scenes/greenhouse-card.png'
import endingImage from '../assets/pure-scenes/greenhouse-wide.png'

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.1 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`core-reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>
}

function SectionTitle({ number, eyebrow, title, children }: { number: string; eyebrow: string; title: string; children: ReactNode }) {
  return <div className="core-section-title"><span className="core-number">{number}</span><div><p>{eyebrow}</p><h2>{title}</h2><span>{children}</span></div></div>
}

type EnvMetric = 'temperature' | 'humidity' | 'light'
const envSeries: Record<EnvMetric, { name: string; unit: string; color: string; min: number; max: number; data: number[] }> = {
  temperature: { name: '温度', unit: '℃', color: '#177d61', min: 16, max: 30, data: [20.2, 21.4, 24.6, 23.1, 21.8] },
  humidity: { name: '湿度', unit: '%', color: '#4c9fcb', min: 45, max: 82, data: [72, 68, 62, 66, 71] },
  light: { name: '光照', unit: 'μmol/m²·s', color: '#d9a23e', min: 300, max: 900, data: [360, 480, 685, 610, 420] },
}

function EnvironmentChart({ metric }: { metric: EnvMetric }) {
  const series = envSeries[metric]
  const width = 640
  const height = 224
  const left = 44
  const right = 16
  const top = 18
  const bottom = 30
  const plotW = width - left - right
  const plotH = height - top - bottom
  const points = series.data.map((value, index) => {
    const x = left + (plotW * index) / Math.max(1, series.data.length - 1)
    const y = top + ((series.max - value) / Math.max(1, series.max - series.min)) * plotH
    return [x, y] as const
  })
  const path = points.map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  const yTicks = [series.max, series.min + (series.max - series.min) * 2 / 3, series.min + (series.max - series.min) / 3, series.min]
  const labels = ['00:00', '06:00', '12:00', '18:00', '24:00']
  return <div className="core-chart core-chart-svg" aria-label={`${series.name}趋势图`}>
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-hidden="true">
      <g className="core-chart-grid">
        {yTicks.map((_, index) => {
          const y = top + (plotH * index) / (yTicks.length - 1)
          return <line key={index} x1={left} y1={y} x2={width-right} y2={y} />
        })}
      </g>
      <g className="core-chart-axis">
        {yTicks.map((value, index) => {
          const y = top + (plotH * index) / (yTicks.length - 1)
          return <text key={index} x={left-10} y={y+4} textAnchor="end">{Math.round(value)}</text>
        })}
        {labels.map((label, index) => {
          const x = left + (plotW * index) / (labels.length - 1)
          return <text key={label} x={x} y={height-8} textAnchor={index===0?'start':index===labels.length-1?'end':'middle'}>{label}</text>
        })}
      </g>
      <path className="core-chart-area" d={`${path} L ${left+plotW} ${top+plotH} L ${left} ${top+plotH} Z`} fill={`${series.color}14`} />
      <path className="core-chart-line" d={path} stroke={series.color} />
      {points.map(([x,y], index)=><circle key={index} cx={x} cy={y} r="4" fill="#fff" stroke={series.color} strokeWidth="2" />)}
    </svg>
  </div>
}

const abilities = [['01', '环境监测', '实时掌握棚内环境'], ['02', '病害识别', '拍照即可辅助判断'], ['03', '农事管理', '让每项工作有记录'], ['04', '智能决策', '把数据变成建议'], ['05', '数据档案', '沉淀可追溯资料']]
const initialTasks = [['浇水', '08:30', '番茄 A 区', '已完成'], ['通风', '10:00', '2 号大棚', '进行中'], ['喷施营养液', '14:30', '育苗区', '待执行'], ['病害复查', '16:00', '番茄 B 区', '待执行'], ['采收记录', '18:00', '1 号大棚', '待执行']]
const suggestionSets = [
  [['温度趋势平稳', '未来 6 小时温度处于适宜范围，可保持当前通风策略。', '环境分析'], ['建议上午补光', '今日光照预计偏弱，建议 09:00—11:00 开启补光设备。', '生产建议'], ['发现疑似病害', '番茄 A 区叶片出现早疫病特征，建议安排复查。', '风险提醒']],
  [['空气湿度略高', '午后湿度可能升至 70%，建议提前开启顶部通风。', '环境分析'], ['灌溉可稍后执行', '当前土壤含水状态良好，可将本轮灌溉延后 1 小时。', '生产建议'], ['病害风险下降', '连续通风后叶面湿度回落，灰霉病风险由中等降为低。', '风险提醒']],
] as const

export default function CoreFunctionsPage() {
  const [envMetric, setEnvMetric] = useState<EnvMetric>('temperature')
  const [envRange, setEnvRange] = useState('24小时')
  const [preview, setPreview] = useState<string>('')
  const [analyzing, setAnalyzing] = useState(false)
  const [diagnosis, setDiagnosis] = useState('番茄灰霉病')
  const [confidence, setConfidence] = useState(92)
  const [tasks, setTasks] = useState(initialTasks)
  const [newTaskOpen, setNewTaskOpen] = useState(false)
  const [taskName, setTaskName] = useState('')
  const [taskZone, setTaskZone] = useState('1 号大棚')
  const [taskTime, setTaskTime] = useState('09:00')
  const [suggestionVersion, setSuggestionVersion] = useState(0)
  const suggestions = useMemo(() => suggestionSets[suggestionVersion % suggestionSets.length], [suggestionVersion])

  const handleDiseaseFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (preview) URL.revokeObjectURL(preview)
    const url = URL.createObjectURL(file)
    setPreview(url)
    setAnalyzing(true)
    setTimeout(() => {
      const name = file.name.toLowerCase()
      setDiagnosis(name.includes('healthy') || name.includes('健康') ? '健康叶片' : '番茄灰霉病')
      setConfidence(name.includes('healthy') || name.includes('健康') ? 97 : 92)
      setAnalyzing(false)
    }, 900)
  }

  const addTask = () => {
    if (!taskName.trim()) return
    setTasks((current) => [...current, [taskName.trim(), taskTime, taskZone, '待执行']])
    setTaskName('')
    setNewTaskOpen(false)
  }

  const exportCsv = () => {
    const rows = [['类型', '时间', '区域', '状态'], ...tasks]
    const csv = '\uFEFF' + rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = '棚智未来_农事记录.csv'
    link.click()
    URL.revokeObjectURL(url)
  }

  return <div className="core-page">
    <Reveal className="core-hero core-hero-fullscreen">
      <picture className="core-hero-background" aria-hidden="true">
        <source
          type="image/webp"
          srcSet={`${heroImage1920} 1920w, ${heroImage2560} 2560w, ${heroImage3360} 3360w`}
          sizes="100vw"
        />
        <img loading="eager" decoding="async" fetchPriority="high" src={heroImage} alt="" />
      </picture>
      <div className="core-hero-overlay" aria-hidden="true" />
      <div className="core-hero-inner">
        <div className="core-hero-copy">
          <p className="core-kicker">CORE FUNCTIONS · 核心功能</p>
          <h1>五大核心功能<br /><em>让大棚管理更简单</em></h1>
          <p className="core-lead">从环境感知到智能决策，棚智未来把复杂的种植管理，变成清晰、可靠、可执行的日常。</p>
          <div className="core-ability-list">
            {abilities.map(([n, title, text]) => <div key={n}><b>{n}</b><span><strong>{title}</strong>{text}</span></div>)}
          </div>
          <Link className="core-primary-button" to="/platform">立即体验 <span>→</span></Link>
        </div>
        <div className="core-hero-dashboard" aria-label="棚智未来管理平台预览">
          <DashboardMockup />
        </div>
      </div>
      <a className="core-hero-scroll" href="#core-environment" aria-label="查看环境监测功能"><span>SCROLL</span><i /></a>
    </Reveal>

    <main>
      <Reveal className="core-section core-environment" ><div id="core-environment" className="core-scroll-anchor" /><SectionTitle number="01" eyebrow="ENVIRONMENT MONITORING" title="环境监测"><>实时感知棚内环境，让每一个变化都被看见。</></SectionTitle><div className="core-environment-grid"><div className="core-photo-card"><img loading="eager" decoding="async" fetchPriority="high" src={sensorImage} alt="温室环境传感器" /><span>传感器实时采集 · 数据自动同步</span></div><div className="core-panel"><div className="core-metrics interactive">{([['temperature','当前温度','24.6','℃','↓ 较昨日 -1.2℃','positive'],['humidity','空气湿度','62','%','↑ 较昨日 +3%','blue'],['light','光照强度','685','μmol/m²·s','↑ 较昨日 +12%','warning']] as const).map(([key,label,value,unit,delta,tone])=><button key={key} className={envMetric===key?'active':''} onClick={()=>setEnvMetric(key)}><small>{label}</small><strong>{value}<sup>{unit}</sup></strong><span className={`metric-delta ${tone}`}>{delta}</span></button>)}</div><div className="core-chart-head"><strong>环境趋势</strong><div className="core-chart-tabs" role="tablist" aria-label="趋势时间范围">{['24小时','7天','30天'].map((range)=><button type="button" role="tab" aria-selected={envRange===range} className={envRange===range?'active':''} key={range} onClick={()=>setEnvRange(range)}>{range}</button>)}</div></div><EnvironmentChart metric={envMetric} /><div className="core-panel-foot"><span>数据更新时间：刚刚</span><b>点击指标可切换趋势</b></div></div></div></Reveal>

      <Reveal className="core-section core-disease"><SectionTitle number="02" eyebrow="DISEASE DETECTION" title="病害识别"><>上传或拍摄叶片照片，平台会给出识别结果、置信度与处理建议。</></SectionTitle><div className="core-disease-content"><label className="core-disease-media interactive-upload"><img loading="lazy" decoding="async" src={preview || diseaseImage} alt="拍照识别叶片病害" /><div className="scan-line" /><input type="file" accept="image/*" onChange={handleDiseaseFile}/><span>{analyzing ? '正在识别…' : '点击上传叶片照片'}</span></label><div className={`core-diagnosis-card ${analyzing?'is-analyzing':''}`}><div className="core-card-top"><span>识别结果</span><b>{analyzing?'分析中':confidence >= 90 ? '高置信度' : '待复核'}</b></div><h3>{analyzing ? 'AI 正在分析叶片特征' : diagnosis}</h3><p>置信度 <strong>{analyzing ? '—' : `${confidence}%`}</strong></p><div className="core-confidence"><i style={{ width: analyzing ? '35%' : `${confidence}%` }} /></div><div className="core-diagnosis-tip"><b>处理建议</b><span>{diagnosis === '健康叶片' ? '当前未发现明显病斑，建议继续保持通风与合理水肥。' : '及时清除病叶，加强通风降湿，并在 24 小时内复查。'}</span></div></div><div className="core-disease-gallery"><h3>常见病害识别</h3><img loading="lazy" decoding="async" src={diseaseGroupImage} alt="常见番茄病害图谱" /><div className="core-gallery-labels"><span>白粉病</span><span>霜霉病</span><span>灰霉病</span><span>炭疽病</span></div></div></div></Reveal>

      <Reveal className="core-section core-farm"><SectionTitle number="03" eyebrow="FARM MANAGEMENT" title="农事管理"><>把每天的农事安排，变成清晰可追踪、可新增、可导出的任务记录。</></SectionTitle><div className="core-task-layout"><div className="core-task-actions">{tasks.slice(0,5).map(([name, time, zone, status], i) => <div className="core-task-entry" key={`${name}-${i}`}><div className={`core-task-icon icon-${i}`}>{['◒', '◫', '✦', '⌁', '✓'][i % 5]}</div><div><b>{name}</b><span>{time} · {zone}</span></div><em className={status === '已完成' ? 'done' : status === '进行中' ? 'doing' : ''}>{status}</em></div>)}</div><div className="core-record-card"><div className="core-card-top"><span>农事记录</span><div className="core-record-buttons"><button onClick={()=>setNewTaskOpen((v)=>!v)}>+ 新建记录</button><button onClick={exportCsv}>导出 CSV</button></div></div>{newTaskOpen && <div className="core-task-form"><input value={taskName} onChange={(e)=>setTaskName(e.target.value)} placeholder="农事名称"/><input type="time" value={taskTime} onChange={(e)=>setTaskTime(e.target.value)}/><select value={taskZone} onChange={(e)=>setTaskZone(e.target.value)}><option>1 号大棚</option><option>2 号大棚</option><option>番茄 A 区</option><option>育苗区</option></select><button onClick={addTask}>保存</button></div>}<div className="core-record-date">今日任务 · 共 {tasks.length} 条</div>{tasks.slice(-4).map(([name, time, zone, status],i) => <div className="core-record-row" key={`${name}-${i}`}><span className="record-dot" /><div><b>{name}</b><small>{time} · {zone}</small></div><em className={status === '已完成' ? 'done' : status === '进行中' ? 'doing' : ''}>{status}</em></div>)}</div></div></Reveal>

      <Reveal className="core-section core-decision"><SectionTitle number="04" eyebrow="SMART DECISION" title="智能决策"><>读懂数据之后，给出下一步更合适的行动；点击按钮可以重新生成一组建议。</></SectionTitle><div className="core-decision-grid"><div className="core-suggestions">{suggestions.map(([title, text, tag], i) => <div className="core-suggestion" key={title}><span className={`suggestion-icon s-${i}`}>{['↗', '☼', '!'][i]}</span><div><div><b>{title}</b><em>{tag}</em></div><p>{text}</p></div><span className="suggestion-arrow">→</span></div>)}<button className="core-refresh-button" onClick={()=>setSuggestionVersion((v)=>v+1)}>重新分析当前大棚</button></div><div className="core-decision-media"><img loading="lazy" decoding="async" src={decisionImage} alt="高清温室场景" /><span>棚小智已完成本轮分析</span></div></div></Reveal>

      <Reveal className="core-section core-archive"><SectionTitle number="05" eyebrow="DATA ARCHIVE" title="数据沉淀"><>所有监测数据、识别结果和农事记录会自动保存，形成可追溯的种植档案。</></SectionTitle><div className="core-archive-grid"><button><b>⌕</b><span>历史数据查询</span><small>按日期回溯</small></button><button><b>▤</b><span>农业档案管理</span><small>分类存档</small></button><button><b>▥</b><span>数据可视化</span><small>图表展示</small></button><button onClick={exportCsv}><b>⇩</b><span>导出当前记录</span><small>CSV 文件</small></button></div></Reveal>
    </main>

    <Reveal className="core-ending"><img loading="lazy" decoding="async" src={endingImage} alt="高清温室全景" /><div><p>让每一座大棚</p><h2>拥有智慧生长力</h2><span>从数据出发，让农业管理更简单、更科学、更高效。</span><Link to="/platform">进入管理平台　→</Link></div></Reveal>
  </div>
}
