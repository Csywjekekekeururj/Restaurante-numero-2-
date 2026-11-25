export const metadata = {
  title: "Paola Delivery",
  description: "Servicio de entregas y mandados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

