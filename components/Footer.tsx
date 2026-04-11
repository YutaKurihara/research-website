export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card-bg">
      <div className="mx-auto max-w-3xl px-6 py-6 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Kurihara Yuta
      </div>
    </footer>
  );
}
