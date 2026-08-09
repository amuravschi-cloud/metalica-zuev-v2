import React from 'react';
import { Building2, ShieldCheck, Award, TrendingUp, Phone, MessageSquare } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <section className="section" id="company" style={{ background: '#F4F7F5' }}>
      <div className="container">
        <div className="company-card">
          <div className="company-text">
            <span className="section-tag">О компании с 1995 года</span>
            <h3>Metalica Zuev SRL — Поставщик чёрного металлопроката №1</h3>
            <p>
              Более 30 лет мы обеспечиваем крупнейшие строительные компании, мостостроительные тресты, заводы ЖБИ и частных застройщиков Республики Молдова высококачественным чёрным металлопрокатом.
            </p>
            <p>
              Прямые долгосрочные контракты с ведущими металлургическими комбинатами позволяют поддерживать бесперебойное наличие 450+ позиций на складах и гарантировать 100% соответствие сертификатам ГОСТ и европейским нормам EN.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '30px' }}>
              <a href="tel:+37368471530" className="btn btn-brand">
                <Phone size={18} /> Отдел продаж: +373 68 47-15-30
              </a>
              <a href="viber://chat?number=%2B37368471530" className="btn btn-viber">
                <MessageSquare size={18} /> Чат в Viber ↗
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ background: '#F4F7F5', border: '1px solid var(--border-green)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center' }}>
              <Building2 size={32} color="var(--brand-green)" style={{ marginBottom: '12px' }} />
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--bg-dark-green)', fontWeight: '800' }}>3 + 1</strong>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Металлобазы и Лог-хаб</span>
            </div>

            <div style={{ background: '#F4F7F5', border: '1px solid var(--border-green)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center' }}>
              <ShieldCheck size={32} color="var(--brand-green)" style={{ marginBottom: '12px' }} />
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--bg-dark-green)', fontWeight: '800' }}>100%</strong>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>ГОСТ / EN сертификация</span>
            </div>

            <div style={{ background: '#F4F7F5', border: '1px solid var(--border-green)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center' }}>
              <Award size={32} color="var(--brand-green)" style={{ marginBottom: '12px' }} />
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--bg-dark-green)', fontWeight: '800' }}>30+ лет</strong>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>На рынке Молдовы</span>
            </div>

            <div style={{ background: '#F4F7F5', border: '1px solid var(--border-green)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center' }}>
              <TrendingUp size={32} color="var(--brand-green)" style={{ marginBottom: '12px' }} />
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--bg-dark-green)', fontWeight: '800' }}>450+</strong>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Позиций всегда в наличии</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
