import type { CSSProperties } from 'react';
import type { Vals } from '../useHomeState';

/* eslint-disable react/no-unescaped-entities */
export default function JoinSection({ v }: { v: Vals }) {
  void v;
  return (
    <><section id="join" style={{"background":"#192850","padding":"104px 0","color":"#fff","position":"relative","overflow":"hidden"} as CSSProperties}><div className="tc-orb" style={{"width":"50vmin","height":"50vmin","left":"-10vmin","top":"-14vmin","background":"#00A5E2","opacity":".22"} as CSSProperties}></div><div className="tc-orb" style={{"width":"46vmin","height":"46vmin","right":"-8vmin","bottom":"-16vmin","background":"#FFA300","opacity":".2","animationDelay":"-6s"} as CSSProperties}></div><div className="tc-wrap" style={{"position":"relative","display":"flex","flexDirection":"column","alignItems":"center","textAlign":"center","gap":"24px"} as CSSProperties}><h2 className="tc-h1" style={{"fontSize":"64px","maxWidth":"900px"} as CSSProperties}>Ready to Start Your Growth Journey?</h2><p className="tc-lead" style={{"maxWidth":"760px","color":"#D6D8DF"} as CSSProperties}>Start with savings. Build your enterprise. Access responsible financing. Grow with TrustCircle.</p><div className="tc-row" style={{"justifyContent":"center","marginTop":"8px"} as CSSProperties}><a className="tc-btn" href="#join" style={{"background":"#FFA300","color":"#121C3D"} as CSSProperties}>Join TrustCircle</a><a className="tc-btn" href="#partner" style={{"background":"transparent","color":"#fff","border":"2px solid rgba(255,255,255,.6)"} as CSSProperties}>Partner With Us</a></div></div></section></>
  );
}
