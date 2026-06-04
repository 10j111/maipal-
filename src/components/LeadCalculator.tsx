/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ClinicCalculatorInput, MerchantCalculatorInput } from '../types';
import { TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react';

export default function LeadCalculator() {
  const [activeTab, setActiveTab] = useState<'clinic' | 'merchant'>('clinic');
  
  // Clinic default presets
  const [clinicInput, setClinicInput] = useState<ClinicCalculatorInput>({
    dailyPatients: 15,
    conversionRate: 8, // 8% of local users referred
    averageConsultationFee: 380, // Average cost in HKD/CNY for medication + consult
  });

  // Merchant default presets
  const [merchantInput, setMerchantInput] = useState<MerchantCalculatorInput>({
    dailyShipments: 80,
    conversionRate: 12, // 12% card scans
    averageTeaFee: 68, // price of soup box/tea
  });

  // Calculations for Clinic
  const clinicDailyLeads = Math.round((clinicInput.dailyPatients * 2.5)); // daily active local users in range
  const clinicMonthlyReferredPatients = Math.round((clinicDailyLeads * 30 * (clinicInput.conversionRate / 100)));
  const clinicAnnualRevenueGained = Math.round(clinicMonthlyReferredPatients * clinicInput.averageConsultationFee * 12);

  // Calculations for Merchant
  const merchantMonthlyCardsSent = merchantInput.dailyShipments * 30;
  const merchantMonthlyNewUsers = Math.round(merchantMonthlyCardsSent * (merchantInput.conversionRate / 100));
  const merchantAnnualAddedRevenue = Math.round(merchantMonthlyNewUsers * merchantInput.averageTeaFee * 12);

  return (
    <div className="w-full bg-sand-50 rounded-3xl border-2 border-sand-300 shadow-lg overflow-hidden flex flex-col select-none my-12">
      {/* Calculator Header */}
      <div className="bg-sand-200 border-b border-sand-300 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-serif font-black text-lg text-ink-dark flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cinnabar" />
            <span>MaiPal 合作伙伴精算收益估算器</span>
          </h3>
          <p className="font-sans text-xs text-sand-700 mt-1">
            滑动下方数据，测算您的医馆在无资金支出的情况下，加入联盟获取的数字化增值效应。
          </p>
        </div>

        {/* Tab switch for Double Track (中医诊所 vs 药膳商家) */}
        <div className="flex bg-white/60 p-1.5 rounded-lg border border-sand-300/60 shadow-inner w-full md:w-auto">
          <button
            onClick={() => setActiveTab('clinic')}
            className={`flex-1 md:flex-initial px-4 py-1.5 rounded text-xs font-serif font-bold tracking-wider transition-all ${
              activeTab === 'clinic'
                ? 'bg-cinnabar text-white shadow'
                : 'bg-transparent text-ink-mid hover:bg-sand-200/50'
            }`}
          >
            A线：中医诊所估算
          </button>
          <button
            onClick={() => setActiveTab('merchant')}
            className={`flex-1 md:flex-initial px-4 py-1.5 rounded text-xs font-serif font-bold tracking-wider transition-all ${
              activeTab === 'merchant'
                ? 'bg-herbal text-white shadow'
                : 'bg-transparent text-ink-mid hover:bg-sand-200/50'
            }`}
          >
            B线：药膳商家估算
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 p-6 gap-8">
        {/* Left Inputs Panel */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {activeTab === 'clinic' ? (
            // Clinic Sliders
            <>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="font-serif font-bold text-ink-dark flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-cinnabar" />
                    您医馆目前日均门诊量：
                  </span>
                  <span className="font-mono font-bold text-cinnabar text-lg">
                    {clinicInput.dailyPatients} <span className="text-xs text-sand-700 font-sans font-normal">人次</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={clinicInput.dailyPatients}
                  onChange={(e) => setClinicInput({ ...clinicInput, dailyPatients: Number(e.target.value) })}
                  className="w-full accent-cinnabar h-2 bg-sand-200 rounded-lg appearance-auto cursor-pointer"
                />
                <span className="text-[11px] text-sand-700">（目前日接待的长辈、慢病管理客户等基础基数）</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="font-serif font-bold text-ink-dark flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-cinnabar" />
                    MaiPal 社区端向您医馆的导流转化率：
                  </span>
                  <span className="font-mono font-bold text-cinnabar text-lg">
                    {clinicInput.conversionRate} <span className="text-xs text-sand-700 font-sans font-normal">%</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="25"
                  step="1"
                  value={clinicInput.conversionRate}
                  onChange={(e) => setClinicInput({ ...clinicInput, conversionRate: Number(e.target.value) })}
                  className="w-full accent-cinnabar h-2 bg-sand-200 rounded-lg appearance-auto cursor-pointer"
                />
                <span className="text-[11px] text-sand-700">（系统面相周边2公里半径的大中老年群体，体虚报警后直推到您店的比例）</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="font-serif font-bold text-ink-dark flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-cinnabar" />
                    您诊所的平均客单价（诊金＋配药）：
                  </span>
                  <span className="font-mono font-bold text-cinnabar text-lg">
                    ¥{clinicInput.averageConsultationFee}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={clinicInput.averageConsultationFee}
                  onChange={(e) => setClinicInput({ ...clinicInput, averageConsultationFee: Number(e.target.value) })}
                  className="w-full accent-cinnabar h-2 bg-sand-200 rounded-lg appearance-auto cursor-pointer"
                />
                <span className="text-[11px] text-sand-700">（由理大智能模型精准转介的高消费意愿大湾区中高端自费客户）</span>
              </div>
            </>
          ) : (
            // Merchant Sliders
            <>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="font-serif font-bold text-[#44503E] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-herbal" />
                    您的日均包裹发送量（含线下打包）：
                  </span>
                  <span className="font-mono font-bold text-herbal text-lg">
                    {merchantInput.dailyShipments} <span className="text-xs text-sand-700 font-sans font-normal">单</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={merchantInput.dailyShipments}
                  onChange={(e) => setMerchantInput({ ...merchantInput, dailyShipments: Number(e.target.value) })}
                  className="w-full accent-herbal h-2 bg-sand-200 rounded-lg appearance-auto cursor-pointer"
                />
                <span className="text-[11px] text-sand-700">（随药膳汤包、高品质参茸散装寄送出去的理大小立卡总基数）</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="font-serif font-bold-[#44503E] flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-herbal" />
                    精美养生打卡小卡片的扫码打卡转化率：
                  </span>
                  <span className="font-mono font-bold text-herbal text-lg">
                    {merchantInput.conversionRate} <span className="text-xs text-sand-700 font-sans font-normal">%</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={merchantInput.conversionRate}
                  onChange={(e) => setMerchantInput({ ...merchantInput, conversionRate: Number(e.target.value) })}
                  className="w-full accent-herbal h-2 bg-sand-200 rounded-lg appearance-auto cursor-pointer"
                />
                <span className="text-[11px] text-sand-700">（中老年长辈收到卡片后为享受“节气体贴测评”而扫码打卡的比例）</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="font-serif font-bold-[#44503E] flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-herbal" />
                    用户在APP匹配体质后购买您药膳的客单价：
                  </span>
                  <span className="font-mono font-bold text-herbal text-lg">
                    ¥{merchantInput.averageTeaFee}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="300"
                  step="10"
                  value={merchantInput.averageTeaFee}
                  onChange={(e) => setMerchantInput({ ...merchantInput, averageTeaFee: Number(e.target.value) })}
                  className="w-full accent-herbal h-2 bg-sand-200 rounded-lg appearance-auto cursor-pointer"
                />
                <span className="text-[11px] text-sand-700">（针对阴虚、气虚等精准食调推荐汤包，形成高粘性、自动复购）</span>
              </div>
            </>
          )}
        </div>

        {/* Right Outputs Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-6 border border-sand-300">
          <div className="flex flex-col gap-4">
            <span className="font-serif text-[11px] text-sand-700 font-bold uppercase tracking-widest border-b border-sand-200 pb-2">
              联盟商业置换预估收益分析
            </span>

            {activeTab === 'clinic' ? (
              // Clinic Outputs Display
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans text-sand-700 font-medium">周边2公里范围每日激活量：</span>
                  <span className="font-mono text-sm font-semibold text-ink-dark">~{clinicDailyLeads} 活活跃用户</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans text-sand-700 font-medium">每月由系统直接导流到店：</span>
                  <span className="font-mono text-base font-bold text-cinnabar">+{clinicMonthlyReferredPatients} 位患者</span>
                </div>
                
                <div className="bg-cinnabar-light/65 p-4 rounded-xl border border-cinnabar/15 mt-2">
                  <div className="text-[11px] text-cinnabar font-serif font-bold uppercase tracking-wider mb-1">
                    在不增加任何推广预算下的预期年新增流流水：
                  </div>
                  <div className="font-serif font-black text-2xl text-cinnabar leading-none flex items-baseline">
                    ¥{clinicAnnualRevenueGained.toLocaleString()}
                    <span className="text-xs font-sans font-normal text-ink-mid ml-1">元 / 年份 额外引流</span>
                  </div>
                  <p className="text-[10px] text-sand-700 mt-2 font-medium leading-normal">
                    * 基于深圳市及大湾区高净值45-64岁患者健康消费档案，零入驻费、不提取任何佣金，纯大语言算法社区高精定位精准推流。
                  </p>
                </div>
              </div>
            ) : (
              // Merchant Outputs Display
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans text-sand-700 font-medium">每月包裹附送理大精美养生卡：</span>
                  <span className="font-mono text-sm font-semibold text-ink-dark">{merchantMonthlyCardsSent.toLocaleString()} 张</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans text-sand-700 font-medium">每月因兴趣进驻转化新会员：</span>
                  <span className="font-mono text-base font-bold text-herbal">+{merchantMonthlyNewUsers} 位中老年会员</span>
                </div>
                
                <div className="bg-herbal-light/70 p-4 rounded-xl border border-herbal/20 mt-2">
                  <div className="text-[11.5px] text-herbal-dark font-serif font-bold uppercase tracking-wider mb-1">
                    系统精准场景带货（体质推荐）预计年销售新增：
                  </div>
                  <div className="font-serif font-black text-2xl text-herbal-dark leading-none flex items-baseline">
                    ¥{merchantAnnualAddedRevenue.toLocaleString()}
                    <span className="text-xs font-sans font-normal text-ink-mid ml-1">元 / 年份</span>
                  </div>
                  <p className="text-[10px] text-sand-700 mt-2 font-medium leading-normal">
                    * 真正融入二十四节气。不推销、直接匹配今日气色、切诊波谱、膳包直连淘宝/有赞，形成无摩擦刚需极强性体质复刷流量。
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-sand-200 flex items-center justify-between text-[11px] text-sand-700">
            <span className="font-serif text-[10.5px] flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-herbal"></span>
              理大孵化项目 ｜ 无摩擦双轨闭环
            </span>
            <div className="flex items-center gap-0.5 text-cinnabar font-bold font-serif hover:translate-x-1 transition-transform cursor-pointer">
              <span>立即入驻联盟</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
