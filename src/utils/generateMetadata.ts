export interface Metadata {
  title: string;
  description: string;
  icons: {
    icon: string;
  };
}

export const generateMetadata = (
  pageTitle: string,
  pageDescription: string
): Metadata => ({
  title: `${pageTitle} - Prytech`,
  description: pageDescription,

  icons: {
    icon: '/favicon.ico',
  },
});
