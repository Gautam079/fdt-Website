import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import fdtLogo from "@/imports/fdt-icon-navbar.png";
import {
  Building2, Users, TrendingUp, Package, Factory, Target, CheckCircle2, Wrench,
  BarChart3, Sun, Cog, Heart, Briefcase, ArrowRight, Phone, Linkedin,
  MessageCircle, Check, Star, Menu, X, Shield, Clock, Zap, Globe,
  Handshake, Award, ChevronRight, Mail, AlertTriangle, LayoutDashboard,
  Database, FileText, ShoppingCart, Layers, Settings2, Activity
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const MODULES = [
  {
    id: 1, icon: Building2, title: "Company Management", color: "#2A8554",
    features: ["Organization Structure", "Department Management", "Company Policies", "Internal Communication", "Company Records"],
  },
  {
    id: 2, icon: Users, title: "Human Resource", color: "#0EA5E9",
    features: ["Employee Database", "Attendance Management", "Leave Management", "Employee Performance", "Document Management"],
  },
  {
    id: 3, icon: TrendingUp, title: "Accounts & Finance", color: "#10B981",
    features: ["Income Tracking", "Expense Tracking", "Financial Reports", "Payment Management", "Profit Analysis"],
  },
  {
    id: 4, icon: Package, title: "Inventory Management", color: "#F59E0B",
    features: ["Stock Tracking", "Purchase Management", "Material Monitoring", "Inventory Reports", "Supplier Records"],
  },
  {
    id: 5, icon: Factory, title: "Production Management", color: "#8B5CF6",
    features: ["Production Planning", "Work Orders", "Production Tracking", "Resource Monitoring", "Manufacturing Visibility"],
  },
  {
    id: 6, icon: Target, title: "Sales & CRM", color: "#EF4444",
    features: ["Lead Management", "Sales Pipeline", "Customer Tracking", "Opportunity Management", "Marketing Activities"],
  },
  {
    id: 7, icon: CheckCircle2, title: "Quality Check", color: "#14B8A6",
    features: ["Inspection Records", "Quality Audits", "Testing Reports", "Compliance Tracking", "Quality Performance"],
  },
  {
    id: 8, icon: Wrench, title: "Servicing", color: "#F97316",
    features: ["Complaint Management", "Service Requests", "Warranty Tracking", "AMC Management", "Technician Assignment"],
  },
  {
    id: 9, icon: BarChart3, title: "Executive Dashboard", color: "#6366F1",
    features: ["Executive Reporting", "KPI Monitoring", "Department Analytics", "Business Insights", "Performance Dashboards"],
  },
];

const CHALLENGES = [
  { icon: Database, text: "Data scattered across Excel sheets", stat: "73%" },
  { icon: Target, text: "Leads getting lost in the pipeline", stat: "45%" },
  { icon: Users, text: "Manual attendance & HR tracking", stat: "60%" },
  { icon: Package, text: "Inventory inaccuracies & overstock", stat: "38%" },
  { icon: Factory, text: "Zero production visibility", stat: "55%" },
  { icon: Clock, text: "Delayed servicing processes", stat: "48%" },
  { icon: MessageCircle, text: "Poor inter-department communication", stat: "67%" },
  { icon: BarChart3, text: "Lack of real-time reporting", stat: "80%" },
  { icon: Layers, text: "No centralized business system", stat: "91%" },
];

const PROCESS_STEPS = [
  { n: "01", title: "Business Assessment", desc: "We deeply understand your current operations, teams, and workflows." },
  { n: "02", title: "Process Analysis", desc: "Identify inefficiencies, bottlenecks, and automation opportunities." },
  { n: "03", title: "Solution Design", desc: "Architect a customized digital ecosystem tailored to your business." },
  { n: "04", title: "System Development", desc: "Build, configure, and integrate all required modules and workflows." },
  { n: "05", title: "Implementation", desc: "Deploy the system with zero disruption to your live operations." },
  { n: "06", title: "Training & Adoption", desc: "Onboard your teams with hands-on training and guided walkthroughs." },
  { n: "07", title: "Support & Growth", desc: "Continuous improvement, updates, and long-term partnership." },
];

const WHY_CARDS = [
  { icon: Briefcase, title: "Business First Approach", desc: "We study your operations before prescribing any solution." },
  { icon: Settings2, title: "Customized Systems", desc: "No off-the-shelf templates — every system is built around your workflows." },
  { icon: Shield, title: "Affordable Transformation", desc: "Enterprise-grade digitization at a price built for SMEs and MSMEs." },
  { icon: Zap, title: "Fast Deployment", desc: "From assessment to go-live in weeks, not months." },
  { icon: Activity, title: "Scalable Architecture", desc: "Systems that grow as your organization scales without re-platforming." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We stay invested in your growth beyond the initial deployment." },
  { icon: Award, title: "Operational Expertise", desc: "Deep knowledge of manufacturing, trading, solar, and service sectors." },
  { icon: Globe, title: "End-to-End Implementation", desc: "One partner from planning to production to continuous improvement." },
];

const INDUSTRIES = [
  { icon: Factory, label: "Manufacturing", desc: "Production, inventory & quality automation" },
  { icon: Sun, label: "Solar Industry", desc: "Project, AMC & service management" },
  { icon: Cog, label: "Industrial Equipment", desc: "Maintenance, service & warranty tracking" },
  { icon: Heart, label: "Healthcare Suppliers", desc: "Inventory, compliance & distribution" },
  { icon: Briefcase, label: "Service Organizations", desc: "Workforce, billing & client management" },
  { icon: TrendingUp, label: "Trading Companies", desc: "Purchase, sales & inventory integration" },
  { icon: Building2, label: "Growing SMEs", desc: "Full digital backbone for 10–500 employees" },
];

// ─── Helper hook ─────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Dashboard Mockup ─────────────────────────────────────────────────────────

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-3xl" />
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0E1D36]">
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1929] border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white/5 rounded px-8 py-0.5 text-[10px] text-white/30 font-mono tracking-wide">
              FDT — Executive Dashboard
            </div>
          </div>
          <LayoutDashboard size={12} className="text-white/20" />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-28 bg-[#0D1929] border-r border-white/10 py-4 px-2 flex flex-col gap-0.5 shrink-0">
            {[
              { icon: Building2, label: "Company", active: false },
              { icon: Users, label: "HR", active: false },
              { icon: TrendingUp, label: "Finance", active: false },
              { icon: Package, label: "Inventory", active: true },
              { icon: Factory, label: "Production", active: false },
              { icon: Target, label: "CRM", active: false },
              { icon: CheckCircle2, label: "Quality", active: false },
              { icon: Wrench, label: "Servicing", active: false },
              { icon: BarChart3, label: "Analytics", active: false },
            ].map(({ icon: Icon, label, active }) => (
              <div key={label}
                className={`flex items-center gap-2 px-2 py-1.5 rounded text-[10px] font-medium transition-colors ${
                  active ? "bg-emerald-600/25 text-emerald-300" : "text-white/40 hover:text-white/60"
                }`}>
                <Icon size={11} />
                {label}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="flex-1 p-3 min-w-0">
            {/* KPI row */}
            <div className="grid grid-cols-4 gap-2 mb-2">
              {[
                { label: "Total Leads", val: "2,847", up: "+12%", color: "#2A8554" },
                { label: "Production", val: "94.2%", up: "+3.1%", color: "#10B981" },
                { label: "Revenue", val: "₹48.2L", up: "+18%", color: "#F59E0B" },
                { label: "Open Tasks", val: "136", up: "-8%", color: "#8B5CF6" },
              ].map((m) => (
                <div key={m.label} className="bg-white/5 rounded-lg p-2 border border-white/[0.07]">
                  <div className="text-[8px] text-white/35 uppercase tracking-wider mb-0.5">{m.label}</div>
                  <div className="text-sm font-bold text-white leading-none">{m.val}</div>
                  <div className="text-[8px] mt-0.5" style={{ color: m.color }}>{m.up}</div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              {/* Bar chart */}
              <div className="col-span-2 bg-white/5 rounded-lg p-2.5 border border-white/[0.07]">
                <div className="text-[8px] text-white/35 mb-2 uppercase tracking-wider">Sales Pipeline — Q2 2024</div>
                <div className="flex items-end gap-1 h-14">
                  {[55, 72, 48, 85, 63, 91, 70, 58, 80].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all"
                      style={{ height: `${h}%`, background: i === 5 ? "#2A8554" : "rgba(42,133,84,0.3)" }} />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"].map(m => (
                    <span key={m} className="text-[7px] text-white/20">{m}</span>
                  ))}
                </div>
              </div>

              {/* Donut / status */}
              <div className="bg-white/5 rounded-lg p-2.5 border border-white/[0.07]">
                <div className="text-[8px] text-white/35 mb-2 uppercase tracking-wider">Dept Status</div>
                <div className="space-y-1.5">
                  {[
                    { d: "Manufacturing", pct: 87, c: "#10B981" },
                    { d: "Sales", pct: 72, c: "#2A8554" },
                    { d: "Finance", pct: 94, c: "#F59E0B" },
                  ].map(({ d, pct, c }) => (
                    <div key={d}>
                      <div className="flex justify-between text-[7px] text-white/40 mb-0.5">
                        <span>{d}</span><span style={{ color: c }}>{pct}%</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: c }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-white/5 rounded-lg p-2.5 border border-white/[0.07]">
              <div className="text-[8px] text-white/35 uppercase tracking-wider mb-2">Recent Activity</div>
              <div className="space-y-1">
                {[
                  { t: "QC Inspection — Batch #2841", s: "Completed", c: "#10B981" },
                  { t: "Service Request — AMC Renewal", s: "In Progress", c: "#F59E0B" },
                  { t: "Invoice Generated — Client #308", s: "Pending", c: "#2A8554" },
                ].map(({ t, s, c }) => (
                  <div key={t} className="flex items-center justify-between">
                    <div className="text-[8px] text-white/50 truncate">{t}</div>
                    <div className="text-[7px] px-1.5 py-0.5 rounded-full shrink-0 ml-2"
                      style={{ background: `${c}22`, color: c }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module pills floating */}
      <div className="absolute -right-4 top-16 hidden lg:flex flex-col gap-1.5">
        {["CRM", "HR", "Finance", "QC"].map((m, i) => (
          <div key={m} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-[10px] text-white/70 font-medium"
            style={{ transform: `translateX(${i % 2 === 0 ? "0" : "8px"})` }}>
            {m} ✓
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-[#2A8554] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
      <div className="w-1.5 h-1.5 rounded-full bg-[#2A8554]" />
      {children}
    </div>
  );
}

function SectionLabelDark({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      {children}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Solutions", href: "#modules" },
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "Case Studies", href: "#success" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#1A2D5A]/96 backdrop-blur-md shadow-xl shadow-black/20" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <ImageWithFallback
            src={fdtLogo}
            alt="FDT Solutions — Digital Transformation Partner"
            className="h-12 w-12 rounded-full object-contain bg-white p-1 shadow-lg"
          />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="text-white/65 hover:text-white text-sm font-medium transition-colors duration-150">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+917527028372" target="_blank" rel="noopener noreferrer"
            className="text-white/80 hover:text-[#2BA554] transition-colors duration-300" aria-label="Phone">
            <Phone size={17} />
          </a>
          <a
  href="https://wa.me/918130258372"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/80 hover:text-[#25D366] transition-colors duration-300"
  aria-label="WhatsApp"
>
  <MessageCircle size={17} />
</a>
          <a href="#contact"
            className="hidden lg:inline-flex items-center gap-2 bg-[#2A8554] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#22744A] transition-colors shadow-md shadow-emerald-500/25">
            Book Consultation
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white/70 hover:text-white transition-colors">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#1A2D5A] border-t border-white/10 px-6 pt-4 pb-6 space-y-1">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block text-white/65 hover:text-white py-2.5 text-sm border-b border-white/5">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="block mt-4 bg-[#2A8554] text-white text-center py-3 rounded-lg text-sm font-semibold">
            Book Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#1A2D5A] relative overflow-hidden flex items-center pt-16"
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-600/15 border border-emerald-500/25 text-emerald-300 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Digital Transformation Partner
            </div>

            <h1 className="text-5xl xl:text-7xl font-extrabold text-white leading-[1.04] tracking-tight mb-6">
              AUTOMATE.<br />
              <span className="text-[#2A8554]">OPTIMIZE.</span><br />
              GROW.
            </h1>

            <p className="text-lg text-white/65 leading-relaxed mb-4 max-w-lg" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
              Transform your business operations with customized digital systems, workflow automation, business dashboards, and process-driven solutions designed specifically for your organization.
            </p>
            <p className="text-sm text-white/40 mb-10 max-w-md" style={{ fontFamily: "Inter, sans-serif" }}>
              Replace spreadsheets, paperwork, disconnected tools, and inefficient processes with a fully integrated digital ecosystem.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact"
                className="inline-flex items-center gap-2 bg-[#2A8554] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#22744A] transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5">
                Book a Free Consultation
                <ArrowRight size={16} />
              </a>
              <a href="#modules"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-7 py-3.5 rounded-xl font-semibold hover:bg-white/5 hover:border-white/30 transition-all">
                Explore Solutions
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Stats bar */}
            <div className="mt-14 flex gap-8 border-t border-white/10 pt-8">
              {[
                { n: "9", l: "Business Modules" },
                { n: "500+", l: "Processes Automated" },
                { n: "100%", l: "Custom Built" },
              ].map(s => (
                <div key={s.l}>
                  <div className="text-2xl font-extrabold text-white">{s.n}</div>
                  <div className="text-xs text-white/40 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard */}
          <div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Challenges ───────────────────────────────────────────────────────────────

function Challenges() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-4xl font-extrabold text-[#1A2D5A] leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Most Businesses Are Still Managing<br />Operations <span className="text-[#2A8554]">Manually</span>
          </h2>
          <p className="text-[#5A7299] mt-4 max-w-xl mx-auto text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Manual operations create invisible costs — lost time, lost data, and lost opportunities. Here's what we see in most organizations:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CHALLENGES.map(({ icon: Icon, text, stat }, i) => (
            <div key={text}
              className={`group flex items-start gap-4 p-5 rounded-xl border border-[#EDF1F7] hover:border-red-200 hover:bg-red-50/40 transition-all duration-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                <AlertTriangle size={16} className="text-red-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1A2D5A] font-medium text-sm leading-snug" style={{ fontFamily: "Inter, sans-serif" }}>{text}</p>
                <p className="text-[10px] text-[#5A7299] mt-1">{stat} of SMEs face this challenge</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#1A2D5A] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#1C3464] transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}>
            Diagnose My Business Free <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── What is FDT ─────────────────────────────────────────────────────────────

function WhatIsFDT() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Ecosystem diagram */}
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative bg-[#1A2D5A] rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: "radial-gradient(#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
              {/* Central hub */}
              <div className="relative flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-[#2A8554] rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-emerald-500/40">
                  <span className="text-white font-extrabold text-sm">FDT</span>
                  <span className="text-emerald-200 text-[8px] font-medium">CORE</span>
                </div>
                {/* Orbiting modules */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {MODULES.slice(0, 8).map((m, i) => {
                    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
                    const r = 90;
                    const x = Math.cos(angle) * r;
                    const y = Math.sin(angle) * r;
                    const Icon = m.icon;
                    return (
                      <div key={m.id} className="absolute w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center"
                        style={{ transform: `translate(${x}px, ${y}px)`, background: `${m.color}22` }}>
                        <Icon size={14} style={{ color: m.color }} />
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Module labels */}
              <div className="relative mt-16 grid grid-cols-3 gap-2">
                {MODULES.map(m => {
                  const Icon = m.icon;
                  return (
                    <div key={m.id} className="flex items-center gap-1.5 bg-white/5 rounded-lg px-2 py-1.5">
                      <Icon size={10} style={{ color: m.color }} />
                      <span className="text-[9px] text-white/60 leading-tight">{m.title.split(" ")[0]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <SectionLabel>What is FDT</SectionLabel>
            <h2 className="text-4xl font-extrabold text-[#1A2D5A] leading-tight mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              A Complete Digital Transformation <span className="text-[#2A8554]">Ecosystem</span>
            </h2>
            <p className="text-[#5A7299] text-base leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              FDT studies your complete business workflow and creates a centralized system where departments, data, communication, reporting, approvals, and operations work together seamlessly.
            </p>
            <p className="text-[#5A7299] text-base leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              FDT is not a software development agency. We are your <strong className="text-[#1A2D5A]">Digital Transformation Partner</strong> — we analyze how your business actually operates, then build systems around your specific workflows.
            </p>
            <div className="space-y-3">
              {["One centralized platform for all departments", "Real-time visibility across operations", "Custom-built around your processes", "Scales as your business grows"].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2A8554]/10 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-[#2A8554]" />
                  </div>
                  <span className="text-[#1A2D5A] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Modules ─────────────────────────────────────────────────────────────────

function Modules() {
  const { ref, inView } = useInView(0.05);
  return (
    <section id="modules" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>The Platform</SectionLabel>
          <h2 className="text-4xl font-extrabold text-[#1A2D5A] leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            One Platform. <span className="text-[#2A8554]">Nine Business Functions.</span>
          </h2>
          <p className="text-[#5A7299] mt-4 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Every module is built to work independently or as part of the connected FDT ecosystem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={m.id}
                className={`group bg-[#F7F9FC] border border-[#EDF1F7] rounded-2xl p-6 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 cursor-default ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${m.color}15` }}>
                    <Icon size={20} style={{ color: m.color }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#5A7299] uppercase tracking-wider mb-0.5">Module {String(m.id).padStart(2, "0")}</div>
                    <h3 className="font-bold text-[#1A2D5A] text-base leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                      {m.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {m.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-[13px] text-[#5A7299]" style={{ fontFamily: "Inter, sans-serif" }}>
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ background: m.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-[#EDF1F7]">
                  <a href="#contact" className="text-xs font-semibold flex items-center gap-1 transition-colors"
                    style={{ color: m.color, fontFamily: "Inter, sans-serif" }}>
                    Learn more <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────

function Process() {
  const { ref, inView } = useInView(0.1);
  return (
    <section id="process" ref={ref} className="py-24 bg-[#1A2D5A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabelDark>How We Work</SectionLabelDark>
          <h2 className="text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Our Digital Transformation <span className="text-[#2A8554]">Process</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.n}
                className={`relative transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                {/* Step circle */}
                <div className="flex lg:justify-center mb-4">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-xs ${
                    i === 0 ? "bg-[#2A8554] border-[#2A8554] text-white" : "bg-transparent border-white/20 text-white/50"
                  }`}
                    style={{ fontFamily: "DM Mono, monospace" }}>
                    {s.n}
                  </div>
                </div>
                <div className="lg:text-center">
                  <h3 className="font-bold text-white text-sm mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{s.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── AOG Section ─────────────────────────────────────────────────────────────

const AOG_DATA = [
  {
    word: "AUTOMATE", color: "#2A8554", bg: "#1A2D5A",
    items: ["Workflow Automation", "Approval Systems", "Automated Notifications", "Task Automation", "Process Digitization"],
    icon: Zap,
  },
  {
    word: "OPTIMIZE", color: "#10B981", bg: "#071C0F",
    items: ["Centralized Operations", "Better Collaboration", "Real-Time Visibility", "Reduced Manual Work", "Improved Efficiency"],
    icon: Settings2,
  },
  {
    word: "GROW", color: "#F59E0B", bg: "#1C1100",
    items: ["Data-Driven Decisions", "Business Scalability", "Performance Monitoring", "Revenue Growth", "Operational Excellence"],
    icon: TrendingUp,
  },
];

function AOGSection() {
  const { ref, inView } = useInView(0.1);
  return (
    <section ref={ref} className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Our Promise</SectionLabel>
          <h2 className="text-4xl font-extrabold text-[#1A2D5A] leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            AUTOMATE · OPTIMIZE · GROW
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {AOG_DATA.map(({ word, color, items, icon: Icon }, i) => (
            <div key={word}
              className={`rounded-2xl p-8 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ background: "#1A2D5A", transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${color}20` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="text-2xl font-extrabold mb-6" style={{ color, fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                {word}
              </h3>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/65 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: `${color}20` }}>
                      <Check size={9} style={{ color }} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose ───────────────────────────────────────────────────────────────

function WhyChoose() {
  const { ref, inView } = useInView(0.05);
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Why FDT</SectionLabel>
          <h2 className="text-4xl font-extrabold text-[#1A2D5A] leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Why Choose <span className="text-[#2A8554]">FDT</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CARDS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title}
              className={`group p-6 rounded-2xl border border-[#EDF1F7] hover:border-[#2A8554]/20 hover:bg-[#E8F5EE] transition-all duration-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] flex items-center justify-center mb-4 group-hover:bg-[#2A8554]/15 transition-colors">
                <Icon size={18} className="text-[#2A8554]" />
              </div>
              <h3 className="font-bold text-[#1A2D5A] text-sm mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{title}</h3>
              <p className="text-[#5A7299] text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Success Stories ─────────────────────────────────────────────────────────

function SuccessStories() {
  const { ref, inView } = useInView();
  return (
    <section id="success" ref={ref} className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="text-4xl font-extrabold text-[#1A2D5A] leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Transformation in <span className="text-[#2A8554]">Action</span>
          </h2>
        </div>

        <div className={`bg-[#1A2D5A] rounded-3xl overflow-hidden transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid lg:grid-cols-2">
            {/* Story */}
            <div className="p-10 lg:p-14">
              <div className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-6">
                Manufacturing Company · 120 Employees
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                From Excel Chaos to<br />Full Digital Control
              </h3>

              <div className="space-y-6">
                {[
                  { label: "Problem", icon: AlertTriangle, color: "#EF4444", text: "A mid-size manufacturer was tracking production, inventory, and HR across 14 different Excel sheets. Data was inconsistent, reporting took 3 days, and inventory errors cost ₹8L/month." },
                  { label: "Solution", icon: Settings2, color: "#2A8554", text: "FDT deployed its Production, Inventory, HR, and Finance modules — fully connected and customized to their workflows within 6 weeks." },
                  { label: "Results", icon: TrendingUp, color: "#10B981", text: "Real-time production visibility, automated payroll, and live inventory tracking. Month-end reports now take 4 hours instead of 3 days." },
                ].map(({ label, icon: Icon, color, text }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${color}20` }}>
                      <Icon size={14} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color }}>{label}</div>
                      <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-white/65 text-sm italic leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  "FDT didn't just build software — they studied how we work and built a system around us. It felt like having a tech team inside our own company."
                </p>
                <div className="mt-3 text-xs text-white/40">— Operations Director, Manufacturing Client</div>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-[#0D1929] p-10 lg:p-14 flex flex-col justify-center">
              <h4 className="text-white/40 text-xs uppercase tracking-widest mb-8 font-mono">Business Impact</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: "72%", label: "Reduction in manual data entry", color: "#2A8554" },
                  { metric: "3×", label: "Faster month-end reporting", color: "#10B981" },
                  { metric: "₹8L", label: "Monthly savings on errors", color: "#F59E0B" },
                  { metric: "6 wks", label: "Full system deployment", color: "#8B5CF6" },
                  { metric: "100%", label: "Real-time inventory visibility", color: "#EF4444" },
                  { metric: "0", label: "Spreadsheets still in use", color: "#14B8A6" },
                ].map(({ metric, label, color }) => (
                  <div key={label}>
                    <div className="text-3xl font-extrabold mb-1" style={{ color, fontFamily: "'Bricolage Grotesque', sans-serif" }}>{metric}</div>
                    <div className="text-white/40 text-xs leading-snug" style={{ fontFamily: "Inter, sans-serif" }}>{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <div className="text-white/30 text-[10px] uppercase tracking-widest mb-3 font-mono">Before vs. After</div>
                {[
                  { before: "3 days", after: "4 hours", label: "Reporting time" },
                  { before: "14 sheets", after: "1 platform", label: "Data sources" },
                  { before: "Manual", after: "Automated", label: "Payroll processing" },
                ].map(({ before, after, label }) => (
                  <div key={label} className="flex items-center gap-3 mb-3">
                    <span className="text-red-400 text-xs w-20 text-right line-through" style={{ fontFamily: "DM Mono, monospace" }}>{before}</span>
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-green-400 text-xs w-20" style={{ fontFamily: "DM Mono, monospace" }}>{after}</span>
                    <span className="text-white/30 text-[10px] w-28 hidden xl:block" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Industries ───────────────────────────────────────────────────────────────

function Industries() {
  const { ref, inView } = useInView();
  return (
    <section id="industries" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Industries</SectionLabel>
          <h2 className="text-4xl font-extrabold text-[#1A2D5A] leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Industries We <span className="text-[#2A8554]">Serve</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {INDUSTRIES.map(({ icon: Icon, label, desc }, i) => (
            <div key={label}
              className={`group flex flex-col items-center text-center p-5 rounded-2xl border border-[#EDF1F7] hover:border-[#2A8554]/20 hover:bg-[#E8F5EE] transition-all duration-300 cursor-default ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5EE] flex items-center justify-center mb-3 group-hover:bg-[#2A8554]/15 transition-colors">
                <Icon size={22} className="text-[#2A8554]" />
              </div>
              <div className="font-bold text-[#1A2D5A] text-sm mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{label}</div>
              <div className="text-[10px] text-[#5A7299] leading-snug" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  const { ref, inView } = useInView();
  return (
    <section id="about" ref={ref} className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionLabel>About FDT</SectionLabel>
            <h2 className="text-4xl font-extrabold text-[#1A2D5A] leading-tight mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Building Smarter Businesses Through Digital Transformation
            </h2>
            <p className="text-[#5A7299] text-base leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              FDT was created to help businesses move beyond manual operations and embrace efficient, scalable, and technology-driven systems — without the complexity or cost traditionally associated with enterprise software.
            </p>
            <div className="bg-white rounded-2xl border border-[#EDF1F7] p-6 mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#2A8554] mb-2">Our Mission</div>
              <p className="text-[#1A2D5A] font-medium leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                To make digital transformation accessible, practical, and impactful for businesses of every size — from growing SMEs to established industrial organizations.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "45+", l: "Different Channels" },
                { n: "7+", l: "Industries" },
                { n: "9", l: "Modules" },
              ].map(s => (
                <div key={s.l} className="bg-white rounded-xl border border-[#EDF1F7] p-4 text-center">
                  <div className="text-xl font-extrabold text-[#1A2D5A]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{s.n}</div>
                  <div className="text-xs text-[#5A7299] mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-[#1A2D5A] rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2A8554]/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-16 h-16 bg-[#2A8554] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                  <Building2 size={28} className="text-white" />
                </div>
                <h3 className="text-white font-extrabold text-xl mb-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Founder & Vision
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                  FDT was founded with a single conviction: that every business, regardless of size, deserves access to the kind of intelligent, connected systems that help it operate at its full potential.
                </p>
                <p className="text-white/55 text-sm leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                  We built FDT not as a software company, but as a transformation partner — combining domain expertise in manufacturing, trading, and services with deep systems thinking to create solutions that actually stick.
                </p>
                <div className="flex gap-4 pt-6 border-t border-white/10">
                  <a href="https://www.linkedin.com/company/fdtsolutions" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                    <Linkedin size={15} />
                    Follow on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-28 bg-[#2A8554] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#1A2D5A]/30 rounded-full blur-3xl" />

      <div className={`relative max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-5xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          Ready to Transform<br />Your Business?
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
          Let's discuss how FDT can help automate, optimize, and grow your organization — with a system built specifically around how you work.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#2A8554] px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5">
            Book a Free Consultation <ArrowRight size={16} />
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

const INDUSTRIES_LIST = ["Manufacturing", "Solar Industry", "Industrial Equipment", "Healthcare", "Trading", "Service", "Other"];
const EMP_RANGES = ["1–10", "11–50", "51–200", "201–500", "500+"];

function Contact() {
  const { ref, inView } = useInView(0.05);
  const [form, setForm] = useState({
    name: "", company: "", mobile: "", email: "", industry: "", employees: "", challenge: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    customer_name: form.name,
    company_name: form.company,
    phone_number: form.mobile,
    email: form.email,
    industry: form.industry,
    employees: form.employees,
    challenge: form.challenge,
    message: form.message,
    source: "FDT Website",
    submitted_at: new Date().toISOString(),
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxkdwHCbRPMjl95LjGO_y3JV8OY6RWwh8mN4PEKn4LB3qleIxuv9hioMNm0nDcr8yKe/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    setSubmitted(true);
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please call or WhatsApp us directly.");
  }
};
  return (
    <section id="contact" ref={ref} className="py-24 bg-[#1A2D5A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabelDark>Contact Us</SectionLabelDark>
          <h2 className="text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Let's Discuss Your Digital<br /><span className="text-[#2A8554]">Transformation Journey</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Whether you're looking to automate a single process or digitize your entire organization, FDT is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className={`lg:col-span-2 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Phone size={14} className="text-green-400" />
                  </div>
                  <span className="text-white font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Phone & WhatsApp</span>
                </div>
                <a href="tel:+917527028372" className="text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: "DM Mono, monospace" }}>
                  +91 75270 28372
                </a>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Linkedin size={14} className="text-emerald-400" />
                  </div>
                  <span className="text-white font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>LinkedIn</span>
                </div>
                <a href="https://www.linkedin.com/company/fdtsolutions" target="_blank" rel="noopener noreferrer"
                  className="text-white/60 hover:text-emerald-400 text-sm transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                  linkedin.com/company/fdtsolutions
                </a>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white/40 text-sm leading-relaxed italic" style={{ fontFamily: "Inter, sans-serif" }}>
                  "Every business is unique. That's why every FDT solution is designed around your specific workflows, processes, and growth goals."
                </p>
              </div>

              <div className="bg-[#2A8554]/10 border border-[#2A8554]/20 rounded-2xl p-6">
                <h4 className="text-emerald-300 font-semibold text-sm mb-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  What happens next?
                </h4>
                <ol className="space-y-2">
                  {["We review your submission", "Schedule a discovery call", "Present a custom solution plan"].map((s, i) => (
                    <li key={s} className="flex items-center gap-3 text-white/55 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                      <div className="w-5 h-5 rounded-full bg-[#2A8554]/30 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {i + 1}
                      </div>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {submitted ? (
              <div className="bg-white/5 border border-green-500/30 rounded-3xl p-14 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={28} className="text-green-400" />
                </div>
                <h3 className="text-white text-2xl font-extrabold mb-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Thank you!
                </h3>
                <p className="text-white/55 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  We've received your request. Our team will be in touch within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name *", key: "name", type: "text", placeholder: "Your full name" },
                    { label: "Company Name *", key: "company", type: "text", placeholder: "Your company" },
                    { label: "Mobile Number *", key: "mobile", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    { label: "Email Address *", key: "email", type: "email", placeholder: "you@company.com" },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-white/50 text-xs font-medium mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>{label}</label>
                      <input type={type} value={form[key as keyof typeof form]} onChange={set(key)} placeholder={placeholder} required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2A8554]/50 focus:bg-white/8 transition-all"
                        style={{ fontFamily: "Inter, sans-serif" }} />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>Industry *</label>
                    <select value={form.industry} onChange={set("industry")} required
                      className="w-full bg-[#1A2D5A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2A8554]/50 transition-all appearance-none"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                      <option value="">Select industry</option>
                      {INDUSTRIES_LIST.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>Number of Employees *</label>
                    <select value={form.employees} onChange={set("employees")} required
                      className="w-full bg-[#1A2D5A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2A8554]/50 transition-all appearance-none"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                      <option value="">Select range</option>
                      {EMP_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>Current Business Challenge</label>
                  <input type="text" value={form.challenge} onChange={set("challenge")} placeholder="e.g. No real-time inventory tracking"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2A8554]/50 transition-all"
                    style={{ fontFamily: "Inter, sans-serif" }} />
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>Message</label>
                  <textarea value={form.message} onChange={set("message")} rows={4} placeholder="Tell us more about your operations and what you want to improve..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2A8554]/50 transition-all resize-none"
                    style={{ fontFamily: "Inter, sans-serif" }} />
                </div>

                <div className="flex gap-3 pt-2">
                  <button type="submit"
                    className="flex-1 bg-[#2A8554] text-white py-3.5 rounded-xl font-semibold hover:bg-[#22744A] transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                    Book a Free Consultation
                  </button>
                  <button type="button"
                    className="px-6 border border-white/20 text-white/70 rounded-xl font-semibold hover:bg-white/5 transition-all"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                    Schedule Demo
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0D1929] border-t border-white/10 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <ImageWithFallback
                src={fdtLogo}
                alt="FDT Solutions logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
              Helping businesses transform manual operations into complete digital ecosystems — one workflow at a time.
            </p>
            <div className="text-lg font-extrabold text-[#2A8554] tracking-widest" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              AUTOMATE. OPTIMIZE. GROW.
            </div>
          </div>

          <div>
            <div className="text-white/30 text-xs uppercase tracking-widest mb-4 font-mono">Quick Links</div>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#hero" },
                { label: "Solutions", href: "#modules" },
                { label: "Industries", href: "#industries" },
                { label: "Case Studies", href: "#success" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/45 hover:text-white text-sm transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/30 text-xs uppercase tracking-widest mb-4 font-mono">Get In Touch</div>
            <div className="space-y-4">
              <a href="tel:+917527028372" className="flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                <Phone size={13} />+91 75270 28372
              </a>
              <a href="https://wa.me/91813025372" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/45 hover:text-green-400 text-sm transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                <MessageCircle size={13} />WhatsApp
              </a>
              <a href="https://www.linkedin.com/company/fdtsolutions" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/45 hover:text-emerald-400 text-sm transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                <Linkedin size={13} />LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            © {new Date().getFullYear()} FDT — First Digital Transformation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/fdtsolutions" target="_blank" rel="noopener noreferrer"
              className="text-white/25 hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://wa.me/91813025372" target="_blank" rel="noopener noreferrer"
              className="text-white/25 hover:text-green-400 transition-colors" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp FAB ─────────────────────────────────────────────────────────────

function WhatsAppFAB() {
  return (
    <a href="https://wa.me/918130258372" target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-400/50 transition-all hover:scale-110 hover:-translate-y-1">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.093.539 4.162 1.565 5.996L.057 23.857a.496.496 0 00.607.607l5.932-1.535A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.377l-.36-.215-3.727.977.994-3.632-.234-.374A9.815 9.815 0 012.182 12C2.182 6.567 6.567 2.182 12 2.182S21.818 6.567 21.818 12 17.433 21.818 12 21.818z" />
      </svg>
    </a>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-[#F7F9FC]" style={{ fontFamily: "'Bricolage Grotesque', Inter, sans-serif" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(42,133,84,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(45,107,255,0.6); }
      `}</style>

      <Navbar />
      <Hero />
      <Challenges />
      <WhatIsFDT />
      <Modules />
      <Process />
      <AOGSection />
      <WhyChoose />
      <SuccessStories />
      <Industries />
      <About />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
