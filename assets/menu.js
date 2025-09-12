document.addEventListener("DOMContentLoaded", async () => {
  const mount = document.getElementById("top-menu");
  if (!mount) return;
  try {
    const res = await fetch("menu.html", { cache: "no-store" });
    mount.innerHTML = await res.text();
  } catch (e) {
    mount.innerHTML = '<nav class="topnav fallback"><a href="index.html">Overview</a> · <a href="logiintra.html">Logiintra</a> · <a href="stock-management.html">Stock Management</a> · <a href="accounting.html">Accounting</a></nav>';
  }
});
