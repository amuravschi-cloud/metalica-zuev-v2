import React from 'react';
import { Phone, MessageSquare, Clock, MapPin, Mail } from 'lucide-react';

export default function DirectContactSection() {
  return (
    <section className="section" id="contact" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="direct-action-card">
          <h2>Готовы к оперативной отгрузке металлопроката</h2>
          <p>
            Свяжитесь с прямым менеджером отдела продаж Metalica Zuev. Рассчитаем ведомость, проверим наличие на ближайшей базе и согласуем время погрузки.
          </p>

          <div className="direct-action-buttons">
            <a href="tel:+37368471530" className="btn btn-brand" style={{ padding: '16px 32px', fontSize: '16px' }}>
              <Phone size={20} /> Отдел продаж: +373 68 47-15-30
            </a>

            <a 
              href="viber://chat?number=%2B37368471530" 
              className="btn btn-viber" 
              style={{ padding: '16px 32px', fontSize: '16px' }}
            >
              <MessageSquare size={20} /> Чат в Viber ↗
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#A3D9C9', display: 'block', marginBottom: '4px' }}>Мобильный / Viber</span>
              <strong style={{ fontSize: '16px', color: '#FFFFFF' }}>+373 68 47-15-30</strong>
            </div>

            <div>
              <span style={{ fontSize: '12px', color: '#A3D9C9', display: 'block', marginBottom: '4px' }}>Городской Кишинёв</span>
              <strong style={{ fontSize: '16px', color: '#FFFFFF' }}>+373 22 47-15-30</strong>
            </div>

            <div>
              <span style={{ fontSize: '12px', color: '#A3D9C9', display: 'block', marginBottom: '4px' }}>Рабочий график</span>
              <strong style={{ fontSize: '16px', color: '#FFFFFF' }}>Пн–Пт: 08:00 – 17:00</strong>
            </div>

            <div>
              <span style={{ fontSize: '12px', color: '#A3D9C9', display: 'block', marginBottom: '4px' }}>Электронная почта</span>
              <strong style={{ fontSize: '16px', color: '#FFFFFF' }}>info@mz.md</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
