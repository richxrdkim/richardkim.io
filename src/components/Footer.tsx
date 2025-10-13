export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="site-pad flex h-16 w-full items-center text-sm text-gray-500">
        © {new Date().getFullYear()} Portfolio • Built with React + Tailwind
      </div>
    </footer>
  );
}
