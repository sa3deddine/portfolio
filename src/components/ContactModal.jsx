import { useState } from 'react'
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function ContactModal({ isOpen, onClose, defaultEmail }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Stage PFE 2027 / Opportunité', message: '' })
  const [sent, setSent] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    setTimeout(() => {
      setSent(false)
      onClose()
    }, 2500)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <Sparkles size={20} color="var(--cyan)" />
          <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--cyan)', textTransform: 'uppercase' }}>
            Me contacter
          </span>
        </div>
        <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '20px' }}>
          Travaillons ensemble !
        </h3>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <CheckCircle2 size={56} color="#34D399" style={{ margin: '0 auto 16px' }} />
            <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>Message envoyé avec succès !</h4>
            <p style={{ color: 'var(--text-muted)' }}>
              Merci {formData.name || 'à vous'}, Saad vous répondra dans les plus brefs délais à l'adresse {formData.email || defaultEmail}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Votre Nom &amp; Prénom</label>
              <input
                type="text"
                placeholder="Ex: Jean Dupont"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Votre Email</label>
              <input
                type="email"
                placeholder="Ex: jean.dupont@entreprise.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Sujet / Motif</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Votre Message</label>
              <textarea
                rows="4"
                placeholder="Bonjour Saad, nous souhaitons échanger avec vous concernant..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button type="button" className="btn-secondary" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn-primary">
                <Send size={16} /> Envoyer le message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
