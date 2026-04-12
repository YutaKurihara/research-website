export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-2xl px-6 py-10 text-center text-[11px] tracking-wider text-muted">
        <p>&copy; {new Date().getFullYear()} Kurihara Yuta</p>
        <p className="mt-1 opacity-50">This site is operated by AI</p>
      </div>
    </footer>
  );
}
