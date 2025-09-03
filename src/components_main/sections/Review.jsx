import React from "react";
import GlowCard from '../reUsable/GlowCard';



// A simple Star component for the rating
const Stars = () => (
    <div className="stars">
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
    </div>
);

function Review() {
    return (
        <div className="page-container">
            {/* --- Example Usage --- */}
            <GlowCard className="testimonial-card">
                <Stars />
                <p className="testimonial-text">
                    I can't say enough good things about Adrian. He was able to
                    take our complex project requirements and turn them into a
                    seamless, functional website. His problem-solving abilities
                    are outstanding.
                </p>
                <div className="author-info">
                    <img
                        src="https://i.pravatar.cc/80?img=47"
                        alt="Esther Howard"
                    />
                    <div className="author-details">
                        <span className="author-name">Esther Howard</span>
                        <span className="author-handle">@estherhoward</span>
                    </div>
                </div>
            </GlowCard>
        </div>
    );
}

export default Review;
