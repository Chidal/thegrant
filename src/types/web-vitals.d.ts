declare module 'web-vitals' {
  interface Metric {
    name: string;
    value: number;
    rating: string;
    delta: number;
    entries: PerformanceEntry[];
    id: string;
    navigationType: string;
  }

  type ReportCallback = (metric: Metric) => void;
  type ReportOpts = { reportAllChanges?: boolean };

  export const onCLS: (onReport: ReportCallback, opts?: ReportOpts) => void;
  export const onFID: (onReport: ReportCallback, opts?: ReportOpts) => void;
  export const onFCP: (onReport: ReportCallback, opts?: ReportOpts) => void;
  export const onLCP: (onReport: ReportCallback, opts?: ReportOpts) => void;
  export const onTTFB: (onReport: ReportCallback, opts?: ReportOpts) => void;
}