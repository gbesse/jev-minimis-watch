// Objectif : vérifier que les types publics sont importables.
import { deMinimisCase, assessDeMinimisRisk } from "../src/index.mjs";
const dossier = deMinimisCase({
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
});
void assessDeMinimisRisk(dossier, { decide: async () => ({}) });
