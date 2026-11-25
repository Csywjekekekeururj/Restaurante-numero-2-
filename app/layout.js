import "./globals.css";

export const metadata = {
  title: "Paola Delivery",
  description: "Compramos, recogemos y entregamos por ti en Tapachula.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
