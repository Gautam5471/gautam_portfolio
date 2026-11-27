import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Code2, GitPullRequest, Terminal, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import Workspace3D from './components/Workspace3D';
import { profile, skills, projects, contributions, openPullRequests } from './data';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {note && <p>{note}</p>}
    </div>
  );
}

function ExternalLink({ href, children }) {
  return <a className="text-link" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15} /></a>;
}

export default function App() {
  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#home"><span className="brand-mark">GK</span><span>gautam<span className="muted">.dev</span></span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#work">Work</a><a href="#contributions">Open source</a><a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href={profile.links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
      </nav>

      <section className="hero container" id="home">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
          <div className="availability"><span className="live-dot" /> OPEN TO LEARNING & COLLABORATION</div>
          <p className="hero-kicker">HELLO, I'M</p>
          <h1>Gautam<br /><span>Kumar.</span></h1>
          <p className="hero-role">Developer <i>·</i> Open-source Contributor <i>·</i> Problem Solver</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#contact">Get in touch</a>
          </div>
          <div className="hero-meta"><span><MapPin size={14} /> {profile.location}</span><span><GraduationCap size={15} /> B.Tech CSE (AI/ML) · Class of {profile.graduation}</span></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.12 }}>
          <Workspace3D />
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="visual-tag tag-top"><span className="tag-dot blue" /> BUILDING WITH PURPOSE</div>
          <div className="visual-tag tag-bottom"><Code2 size={14} /> CODE · CREATE · CONTRIBUTE</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="about-section section container" id="about">
        <SectionHeading eyebrow="01 / ABOUT" title="Curious by nature." note="Learning through building, debugging, and contributing to projects that solve real problems." />
        <div className="about-grid">
          <motion.div className="about-card large-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="card-index">A LITTLE ABOUT ME</span>
            <h3>Turning curiosity<br />into <span className="gradient-text">working software.</span></h3>
            <p>I'm a Computer Science and Engineering student specializing in AI & Machine Learning. I enjoy building web applications, exploring how software works under the hood, and collaborating with developer communities.</p>
            <p>My approach is simple: investigate carefully, write clean code, test the change, and keep learning.</p>
            <div className="about-bottom"><span><Sparkles size={15} /> Always learning, building, and contributing.</span></div>
          </motion.div>
          <div className="about-side">
            <motion.div className="mini-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="card-index">CURRENT FOCUS</span><div className="mini-icon"><Terminal size={19} /></div>
              <h3>Full-stack development</h3><p>Building with the MERN stack and strengthening core engineering skills.</p>
            </motion.div>
            <motion.div className="mini-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="card-index">PROBLEM SOLVING</span><div className="mini-icon purple"><Code2 size={19} /></div>
              <h3>DSA & algorithms</h3><p>Regular practice across data structures, algorithms, and competitive programming.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section container" id="skills">
        <SectionHeading eyebrow="02 / TOOLKIT" title="Tools I work with." note="A growing toolkit for building, testing, and shipping software." />
        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.div className="skill-card" key={group.group} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="skill-number">0{i + 1}</span><h3>{group.group}</h3>
              <div className="skill-list">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section container" id="work">
        <SectionHeading eyebrow="03 / SELECTED WORK" title="Things I've built." note="A couple of projects from my ongoing journey in web development." />
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.article className="project-card" key={project.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className={`project-art art-${i + 1}`}><div className="art-window"><div className="window-dots"><i /><i /><i /></div><div className="art-lines"><b /><b /><b /><b /></div><div className="art-symbol">{i === 0 ? '◌' : '✳'}</div></div><span className="project-count">0{i + 1}</span></div>
              <div className="project-content"><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-links"><ExternalLink href={project.live}>Live demo</ExternalLink><ExternalLink href={project.source}>Source code</ExternalLink></div></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section container" id="contributions">
        <SectionHeading eyebrow="04 / OPEN SOURCE" title="Better software, together." note="I contribute by investigating issues, implementing fixes, improving documentation, and writing tests." />
        <div className="contribution-list">
          {contributions.map((item, i) => (
            <motion.a className="contribution-row" href={item.url} target="_blank" rel="noreferrer" key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="contribution-index">{String(i + 1).padStart(2, '0')}</span>
              <div className="contribution-main"><span className="contribution-repo">{item.repo}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
              <span className="contribution-type">{item.type}</span><ArrowUpRight className="contribution-arrow" size={18} />
            </motion.a>
          ))}
        </div>
        <div className="pr-block">
          <div className="pr-heading"><GitPullRequest size={18} /><div><h3>More work in progress</h3><p>Selected pull requests listed in my GitHub profile README.</p></div></div>
          <div className="pr-grid">{openPullRequests.map(([repo, title, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}><span>{repo}</span><strong>{title}</strong><ArrowUpRight size={14} /></a>)}</div>
          <ExternalLink href="https://github.com/search?q=author%3AGautam5471+is%3Apr+is%3Amerged+-user%3Asuryanshasayth936-ux&type=pullrequests">Explore merged contributions</ExternalLink>
        </div>
      </section>

      <section className="section container" id="practice">
        <SectionHeading eyebrow="05 / CONSISTENCY" title="Always sharpening the fundamentals." note="Problem-solving practice helps me build stronger intuition for algorithms, data structures, and computational thinking." />
        <div className="practice-grid">
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="practice-card"><span className="practice-label">LEETCODE</span><strong>225<span>+</span></strong><p>Problems practiced</p><ArrowUpRight size={17} /></a>
          <a href={profile.links.codeforces} target="_blank" rel="noreferrer" className="practice-card"><span className="practice-label">CODEFORCES</span><strong>100<span>+</span></strong><p>Problems practiced</p><ArrowUpRight size={17} /></a>
          <a href={profile.links.codechef} target="_blank" rel="noreferrer" className="practice-card"><span className="practice-label">CODECHEF</span><strong>↗</strong><p>Competitive programming profile</p><ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <span className="eyebrow">06 / GET IN TOUCH</span>
          <h2>Have an idea?<br /><span>Let's build something.</span></h2>
          <p>I'm always interested in learning, collaborating, and contributing to meaningful projects.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={profile.links.github} target="_blank" rel="noreferrer"><Github size={17} /> Find me on GitHub <ArrowUpRight size={16} /></a>
            <a className="button button-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn</a>
          </div>
          <div className="social-row">
            <ExternalLink href={profile.links.leetcode}>LeetCode</ExternalLink><ExternalLink href={profile.links.codeforces}>Codeforces</ExternalLink><ExternalLink href={profile.links.codechef}>CodeChef</ExternalLink>
          </div>
        </div>
      </section>

      <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">GK</span><span>gautam<span className="muted">.dev</span></span></a><span>Designed & built with React, Three.js, and curiosity.</span><span>© {new Date().getFullYear()} Gautam Kumar</span></footer>
    </main>
  );
}
