import ThemeRegistry from './Theme';

export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <html lang="en" dir="rtl">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
