// Objectif : effectuer un appel Jev synthétique uniquement sur demande explicite.
import { createJevClient } from "../src/jev.mjs";
import { assessDeMinimisRisk } from "../src/index.mjs";
const client = createJevClient();
const résultat = await assessDeMinimisRisk({
  "id": "exemple-1",
  "text": "Nouvelle aide déclarée avec plusieurs montants antérieurs, dates d’octroi et entreprises liées à vérifier.",
  "source": {
    "url": "https://example.test/donnee-source",
    "date": "2026-09-15"
  },
  "details": {
    "territoire": "Commune Exemple",
    "origine": "donnée synthétique"
  }
}, client);
console.log(JSON.stringify({ décision: résultat.decision, confiance: résultat.confidence, usage: résultat.usage }, null, 2));
