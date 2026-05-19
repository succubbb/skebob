import "./cardClock.css";
import { useState, useEffect } from 'react';


const CardClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Обновляем время каждую секунду
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });
    };

    return (
        <div className="cardClock">
            <div className="cardClock_date">{formatDate(time)}</div>
            <h1 className="cardClock_time">{formatTime(time)}</h1>
        </div>
    );
};

export default CardClock;
