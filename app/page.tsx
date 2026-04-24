"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap,
  BarChart3,
  Users,
  Code,
  Shield,
  BoltIcon,
  Plug,
  Settings,
  TrendingUp,
  Check,
  ArrowRight,
  Star,
  Sparkles,
  Send,
  Github,
  Twitter,
  Linkedin,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

/* ──────────────────────────── ANIMATION VARIANTS ──────────────────────────── */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

/* ──────────────────────────── NAVBAR ──────────────────────────── */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = ["Features", "How It Works", "Pricing", "Testimonials"];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-display font-bold tracking-tight">
              NexusFlow
              <span className="gradient-text"> AI</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              Log In
            </button>
            <button className="btn-primary !px-5 !py-2 !text-xs">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
            <button className="btn-primary !px-5 !py-2 !text-xs w-full">
              Start Free Trial
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

/* ──────────────────────────── HERO ──────────────────────────── */

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const workflowNodes = [
    { label: "Data Input", x: "10%", y: "20%", delay: 0.8 },
    { label: "AI Process", x: "45%", y: "15%", delay: 1.0 },
    { label: "Output", x: "75%", y: "25%", delay: 1.2 },
    { label: "Analytics", x: "25%", y: "70%", delay: 1.4 },
    { label: "Notify", x: "65%", y: "65%", delay: 1.6 },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Animated gradient orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-float"
      />
      <motion.div
        style={{ y }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] animate-float-slow"
      />
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[200px]"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-xs text-gray-300 font-medium">
              Now in Public Beta — 10,000+ workflows automated
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6"
          >
            Automate Everything
            <br />
            with{" "}
            <span className="gradient-text">AI-Powered</span>
            <br />
            Workflows
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Connect your favorite apps, automate complex tasks, and let AI handle
            the heavy lifting. Build intelligent workflows in minutes, not months.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="btn-primary group">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Floating workflow cards */}
        <div className="relative mt-16 sm:mt-24 h-[200px] sm:h-[300px] hidden sm:block">
          {workflowNodes.map((node) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: node.delay,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="absolute glass px-4 py-3 animate-float"
              style={{
                left: node.x,
                top: node.y,
                animationDelay: `${node.delay}s`,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                <span className="text-xs font-medium text-gray-300">
                  {node.label}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Connecting lines via SVG */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              x1="15%"
              y1="30%"
              x2="48%"
              y2="25%"
              stroke="url(#line-gradient)"
              strokeWidth="1"
            />
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.1 }}
              transition={{ duration: 1.5, delay: 1.7 }}
              x1="50%"
              y1="25%"
              x2="78%"
              y2="35%"
              stroke="url(#line-gradient)"
              strokeWidth="1"
            />
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.1 }}
              transition={{ duration: 1.5, delay: 1.9 }}
              x1="30%"
              y1="80%"
              x2="68%"
              y2="75%"
              stroke="url(#line-gradient)"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────── TRUSTED BY ──────────────────────────── */

