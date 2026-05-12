import { Link, useParams } from 'react-router-dom'
import { useTranslation } from '../i18n.jsx'

export default function NotFound() {
  const { t }           = useTranslation()
  const { lang = 'en' } = useParams()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: '1rem',
      textAlign: 'center',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '4rem', color: 'var(--border-light)' }}>404</span>
      <h1 style={{ fontSize: '1.25rem' }}>{t('common.not_found')}</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{t('common.not_found_sub')}</p>
      <Link to={`/${lang}`} className="btn btn-outline" style={{ marginTop: '0.5rem' }}>
        {t('common.go_home')}
      </Link>
    </div>
  )
}
