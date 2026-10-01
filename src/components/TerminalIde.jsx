import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Terminal, Copy, Check, Play, FileCode, CheckCircle2 } from 'lucide-react'

export default function TerminalIde({ email }) {
  const [activeTab, setActiveTab] = useState('config')
  const [copied, setCopied] = useState(false)
  const [executed, setExecuted] = useState(false)

  const codeSnippets = {
    config: `// saad.config.js
export default {
  ingénieur: "Saad Eddine Laouina",
  école: "EMSI Rabat (5e Année)",
  option: "Développement Digital & SI",
  recherche: "Stage PFE 2027 (Pre-Employment)",
  objectifs: ["Architectures Propres", "Scalabilité Web/Mobile", "IoT & DataViz"]
};`,
    skills: `// skills.json
{
  "stack_backend": ["JEE", "Django", "Node.js", "Express"],
  "stack_frontend": ["React.js", "React Native", "Tailwind CSS"],
  "iot_embedded": ["ESP32", "PlatformIO", "MQTT", "Sensors"],
  "databases": ["PostgreSQL", "MongoDB", "MySQL"]
}`,
    contact: `// contact.sh
#!/bin/bash
curl -X POST https://api.saad.dev/contact \\
  -d '{"email": "${email}"}' \\
  -H "Status: Disponible pour Stage PFE 2027"`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRunCommand = () => {
    setExecuted(true)
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    })
    setTimeout(() => setExecuted(false), 4000)
  }

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="dot red" />
          <div className="dot yellow" />
          <div className="dot green" />
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('config')}
            style={{
              background: activeTab === 'config' ? 'rgba(56,189,248,0.2)' : 'transparent',
              border: 'none',
              color: activeTab === 'config' ? '#38BDF8' : '#64748B',
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '11px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            saad.config.js
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            style={{
              background: activeTab === 'skills' ? 'rgba(56,189,248,0.2)' : 'transparent',
              border: 'none',
              color: activeTab === 'skills' ? '#38BDF8' : '#64748B',
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '11px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            skills.json
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            style={{
              background: activeTab === 'contact' ? 'rgba(56,189,248,0.2)' : 'transparent',
              border: 'none',
              color: activeTab === 'contact' ? '#38BDF8' : '#64748B',
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '11px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            contact.sh
          </button>
        </div>

        <button
          onClick={handleCopy}
          title="Copier le code"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {copied ? <Check size={14} color="#34D399" /> : <Copy size={14} />}
        </button>
      </div>

      <div className="terminal-body">
        <pre style={{ margin: 0, fontFamily: 'var(--font-mono)' }}>
          <code>{codeSnippets[activeTab]}</code>
        </pre>

        {executed && (
          <div style={{ marginTop: '12px', color: '#34D399', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} /> Output: Executed successfully! Saad is ready for interview.
          </div>
        )}

        <button className="terminal-btn" onClick={handleRunCommand}>
          <Play size={13} fill="currentColor" /> Executer sa3d.run()
        </button>
      </div>
    </div>
  )
}
