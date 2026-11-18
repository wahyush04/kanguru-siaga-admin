import { app, analytics } from './firebase';
import './App.css';

function App() {
  const projectId = app.options.projectId ?? 'Not configured';
  const authDomain = app.options.authDomain ?? 'Not configured';

  return (
    <main className="container">
      <section className="card">
        <span className="badge">React + Vite + Firebase</span>
        <h1 className="title">Kanguru Siaga Admin</h1>
        <p className="subtitle">
          Proyek web admin berhasil diinisialisasi dan terhubung dengan Firebase SDK.
        </p>

        <div className="status-box">
          <div className="status-row">
            <span className="status-label">Firebase App</span>
            <span className="status-value status-ok">Connected</span>
          </div>
          <div className="status-row">
            <span className="status-label">Project ID</span>
            <span className="status-value">{projectId}</span>
          </div>
          <div className="status-row">
            <span className="status-label">Auth Domain</span>
            <span className="status-value">{authDomain}</span>
          </div>
          <div className="status-row">
            <span className="status-label">Analytics</span>
            <span className="status-value">
              {analytics ? 'Initialized' : 'Unavailable'}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
