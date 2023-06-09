import '@styles/globals.css';
import AppLayout from '@components/AppLayout';

export const metadata = {
  title: 'Recipes App',
  description: 'Find recipes of popular foods',
}

const RootLayout = ({ children }) => {

  return (
    <html lang="en">
      <AppLayout children={children} />
    </html>
  )
}

export default RootLayout;
