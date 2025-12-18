export default function Footer() {
    return (
      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-white/55 text-sm">
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Allen Avramov</div>
          <div className="text-white/45">Built with React + Tailwind</div>
        </div>
      </footer>
    );
  }
  