import Card from "./Card";
import "./Dashboard.css";

// ── Dot indicator ─────────────────────────────────────────────
const Dot = ({ color }) => (
  <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", backgroundColor: color, marginRight: 6 }} />
);

// ── Progress bar row ──────────────────────────────────────────
const StatsRow = ({ dot, label, value }) => {
  const pct = parseInt(value);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", fontSize: "12px" }}>
      <Dot color={dot} />
      <span style={{ flex: 1, color: "#555" }}>{label}</span>
      <div style={{ width: "90px", height: "5px", borderRadius: "4px", backgroundColor: "#e5e7eb" }}>
        <div style={{ width: `${pct}%`, height: "100%", borderRadius: "4px", backgroundColor: "#4f46e5" }} />
      </div>
      <span style={{ color: "#4f46e5", fontWeight: 700, width: "34px", textAlign: "right" }}>{value}</span>
    </div>
  );
};

// ── Top Section ──────────────────────────────────────────────
const TopSection = () => (
  <div className="top-section">
    {/* Left: headline */}
    <div className="top-headline">
      <p style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", lineHeight: 1.4 }}>
        We automatically generate<br />reports for each of your<br />customers
      </p>
    </div>

    {/* Middle: company card */}
    <Card style={{ padding: "16px" }}>
      {/* pink progress bar at top */}
      <div style={{ height: "4px", borderRadius: "4px", background: "linear-gradient(to right, #f9a8d4 60%, #e5e7eb 60%)", marginBottom: "14px" }} />
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <div style={{ width: "38px", height: "38px", borderRadius: "8px", backgroundColor: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <span style={{ color: "#fff", fontSize: "16px" }}>▤</span>
          <span style={{ position: "absolute", bottom: "-3px", right: "-3px", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#22c55e", border: "2px solid #fff" }} />
        </div>
        <div>
          <p style={{ fontWeight: 700, margin: 0, fontSize: "14px" }}>Intercom</p>
          <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>Joined 9 Feb 2023</p>
        </div>
      </div>
      {[["Total seats", "50"], ["Active seats", "22"], ["Active last 7 days", "True"]].map(([label, val]) => (
        <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderTop: "1px solid #f1f5f9", fontSize: "12px" }}>
          <span style={{ color: "#6b7280" }}>
            <span style={{ color: "#22c55e", marginRight: 4 }}>⚡</span>{label}
          </span>
          <span style={{ fontWeight: 700, color: val === "True" ? "#10b981" : "#0f172a" }}>{val}</span>
        </div>
      ))}
    </Card>

    {/* Right: activation card */}
    <Card style={{ padding: "16px" }}>
      <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "2px" }}>Company activation</p>
      <p style={{ fontSize: "30px", fontWeight: 800, margin: "0 0 14px", color: "#0f172a" }}>40%</p>
      <StatsRow label="👋Signed up"   value="100%" />
      <StatsRow label="⚙️Setup"        value="80%"  />
      <StatsRow label="🌓Aha moment"   value="60%"  />
      <StatsRow label="🤯Activated"    value="40%"  />
      <StatsRow label="🏃‍♂️Active"       value="80%"  />
    </Card>
  </div>
);

