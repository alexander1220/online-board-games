import CustomUiWrapper from '@/components/CustomUiWrapper'
import NavbarComponent from '@/components/NavbarComponent'

export const metadata = {
  title: 'Board Gamezz',
  description: 'Crazy board games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomUiWrapper>
          <NavbarComponent />

          {children}
        </CustomUiWrapper>
      </body>
    </html>
  )
}
