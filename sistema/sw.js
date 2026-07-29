// Service worker minimalista: só existe pra receber push e mostrar a
// notificação do sistema operacional. Sem cache/offline (fora de escopo).

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", (event) => {
  let dados = { titulo: "Clima Company", corpo: "Você tem uma novidade." };
  if (event.data) {
    try {
      dados = event.data.json();
    } catch {
      dados.corpo = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(dados.titulo, {
      body: dados.corpo,
      icon: "/sistema/favicon.png",
      badge: "/sistema/favicon.png",
      tag: "clima-company-notificacao",
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes("/sistema/") && "focus" in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow("/sistema/");
    }),
  );
});
