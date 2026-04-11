export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-2xl px-6 py-10 text-center text-[11px] tracking-wider text-muted">
        &copy; {new Date().getFullYear()} Kurihara Yuta
      </div>
    </footer>
  );
}
