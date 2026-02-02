'use client';

export default function PrintButton() {
    return (
        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-8)' }}>
            <button
                className="btn btn-primary"
                onClick={() => { if (typeof window !== 'undefined') window.print(); }}
            >
                打印简历
            </button>
        </div>
    );
}
