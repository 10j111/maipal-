/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type DiagnosticMethod = '望' | '闻' | '问' | '切';

export interface DiagnosticState {
  currentMethod: DiagnosticMethod;
  isScanning: boolean;
  progress: number;
  resultCompleted: boolean;
  // Specific simulations
  faceDetected: boolean;
  voiceVolume: number;
  currentQuestionIndex: number;
  answers: Record<string, string>;
  isMeasuringPulse: boolean;
  pulseHistory: number[];
}

export interface ClinicCalculatorInput {
  dailyPatients: number;
  conversionRate: number; // percentage
  averageConsultationFee: number; // CNY/HKD
}

export interface MerchantCalculatorInput {
  dailyShipments: number;
  conversionRate: number;
  averageTeaFee: number;
}
