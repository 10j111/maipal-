/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Quote, 
  Award, 
  MapPin, 
  X,
  Check
} from 'lucide-react';
import SinoImage from './components/SinoImage';
import SectionHeader from './components/SectionHeader';
import LeadCalculator from './components/LeadCalculator';

export default function App() {
  // Simple intersection observer to trigger elegant scroll fade-ins
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    const targetIds = [
      'section-hero', 
      'section-painpoints', 
      'section-compare', 
      'section-diagnostics', 
      'section-partnership', 
      'section-academic', 
      'section-footer'
    ];
    targetIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-sand-100 text-ink-mid flex flex-col font-sans selection:bg-cinnabar/15 selection:text-cinnabar relative">
      
      {/* Decorative Traditional Chinese Grid Background */}
      <div className="absolute inset-x-0 top-0 h-[2000px] pointer-events-none chinese-grid-bg opacity-15 z-0"></div>

      {/* Floating Header / Progress Pill for iPad Pitch Comfort (Fixed outside snapping scroll-container) */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-sand-100/90 border-b border-sand-200/60 transition-all select-none h-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full flex justify-between items-center">
          <div className="flex items-center gap-2 font-sans text-xs text-sand-700 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cinnabar animate-[ping_1.5s_infinite]"></span>
            <span className="font-bold">香港理工大学设计学院 MedTech Lab 孵化项目</span>
          </div>
          <div className="flex items-center gap-4">
            <SinoImage src="logo.png" alt="MaiPal Logo" className="h-9 opacity-95 hover:opacity-100 transition-opacity" />
            <a 
              href="https://api.maipal.org" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-xs font-serif font-black tracking-widest bg-cinnabar hover:bg-cinnabar-dark text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              真机演示 ➔
            </a>
          </div>
        </div>
      </header>

      {/* CSS Scroll Snapping Viewport */}
      <main className="flex-1 w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative z-10">

        {/* 【Section 1: Hero 封面】 */}
        <section 
          id="section-hero"
          className={`min-h-screen w-full snap-start flex flex-col justify-center relative py-16 sm:py-24 px-6 sm:px-12 md:px-20 border-b border-sand-200/30 transition-all duration-1000 ${
            visibleSections['section-hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center mt-8">
            {/* Top polytechnic hatching text requested directly */}
            <div className="inline-flex items-center gap-2 bg-cinnabar-light/60 px-5 py-2 rounded-full border border-cinnabar/10 text-xs text-cinnabar-dark font-semibold tracking-widest mb-8 shadow-xs animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>香港理工大学设计学院 MedTech Lab 孵化项目</span>
            </div>

            {/* Core Master Visual Avatar exactly 45-64 doctor */}
            <div className="relative group mb-8 w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-cinnabar/15 to-herbal/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <SinoImage 
                src="doctor_main_placeholder.png" 
                alt="脉脉数字人医生" 
                className="w-full max-w-xs sm:max-w-sm mx-auto rounded-3xl shadow-2xl border-4 border-white transition-all transform hover:scale-[1.02]" 
              />
            </div>

            {/* Big display title with custom cinnabar accent and calligraphy serif font */}
            <h1 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-ink-dark tracking-wide leading-tight select-none">
              MaiPal 脉伴 ｜ <span className="text-[#1E4E36]">智能中医健康养生伴侣</span>
            </h1>

            {/* Sub-title dedicated and specified */}
            <p className="font-serif text-[#1E4E36] font-black text-xl sm:text-2xl lg:text-3xl tracking-widest leading-relaxed mt-6 mb-8 border-b-2 border-sand-300 pb-6 max-w-xl mx-auto">
              “为了下一个五十年”
            </p>
            <p className="font-sans text-lg sm:text-xl text-sand-700 max-w-3xl font-medium tracking-wide leading-relaxed mb-6 select-none">
              专为 45-64 岁群体打造的、有温度的数字化健康挚友。
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-4 w-full sm:w-auto justify-center">
              <a 
                href="https://api.maipal.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-cinnabar hover:bg-cinnabar-dark text-white font-serif font-black text-sm tracking-widest shadow-lg hover:shadow-2xl active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>iPad 真机模型演示</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#section-partnership" 
                className="px-8 py-4 rounded-full bg-white hover:bg-sand-50 text-ink-mid border-2 border-sand-300 hover:border-sand-700 font-serif font-black text-sm tracking-widest transition-all text-center"
              >
                诊所 ｜ 商家联盟入驻
              </a>
            </div>
          </div>
        </section>


        {/* 【Section 2: 市场痛点】 */}
        <section 
          id="section-painpoints"
          className={`min-h-screen w-full snap-start flex flex-col justify-center relative py-20 px-8 sm:px-16 md:px-24 border-b border-sand-200/30 transition-all duration-1000 ${
            visibleSections['section-painpoints'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full pt-12">
            <SectionHeader 
              sectionNum="贰" 
              title="银发转折 ｜ 大湾区2026市场痛点" 
              subtitle="大湾区的‘健康拐点’人口正迅速成型，他们身处中西医调合之中心，需求尚未得到抚平。"
              badge="MARKET PAIN POINTS"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Infographics Panel specified as 中老年健康痛点.jpg (1:1 Ratio) */}
              <div className="flex flex-col gap-6">
                <SinoImage 
                  src="中老年健康痛点.jpg" 
                  alt="中老年健康痛点" 
                  className="w-full h-auto rounded-3xl shadow-xl border border-sand-300 transform hover:scale-[1.01] transition-transform" 
                />
                <div className="bg-[#EFEAE2] rounded-2xl p-6 border border-sand-300 flex items-start gap-4 mt-2 select-none shadow-xs">
                  <Quote className="w-8 h-8 text-cinnabar flex-shrink-0 opacity-40 rotate-180" />
                  <p className="font-serif italic text-base leading-loose text-sand-800">
                    “长辈们绝不差智能设备的使用能力，差的是真正懂他们、不卖货不乱指引、温暖贴心的健康陪伴。”
                  </p>
                </div>
              </div>

              {/* Right panel containing core numeric highlights and text list (1:1 Ratio) */}
              <div className="flex flex-col gap-8 select-none">
                
                {/* Visual Highlight Metrics Area - Bold high-contrast banner for commercial deck */}
                <div className="bg-white rounded-3xl border border-sand-300 p-8 shadow-md flex flex-col gap-6">
                  <div className="border-l-4 border-cinnabar pl-4">
                    <h3 className="font-serif font-black text-xl sm:text-2xl text-[#1E4E36] tracking-wider leading-snug">
                      2026大湾区“银发红利”核心数据指标
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 pt-2">
                    <div className="flex flex-col">
                      <span className="font-serif text-sm font-bold text-sand-500 uppercase tracking-widest mb-1">大湾区同群受众</span>
                      <div className="flex items-baseline">
                        <span className="text-5xl sm:text-6xl font-black text-[#1E4E36] font-serif leading-none">220万</span>
                        <span className="text-sm font-bold text-[#1E4E36] ml-1">人</span>
                      </div>
                      <p className="text-xs text-sand-600 mt-1.5 leading-relaxed">正处于代谢及气血衰耗转折点</p>
                    </div>
                    <div className="flex flex-col border-l border-sand-200 pl-6">
                      <span className="font-serif text-sm font-bold text-sand-500 uppercase tracking-widest mb-1">社会结构占比</span>
                      <div className="flex items-baseline">
                        <span className="text-5xl sm:text-6xl font-black text-[#1E4E36] font-serif leading-none">31%</span>
                      </div>
                      <p className="text-xs text-sand-600 mt-1.5 leading-relaxed">高客单慢病与节气保健高发圈</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 text-sans text-base leading-loose">
                  {/* Point 1 */}
                  <div className="bg-white/80 rounded-2xl p-6 border border-sand-200 hover:border-cinnabar/30 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-cinnabar-light text-cinnabar flex items-center justify-center font-serif font-bold text-sm flex-shrink-0 shadow-xs">
                        壹
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-lg text-ink-dark mb-1">权威社会统计</h4>
                        <p className="text-[15px] sm:text-base leading-loose text-sand-700 font-medium">
                          截至2026年，仅香港及大湾区 45-64 岁的人口总数就已突破 <span className="text-xl font-bold text-[#1E4E36]">220万</span>，占总人口的 <span className="text-xl font-bold text-[#1E4E36]">31%</span>。这批群体正处于身体机能的拐点（代谢变慢、气血不足），健康需求空前庞大。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="bg-white/80 rounded-2xl p-6 border border-sand-200 hover:border-cinnabar/30 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-cinnabar-light text-cinnabar flex items-center justify-center font-serif font-bold text-sm flex-shrink-0 shadow-xs">
                        贰
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-lg text-ink-dark mb-1">身体机能下滑</h4>
                        <p className="text-[15px] sm:text-base leading-loose text-sand-700 font-medium">
                          长期处于疲劳、失眠、胸闷等“次健康（亚健康）”状态，极易积累成未来的慢性病风险。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="bg-white/80 rounded-2xl p-6 border border-sand-200 hover:border-cinnabar/30 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-cinnabar-light text-cinnabar flex items-center justify-center font-serif font-bold text-sm flex-shrink-0 shadow-xs">
                        叁
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-lg text-ink-dark mb-1">巨大的健康焦虑</h4>
                        <p className="text-[15px] sm:text-base leading-loose text-sand-700 font-medium">
                          身体稍有不适就上网乱查，越查越害怕，产生严重的心理焦虑，极其需要温和、低风险的中医调理方案。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Point 4 */}
                  <div className="bg-white/80 rounded-2xl p-6 border border-sand-200 hover:border-cinnabar/30 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-cinnabar-light text-cinnabar flex items-center justify-center font-serif font-bold text-sm flex-shrink-0 shadow-xs">
                        肆
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-lg text-ink-dark mb-1">市场空白显现</h4>
                        <p className="text-[15px] sm:text-base leading-loose text-sand-700 font-medium">
                          市面上的养生软件冷冰冰且乱收费，长辈们需要一个真正听得懂话、有温度、能融入二十四节气日常的“线上养生管家”。
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 【Section 3: 竞品对比】 */}
        <section 
          id="section-compare"
          className={`min-h-screen w-full snap-start flex flex-col justify-center relative py-20 px-8 sm:px-16 md:px-24 border-b border-sand-200/30 transition-all duration-1000 ${
            visibleSections['section-compare'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full pt-12">
            <SectionHeader 
              sectionNum="叁" 
              title="打破冰冷 ｜ 行业竞品深度对标" 
              subtitle="为什么传统数字工具难以深入中国长辈的心？因为它们缺乏人文温情与中理调和。"
              badge="COMPETITIVE ADVANTAGE"
            />

            <div className="flex flex-col gap-10">
              {/* Elegant Quotation Intro strictly matching */}
              <div className="bg-white rounded-3xl border border-sand-300 p-8 shadow-md flex flex-col md:flex-row gap-6 items-center">
                <Quote className="w-12 h-12 text-cinnabar opacity-45 flex-shrink-0 md:self-start rotate-180" />
                <div>
                  <p className="font-serif font-bold text-lg sm:text-xl text-ink-dark leading-loose select-none">
                    引言：别让技术冷冰冰！MaiPal 依托强大的大语言模型与多模态交互技术，打造了最符合中老年人习惯的智能健康伴侣。
                  </p>
                </div>
              </div>

              {/* Verbatim Three Columns Comparison matching instructions exactly */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 select-none">
                
                {/* Compare Column 1 (Traditional App) */}
                <div className="bg-white rounded-3xl border border-sand-250 p-8 flex flex-col justify-between hover:shadow-xl transition-all min-h-[280px]">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-sand-200">
                      <span className="font-serif font-black text-base text-sand-800">传统医疗APP (如安诊儿)</span>
                      <span className="px-2.5 py-1 bg-sand-200 text-sand-800 font-sans text-xs font-bold uppercase rounded-md">
                        低频纠偏
                      </span>
                    </div>
                    <p className="font-sans text-base leading-loose text-sand-700 font-medium">
                      生硬，纯疾病就医导向，不舒服才用（低频）。
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-sand-100 flex items-center justify-between text-xs text-sand-700 font-semibold">
                    <span>缺乏老年温和关怀</span>
                    <X className="w-4 h-4 text-rose-500" />
                  </div>
                </div>

                {/* Compare Column 2 (Utility App) */}
                <div className="bg-white rounded-3xl border border-sand-250 p-8 flex flex-col justify-between hover:shadow-xl transition-all min-h-[280px]">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-sand-200">
                      <span className="font-serif font-black text-base text-sand-800">纯工具APP (如把脉)</span>
                      <span className="px-2.5 py-1 bg-sand-200 text-sand-800 font-sans text-xs font-bold uppercase rounded-md">
                        硬核付费
                      </span>
                    </div>
                    <p className="font-sans text-base leading-loose text-sand-700 font-medium">
                      冰冷，纯检测工具，内容付费硬，缺乏温度与关怀（难留存）。
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-sand-100 flex items-center justify-between text-xs text-sand-700 font-semibold">
                    <span>用户留存机制极脆</span>
                    <X className="w-4 h-4 text-rose-500" />
                  </div>
                </div>

                {/* Compare Column 3 (MaiPal 脉伴 - Prominently Highlighted) */}
                <div className="bg-sand-50 rounded-3xl border-3 border-cinnabar p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                  {/* Highlight banner background */}
                  <div className="absolute top-0 right-0 bg-cinnabar text-white font-serif text-xs font-black tracking-widest px-4 py-1.5 uppercase rounded-bl-xl shadow-sm">
                    ★ 推荐创新项
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-cinnabar/25">
                      <span className="font-serif font-black text-lg text-cinnabar">★ MaiPal 脉伴</span>
                      <span className="px-2.5 py-1 bg-cinnabar text-white font-sans text-xs font-bold uppercase rounded-md">
                        全天陪伴
                      </span>
                    </div>
                    <p className="font-serif text-[16px] sm:text-[18px] leading-loose text-ink-dark font-black tracking-wide">
                      有温度的数字人唠嗑式交互；长周期个人健康进化档案；基础功能全免、极低使用门槛。
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-cinnabar/25 flex items-center justify-between text-xs text-cinnabar-dark font-bold font-serif">
                    <span>融入节气的贴心温度</span>
                    <Check className="w-5 h-5 text-cinnabar" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* 【Section 4: 四诊合参】 */}
        <section 
          id="section-diagnostics"
          className={`min-h-screen w-full snap-start flex flex-col justify-center relative py-20 px-8 sm:px-16 md:px-24 border-b border-sand-200/30 transition-all duration-1000 ${
            visibleSections['section-diagnostics'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full pt-12">
            <SectionHeader 
              sectionNum="肆" 
              title="因人而诊 ｜ 中医数字化四诊合参" 
              subtitle="还原传统中医精髓，依望诊、闻诊、问诊、切诊多点契合，不折不扣形成全面的机能报告。"
              badge="AI FOUR DIAGNOSES"
            />

            {/* Traditional 四诊介绍 (真机演示已被移除) */}

            {/* Regular 2x2 Grid View for offline readers - Beautifully structured */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
              
              {/* Card 1: 望 */}
              <div className="bg-white rounded-3xl border border-sand-250 p-8 flex flex-col justify-between hover:shadow-xl transition-all shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-2 border-b border-sand-100">
                    <h3 className="font-serif font-black text-xl text-ink-dark flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cinnabar animate-pulse"></span>
                      【望 · 照镜子看气色】
                    </h3>
                    <span className="font-serif text-xs text-cinnabar font-semibold border border-cinnabar/30 px-3 py-1 rounded-full bg-cinnabar-light/60">人脸面谱</span>
                  </div>
                  <p className="font-sans text-[15px] sm:text-base leading-loose text-sand-700 font-medium">
                    脉伴通过手机前置摄像头温和观察面部色泽与精神状态。系统提示示例：“今日面诊分析：气色略偏淡，面部气血运行稍显不足。”
                  </p>
                </div>
                <div className="mt-6 pt-4">
                  <SinoImage src="面诊" alt="面诊" className="w-full h-auto rounded-2xl shadow-md border border-sand-200" />
                </div>
              </div>

              {/* Card 2: 闻 */}
              <div className="bg-white rounded-3xl border border-sand-250 p-8 flex flex-col justify-between hover:shadow-xl transition-all shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-2 border-b border-sand-100">
                    <h3 className="font-serif font-black text-xl text-ink-dark flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-herbal"></span>
                      【闻 · 听声音辨疲劳】
                    </h3>
                    <span className="font-serif text-xs text-herbal font-semibold border border-herbal/30 px-3 py-1 rounded-full bg-herbal-light/60">脏腑声韵</span>
                  </div>
                  <p className="font-sans text-[15px] sm:text-base leading-loose text-sand-700 font-medium">
                    采集用户语音。系统提示示例：“今日声音分析：语音略显疲惫，可能存在睡眠不足问题。”
                  </p>
                </div>
                <div className="mt-6 pt-4">
                  <SinoImage src="望闻.png" alt="语音" className="w-full h-auto rounded-2xl shadow-md border border-sand-200" />
                </div>
              </div>

              {/* Card 3: 问 */}
              <div className="bg-white rounded-3xl border border-sand-250 p-8 flex flex-col justify-between hover:shadow-xl transition-all shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-2 border-b border-sand-100">
                    <h3 className="font-serif font-black text-xl text-ink-dark flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-sand-700"></span>
                      【问 · 唠家常知起居】
                    </h3>
                    <span className="font-serif text-xs text-sand-700 font-semibold border border-sand-300 px-3 py-1 rounded-full bg-sand-200/55">情景闲聊</span>
                  </div>
                  <p className="font-sans text-[15px] sm:text-base leading-loose text-sand-700 font-medium">
                    脉脉用温暖的情景化闲聊，询问吃喝拉睡、情绪与睡眠，摸清用户的整体健康规律。
                  </p>
                </div>
                <div className="mt-6 pt-4">
                  <SinoImage src="问诊.png" alt="问诊" className="w-full h-auto rounded-2xl shadow-md border border-sand-200" />
                </div>
              </div>

              {/* Card 4: 切 */}
              <div className="bg-white rounded-3xl border border-sand-250 p-8 flex flex-col justify-between hover:shadow-xl transition-all shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-2 border-b border-sand-100">
                    <h3 className="font-serif font-black text-xl text-ink-dark flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cinnabar"></span>
                      【切 · 测脉搏知波动】
                    </h3>
                    <span className="font-serif text-xs text-cinnabar font-semibold border border-cinnabar/30 px-3 py-1 rounded-full bg-cinnabar-light/60">智能检测</span>
                  </div>
                  <p className="font-sans text-[15px] sm:text-base leading-loose text-sand-700 font-medium">
                    支持智能手表直接读取或手机摄像头指尖测量，进行数字化脉象 analysis（如测出“弦数脉”）。
                  </p>
                </div>
                <div className="mt-6 pt-4">
                  <SinoImage src="报告.png" alt="报告" className="w-full h-auto rounded-2xl shadow-md border border-sand-200" />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 【Section 5: 商业置换合作 (A/B 双轨)】 */}
        <section 
          id="section-partnership"
          className={`min-h-screen w-full snap-start flex flex-col justify-center relative py-20 px-8 sm:px-16 md:px-24 border-b border-sand-200/30 transition-all duration-1000 ${
            visibleSections['section-partnership'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full pt-12">
            <SectionHeader 
              sectionNum="伍" 
              title="合纵共生 ｜ 商业置换合作 (A/B 双轨)" 
              subtitle="专为实体医馆和养生药膳商家量身定制的免费合作通道。理大背书，大湾区零佣精准互推。"
              badge="PILOT CO-OPERATION FLOW"
            />

            {/* Interactive Lead Value Calculator */}
            <div className="mb-16">
              <LeadCalculator />
            </div>

            {/* 1:1 Left-Right layout to display Route A and Route B with prominent metrics */}
            <div className="flex flex-col gap-16 md:gap-24">
              
              {/* Route A【中医诊所】 */}
              <div className="bg-white rounded-3xl border border-sand-300 p-8 sm:p-12 flex flex-col lg:flex-row gap-12 items-stretch hover:shadow-2xl transition-all shadow-md">
                {/* 1:1 Column Left */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-herbal"></span>
                      <span className="font-serif text-sm font-bold tracking-widest text-[#7A8B76]">A线路【中医诊所联盟】</span>
                    </div>

                    {/* Big core benefits highlight as requested */}
                    <div className="mt-2">
                      <span className="text-4xl sm:text-5xl font-black text-[#7A8B76] block mb-2 tracking-wide font-serif">
                        免费入驻
                      </span>
                      <h3 className="font-serif font-black text-2xl sm:text-3xl text-ink-dark leading-tight">
                        帮您把诊所开到社区患者的手机里
                      </h3>
                    </div>

                    {/* Highlight terms separately in large styled pills */}
                    <div className="flex flex-wrap gap-3 mt-4 select-none">
                      <span className="inline-block px-4 py-2.5 rounded-xl text-sm font-bold bg-[#1E4E36]/10 text-[#1E4E36] border border-[#1E4E36]/20">
                        一键弹窗优先推荐 ★
                      </span>
                      <span className="inline-block px-4 py-2.5 rounded-xl text-sm font-black bg-[#1E4E36] text-white">
                        0佣金 (不收分文)
                      </span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <SinoImage src="诊所合作.jpg" alt="诊所合作" className="w-full h-auto rounded-2xl shadow-md border border-sand-200" />
                  </div>
                </div>

                {/* 1:1 Column Right */}
                <div className="lg:w-1/2 flex flex-col gap-6 justify-center text-sans text-base leading-loose select-none pl-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-sand-200 pt-8 lg:pt-0">
                  <div className="bg-herbal-light/40 border border-herbal/20 rounded-2xl p-8 hover:bg-herbal-light/60 transition-colors">
                    <h4 className="font-serif font-black text-xl text-herbal-dark flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-herbal"></span>
                      我能帮您带客人（线上精准引流）
                    </h4>
                    <p className="text-[15px] sm:text-base text-ink-mid font-medium leading-loose">
                      当深圳本地用户通过日常数字化检测，自述“我不舒服”，或者系统判定日常调养已无法解决问题、必须实体面诊开药时，系统会<strong className="text-[#1E4E36] border-b-2 border-[#1E4E36]/30 pb-0.5">一键弹窗、优先推荐</strong>您的诊所，<strong className="text-[#1E4E36]">不收一分钱佣金（0佣金）</strong>，直接为您的医馆输送高客单价的门诊客户！
                    </p>
                  </div>

                  <div className="bg-sand-50 border border-sand-300 rounded-2xl p-8 hover:bg-sand-200/50 transition-colors border-dashed">
                    <h4 className="font-serif font-bold text-xl text-ink-dark flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-sand-700"></span>
                      您需帮我做推广（线下联合互换）
                    </h4>
                    <p className="text-[15px] sm:text-base text-sand-700 font-medium leading-loose">
                      资源置换完全免费。您只需在诊所前台、休息区等显眼位置，协助摆放由理大免费提供的精美养生打卡小立牌。医生看诊后可引导复诊或慢病长辈扫码下载，大大提升患者对您诊所的粘性！
                    </p>
                  </div>
                </div>

              </div>

              {/* Route B【药膳商家】 */}
              <div className="bg-white rounded-3xl border border-sand-300 p-8 sm:p-12 flex flex-col lg:flex-row gap-12 items-stretch hover:shadow-2xl transition-all shadow-md">
                {/* 1:1 Column Left */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-cinnabar"></span>
                      <span className="font-serif text-sm font-bold tracking-widest text-[#1E4E36]">B线路【药膳商家联盟】</span>
                    </div>

                    {/* Big core benefits highlight as requested */}
                    <div className="mt-2">
                      <span className="text-4xl sm:text-5xl font-black text-[#1E4E36] block mb-2 tracking-wide font-serif">
                        优先推荐
                      </span>
                      <h3 className="font-serif font-black text-2xl sm:text-3xl text-ink-dark leading-tight">
                        场景化精准带货 ｜ 免费入驻理大智能食疗推荐库
                      </h3>
                    </div>

                    {/* Highlight terms separately in large styled pills */}
                    <div className="flex flex-wrap gap-3 mt-4 select-none">
                      <span className="inline-block px-4 py-2.5 rounded-xl text-sm font-bold bg-[#7A8B76]/10 text-[#7A8B76] border border-[#7A8B76]/20">
                        一键直达产品页 ★
                      </span>
                      <span className="inline-block px-4 py-2.5 rounded-xl text-sm font-black bg-[#7A8B76] text-white">
                        免费入驻 (0门槛)
                      </span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <SinoImage src="药膳合作.jpg" alt="药膳合作" className="w-full h-auto rounded-2xl shadow-md border border-sand-200" />
                  </div>
                </div>

                {/* 1:1 Column Right */}
                <div className="lg:w-1/2 flex flex-col gap-6 justify-center text-sans text-base leading-loose select-none pl-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-sand-200 pt-8 lg:pt-0">
                  <div className="bg-cinnabar-light/40 border border-cinnabar/20 rounded-2xl p-8 hover:bg-cinnabar-light/60 transition-colors">
                    <h4 className="font-serif font-black text-xl text-cinnabar-dark flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-cinnabar"></span>
                      我能帮您卖货（线上体质匹配）
                    </h4>
                    <p className="text-[15px] sm:text-base text-ink-dark font-medium leading-loose">
                      告别盲目推销！当 MaiPal 的 AI 检测出用户今日属于特定体质（如“阴虚体质”）并推荐相关食材（如“山药、大枣”）时，您的药膳汤包或养生茶将作为官方推荐商品精准弹窗显示，<strong className="text-[#1E4E36] border-b-2 border-[#1E4E36]/30 pb-0.5">一键直达</strong>您的微店或淘宝。
                    </p>
                  </div>

                  <div className="bg-sand-50 border border-sand-300 rounded-2xl p-8 hover:bg-sand-200/50 transition-colors border-dashed">
                    <h4 className="font-serif font-bold text-xl text-ink-dark flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-sand-700"></span>
                      您需帮我做推广（线下随货广告）
                    </h4>
                    <p className="text-[15px] sm:text-base text-sand-700 font-medium leading-loose">
                      成本极低、轻松双赢。您只需在给客户寄送汤包快递、或线下门店打包时，顺手塞入一张由理大团队免费设计并印刷提供的精美养生卡片，扫码即可沉淀为我们的用户。
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* 【Section 6: 学术背书与团队】 */}
        <section 
          id="section-academic"
          className={`min-h-screen w-full snap-start flex flex-col justify-center relative py-20 px-8 sm:px-16 md:px-24 border-b border-sand-200/30 transition-all duration-1000 ${
            visibleSections['section-academic'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto w-full pt-12">
            <SectionHeader 
              sectionNum="陆" 
              title="科研匠心 ｜ 理大 MedTech Lab 学术背书" 
              subtitle="依托高校严谨的模型沉淀与多学科顶级工程人员配置，实现体质诊定与多源数据的结合，筑牢学术长城。"
              badge="ACADEMIC BACKING & TEAM"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch select-none">
              {/* Left academic backing detail strictly matching instructions text */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-sand-300 p-8 sm:p-12 flex flex-col justify-between hover:shadow-xl transition-all shadow-md">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-7 h-7 text-cinnabar" />
                    <span className="font-serif font-black text-xl text-ink-dark tracking-wider">中山医联 · 临床数据测试</span>
                  </div>
                  
                  <p className="font-sans text-base sm:text-lg text-ink-mid font-medium leading-loose">
                    强大的技术底蕴：目前项目处于高保真Demo完整落地阶段。我们正与中山大学医学院的专家及临床医生团队开展深度的算法模型测试合作，依托真实临床脱敏数据进行微调，目标让算法辨识准确度达到 70% 以上。
                  </p>

                  {/* Accuracy percentage meter visual bar chart */}
                  <div className="bg-cinnabar-light/40 border border-cinnabar/10 p-6 rounded-2xl flex flex-col gap-3 mt-4 max-w-lg shadow-xs">
                    <div className="flex justify-between items-baseline text-xs sm:text-sm font-serif font-black text-cinnabar-dark">
                      <span>当前临床交叉辨识拟合精度：</span>
                      <span className="text-xl">已突破 70.0% </span>
                    </div>
                    <div className="w-full bg-sand-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-cinnabar h-full rounded-full animate-[pulse_1.5s_infinite]" style={{ width: '70.8%' }}></div>
                    </div>
                    <span className="text-xs text-sand-700 leading-relaxed mt-0.5 font-medium">
                      * 该精度在中老年复数慢性亚健康（如胸闷合并心虚，脾虚合并湿热）上居行业前列水平。
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-sand-100 flex justify-between items-center text-xs text-sand-500 font-mono">
                  <span>COLLABORATION CLINIC RESEARCH</span>
                  <span>SINCE 2026.03</span>
                </div>
              </div>

              {/* Right team list strictly matching spelling and names */}
              <div className="lg:col-span-5 bg-[#FCFAF7] border-2 border-sand-300 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl transition-all shadow-md">
                <div>
                  <div className="flex items-center gap-3 border-b-2 border-sand-300 pb-4 mb-6">
                    <div className="w-3 h-7 bg-herbal rounded-xs"></div>
                    <h3 className="font-serif font-black text-lg text-ink-dark tracking-wide">
                      理大设计学院 MedTech Lab 核心团队
                    </h3>
                  </div>

                  {/* Team member list */}
                  <div className="flex flex-col gap-5 font-sans text-base text-ink-mid leading-relaxed">
                    <div className="flex items-center justify-between py-2 border-b border-sand-200/50">
                      <span className="font-serif font-bold text-base text-ink-dark font-semibold">Xi Jin</span>
                      <span className="text-xs text-sand-700 font-bold uppercase tracking-wider bg-sand-200 px-3 py-1 rounded">系统工程师 / 设计</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-sand-200/50">
                      <span className="font-serif font-bold text-base text-ink-dark font-semibold">Linjie Yin</span>
                      <span className="text-xs text-sand-700 font-bold uppercase tracking-wider bg-sand-200 px-3 py-1 rounded">系统架构师</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-sand-200/50">
                      <span className="font-serif font-bold text-base text-ink-dark font-semibold">Dr. Anthony Kong</span>
                      <span className="text-xs text-sand-700 font-bold uppercase tracking-wider bg-sand-200 px-3 py-1 rounded">市场负责人</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-sand-200/50">
                      <span className="font-serif font-bold text-base text-ink-dark font-semibold">Dr. Giovanni Lion</span>
                      <span className="text-xs text-sand-700 font-bold uppercase tracking-wider bg-sand-200 px-3 py-1 rounded">AI工程师</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-sand-200/50">
                      <span className="font-serif font-bold text-base text-ink-dark font-semibold">Ziyi Cao</span>
                      <span className="text-xs text-sand-700 font-bold uppercase tracking-wider bg-sand-200 px-3 py-1 rounded">产品负责人</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-sand-300 pt-4 flex items-center gap-2 text-xs text-sand-700 font-serif font-black leading-none uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-herbal animate-pulse"></span>
                  <span>SYSTEM ARCHITECT & ADVISORS</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 【Section 7: Footer】 */}
        <section 
          id="section-footer"
          className={`min-h-screen w-full snap-start flex flex-col justify-center relative py-20 px-8 sm:px-16 md:px-24 border-t border-sand-300 transition-all duration-1000 ${
            visibleSections['section-footer'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center select-none pt-12">
            
            {/* Ink Calligraphy Stamp seal style text */}
            <h3 className="font-serif font-black text-3xl sm:text-4xl text-ink-dark tracking-wide mb-6">
              专家内测专属通道 ｜ 大湾区高品质医商联盟
            </h3>

            <p className="font-sans text-lg sm:text-xl text-sand-700 max-w-3xl leading-loose mt-2 mb-10 select-none">
              线上有温度的陪伴，线下有深度的专业，MaiPal 愿与您携手共创大湾区数字中医新生态。
            </p>

            {/* Requested QR code image place strictly matching - significantly enlarged and centered */}
            <div className="relative group p-3 bg-[#FAF8F5] border-3 border-sand-300 rounded-3xl inline-block shadow-2xl transition-transform hover:scale-[1.01]">
              <SinoImage src="qr_code_placeholder.png" alt="合作二维码" className="w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-2xl border border-sand-300/40" />
              <div className="absolute inset-2 pointer-events-none rounded-2xl border border-dashed border-cinnabar/30"></div>
            </div>

            {/* Detailed verbatim contact variables */}
            <div className="mt-10 flex flex-col gap-4 text-sans text-base text-sand-700">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-cinnabar" />
                <span className="font-semibold text-ink-dark">地址：香港理工大学设计学院 MedTech Lab</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-1 bg-white border border-sand-250 px-6 py-3 rounded-full shadow-md max-w-sm mx-auto">
                <span className="font-serif font-black text-sm text-cinnabar">微信直连：</span>
                <span className="font-mono font-bold tracking-wide text-ink-dark">联系微信：MaiPal_health</span>
              </div>
            </div>

            {/* Bottom PolyU team license credit */}
            <div className="mt-20 text-[11px] font-sans text-sand-700/60 uppercase tracking-widest border-t border-sand-200 pt-8 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
              <span>MAIPAL © 2026 DESIGNED IN HONG KONG POLYU</span>
              <span className="font-serif font-extrabold text-sm text-cinnabar tracking-wider">为了下一个五十年</span>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
