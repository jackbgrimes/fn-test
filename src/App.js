import React, { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are the Freese and Nichols People Assistant — a warm, plain-spoken HR guide for Freese and Nichols employees. Your job is to help people understand their real 2025 benefits, make smart plan choices, navigate Workday, and know their employment rights.

Golden rule: Never use insurance jargon without immediately explaining it in everyday language. When someone asks a confusing question, guide them like a trusted friend who happens to know HR inside and out.

When helping someone choose a health plan, ask a few friendly questions first (how often do they see the doctor, do they have ongoing prescriptions, do they have a family, are they generally healthy, do they want to save for retirement). Then recommend the right plan and explain why in simple terms.

================================================================
SECTION 1 — 2025 MEDICAL PLANS (Blue Cross Blue Shield)
================================================================

There are THREE medical plan options. All use the same BCBS national network. All cover preventive care at 100% with no cost to you.

--- PLAN 1: HDHP (High Deductible Health Plan) + HSA ---
Best for: Healthy employees who rarely see the doctor, or anyone who wants to build tax-free savings.

WHAT YOU PAY PER PAYCHECK (bi-weekly):
- Employee Only: $31.49
- Employee + Spouse: $155.16
- Employee + Children: $144.96
- Employee + Family: $234.82

KEY NUMBERS:
- Deductible: $3,300 individual / $6,000 family
  (Plain English: you pay this amount out of pocket before insurance kicks in for most things)
- Out-of-Pocket Max: $4,000 individual / $8,000 family
  (Plain English: the most you'll ever pay in a year — after this, insurance covers everything)
- Doctor visits (PCP & Specialist): Free after deductible
- Urgent Care: Free after deductible
- ER: Free after deductible
- Preventive Care: 100% FREE, no deductible needed
- Prescriptions: You pay full cost until deductible is met, then: Generic $10 / Brand $35 / Non-Preferred $60

FREE MONEY FROM FREESE AND NICHOLS (HSA contributions):
- Employee Only: $700/year added to your HSA by company
- Employee + Spouse: $1,000/year
- Employee + Children: $1,200/year
- Family: $1,500/year

HSA TRIPLE TAX ADVANTAGE: Contributions go in tax-free, grow tax-free, and come out tax-free for medical expenses. The HSA is yours to keep forever — it rolls over every year and goes with you if you leave.

You can also add your own HSA contributions up to: $4,300 (individual) or $8,550 (family) total for 2025.

IMPORTANT INSIGHT: After you hit the HDHP deductible, the plan pays 100% — zero coinsurance. The PPO plans still make you pay 20% after the deductible.

--- PLAN 2: BASE PPO + HRA ---
Best for: Employees who see the doctor a moderate amount and want predictable copays.

WHAT YOU PAY PER PAYCHECK (bi-weekly):
- Employee Only: $53.08
- Employee + Spouse: $232.61
- Employee + Children: $206.49
- Employee + Family: $333.90

KEY NUMBERS:
- Deductible: $1,500 individual / $3,000 family
- Out-of-Pocket Max: $4,000 individual / $8,000 family
- PCP Visit Copay: $30 (doesn't count toward deductible)
- Specialist Copay: $50 (doesn't count toward deductible)
- Urgent Care: $50 copay
- ER: $200 copay
- Telehealth: $30 copay
- Inpatient/Outpatient: 20% after deductible
- Prescriptions: Generic $10 / Brand $35 / Non-Preferred $60 (no deductible required)

FREE MONEY FROM FREESE AND NICHOLS (HRA):
- Company puts $1,300 into an HRA to reimburse ONE family member's deductible per year

NOTE: PPO copays do NOT count toward your deductible. You'll pay those copays every single visit regardless.

--- PLAN 3: BUY UP PPO + HRA ---
Best for: Employees with frequent doctor visits, ongoing specialist care, or families with higher healthcare needs.

WHAT YOU PAY PER PAYCHECK (bi-weekly):
- Employee Only: $81.00
- Employee + Spouse: $332.68
- Employee + Children: $313.63
- Employee + Family: $497.09

KEY NUMBERS:
- Deductible: $1,000 individual / $2,000 family (lowest of all three plans)
- Out-of-Pocket Max: $3,000 individual / $6,000 family (best protection of all three plans)
- PCP & Specialist: $25 copay (same price for both)
- Urgent Care: $50 copay
- ER: $100 copay
- Telehealth: $25 copay
- Inpatient/Outpatient: 20% after deductible
- Prescriptions: Generic $10 / Brand $35 / Non-Preferred $60

FREE MONEY FROM FREESE AND NICHOLS (HRA): $500 toward one family member's deductible.

--- PLAN SELECTION GUIDE ---
Q1: How often do you see the doctor in a typical year?
- Rarely (1-2 times, mostly preventive) → HDHP is likely the best deal
- Sometimes (4-8 visits) → Compare HDHP vs Base PPO
- Frequently (8+ visits, specialists, ongoing care) → Buy Up PPO likely worth it

Q2: Do you take regular prescriptions?
- No → HDHP savings are higher
- Yes → PPO plans let you pay copays immediately without hitting deductible first

Q3: Do you want to build a health savings nest egg?
- Yes → HDHP + HSA is the only plan that allows this

Q4: Do you want the lowest possible out-of-pocket risk?
- Yes → Buy Up PPO ($3,000 individual max vs $4,000 for others)

Q5: Do you want the lowest paycheck deduction?
- Yes → HDHP at $31.49/paycheck for individual

QUICK RULE OF THUMB:
- Healthy + rarely see the doctor = HDHP (save on premiums, build HSA)
- Middle ground = Base PPO
- High healthcare user or family with medical needs = Buy Up PPO

================================================================
SECTION 2 — DENTAL (Delta Dental)
================================================================

BASE DENTAL — $10.54/bi-weekly (Employee Only):
- Preventive (exams, cleanings): 100% covered, 2x/year
- Basic (fillings): 80% covered
- Major (crowns, root canals, implants): 50% covered
- Annual max: $1,750/person | Ortho: $1,000 lifetime

BUY UP DENTAL — $16.79/bi-weekly (Employee Only):
- Preventive: 100% | Basic: 90% | Major: 60%
- Annual max: $2,500/person | Ortho: $1,000 lifetime
- Bonus: Extra dental benefits for pregnant employees

Both plans: $50 individual / $150 family deductible (basic and major only).
Pick Buy Up if you anticipate crowns, implants, root canals, or braces. Otherwise Base is fine.

================================================================
SECTION 3 — VISION (VSP)
================================================================

ONE plan. $2.43/bi-weekly (Employee Only).
- Exam: Covered in full, $10 copay — every 12 months
- Eyeglass lenses: Covered in full, $25 copay — every 12 months
- Frames: $130 allowance, every 24 months
- Contacts: $130 allowance, every 12 months

================================================================
SECTION 4 — 401(K) RETIREMENT (Vanguard)
================================================================

COMPANY MATCH — always contribute at least 6% to get the full match:
- 100% match on your first 1% of salary contributed
- 50% match on the next 5% you contribute
- Example on $80,000 salary contributing 6%: You put in $4,800, company adds $2,400 free

PROFIT SHARING: Additional annual contribution based on company performance.

VESTING: 100% vested after 2 years. All company contributions are permanently yours after that.

ELIGIBILITY: Day 1 of employment.

PRE-TAX vs ROTH:
- Traditional 401(k): Reduces taxes now, pay taxes at withdrawal in retirement
- Roth 401(k): Pay taxes now, all growth and withdrawals in retirement are tax-free

2025 LIMIT: $23,500/year ($31,000 if age 50+).

To change contributions anytime: visit vanguard.com (not just during open enrollment).

ESOP: As an employee-owned company, you also receive company stock over time — additional retirement wealth on top of your 401(k).

================================================================
SECTION 5 — FLEXIBLE SPENDING ACCOUNTS (FSAs)
================================================================

HEALTH CARE FSA (PPO members only): Up to $3,300/year pre-tax. $660 rolls over. Use for copays, prescriptions, LASIK, orthodontia, fertility treatments.

LIMITED PURPOSE FSA (HDHP + HSA members): Dental and vision expenses only. Lets you preserve your HSA for bigger costs.

DEPENDENT CARE FSA: For daycare, after-school care, nanny, day camps (kids under 13).
- Freese and Nichols contributes $1,000/year to this for you — free money most employees don't know about!
- Annual limit: $5,000 (company's $1,000 counts toward this)

================================================================
SECTION 6 — LIFE & DISABILITY
================================================================

BASIC LIFE: Provided free, automatic.
VOLUNTARY LIFE (Symetra): Add more for yourself, spouse, and children.
SHORT-TERM DISABILITY: Day 1, no cost. Starts after 14-day absence. Covers up to 24 weeks. Pays % of salary.
LONG-TERM DISABILITY: Begins 6 months after absence.

================================================================
SECTION 7 — SUPPLEMENTAL BENEFITS
================================================================

ACCIDENT INSURANCE (Symetra): Lump sum if injured. Don't need FNI medical plan to enroll.
CRITICAL ILLNESS (Symetra): Lump sum for cancer, heart attack, stroke diagnosis.
HOSPITAL INDEMNITY: Pays you directly if hospitalized.
EAP: Free, confidential. Mental health, financial advice, legal referrals. 24/7. Covers you, spouse, kids, parents, in-laws.
LEGALSHIELD: Attorney access 24/7 via app. 22 years average attorney experience.
IDSHIELD: Credit and identity monitoring + full restoration if stolen.
NATIONWIDE PET INSURANCE: Sign up during open enrollment.
COMPANY CABINS: Red River, NM — book through HR.
HEALTHCARE ADVISOR (FREE): Personal consultants who help find doctors, compare drug prices, review bills, resolve disputes. A hidden gem most employees don't use.

================================================================
SECTION 8 — WORKDAY HOW-TO
================================================================

REQUEST TIME OFF:
1. Log in → "Time Off" app → "Request" → select type → pick dates → Submit
To cancel: "Manage Absence" → find entry → Retract or Cancel

VIEW PTO BALANCE: Time Off app → balances shown at top, updated each pay period

VIEW PAY STUB: "Pay" app → "Payslips" → select period → View → download PDF

SET UP DIRECT DEPOSIT: "Pay" app → "Payment Elections" → Add → routing/account → Submit (1-2 pay cycles)

UPDATE TAX WITHHOLDING: "Pay" app → "Withholding Elections" → Federal or State → Submit

BENEFITS ENROLLMENT (Open Enrollment, each fall):
1. Workday inbox → "Open Enrollment" task → "Let's Get Started"
2. Walk through each category → add/update dependents → "I Accept" → Submit

LIFE EVENT (Marriage, Baby, etc.): Benefits app → "Change Benefits" → select event → attach docs → Submit. Must be within 30 days.

UPDATE PERSONAL INFO: Profile photo → View Profile → Personal tab → edit → Submit

VIEW W-2: "Pay" app → "My Tax Documents" → select year → download PDF

CHANGE 401(K): Go to vanguard.com directly — changeable anytime, not just open enrollment.

TROUBLE LOGGING IN: Use company-specific Workday link (not workday.com). "Forgot Password" if locked out. Contact IT or HR if still stuck.

================================================================
SECTION 9 — TIME OFF & FLEXIBILITY
================================================================

PTO: Accrues each pay period. Sick time included (not separate).
HOLIDAYS: 8/year — 6 fixed + 2 floating (you choose).
ALTERNATIVE WORK SCHEDULE: Every other Friday off — discuss with supervisor.
PTO DONATION: Give unused PTO to a coworker facing serious illness.
OVERTIME BANKING: Salaried employees bank overtime into PTO or take straight pay.
HYBRID: Up to 40% remote.
FMLA: Up to 12 weeks unpaid leave per year for qualifying events. 26 weeks for military caregiver leave.

================================================================
SECTION 10 — EMPLOYMENT LAW
================================================================
When a question involves state or local employment law, you will receive real-time web search results. Summarize them clearly and always note: "For your specific situation, please confirm with HR or an employment attorney."

================================================================
RESPONSE RULES
================================================================
- Warm, conversational, jargon-free
- Always explain technical terms in plain English immediately
- For plan comparisons: ask clarifying questions first, then give a clear recommendation
- Numbered steps for Workday tasks
- Bullets only for 3+ items
- End with a natural follow-up offer
- If outside knowledge base: "I don't have that detail — reach out to HR or check the Benefits portal in Workday, or call MMA Service Center at 1-888-867-3015."`;

const SUGGESTED = [
  "Which health plan is right for me?",
  "Explain the HDHP vs PPO difference",
  "How does the 401(k) match work?",
  "Should I get Base or Buy Up dental?",
  "How do I request time off in Workday?",
  "What's an HSA and why does it matter?",
  "What does the company put into my HSA?",
  "What are my FMLA rights in Texas?",
];

const LEGAL_KW = ["law","legal","right","fmla","leave","terminat","fired","wage","salary","overtime pay","discriminat","harass","ada","title vii","cobra","minimum wage","final paycheck","layoff","severance","workers comp","protect","retaliat","wrongful"];
const STATE_MAP = {"texas":"Texas","tx":"Texas","north carolina":"North Carolina","nc":"North Carolina","florida":"Florida","fl":"Florida","oklahoma":"Oklahoma","ok":"Oklahoma","arkansas":"Arkansas","ar":"Arkansas","california":"California","ca":"California","new york":"New York","ny":"New York","colorado":"Colorado","co":"Colorado","virginia":"Virginia","va":"Virginia"};

const isLegal = t => LEGAL_KW.some(k => t.toLowerCase().includes(k));
const getState = t => { const l = t.toLowerCase(); for (const [k,v] of Object.entries(STATE_MAP)) if (l.includes(k)) return v; return null; };

const STORAGE_KEY = "fn_owner_api_key";

// Calls our Vercel proxy instead of Anthropic directly
const callProxy = (apiKey, body) =>
  fetch("/api/proxy", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-api-key": apiKey },
    body: JSON.stringify(body),
  });

// ── Admin Panel ───────────────────────────────────────────────────────────────
function AdminPanel({ onSave, existingKey }) {
  const [key, setKey] = useState("");
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  const handleSave = async () => {
    if (!key.trim().startsWith("sk-")) { setErrMsg("Key should start with sk-"); setStatus("error"); return; }
    setStatus("testing"); setErrMsg("");
    try {
      const res = await callProxy(key.trim(), { model: "claude-sonnet-4-20250514", max_tokens: 10, messages: [{ role: "user", content: "hi" }] });
      if (res.status === 401) { setErrMsg("Invalid API key — double-check and try again."); setStatus("error"); return; }
      if (!res.ok) { setErrMsg(`Error ${res.status} — please try again.`); setStatus("error"); return; }
      localStorage.setItem(STORAGE_KEY, key.trim());
      setStatus("saved");
      setTimeout(() => onSave(key.trim()), 800);
    } catch (e) { setErrMsg("Could not reach the server. Is the app running?"); setStatus("error"); }
  };

  const handleClear = () => { localStorage.removeItem(STORAGE_KEY); onSave(null); };

  return (
    <div style={{ minHeight: "100vh", background: "#F2EFE9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Georgia', serif", padding: 24 }}>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div style={{ width: "100%", maxWidth: 480, animation: "fadeIn 0.4s ease forwards" }}>
        <div style={{ background: "#1B2F3E", borderRadius: "14px 14px 0 0", padding: "20px 28px", display: "flex", alignItems: "center", gap: 12 }}>
          <img src="https://www.freese.com/wp-content/uploads/2020/09/logo.svg" alt="Freese and Nichols" style={{ height: 28, filter: "brightness(0) invert(1)" }} onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }} />
          <span style={{ display: "none", color: "#F2EFE9", fontWeight: "bold", fontSize: 16 }}>Freese and Nichols</span>
          <div style={{ marginLeft: "auto", background: "#B8933A", borderRadius: 6, padding: "3px 10px", fontSize: 11, color: "#1B2F3E", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>Owner Setup</div>
        </div>
        <div style={{ background: "#fff", borderRadius: "0 0 14px 14px", padding: "32px 28px", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}>
          <div style={{ fontSize: 20, fontWeight: "bold", color: "#1B2F3E", marginBottom: 8 }}>{existingKey ? "Update your API key" : "Set your API key"}</div>
          <div style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 24, fontFamily: "sans-serif" }}>
            Enter your Anthropic API key once. It's saved in your browser so anyone you share this link with can use the demo — no key required on their end.
            <br /><br />Get a free key at <a href="https://console.anthropic.com" target="_blank" rel="noreferrer" style={{ color: "#B8933A" }}>console.anthropic.com</a>
          </div>
          {existingKey && (
            <div style={{ background: "#E8F0E8", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "#2A4A2A", fontFamily: "sans-serif" }}>
              ✓ Key currently saved: <strong>{existingKey.slice(0, 14)}…</strong>
            </div>
          )}
          <div style={{ position: "relative", marginBottom: 12 }}>
            <input type={show ? "text" : "password"} value={key} onChange={e => { setKey(e.target.value); setStatus(null); setErrMsg(""); }} onKeyDown={e => e.key === "Enter" && handleSave()} placeholder="sk-ant-api03-..."
              style={{ width: "100%", padding: "12px 44px 12px 14px", borderRadius: 10, border: `1.5px solid ${status === "error" ? "#C0392B" : status === "saved" ? "#7A9E7A" : "#D8D3C8"}`, fontSize: 14, fontFamily: "monospace", color: "#2A2A2A", background: "#F9F7F4", boxSizing: "border-box", outline: "none" }} />
            <button onClick={() => setShow(s => !s)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#999", padding: 0 }}>{show ? "🙈" : "👁"}</button>
          </div>
          {status === "error" && <div style={{ color: "#C0392B", fontSize: 13, fontFamily: "sans-serif", marginBottom: 12 }}>{errMsg}</div>}
          {status === "saved" && <div style={{ color: "#3A6B3A", fontSize: 13, fontFamily: "sans-serif", marginBottom: 12 }}>✓ Verified and saved! Launching…</div>}
          <button onClick={handleSave} disabled={!key.trim() || status === "testing" || status === "saved"}
            style={{ width: "100%", padding: "13px", borderRadius: 10, background: key.trim() && status !== "testing" && status !== "saved" ? "#1B2F3E" : "#D8D3C8", border: "none", color: "#F2EFE9", fontSize: 15, fontFamily: "'Georgia', serif", cursor: key.trim() && status !== "testing" ? "pointer" : "not-allowed", fontWeight: "bold", transition: "all 0.2s", marginBottom: existingKey ? 10 : 0 }}>
            {status === "testing" ? "Verifying…" : status === "saved" ? "Saved ✓" : "Save & Launch →"}
          </button>
          {existingKey && (
            <button onClick={handleClear} style={{ width: "100%", padding: "11px", borderRadius: 10, background: "transparent", border: "1.5px solid #D8D3C8", color: "#999", fontSize: 14, fontFamily: "'Georgia', serif", cursor: "pointer", marginTop: 8 }}>Clear saved key</button>
          )}
          <div style={{ marginTop: 18, padding: "12px 14px", background: "#FFF8EE", border: "1px solid #E8D5A0", borderRadius: 8, fontSize: 12, color: "#7A5A00", fontFamily: "sans-serif", lineHeight: 1.5 }}>
            ⚠ <strong>Note:</strong> Your key is saved in your browser's local storage. Anyone you share the deployed URL with will use your key. Monitor usage at <a href="https://console.anthropic.com" target="_blank" rel="noreferrer" style={{ color: "#B8933A" }}>console.anthropic.com</a>.
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 16, fontSize: 11, color: "#AAA", fontFamily: "sans-serif" }}>Freese and Nichols People Assistant · Concept Prototype</div>
      </div>
    </div>
  );
}

// ── Chat ──────────────────────────────────────────────────────────────────────
function Chat({ apiKey, onManageKey }) {
  const [msgs, setMsgs] = useState([{
    role: "assistant",
    content: "Hi! I'm your Freese and Nichols People Assistant.\n\nI'm loaded with your real 2025 benefits — all three health plans with actual numbers, dental, vision, 401(k) details, FSAs, and more. I can walk you through the differences in plain English and help you figure out what's right for you.\n\nWhat can I help you with?",
    legal: false,
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState("Thinking…");
  const [err, setErr] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, loading]);

  const send = async (text) => {
    const q = (text || input).trim();
    if (!q || loading) return;
    setInput(""); setErr(null);
    const next = [...msgs, { role: "user", content: q, legal: false }];
    setMsgs(next); setLoading(true);
    const needsLaw = isLegal(q);
    const state = getState(q);

    try {
      let legalCtx = "";
      if (needsLaw) {
        setLabel("Searching employment law…");
        const sq = state ? `${state} employment law ${q.slice(0, 60)}` : `US employment law ${q.slice(0, 60)}`;
        const sr = await callProxy(apiKey, {
          model: "claude-sonnet-4-20250514", max_tokens: 1000,
          tools: [{ type: "web_search_20250305", name: "web_search" }],
          messages: [{ role: "user", content: `Search: ${sq}. Summarize current employee rights, requirements, and deadlines concisely.` }],
        });
        const sd = await sr.json();
        const t = (sd.content || []).filter(b => b.type === "text").map(b => b.text).join("\n");
        if (t) legalCtx = `\n\n== LIVE LEGAL SEARCH RESULTS ==\n${t}`;
      }

      setLabel("Composing answer…");
      const apiMsgs = next.map(m => ({ role: m.role, content: m.content }));
      if (legalCtx) apiMsgs[apiMsgs.length - 1] = { role: "user", content: q + legalCtx };

      const res = await callProxy(apiKey, {
        model: "claude-sonnet-4-20250514", max_tokens: 1500,
        system: SYSTEM_PROMPT, messages: apiMsgs,
      });
      const d = await res.json();
      const reply = d.content?.[0]?.text || "Sorry, I couldn't get a response. Please try again.";
      setMsgs([...next, { role: "assistant", content: reply, legal: needsLaw }]);
    } catch {
      setErr("Connection error — please try again.");
      setMsgs(next);
    } finally {
      setLoading(false); setLabel("Thinking…");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F2EFE9", fontFamily: "'Georgia', serif", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <style>{`
        @keyframes bounce{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-6px);opacity:1}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .chip:hover{background:#B8933A!important;color:#fff!important}
        textarea:focus{outline:none}
      `}</style>

      {/* Header */}
      <div style={{ width: "100%", background: "#1B2F3E", padding: "13px 24px", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.18)" }}>
        <img src="https://www.freese.com/wp-content/uploads/2020/09/logo.svg" alt="Freese and Nichols" style={{ height: 32, filter: "brightness(0) invert(1)" }} onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }} />
        <span style={{ display: "none", color: "#F2EFE9", fontWeight: "bold", fontSize: 17 }}>Freese and Nichols</span>
        <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.18)", margin: "0 4px" }} />
        <div>
          <div style={{ color: "#F2EFE9", fontSize: 14, fontWeight: "bold", letterSpacing: "0.02em" }}>People Assistant</div>
          <div style={{ color: "#7A9E7A", fontSize: 11, fontFamily: "sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>2025 Benefits · Workday · Employment Law</div>
        </div>
        <button onClick={onManageKey} style={{ marginLeft: "auto", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#B8933A", fontSize: 11, fontFamily: "sans-serif", padding: "5px 10px", cursor: "pointer" }}>⚙ API Key</button>
      </div>

      {/* Banner */}
      <div style={{ width: "100%", background: "#B8933A", padding: "6px", textAlign: "center", fontSize: 11, color: "#1B2F3E", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        ✦ Internal Concept Mockup · Not Connected to Live HR Systems ✦
      </div>

      {/* Pills */}
      <div style={{ width: "100%", maxWidth: 760, padding: "14px 20px 0", display: "flex", gap: 8, flexWrap: "wrap" }}>
        {[["🏥","Health Plans"],["🦷","Dental & Vision"],["💼","401(k) & ESOP"],["📋","Workday How-To"],["⚖","Employment Law"],["🏖","Time Off"]].map(([icon, lbl]) => (
          <div key={lbl} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", background: "#fff", borderRadius: 20, fontSize: 12, color: "#1B2F3E", fontFamily: "sans-serif", boxShadow: "0 1px 4px rgba(0,0,0,.08)" }}>
            <span>{icon}</span><span style={{ fontWeight: 600 }}>{lbl}</span>
          </div>
        ))}
      </div>

      {/* Messages */}
      <div style={{ flex: 1, width: "100%", maxWidth: 760, display: "flex", flexDirection: "column", padding: "18px 20px 0", gap: 14, overflowY: "auto" }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", animation: "fadeIn 0.3s ease forwards" }}>
            {m.role === "assistant" && (
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#1B2F3E", border: "2px solid #7A9E7A", display: "flex", alignItems: "center", justifyContent: "center", marginRight: 10, flexShrink: 0, marginTop: 2, overflow: "hidden" }}>
                <img src="https://www.freese.com/wp-content/uploads/2020/09/logo.svg" alt="" style={{ width: 20, filter: "brightness(0) invert(1)" }} onError={e => { e.target.parentNode.innerHTML = "🌿"; }} />
              </div>
            )}
            <div style={{ maxWidth: "76%" }}>
              {m.role === "assistant" && m.legal && (
                <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#E8F0E8", color: "#3A6B3A", borderRadius: 10, fontSize: 10, fontFamily: "sans-serif", fontWeight: 700, padding: "2px 8px", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 6 }}>⚖ Live Legal Search</div>
              )}
              <div style={{ padding: m.role === "user" ? "11px 16px" : "13px 17px", borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "4px 18px 18px 18px", background: m.role === "user" ? "#1B2F3E" : "#FFFFFF", color: m.role === "user" ? "#F2EFE9" : "#2A2A2A", fontSize: 15, lineHeight: 1.7, whiteSpace: "pre-wrap", boxShadow: m.role === "user" ? "0 2px 12px rgba(27,47,62,.2)" : "0 2px 10px rgba(0,0,0,.07)" }}>
                {m.content}
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", alignItems: "flex-start", animation: "fadeIn 0.3s ease forwards" }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#1B2F3E", border: "2px solid #7A9E7A", display: "flex", alignItems: "center", justifyContent: "center", marginRight: 10, flexShrink: 0, overflow: "hidden" }}>
              <img src="https://www.freese.com/wp-content/uploads/2020/09/logo.svg" alt="" style={{ width: 20, filter: "brightness(0) invert(1)" }} onError={e => { e.target.parentNode.innerHTML = "🌿"; }} />
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "4px 18px 18px 18px", boxShadow: "0 2px 10px rgba(0,0,0,.07)" }}>
              <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "12px 16px" }}>
                {[0,1,2].map(i => <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#7A9E7A", animation: "bounce 1.2s infinite", animationDelay: `${i * 0.2}s` }} />)}
              </div>
              <div style={{ fontSize: 11, color: "#999", fontFamily: "sans-serif", padding: "0 16px 10px" }}>{label}</div>
            </div>
          </div>
        )}

        {err && <div style={{ textAlign: "center", color: "#C0392B", fontSize: 13, fontFamily: "sans-serif" }}>{err}</div>}

        {msgs.length === 1 && (
          <div style={{ marginTop: 4, marginBottom: 4 }}>
            <div style={{ fontSize: 11, color: "#999", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Try asking</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {SUGGESTED.map((q, i) => (
                <button key={i} className="chip" onClick={() => send(q)} style={{ padding: "8px 14px", background: "transparent", border: "1.5px solid #B8933A", borderRadius: 20, color: "#1B2F3E", fontSize: 13, cursor: "pointer", fontFamily: "'Georgia', serif", transition: "all 0.2s" }}>{q}</button>
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} style={{ height: 16 }} />
      </div>

      {/* Input */}
      <div style={{ width: "100%", maxWidth: 760, padding: "14px 20px 22px", display: "flex", gap: 10, alignItems: "flex-end" }}>
        <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 24, border: "1.5px solid #D8D3C8", display: "flex", alignItems: "center", padding: "10px 18px", boxShadow: "0 2px 10px rgba(0,0,0,.06)" }}>
          <textarea ref={inputRef} value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder="Ask about health plans, 401(k), dental, Workday, employment rights…"
            rows={1} style={{ flex: 1, border: "none", outline: "none", resize: "none", fontFamily: "'Georgia', serif", fontSize: 15, color: "#2A2A2A", background: "transparent", lineHeight: 1.5, maxHeight: 100, overflowY: "auto" }}
            onInput={e => { e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px"; }} />
        </div>
        <button onClick={() => send()} disabled={!input.trim() || loading}
          style={{ width: 46, height: 46, borderRadius: "50%", background: input.trim() && !loading ? "#1B2F3E" : "#D8D3C8", border: "none", cursor: input.trim() && !loading ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, color: "#F2EFE9", transition: "all 0.2s", flexShrink: 0, boxShadow: input.trim() && !loading ? "0 4px 14px rgba(27,47,62,.3)" : "none" }}>↑</button>
      </div>

      <div style={{ textAlign: "center", padding: "0 0 14px", fontSize: 11, color: "#AAA", fontFamily: "sans-serif" }}>
        Freese and Nichols People Assistant · 2025 Benefits · Concept Prototype · Legal info is general guidance only
      </div>
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem(STORAGE_KEY) || null);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleSave = (key) => { setApiKey(key); setShowAdmin(false); };

  if (!apiKey || showAdmin) return <AdminPanel onSave={handleSave} existingKey={apiKey} />;
  return <Chat apiKey={apiKey} onManageKey={() => setShowAdmin(true)} />;
}
