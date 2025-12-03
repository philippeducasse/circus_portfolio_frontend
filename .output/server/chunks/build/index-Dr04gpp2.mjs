import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 max-w-4xl mx-auto" }, _attrs))}><div class="flex flex-col gap-8 my-8"><div><h1 class="font-bold mb-4">Datenschutzerklärung</h1></div><div><h2 class="mb-8">Verantwortlicher</h2><div class="flex flex-col gap-1"><p>Philippe Ducasse</p><p>Friedelstraße 28</p><p>12047 Berlin</p><p>E-Mail: info@philippeducasse.com</p></div></div><div><h2 class="mb-8">Verwendung von Cookies</h2><div class="flex flex-col gap-3"><p> Diese Website verwendet technisch notwendige Cookies ausschließlich zur Speicherung Ihrer Sprachpräferenz. Diese Cookies sind erforderlich, um die von Ihnen gewählte Sprache (Deutsch/Englisch) bei Ihrem nächsten Besuch wiederherzustellen. </p><p> Die gespeicherten Informationen enthalten keine personenbezogenen Daten und dienen ausschließlich der Verbesserung der Benutzerfreundlichkeit. Die Cookies werden lokal in Ihrem Browser gespeichert und können jederzeit von Ihnen gelöscht werden. </p><p><strong>Rechtsgrundlage:</strong> Die Verwendung dieser technisch notwendigen Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung einer nutzerfreundlichen Website). </p></div></div><div><h2 class="mb-8">Datenerhebung und -verarbeitung</h2><div class="flex flex-col gap-3"><p> Auf dieser Website findet kein Tracking, keine Analyse durch Drittanbieter und keine Weitergabe von Daten an Dritte statt. </p><p> Es werden keine personenbezogenen Daten erhoben, gespeichert oder verarbeitet, mit Ausnahme der oben genannten technisch notwendigen Cookies zur Sprachpräferenz. </p></div></div><div><h2 class="mb-8">Eingebettete Inhalte</h2><p> Diese Website kann eingebettete Videoinhalte (z.B. von YouTube) enthalten. Beim Aufrufen von Seiten mit eingebetteten Videos können Daten an diese Drittanbieter übermittelt werden. Weitere Informationen hierzu finden Sie in den Datenschutzerklärungen der jeweiligen Anbieter. </p></div><div><h2 class="mb-8">Ihre Rechte</h2><p> Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch bezüglich Ihrer personenbezogenen Daten. Bei Fragen wenden Sie sich bitte an die oben genannte Kontaktadresse. </p></div><div><h2 class="mb-8">Cookies deaktivieren</h2><p> Sie können in Ihren Browser-Einstellungen das Setzen von Cookies vollständig verhindern. Bitte beachten Sie, dass die Website in diesem Fall Ihre Sprachpräferenz nicht speichern kann und Sie diese bei jedem Besuch neu wählen müssen. </p></div><div class="text-sm text-gray-500 mt-8"><p>Stand: Dezember 2025</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dsvgo/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Dr04gpp2.mjs.map
