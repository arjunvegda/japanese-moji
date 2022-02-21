// @ts-ignore
import googleAnalytics from '@analytics/google-analytics';
import Analytics from 'analytics';
export const analytics = Analytics({
  app: 'Japanese Moji',
  plugins: [
    googleAnalytics({
      trackingId: process.env.GA_TRACKING_ID,
    }),
  ],
});

export const analyticsPageWithPath = (path: string) => {
  analytics.page({
    path,
  });
};
