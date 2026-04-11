export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-6 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Kurihara
      </div>
    </footer>
  );
}
