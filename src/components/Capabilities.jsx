import React from 'react';
import { Scissors, Truck, Layers, Wrench, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

export default function Capabilities() {
  const capabilitiesList = [
    {
      icon: <Scissors size={26} />,
      title: 'Высокоточная резка в размер',
      desc: 'Газовая, лентопильная и плазменная резка по вашей спецификации и чертежам. Готовые отрезки сразу под монтаж.'
    },
    {
      icon: <Layers size={26} />,
      title: 'Комплектация по ведомости VOR',
      desc: 'Соберём сборную партию из различных категорий (арматура + труба + швеллер) на одной машине с точностью до килограмма.'
    },
    {
      icon: <Wrench size={26} />,
      title: 'Козловые краны и погрузка',
      desc: 'Все металлобазы оборудованы heavy-duty козловыми и мостовыми кранами для безопасной и оперативной отгрузки длинномеров.'
    },
    {
      icon: <Truck size={26} />,
      title: 'Доставка по всей Молдове',
      desc: 'Собственный логистический автопарк длинномеров (12м) и шаланд. Быстрая доставка прямо на вашу строительную площадку.'
    }
  ];

  return (
    <section className="section" id="capabilities" style={{ background: 'var(--bg-obsidian)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Сервис & Логистика</span>
          <h2>Не просто отгружаем. Готовим металл к работе.</h2>
          <p>
            Обеспечиваем полный цикл складской подготовки: от резки в размер до быстрой отгрузки козловыми кранами.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilitiesList.map((cap, idx) => (
            <div key={idx} className="capability-card">
              <div className="capability-icon">{cap.icon}</div>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '50px', background: 'var(--bg-card-dark)', border: '1px solid var(--border-chrome)', borderRadius: 'var(--radius-lg)', padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center', boxShadow: 'var(--shadow-dark-lg)' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#34D399', letterSpacing: '0.05em' }}>
              Гарантия надежности
            </span>
            <h3 style={{ fontSize: '28px', fontWeight: '800', margin: '8px 0 16px 0', color: '#FFFFFF' }}>
              Почему крупные застройщики Молдовы выбирают Metalica Zuev?
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', fontWeight: '600', color: '#FFFFFF' }}>
                <CheckCircle2 size={20} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                <span>100% сертификация металлопроката заводскими паспортами</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', fontWeight: '600', color: '#FFFFFF' }}>
                <CheckCircle2 size={20} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                <span>Открытое складское хранение проката на специализированных стеллажах и подкладках</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', fontWeight: '600', color: '#FFFFFF' }}>
                <CheckCircle2 size={20} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                <span>Точный весовой контроль партии непосредственно при погрузке и разгрузке</span>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface-dark)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-chrome)' }}>
            <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '8px' }}>
              Обсудить поставку с отделом продаж
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Менеджер проконсультирует по ассортименту, проверит наличие и организует отгрузку.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:+37368471530" className="btn btn-brand" style={{ width: '100%' }}>
                <Phone size={16} /> Позвонить: +373 68 47-15-30
              </a>
              <a href="viber://chat?number=%2B37368471530" className="btn btn-viber" style={{ width: '100%' }}>
                <MessageSquare size={16} /> Написать в Viber ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