function TrustedBySection() {
  const logos = [
    { name: "TechCorp", weight: "font-bold" },
    { name: "DataFlow", weight: "font-light tracking-widest" },
    { name: "CloudSync", weight: "font-semibold italic" },
    { name: "ScaleAI", weight: "font-black" },
    { name: "ByteWorks", weight: "font-medium tracking-tight" },
    { name: "NeuralPath", weight: "font-extralight tracking-[0.2em]" },
  ];

  return (
    <section className="relative py-16 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center text-sm text-gray-500 uppercase tracking-widest mb-10"
        >
          Trusted by innovative teams worldwide
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {logos.map((logo) => (
            <motion.span
              key={logo.name}
              variants={fadeIn}
              className={`text-xl sm:text-2xl text-gray-600 hover:text-gray-400 transition-colors duration-300 cursor-default ${logo.weight}`}
            >
              {logo.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────── FEATURES ──────────────────────────── */

const features = [
  {
    icon: Zap,
    title: "Smart Automation",
    description:
      "AI analyzes your workflows and suggests optimizations. Automate repetitive tasks with one click and watch your productivity soar.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Track performance metrics in real-time with beautiful dashboards. Get actionable insights and make data-driven decisions faster.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Built for teams. Share workflows, assign tasks, and collaborate in real-time with role-based access controls and audit logs.",
  },
  {
    icon: Code,
    title: "API Integration",
    description:
      "Connect 500+ apps with our pre-built integrations or use our powerful API to build custom connections. No code required.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade security with SOC2 compliance, end-to-end encryption, and advanced access controls to keep your data safe.",
  },
  {
    icon: BoltIcon,
    title: "Lightning Fast",
    description:
      "Sub-second execution times powered by our distributed edge network. Your workflows run faster, closer to your users.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">
            Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">automate at scale</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Powerful features designed to help you build, deploy, and manage
            intelligent workflows effortlessly.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="glass card-hover-glow p-8 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-violet-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────── HOW IT WORKS ──────────────────────────── */

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "Connect",
    description:
      "Link your favorite tools and data sources in seconds. We support 500+ integrations out of the box.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Automate",
    description:
      "Build powerful workflows with our visual builder. AI suggests optimal paths and handles edge cases automatically.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Scale",
    description:
      "Deploy globally and scale to millions of executions. Monitor performance and optimize with AI-driven insights.",
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Three steps to{" "}
            <span className="gradient-text-reverse">full automation</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Get started in minutes. No engineering team required.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-px bg-gradient-to-r from-violet-600/30 via-purple-500/30 to-cyan-500/30 -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={scaleIn}
              className="relative"
            >
              <div className="glass-strong p-8 text-center card-hover-glow relative z-10">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-sm font-bold mb-6">
                  {step.number}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (mobile) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4 md:hidden">
                  <ChevronRight className="w-6 h-6 text-violet-500/50 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────── PRICING ──────────────────────────── */

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "Perfect for individuals and small projects.",
    features: [
      "1,000 workflow runs/mo",
      "5 active workflows",
      "Basic integrations",
      "Email support",
      "Community access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    description: "For growing teams that need more power.",
    features: [
      "25,000 workflow runs/mo",
      "Unlimited workflows",
      "500+ integrations",
      "Priority support",
      "Team collaboration",
      "Advanced analytics",
      "Custom webhooks",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited runs",
      "Unlimited workflows",
      "Custom integrations",
      "Dedicated support",
      "SSO & SAML",
      "SLA guarantee",
      "On-premise option",
      "Custom training",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "gradient-border glass-strong glow-purple scale-[1.02] md:scale-105"
                  : "glass card-hover-glow"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-600/30">
                    <Star className="w-3 h-3 mr-1.5" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-display font-semibold mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-display font-bold">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full ${
                  plan.highlighted ? "btn-primary" : "btn-outline"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────── TESTIMONIALS ──────────────────────────── */

const testimonials = [
  {
    quote:
      "NexusFlow completely transformed how we handle data pipelines. What used to take our team weeks now runs automatically in minutes. The AI suggestions are incredibly accurate.",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "DataFlow Systems",
  },
  {
    quote:
      "We cut our operational costs by 60% in just three months. The workflow builder is intuitive and the integrations just work. Best investment we made this year.",
    name: "Marcus Thompson",
    title: "CTO",
    company: "ScaleAI Technologies",
  },
  {
    quote:
      "The real-time analytics alone are worth the subscription. But the automation capabilities? Game-changing. Our team can finally focus on strategic work instead of repetitive tasks.",
    name: "Elena Rodriguez",
    title: "Head of Operations",
    company: "CloudSync Global",
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Loved by teams{" "}
            <span className="gradient-text">everywhere</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="glass p-8 card-hover-glow flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400/80 text-yellow-400/80"
                  />
                ))}
              </div>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-sm font-bold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────── CTA SECTION ──────────────────────────── */

function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/10 to-cyan-500/20" />
          <div className="absolute inset-0 glass-subtle" />

          {/* Glow effects */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px]" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
              Ready to Transform
              <br />
              <span className="gradient-text">Your Workflow?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Join 10,000+ teams already automating with NexusFlow AI. Start
              your free trial today — no credit card required.
            </p>

            {/* Email input */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
              />
              <button className="btn-primary whitespace-nowrap w-full sm:w-auto">
                Get Started
                <Send className="ml-2 w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-4">
              Free 14-day trial. No credit card required. Cancel anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────── FOOTER ──────────────────────────── */

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Documentation"],
  Company: ["About Us", "Blog", "Careers", "Press Kit", "Contact"],
  Resources: ["Help Center", "Community", "API Reference", "Status Page", "Partners"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "GDPR"],
};

function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-display font-bold">
                NexusFlow
                <span className="gradient-text"> AI</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Intelligent workflow automation powered by AI. Built for modern
              teams.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-violet-500/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            &copy; 2025 NexusFlow AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────── MAIN PAGE ──────────────────────────── */

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