// ── Milestone Section (purple) ────────────────────────────────
const MilestoneSection = () => (
  <Card style={{ backgroundColor: "#f3e8ff", boxShadow: "none", padding: "24px" }}>
    <p style={{ fontSize: "17px", fontWeight: 800, color: "#7c3aed", marginBottom: "6px" }}>
      Celebrate milestones
    </p>
    <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: "20px", lineHeight: 1.5 }}>
      Instant alerts and weekly digests to keep your team aligned and celebrate wins
    </p>

    {/* Slack-style notification card */}
    <Card style={{ fontSize: "12px", padding: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "20px", height: "20px", borderRadius: "4px", backgroundColor: "#4f46e5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: "10px" }}>J</span>
          </div>
          <span style={{ fontWeight: 700 }}>June</span>
          <span style={{ color: "#9ca3af", fontSize: "11px" }}>AM · 10:38 AM</span>
        </div>
        <span style={{ fontSize: "16px" }}>✦</span>
      </div>

      <p style={{ color: "#f59e0b", fontWeight: 700, marginBottom: "3px" }}>⭐ Qualified signup</p>
      <p style={{ marginBottom: "10px" }}>
        <span style={{ marginRight: 4 }}>👤</span>
        <span style={{ fontWeight: 600 }}>Eoghan McCabe </span>
        <span style={{ color: "#4f46e5" }}>eoghan@intercom.io</span>
      </p>

      <div style={{ border: "1px solid #f1f5f9", borderRadius: "8px", padding: "10px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", color: "#374151" }}>
          {[
            ["Company name:", "Intercom"],       ["Location:", "Dublin, Ireland"],
            ["Role:", "CTO & Co-Founder"],        ["Company website:", "intercom.io"],
            ["Company size:", "800"],             ["LinkedIn:", "View profile"],
            ["Funding amount:", "33M"],           ["Crunchbase:", "View company"],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ color: "#9ca3af", fontSize: "11px", marginBottom: "1px" }}>{k}</div>
              <div style={{ color: ["Company website:", "LinkedIn:", "Crunchbase:"].includes(k) ? "#4f46e5" : "#111", fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>

    {/* "Also done for you" footer */}
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#22c55e" }} />
        <span style={{ fontSize: "11px", color: "#374151" }}>⚡ Last seen</span>
        <span style={{ backgroundColor: "#bbf7d0", color: "#15803d", fontSize: "11px", fontWeight: 700, padding: "1px 8px", borderRadius: "20px" }}>today</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", margin: "12px 0 4px 8px" }}>
        <p style={{ fontFamily: "cursive", fontSize: "15px", color: "#374151", margin: "0 0 2px" }}>Also done for you</p>
        {/* Hand-drawn curly arrow */}
        <svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 8 C15 20, 25 30, 40 28 C50 27, 55 20, 52 14"
            stroke="#1e293b" strokeWidth="1.8" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
          />
          {/* arrowhead */}
          <path
            d="M52 14 L58 18 M52 14 L56 8"
            stroke="#1e293b" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#22c55e" }} />
        <span style={{ fontSize: "11px", color: "#374151" }}>⚡ Activated</span>
        <span style={{ backgroundColor: "#bbf7d0", color: "#15803d", fontSize: "11px", fontWeight: 700, padding: "1px 8px", borderRadius: "20px" }}>true</span>
      </div>
    </div>
  </Card>
);

// ── Enrichment Section (yellow/orange) ───────────────────────
const EnrichmentSection = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Card style={{ backgroundColor: "#fef3c7", boxShadow: "none", padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "17px", fontWeight: 800, color: "#92400e", marginBottom: "6px" }}>
            Automatic enrichment
          </p>
          <p style={{ fontSize: "13px", color: "#78716c", marginBottom: "16px", lineHeight: 1.5 }}>
            Automatically enrich your customers profiles and their users powered by GPT
          </p>
        </div>
        {/* Intercom logo badge */}
        <div style={{ width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "12px", flexShrink: 0 }}>
          <span style={{ color: "#fff", fontSize: "16px" }}>▤</span>
        </div>
      </div>

      <Card style={{ backgroundColor: "#fffbeb", padding: "14px" }}>
        <p style={{ color: "#a855f7", fontWeight: 700, fontSize: "12px", marginBottom: "12px" }}>✦ Enriched with AI</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "12px" }}>
          {[
            ["🌐", "Website",   "intercom.io"],
            ["📍", "Location",  "Dublin, Ireland"],
            ["👥", "Employees", "800"],
            ["🐦", "Twitter",   "@intercom"],
            ["💰", "Funding",   "$241M"],
            ["✅", "Qualified", "true"],
          ].map(([icon, label, val]) => (
            <div key={label} style={{ display: "flex", gap: "4px", alignItems: "baseline" }}>
              <span>{icon}</span>
              <span style={{ color: "#9ca3af" }}>{label}</span>
              <span style={{ color: val === "true" ? "#10b981" : "#374151", fontWeight: 600, marginLeft: "4px" }}>{val}</span>
            </div>
          ))}
        </div>
      </Card>
    </Card>

    {/* CRM Section (green) */}
    <Card style={{ backgroundColor: "#dcfce7", boxShadow: "none", padding: "24px" }}>
      <p style={{ fontSize: "17px", fontWeight: 800, color: "#15803d", marginBottom: "6px" }}>
        Integrated with your CRM
      </p>
      <p style={{ fontSize: "13px", color: "#4b5563", marginBottom: "16px", lineHeight: 1.5 }}>
        Connect June to your CRM and sync product usage data with your CS and sales teams
      </p>
      <Card style={{ padding: "14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ fontWeight: 700, fontSize: "13px" }}>CRM</span>
          <div style={{ display: "flex", gap: "6px", fontSize: "18px" }}>
            <span>🔴</span><span>🟠</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", fontSize: "11px", color: "#9ca3af", marginBottom: "6px", paddingBottom: "6px", borderBottom: "1px solid #f1f5f9" }}>
          <span>Company</span>
          <span>🪑 Active seats</span>
        </div>
        {[
          ["#3b82f6", "Intercom", "22 (+3)"],
          ["#f9a8d4", "Amie",     "20 (-2)"],
        ].map(([dot, company, seats]) => (
          <div key={company} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", fontSize: "12px", padding: "6px 0", borderTop: "1px solid #f1f5f9", alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 600 }}>
              <Dot color={dot} />{company}
            </span>
            <span style={{ color: seats.includes("+") ? "#10b981" : "#ef4444", fontWeight: 700 }}>{seats}</span>
          </div>
        ))}
      </Card>
    </Card>
  </div>
);

// ── Main Dashboard ────────────────────────────────────────────
const Dashboard = () => (
  <div className="dashboard-wrapper">
    <TopSection />
    <div className="bottom-grid">
      <MilestoneSection />
      <EnrichmentSection />
    </div>
  </div>
);

export default Dashboard;
