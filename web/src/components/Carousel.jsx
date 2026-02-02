import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ slides, autoPlay = true, interval = 5000 }) => {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    };

    const next = () => {
        setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    };

    useEffect(() => {
        if (!autoPlay) return;
        const slideInterval = setInterval(next, interval);
        return () => clearInterval(slideInterval);
    }, [current, autoPlay, interval]);

    return (
        <div className="glass" style={{ maxWidth: '1000px', margin: '4rem auto', position: 'relative', overflow: 'hidden', padding: 0 }}>
            {/* Slides Container */}
            <div
                style={{
                    display: 'flex',
                    transform: `translateX(-${current * 100}%)`,
                    transition: 'transform 0.5s ease-out'
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} style={{ minWidth: '100%', position: 'relative' }}>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                        />
                        {/* Caption Overlay */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            height: '50%'
                        }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'white' }}>{slide.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prev}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '1rem',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white'
                }}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={next}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '1rem',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white'
                }}
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem' }}>
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: current === i ? 'var(--aws-orange)' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
