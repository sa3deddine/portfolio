import { X, Trophy, Cpu, Layout, BarChart3, Car, Hotel, CheckCircle2, ExternalLink } from 'lucide-react'

const iconsMap = {
  Trophy: Trophy,
  Cpu: Cpu,
  Layout: Layout,
  BarChart3: BarChart3,
  Car: Car,
  Hotel: Hotel
}

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null

  const IconComp = iconsMap[project.iconName] || Layout

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${project.bgBadge}, rgba(56,189,248,0.2))`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#070B14'
            }}
          >
            <IconComp size={28} />
          </div>
          <div>
            <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--cyan)' }}>
              {project.category}
            </span>
            <h3 style={{ fontSize: '24px', fontWeight: '800', margin: 0 }}>{project.t}</h3>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          {project.fullDesc || project.d}
        </p>

        {project.stats && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
              gap: '12px',
              background: 'rgba(255,255,255,0.04)',
              padding: '16px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid var(--border)'
            }}
          >
            {Object.entries(project.stats).map(([k, v]) => (
              <div key={k} style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-dim)', display: 'block' }}>
                  {k}
                </span>
                <strong style={{ fontSize: '16px', color: 'var(--cyan)' }}>{v}</strong>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '10px', color: 'var(--text-muted)' }}>
            Technologies utilisées :
          </h4>
          <div className="card-tags">
            {project.tags.map((t) => (
              <span key={t} style={{ color: 'var(--cyan)', borderColor: 'rgba(56,189,248,0.3)', background: 'rgba(56,189,248,0.1)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <button className="btn-secondary" onClick={onClose}>
            Fermer
          </button>
          <button
            className="btn-primary"
            onClick={() => {
              onClose()
              onOpenContact()
            }}
          >
            Discuter de ce projet
          </button>
        </div>
      </div>
    </div>
  )
}
