/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface SinoImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  overlayStyle?: string;
}

export default function SinoImage({ src, alt, className = '', overlayStyle = '', ...props }: SinoImageProps) {
  const [hasError, setHasError] = useState(false);

  // High-fidelity SVG Renderers for the Chinese Medicine Pitch fallbacks
  const renderFallbackSvg = () => {
    switch (src) {
      case 'logo.png':
        return (
          <div className={`flex items-center gap-3 bg-transparent ${className}`}>
            {/* Elegant Calligraphic Seal Logo */}
            <div className="relative w-10 h-10 flex-shrink-0 bg-cinnabar rounded-md flex items-center justify-center font-serif text-white font-bold text-lg shadow-sm">
              <span>脉</span>
              <div className="absolute inset-0.5 border border-dashed border-white/40 rounded"></div>
            </div>
            <div className="flex flex-col select-none">
              <span className="font-serif font-bold text-lg tracking-wider text-ink-dark leading-none">MaiPal</span>
              <span className="font-serif text-xs font-semibold tracking-widest text-cinnabar mt-0.5 leading-none">脉伴</span>
            </div>
          </div>
        );

      case 'doctor_main_placeholder.png':
        return (
          <div className={`relative w-full max-w-sm aspect-[4/3] bg-sand-100/40 border-3 border-dashed border-sand-400 hover:border-cinnabar/40 rounded-3xl flex flex-col justify-between items-center p-8 select-none transition-all duration-300 ${className}`}>
            <div className="absolute inset-0 chinese-grid-bg opacity-[0.03]"></div>
            
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-sand-400/70"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-sand-400/70"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-sand-400/70"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-sand-400/70"></div>

            {/* Placeholder Indicator Icon Header */}
            <div className="flex flex-col items-center text-center my-auto gap-4 z-10 p-2">
              <div className="w-14 h-14 rounded-full bg-sand-200 border border-sand-200 flex items-center justify-center mb-1 animate-pulse">
                <svg className="w-7 h-7 text-sand-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                </svg>
              </div>

              <div className="font-serif font-black text-base text-ink-dark lg:text-lg tracking-wide">
                【 脉伴数字人形象 · 待上传 】
              </div>
              
              <p className="font-sans text-xs text-sand-700 max-w-xs leading-loose font-medium">
                主视觉主图占位。请在项目根目录放置您的新图片，命名为 <code className="bg-sand-200/80 px-1.5 py-0.5 rounded font-mono font-bold text-cinnabar text-[11px] border border-sand-300">doctor_main_placeholder.png</code> (或同名 .jpg) 以自动覆盖此区域。
              </p>

              <div className="inline-flex items-center gap-1.5 bg-cinnabar-light/60 border border-cinnabar/10 px-3 py-1 rounded-full text-[10px] text-cinnabar font-bold font-serif tracking-wider">
                <span>建议：透明背景(PNG) 或 白底 ｜ 比例 1:1 或 4:3 </span>
              </div>
            </div>

            <div className="w-full border-t border-sand-250 pt-2.5 z-10 flex justify-between text-[10.5px] text-sand-500 font-semibold uppercase tracking-widest font-mono">
              <span>Main Healer Slot</span>
              <span>Pending Upload</span>
            </div>
          </div>
        );

      case '中老年健康痛点.jpg':
        return (
          <div className={`relative aspect-[16/10] bg-gradient-to-br from-[#FCFAF7] to-[#F1EBE0] border-2 border-sand-300 rounded-2xl flex flex-col justify-between p-6 overflow-hidden ${className}`}>
            <div className="absolute -right-16 -bottom-16 w-60 h-60 rounded-full bg-cinnabar/5 blur-2xl"></div>
            <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-herbal/5 blur-2xl"></div>
            
            {/* Visualizing demographic cliff in 2026 */}
            <div className="flex flex-col gap-1 z-10">
              <div className="text-xs text-cinnabar font-semibold tracking-wider flex items-center gap-2">
                <span>NEW CHINESE EPIDEMIOLOGY STUDY</span>
                <span className="h-px bg-cinnabar/30 flex-1"></span>
              </div>
              <h4 className="font-serif font-bold text-xl text-ink-dark mt-1">
                大湾区45-64岁健康拐点群体统计
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-6 items-center my-auto z-10">
              <div className="flex flex-col">
                <div className="text-4xl lg:text-5xl font-serif font-black text-cinnabar leading-none">
                  220 万 <span className="text-sm font-sans font-normal text-ink-mid">人</span>
                </div>
                <div className="text-xs text-sand-700 mt-2 font-medium">香港及大湾区 45-64 岁中老年群体</div>
                <div className="w-full bg-sand-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-cinnabar h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-4xl lg:text-5xl font-serif font-black text-herbal leading-none">
                  31 % <span className="text-sm font-sans font-normal text-ink-mid">占比</span>
                </div>
                <div className="text-xs text-sand-700 mt-2 font-medium">占社会总人口比例（重度转型状态）</div>
                <div className="w-full bg-sand-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-herbal h-full rounded-full" style={{ width: '31%' }}></div>
                </div>
              </div>
            </div>

            <div className="border-t border-sand-200 pt-3 flex justify-between items-center text-[11.5px] text-sans text-sand-700 z-10">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cinnabar opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cinnabar"></span>
                </span>
                <span>代谢变慢 ｜ 气血下行 ｜ 慢病风险</span>
              </span>
              <span className="font-mono font-medium">Data source: 2026 Census</span>
            </div>
          </div>
        );

      case '面诊':
        return (
          <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#FCFAF7] to-[#F1EBE0] border border-sand-300 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(#1E4E36_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.03]"></div>
            
            {/* Camera Frame Simulation */}
            <div className="flex justify-between items-center text-[10px] text-cinnabar opacity-80 z-10">
              <div className="font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cinnabar animate-ping"></span>
                <span>望诊相貌识别中... [CAM01]</span>
              </div>
              <span className="font-mono text-[9px]">45~64y SENSOR LENS</span>
            </div>

            {/* Scanning face grid vector overlay */}
            <div className="flex-1 flex justify-center items-center my-2 relative z-10">
              <svg className="w-36 h-36 text-cinnabar/60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Face contour */}
                <path d="M25 35 Q50 20 75 35 Q85 64 50 85 Q15 64 25 35" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                {/* Target pointers */}
                <circle cx="50" cy="50" r="1.5" fill="#1E4E36" />
                <path d="M50 42 L50 58 M42 50 L58 50" stroke="#7A8B76" strokeWidth="0.5" />
                
                {/* Target mesh dots */}
                <circle cx="35" cy="40" r="1" fill="#1E4E36" />
                <circle cx="65" cy="40" r="1" fill="#1E4E36" />
                <circle cx="50" cy="30" r="1" fill="#1E4E36" />
                <circle cx="50" cy="70" r="1" fill="#1E4E36" />
                {/* Dynamic scan line sweep */}
                <line x1="10" y1="42" x2="90" y2="42" stroke="#1E4E36" strokeWidth="1" className="animate-[bounce_2.5s_infinite_alternate]" />
              </svg>
              
              {/* Output analysis balloon */}
              <div className="absolute right-0 top-6 px-2.5 py-1.5 bg-white/90 border border-cinnabar/30 rounded shadow-md text-[10px] text-ink-mid max-w-[120px] backdrop-blur-xs leading-relaxed animate-pulse">
                <div className="font-serif font-bold text-cinnabar text-[11px] mb-0.5 border-b border-sand-200 pb-0.5">望诊今日提示：</div>
                气色略偏淡，面部气血运行稍显不足。
              </div>
            </div>

            {/* Diagnostics status badge */}
            <div className="flex justify-between items-center text-[10px] font-medium text-sand-700 border-t border-sand-200/60 pt-2 z-10">
              <span className="font-serif">望 · 智能面色色谱分析</span>
              <span className="font-mono text-herbal font-bold">ACCURACY 98%</span>
            </div>
          </div>
        );

      case '望闻.png':
        return (
          <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#FCFAF7] to-[#EEF2EE] border border-sand-300 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(#7A8B76_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.03]"></div>
            
            <div className="flex justify-between items-center text-[10px] text-herbal opacity-80 z-10">
              <div className="font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-herbal animate-pulse"></span>
                <span>闻诊声谱波形采录中... [MIC01]</span>
              </div>
              <span className="font-mono text-[9px]">44.1kHz DIGITAL SOUND</span>
            </div>

            {/* Audio Voice waveform simulation */}
            <div className="flex-1 flex justify-center items-center my-3 relative z-10">
              <div className="flex gap-1.5 items-end justify-center h-14 w-4/5">
                {[20, 45, 12, 56, 75, 40, 85, 95, 30, 45, 10, 48, 65, 32, 50, 15, 25, 10].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-herbal rounded-full animate-[pulse_1.2s_infinite]"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 100}ms`
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="absolute left-2 top-2 px-2.5 py-1.5 bg-white/90 border border-herbal/30 rounded shadow-md text-[10px] text-ink-mid max-w-[120px] backdrop-blur-xs leading-relaxed">
                <div className="font-serif font-bold text-herbal text-[11px] mb-0.5 border-b border-sand-200 pb-0.5">闻诊语音分析：</div>
                语音略显疲惫，可能存在睡眠不足问题。
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-medium text-sand-700 border-t border-sand-200/60 pt-2 z-10">
              <span className="font-serif">闻 · 脏腑声气频谱共振</span>
              <span className="font-mono text-herbal font-bold">FREQ LOCK</span>
            </div>
          </div>
        );

      case '问诊.png':
        return (
          <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#FCFAF7] to-[#F1EBE0] border border-sand-300 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
            <div className="absolute inset-0 bg-[#332C27]/[0.01]"></div>
            
            <div className="flex justify-between items-center text-[10px] text-sand-700 opacity-80 z-10">
              <span className="font-serif flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-sand-700"></span>
                <span>与数字脉脉的日常闲聊</span>
              </span>
              <span className="font-mono text-cinnabar text-[9px] font-bold">24-TERM SOLAR HEALTH</span>
            </div>

            {/* Chat chat bubble vector */}
            <div className="flex-1 flex flex-col gap-2 justify-center my-1 z-10 px-2">
              <div className="flex gap-2 items-start justify-end max-w-[85%] self-end">
                <div className="bg-sand-200 text-ink-mid text-[10px] px-2.5 py-1.5 rounded-lg rounded-tr-none shadow-xs text-right leading-tight">
                  “最近总觉得胸口闷，睡觉也睡不沉...”
                </div>
              </div>
              <div className="flex gap-2 items-start max-w-[85%] self-start">
                <div className="w-5 h-5 bg-cinnabar rounded-full flex items-center justify-center font-serif text-[10.5px] text-white flex-shrink-0">脉</div>
                <div className="bg-cinnabar-light text-ink-dark text-[10.5px] px-2.5 py-1.5 rounded-lg rounded-tl-none border border-cinnabar/10 leading-relaxed shadow-sm">
                  “收到您的反馈。长辈，这是初夏湿热或劳累犯脾的表现哩，今晚可以试试冲一碗温姜水，加少许红糖...”
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-medium text-sand-700 border-t border-sand-200/60 pt-2 z-10">
              <span className="font-serif">问 · 多模态情景对话</span>
              <span className="font-mono text-sand-700 font-bold">THERAPEUTIC EMOTION</span>
            </div>
          </div>
        );

      case '报告.png':
        return (
          <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#FCFAF7] to-[#F1EBE0] border border-sand-300 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
            <div className="absolute inset-0 bg-[#332C27]/[0.01]"></div>
            
            <div className="flex justify-between items-center text-[10px] text-sand-700 opacity-80 z-10">
              <span className="font-serif flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-cinnabar"></span>
                <span>红外光电容积血管容积测定</span>
              </span>
              <span className="font-mono text-herbal text-[9px] font-bold">PULSE STABILITY</span>
            </div>

            {/* Pulse waveform & dynamic readings */}
            <div className="flex-1 flex items-center justify-between gap-2 my-2 px-1 z-10">
              <div className="flex flex-col flex-2">
                {/* Simulated pulse graph */}
                <svg className="w-full h-12 text-cinnabar" viewBox="0 0 100 40">
                  <path d="M 0 20 L 10 20 L 15 20 Q 18 5 20 5 T 23 35 Q 25 20 30 20 L 40 20 L 45 20 Q 48 5 50 5 T 53 35 Q 55 20 60 20 L 70 20 L 75 20 Q 78 5 80 5 T 83 35 Q 85 20 90 20 L 100 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="animate-[pulse_1.5s_infinite]" />
                </svg>
              </div>
              
              <div className="flex-1 flex flex-col items-end gap-1.5">
                <div className="text-right">
                  <div className="text-[9px] text-sand-700">实时测定脉象：</div>
                  <div className="font-serif font-black text-sm text-cinnabar leading-none">弦数脉</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-sand-700">心率变化率：</div>
                  <div className="font-mono font-bold text-xs text-herbal leading-none">72 bpm</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-medium text-sand-700 border-t border-sand-200/60 pt-2 z-10">
              <span className="font-serif">切 · 脉诊脉率多点感测</span>
              <span className="font-mono text-sand-700 font-bold">WAVEFORM: ACTIVE</span>
            </div>
          </div>
        );

      case '诊所合作.jpg':
        return (
          <div className="relative aspect-video w-full rounded-2xl bg-gradient-to-br from-[#FCFAF7] to-[#F3ECE0] border-2 border-sand-300 flex flex-col justify-between p-6 overflow-hidden shadow-lg">
            <div className="absolute inset-0 chinese-grid-bg opacity-15"></div>
            <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full bg-herbal/5 blur-xl"></div>
            
            <div className="flex justify-between items-start z-10">
              <div>
                <span className="px-3 py-1 bg-herbal-light text-herbal-dark border border-herbal/20 rounded-full font-serif text-[11px] font-semibold tracking-wider">
                  诊所入驻联盟合作规划
                </span>
                <h4 className="font-serif font-bold text-lg text-ink-dark mt-2">
                  线上引流 + 线下扫码 ＝ 医患生命周期最大化
                </h4>
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-sand-200 shadow-md">
                <svg className="w-6 h-6 text-herbal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 10.5V20a2 2 0 01-2 2H7a2 2 0 01-2-2v-9.5m14 0V9a2 2 0 00-2-2h-3l-1-3H9L8 7H5a2 2 0 00-2 2v1.5m16 0L12 14 5 10.5" />
                </svg>
              </div>
            </div>

            {/* Mini illustration showing Clinic and Mobile flow */}
            <div className="flex items-center justify-between my-3 gap-4 z-10">
              <div className="flex-1 bg-white/60 p-3 rounded-lg border border-sand-200 text-center shadow-xs">
                <div className="font-serif font-bold text-xs text-ink-dark">社区长辈日常自测</div>
                <div className="text-[10px] text-sand-700 mt-1">出现气血报警或特定调养死角</div>
              </div>
              <div className="text-herbal text-xl animate-[pulse_1s_infinite]">➔</div>
              <div className="flex-1 bg-white/90 p-3 rounded-lg border-2 border-herbal text-center shadow-md">
                <div className="font-serif font-bold text-xs text-herbal">智能精准推荐门诊</div>
                <div className="text-[10px] text-ink-dark mt-1 font-bold">100% 直达深圳本地医馆</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-sand-700 border-t border-sand-200 pt-3 z-10">
              <span className="font-serif text-cinnabar">★ 零佣金直接导流精准客户</span>
              <span className="font-mono">PolyU MedTech Lab Partnership</span>
            </div>
          </div>
        );

      case '药膳合作.jpg':
        return (
          <div className="relative aspect-video w-full rounded-2xl bg-gradient-to-br from-[#FCFAF7] to-[#F5ECE2] border-2 border-sand-300 flex flex-col justify-between p-6 overflow-hidden shadow-lg">
            <div className="absolute inset-0 chinese-grid-bg opacity-15"></div>
            <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-cinnabar/5 blur-xl"></div>
            
            <div className="flex justify-between items-start z-10">
              <div>
                <span className="px-3 py-1 bg-cinnabar-light text-cinnabar-dark border border-cinnabar/10 rounded-full font-serif text-[11px] font-semibold tracking-wider">
                  药膳产品场景精准带货
                </span>
                <h4 className="font-serif font-bold text-lg text-ink-dark mt-2">
                  食疗推荐库 + 实体随包扫码置换
                </h4>
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-sand-200 shadow-md">
                <svg className="w-6 h-6 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
            </div>

            {/* Flow diagram */}
            <div className="flex items-center justify-between my-3 gap-4 z-10">
              <div className="flex-1 bg-white/60 p-3 rounded-lg border border-sand-200 text-center shadow-xs">
                <div className="font-serif font-bold text-xs text-ink-dark">智能体质识别推荐</div>
                <div className="text-[10px] text-sand-700 mt-1">诊断为阴虚/虚热体质，推荐山药等</div>
              </div>
              <div className="text-cinnabar text-xl animate-[pulse_1s_infinite]">➔</div>
              <div className="flex-1 bg-white/90 p-3 rounded-lg border-2 border-cinnabar text-center shadow-md">
                <div className="font-serif font-bold text-xs text-cinnabar">精准匹配购买链接</div>
                <div className="text-[10px] text-ink-dark mt-1 font-bold">汤包礼盒直接弹框/直达微店</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-sand-700 border-t border-sand-200 pt-3 z-10">
              <span className="font-serif text-herbal">★ 极低获客成本，健康体质流量变现</span>
              <span className="font-mono">PolyU MedTech Lab Partnership</span>
            </div>
          </div>
        );

      case '合作二维码.png':
      case 'qr_code_placeholder.png':
        return (
          <div className={`relative w-64 h-64 sm:w-72 sm:h-72 mx-auto bg-sand-100/40 border-3 border-dashed border-sand-400 hover:border-cinnabar/40 rounded-3xl flex flex-col justify-between items-center p-6 select-none transition-all duration-300 ${className}`}>
            <div className="absolute inset-0 chinese-grid-bg opacity-[0.03]"></div>
            
            {/* Fine Traditional Pattern Corners */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-sand-400/70"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-sand-400/70"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-sand-400/70"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-sand-400/70"></div>
            
            {/* QR Code Graphic Mockup */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 z-10 p-2">
              <div className="w-12 h-12 rounded-full bg-sand-200 border border-sand-200 flex items-center justify-center p-1.5 animate-pulse mb-1">
                <svg className="w-6 h-6 text-sand-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.125c.621 0 1.125.504 1.125 1.125v4.125c0 .621-.504 1.125-1.125 1.125H4.875a1.125 1.125 0 01-1.125-1.125V4.875zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.125c.621 0 1.125.504 1.125 1.125v4.125c0 .621-.504 1.125-1.125 1.125H4.875a1.125 1.125 0 01-1.125-1.125v-4.125zM14.25 4.875c0-.621.504-1.125 1.125-1.125h4.125c.621 0 1.125.504 1.125 1.125v4.125c0 .621-.504 1.125-1.125 1.125h-4.125a1.125 1.125 0 01-1.125-1.125V4.875zM14.25 14.625c0-.621.504-1.125 1.125-1.125h4.125c.621 0 1.125.504 1.125 1.125v4.125c0 .621-.504 1.125-1.125 1.125h-4.125a1.125 1.125 0 01-1.125-1.125v-4.125z" />
                </svg>
              </div>

              <div className="font-serif font-black text-sm text-ink-dark lg:text-base tracking-wide">
                【 商业内测二维码 · 待上传 】
              </div>
              
              <p className="font-sans text-[10.5px] text-sand-700 max-w-xs leading-relaxed font-semibold">
                请在项目根目录下放置您的二维码，并命名为 <code className="bg-sand-200/80 px-1 py-0.5 rounded font-mono font-bold text-cinnabar text-[10px] border border-sand-300">qr_code_placeholder.png</code> 以覆盖此占位区。
              </p>
            </div>
            
            <span className="font-serif text-[10.5px] font-bold text-cinnabar tracking-widest leading-none z-10 uppercase">
              扫码接入 ｜ 脉伴联盟
            </span>
          </div>
        );

      default:
        // Generic elegant New Chinese placeholder
        return (
          <div className={`aspect-[4/3] bg-gradient-to-br from-sand-50 to-sand-200 border border-sand-300 rounded-xl flex flex-col justify-center items-center p-4 text-center ${className}`}>
            <div className="font-serif text-cinnabar text-2xl font-semibold mb-2">脉伴</div>
            <div className="font-sans text-xs text-sand-700 leading-normal">{alt} (暂无图片)</div>
          </div>
        );
    }
  };

  if (hasError) {
    return renderFallbackSvg();
  }

  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className={`${className}`}
        referrerPolicy="no-referrer"
        {...props}
      />
      {/* Visual frame overlay to present images in museum style */}
      <div className={`absolute inset-0 pointer-events-none rounded-lg border border-sand-300/40 group-hover:border-cinnabar/20 transition-colors ${overlayStyle}`}></div>
    </div>
  );
}
