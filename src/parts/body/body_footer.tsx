import React from 'react';
import './body_footer.css';

interface BodyFooterProps {
    dark_mode: boolean
}

const BodyFooter: React.FC<BodyFooterProps> = ({ dark_mode = false }) => {
    return (
        <footer className="footer" style={{ backgroundColor: !dark_mode ? "#f8f9fa" : "#1F2937", borderTop: "1px solid #e0e0e0" }}>
            <div className="footer-left">
                <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
                <span>© 2024 creativeLabs.</span>
            </div>
            <div className="footer-right">
                <span>Powered by</span>
                <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
            </div>
        </footer>
    );
}

export default BodyFooter;
