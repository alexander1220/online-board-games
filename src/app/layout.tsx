import NavbarComponent from '@/components/NavbarComponent'
import CustomUiWrapper from '@/components/CustomUiWrapper'

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
